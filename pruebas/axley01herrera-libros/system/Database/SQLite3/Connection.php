<?php

/**
 * CodeIgniter
 *
 * An open source application development framework for PHP
 *
 * This content is released under the MIT License (MIT)
 *
 * Copyright (c) 2014-2019 British Columbia Institute of Technology
 * Copyright (c) 2019-2020 CodeIgniter Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @package    CodeIgniter
 * @author     CodeIgniter Dev Team
 * @copyright  2019-2020 CodeIgniter Foundation
 * @license    https://opensource.org/licenses/MIT	MIT License
 * @link       https://codeigniter.com
 * @since      Version 4.0.0
 * @filesource
 */

namespace CodeIgniter\Database\SQLite3;

use CodeIgniter\Database\BaseConnection;
use CodeIgniter\Database\ConnectionInterface;
use CodeIgniter\Database\Exceptions\DatabaseException;

/**
 * Connection for SQLite3
 */
class Connection extends BaseConnection implements ConnectionInterface
{

	/**
	 * Database driver
	 *
	 * @var string
	 */
	public $DBDriver = 'SQLite3';

	/**
	 * Identifier escape character
	 *
	 * @var string
	 */
	public $escapeChar = '`';

	//--------------------------------------------------------------------

	/**
	 * ORDER BY random keyword
	 *
	 * @var array
	 */
	protected $_random_keyword = [
		'RANDOM()',
	];

	//--------------------------------------------------------------------

	/**
	 * Connect to the database.
	 *
	 * @param boolean $persistent
	 *
	 * @return mixed
	 * @throws \CodeIgniter\Database\Exceptions\DatabaseException
	 */
	public function connect(bool $persistent = false)
	{
		if ($persistent && $this->db->DBDebug)
		{
			throw new DatabaseException('SQLite3 doesn\'t support persistent connections.');
		}
		try
		{
			if ($this->database !== ':memory:' && strpos($this->database, DIRECTORY_SEPARATOR) === false)
			{
				$this->database = WRITEPATH . $this->database;
			}

			return (! $this->password)
				? new \SQLite3($this->database)
				: new \SQLite3($this->database, SQLITE3_OPEN_READWRITE | SQLITE3_OPEN_CREATE, $this->password);
		}
		catch (\Exception $e)
		{
			throw new DatabaseException('SQLite3 error: ' . $e->getMessage());
		}
	}

	//--------------------------------------------------------------------

	/**
	 * Keep or establish the connection if no queries have been sent for
	 * a length of time exceeding the server's idle timeout.
	 *
	 * @return void
	 */
	public function reconnect()
	{
		$this->close();
		$this->initialize();
	}

	//--------------------------------------------------------------------

	/**
	 * Close the database connection.
	 *
	 * @return void
	 */
	protected function _close()
	{
		$this->connID->close();
	}

	//--------------------------------------------------------------------

	/**
	 * Select a specific database table to use.
	 *
	 * @param string $databaseName
	 *
	 * @return boolean
	 */
	public function setDatabase(string $databaseName): bool
	{
		return false;
	}

	//--------------------------------------------------------------------

	/**
	 * Returns a string containing the version of the database being used.
	 *
	 * @return string
	 */
	public function getVersion(): string
	{
		if (isset($this->dataCache['version']))
		{
			return $this->dataCache['version'];
		}

		$version = \SQLite3::version();

		return $this->dataCache['version'] = $version['versionString'];
	}

	//--------------------------------------------------------------------

	/**
	 * Execute the query
	 *
	 * @param string $sql
	 *
	 * @return mixed    \SQLite3Result object or bool
	 */
	public function execute(string $sql)
	{
		try
		{
			return $this->isWriteType($sql)
				? $this->connID->exec($sql)
				: $this->connID->query($sql);
		}
		catch (\ErrorException $e)
		{
			log_message('error', $e);
			if ($this->DBDebug)
			{
				throw $e;
			}
		}
		return false;
	}

	//--------------------------------------------------------------------

	/**
	 * Returns the total number of rows affected by this query.
	 *
	 * @return integer
	 */
	public function affectedRows(): int
	{
		return $this->connID->changes();
	}

	//--------------------------------------------------------------------

	/**
	 * Platform-dependant string escape
	 *
	 * @param string $str
	 *
	 * @return string
	 */
	protected function _escapeString(string $str): string
	{
		return $this->connID->escapeString($str);
	}

	//--------------------------------------------------------------------

	/**
	 * Generates the SQL for listing tables in a platform-dependent manner.
	 *
	 * @param boolean $prefixLimit
	 *
	 * @return string
	 */
	protected function _listTables(bool $prefixLimit = false): string
	{
		return 'SELECT "NAME" FROM "SQLITE_MASTER" WHERE "TYPE" = \'table\''
			   . ' AND "NAME" NOT LIKE \'sqlite!_%\' ESCAPE \'!\''
			   . (($prefixLimit !== false && $this->DBPrefix !== '')
				? ' AND "NAME" LIKE \'' . $this->escapeLikeString($this->DBPrefix) . '%\' ' . sprintf($this->likeEscapeStr,
					$this->likeEscapeChar)
				: '');
	}

	//--------------------------------------------------------------------

	/**
	 * Generates a platform-specific query string so that the column names can be fetched.
	 *
	 * @param string $table
	 *
	 * @return string
	 */
	protected function _listColumns(string $table = ''): string
	{
		return 'PRAGMA TABLE_INFO(' . $this->protectIdentifiers($table, true, null, false) . ')';
	}

	/**
	 * Fetch Field Names
	 *
	 * @param string $table Table name
	 *
	 * @return array|false
	 * @throws DatabaseException
	 */
	public function getFieldNames(string $table)
	{
		// Is there a cached result?
		if (isset($this->dataCache['field_names'][$table]))
		{
			return $this->dataCache['field_names'][$table];
		}

		if (empty($this->connID))
		{
			$this->initialize();
		}

		if (false === ($sql = $this->_listColumns($table)))
		{
			if ($this->DBDebug)
			{
				throw new DatabaseException(lang('Database.featureUnavailable'));
			}

			return false;
		}

		$query                                  = $this->query($sql);
		$this->dataCache['field_names'][$table] = [];

		foreach ($query->getResultArray() as $row)
		{
			// Do we know from where to get the column's name?
			if (! isset($key))
			{
				if (isset($row['column_name']))
				{
					$key = 'column_name';
				}
				elseif (isset($row['COLUMN_NAME']))
				{
					$key = 'COLUMN_NAME';
				}
				elseif (isset($row['name']))
				{
					$key = 'name';
				}
				else
				{
					// We have no other choice but to just get the first element's key.
					$key = key($row);
				}
			}

			$this->dataCache['field_names'][$table][] = $row[$key];
		}

		return $this->dataCache['field_names'][$table];
	}

	//--------------------------------------------------------------------

	/**
	 * Returns an array of objects with field data
	 *
	 * @param  string $table
	 * @return \stdClass[]
	 * @throws DatabaseException
	 */
	public function _fieldData(string $table): array
	{
		if (($query = $this->query('PRAGMA TABLE_INFO(' . $this->protectIdentifiers($table, true, null,
					false) . ')')) === false)
		{
			throw new DatabaseException(lang('Database.failGetFieldData'));
		}
		$query = $query->getResultObject();

		if (empty($query))
		{
			return [];
		}
		$retVal = [];
		for ($i = 0, $c = count($query); $i < $c; $i++)
		{
			$retVal[$i]              = new \stdClass();
			$retVal[$i]->name        = $query[$i]->name;
			$retVal[$i]->type        = $query[$i]->type;
			$retVal[$i]->max_length  = null;
			$retVal[$i]->default     = $query[$i]->dflt_value;
			$retVal[$i]->primary_key = isset($query[$i]->pk) && (bool)$query[$i]->pk;
			$retVal[$i]->nullable    = isset($query[$i]->notnull) && ! (bool)$query[$i]->notnull;
		}

		return $retVal;
	}

	//--------------------------------------------------------------------

	/**
	 * Returns an array of objects with index data
	 *
	 * @param  string $table
	 * @return \stdClass[]
	 * @throws DatabaseException
	 */
	public function _indexData(string $table): array
	{
		// Get indexes
		// Don't use PRAGMA index_list, so we can preserve index order
		$sql = "SELECT name FROM sqlite_master WHERE type='index' AND tbl_name=" . $this->escape(strtolower($table));
		if (($query = $this->query($sql)) === false)
		{
			throw new DatabaseException(lang('Database.failGetIndexData'));
		}
		$query = $query->getResultObject();

		$retVal = [];
		foreach ($query as $row)
		{
			$obj       = new \stdClass();
			$obj->name = $row->name;

			// Get fields for index
			$obj->fields = [];
			if (($fields = $this->query('PRAGMA index_info(' . $this->escape(strtolower($row->name)) . ')')) === false)
			{
				throw new DatabaseException(lang('Database.failGetIndexData'));
			}
			$fields = $fields->getResultObject();

			foreach ($fields as $field)
			{
				$obj->fields[] = $field->name;
			}

			$retVal[$obj->name] = $obj;
		}

		return $retVal;
	}

	//--------------------------------------------------------------------

	/**
	 * Returns an array of objects with Foreign key data
	 *
	 * @param  string $table
	 * @return \stdClass[]
	 */
	public function _foreignKeyData(string $table): array
	{
		if ($this->supportsForeignKeys() !== true)
		{
			return [];
		}

		$tables = $this->listTables();

		if (empty($tables))
		{
			return [];
		}

		$retVal = [];

		foreach ($tables as $table)
		{
			$query = $this->query("PRAGMA foreign_key_list({$table})")->getResult();

			foreach ($query as $row)
			{
				$obj                     = new \stdClass();
				$obj->constraint_name    = $row->from . ' to ' . $row->table . '.' . $row->to;
				$obj->table_name         = $table;
				$obj->foreign_table_name = $row->table;
				$obj->sequence           = $row->seq;

				$retVal[] = $obj;
			}
		}

		return $retVal;
	}

	//--------------------------------------------------------------------

	/**
	 * Returns platform-specific SQL to disable foreign key checks.
	 *
	 * @return string
	 */
	protected function _disableForeignKeyChecks()
	{
		return 'PRAGMA foreign_keys = OFF';
	}

	//--------------------------------------------------------------------

	/**
	 * Returns platform-specific SQL to enable foreign key checks.
	 *
	 * @return string
	 */
	protected function _enableForeignKeyChecks()
	{
		return 'PRAGMA foreign_keys = ON';
	}

	//--------------------------------------------------------------------

	/**
	 * Returns the last error code and message.
	 *
	 * Must return an array with keys 'code' and 'message':
	 *
	 *  return ['code' => null, 'message' => null);
	 *
	 * @return array
	 */
	public function error(): array
	{
		return [
			'code'    => $this->connID->lastErrorCode(),
			'message' => $this->connID->lastErrorMsg(),
		];
	}

	//--------------------------------------------------------------------

	/**
	 * Insert ID
	 *
	 * @return integer
	 */
	public function insertID(): int
	{
		return $this->connID->lastInsertRowID();
	}

	//--------------------------------------------------------------------

	/**
	 * Begin Transaction
	 *
	 * @return boolean
	 */
	protected function _transBegin(): bool
	{
		return $this->connID->exec('BEGIN TRANSACTION');
	}

	//--------------------------------------------------------------------

	/**
	 * Commit Transaction
	 *
	 * @return boolean
	 */
	protected function _transCommit(): bool
	{
		return $this->connID->exec('END TRANSACTION');
	}

	//--------------------------------------------------------------------

	/**
	 * Rollback Transaction
	 *
	 * @return boolean
	 */
	protected function _transRollback(): bool
	{
		return $this->connID->exec('ROLLBACK');
	}

	//--------------------------------------------------------------------

	/**
	 * Determines if the statement is a write-type query or not.
	 *
	 * @return boolean
	 */
	public function isWriteType($sql): bool
	{
		return (bool)preg_match(
			'/^\s*"?(SET|INSERT|UPDATE|DELETE|REPLACE|CREATE|DROP|TRUNCATE|LOAD|COPY|ALTER|RENAME|GRANT|REVOKE|LOCK|UNLOCK|REINDEX)\s/i',
			$sql);
	}

	//--------------------------------------------------------------------

	/**
	 * Checks to see if the current install supports Foreign Keys
	 * and has them enabled.
	 *
	 * @return boolean
	 */
	public function supportsForeignKeys(): bool
	{
		$result = $this->simpleQuery('PRAGMA foreign_keys');

		return (bool)$result;
	}

	//--------------------------------------------------------------------
}
