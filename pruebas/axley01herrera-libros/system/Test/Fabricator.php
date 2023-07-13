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

namespace CodeIgniter\Test;

use CodeIgniter\Model;
use Faker\Factory;
use Faker\Generator;

/**
 * Fabricator
 *
 * Bridge class for using Faker to create example data based on
 * model specifications.
 */
class Fabricator
{
	/**
	 * Array of counts for fabricated items
	 *
	 * @var array
	 */
	protected static $tableCounts = [];

	/**
	 * Locale-specific Faker instance
	 *
	 * @var \Faker\Generator
	 */
	protected $faker;

	/**
	 * Model instance (can be non-framework if it follows framework design)
	 *
	 * @var CodeIgniter\Model|object
	 */
	protected $model;

	/**
	 * Locale used to initialize Faker
	 *
	 * @var string
	 */
	protected $locale;

	/**
	 * Map of properties and their formatter to use
	 *
	 * @var array
	 */
	protected $formatters;

	/**
	 * Date fields present in the model
	 *
	 * @var array
	 */
	protected $dateFields = [];

	/**
	 * Array of data to add or override faked versions
	 *
	 * @var array
	 */
	protected $overrides = [];

	/**
	 * Array of single-use data to override faked versions
	 *
	 * @var array|null
	 */
	protected $tempOverrides;

	/**
	 * Default formatter to use when nothing is detected
	 *
	 * @var string
	 */
	public $defaultFormatter = 'word';

	//--------------------------------------------------------------------

	/**
	 * Store the model instance and initialize Faker to the locale.
	 *
	 * @param string|object $model      Instance or classname of the model to use
	 * @param array|null    $formatters Array of property => formatter
	 * @param string|null   $locale     Locale for Faker provider
	 *
	 * @throws \InvalidArgumentException
	 */
	public function __construct($model, array $formatters = null, string $locale = null)
	{
		if (is_string($model))
		{
			// Create a new model instance
			$model = model($model, false);
		}

		if (! is_object($model))
		{
			throw new \InvalidArgumentException(lang('Fabricator.invalidModel'));
		}

		$this->model = $model;

		// If no locale was specified then use the App default
		if (is_null($locale))
		{
			$locale = config('App')->defaultLocale;
		}

		// There is no easy way to retrieve the locale from Faker so we will store it
		$this->locale = $locale;

		// Create the locale-specific Generator
		$this->faker = Factory::create($this->locale);

		// Determine eligible date fields
		foreach (['createdField', 'updatedField', 'deletedField'] as $field)
		{
			if (! empty($this->model->$field))
			{
				$this->dateFields[] = $this->model->$field;
			}
		}

		// Set the formatters
		$this->setFormatters($formatters);
	}

	//--------------------------------------------------------------------

	/**
	 * Reset internal counts
	 */
	public static function resetCounts()
	{
		self::$tableCounts = [];
	}

	/**
	 * Get the count for a specific table
	 *
	 * @param string $table Name of the target table
	 *
	 * @return integer
	 */
	public static function getCount(string $table): int
	{
		return empty(self::$tableCounts[$table]) ? 0 : self::$tableCounts[$table];
	}

	/**
	 * Set the count for a specific table
	 *
	 * @param string  $table Name of the target table
	 * @param integer $count Count value
	 *
	 * @return integer  The new count value
	 */
	public static function setCount(string $table, int $count): int
	{
		self::$tableCounts[$table] = $count;
		return $count;
	}

	/**
	 * Increment the count for a table
	 *
	 * @param string $table Name of the target table
	 *
	 * @return integer  The new count value
	 */
	public static function upCount(string $table): int
	{
		return self::setCount($table, self::getCount($table) + 1);
	}

	/**
	 * Decrement the count for a table
	 *
	 * @param string $table Name of the target table
	 *
	 * @return integer  The new count value
	 */
	public static function downCount(string $table): int
	{
		return self::setCount($table, self::getCount($table) - 1);
	}

	//--------------------------------------------------------------------

	/**
	 * Returns the model instance
	 *
	 * @return object  Framework or compatible model
	 */
	public function getModel()
	{
		return $this->model;
	}

	/**
	 * Returns the locale
	 *
	 * @return string
	 */
	public function getLocale(): string
	{
		return $this->locale;
	}

	/**
	 * Returns the Faker generator
	 *
	 * @return Faker\Generator
	 */
	public function getFaker(): Generator
	{
		return $this->faker;
	}

	//--------------------------------------------------------------------

	/**
	 * Return and reset tempOverrides
	 *
	 * @return array
	 */
	public function getOverrides(): array
	{
		$overrides = $this->tempOverrides ?? $this->overrides;

		$this->tempOverrides = $this->overrides;

		return $overrides;
	}

	/**
	 * Set the overrides, once or persistent
	 *
	 * @param array   $overrides Array of [field => value]
	 * @param boolean $persist   Whether these overrides should persist through the next operation
	 *
	 * @return $this
	 */
	public function setOverrides(array $overrides = [], $persist = true): self
	{
		if ($persist)
		{
			$this->overrides = $overrides;
		}

		$this->tempOverrides = $overrides;

		return $this;
	}

	//--------------------------------------------------------------------

	/**
	 * Returns the current formatters
	 *
	 * @return array|null
	 */
	public function getFormatters(): ?array
	{
		return $this->formatters;
	}

	/**
	 * Set the formatters to use. Will attempt to autodetect if none are available.
	 *
	 * @param array|null $formatters Array of [field => formatter], or null to detect
	 *
	 * @return $this
	 */
	public function setFormatters(array $formatters = null): self
	{
		if (! is_null($formatters))
		{
			$this->formatters = $formatters;
		}
		elseif (method_exists($this->model, 'fake'))
		{
			$this->formatters = null;
		}
		else
		{
			$formatters = $this->detectFormatters();
		}

		return $this;
	}

	/**
	 * Try to identify the appropriate Faker formatter for each field.
	 *
	 * @return $this
	 */
	protected function detectFormatters(): self
	{
		$this->formatters = [];

		if (! empty($this->model->allowedFields))
		{
			foreach ($this->model->allowedFields as $field)
			{
				$this->formatters[$field] = $this->guessFormatter($field);
			}
		}

		return $this;
	}

	/**
	 * Guess at the correct formatter to match a field name.
	 *
	 * @param $field  Name of the field
	 *
	 * @return string  Name of the formatter
	 */
	protected function guessFormatter($field): string
	{
		// First check for a Faker formatter of the same name - covers things like "email"
		try
		{
			$this->faker->getFormatter($field);
			return $field;
		}
		catch (\InvalidArgumentException $e)
		{
			// No match, keep going
		}

		// Next look for known model fields
		if (in_array($field, $this->dateFields))
		{
			switch ($this->model->dateFormat)
			{
				case 'datetime':
					return 'date';
				break;

				case 'date':
					return 'date';
				break;

				case 'int':
					return 'unixTime';
				break;
			}
		}
		elseif ($field === $this->model->primaryKey)
		{
			return 'numberBetween';
		}

		// Check some common partials
		foreach (['email', 'name', 'title', 'text', 'date', 'url'] as $term)
		{
			if (stripos($field, $term) !== false)
			{
				return $term;
			}
		}

		if (stripos($field, 'phone') !== false)
		{
			return 'phoneNumber';
		}

		// Nothing left, use the default
		return $this->defaultFormatter;
	}

	//--------------------------------------------------------------------

	/**
	 * Generate new entities with faked data
	 *
	 * @param integer|null $count Optional number to create a collection
	 *
	 * @return array|object  An array or object (based on returnType), or an array of returnTypes
	 */
	public function make(int $count = null)
	{
		// If a singleton was requested then go straight to it
		if (is_null($count))
		{
			return $this->model->returnType === 'array'
				? $this->makeArray()
				: $this->makeObject();
		}

		$return = [];

		for ($i = 0; $i < $count; $i++)
		{
			$return[] = $this->model->returnType === 'array'
				? $this->makeArray()
				: $this->makeObject();
		}

		return $return;
	}

	/**
	 * Generate an array of faked data
	 *
	 * @return array  An array of faked data
	 *
	 * @throws \RuntimeException
	 */
	public function makeArray()
	{
		if (! is_null($this->formatters))
		{
			$result = [];

			foreach ($this->formatters as $field => $formatter)
			{
				$result[$field] = $this->faker->{$formatter};
			}
		}

		// If no formatters were defined then look for a model fake() method
		elseif (method_exists($this->model, 'fake'))
		{
			$result = $this->model->fake($this->faker);

			// This should cover entities
			if (method_exists($result, 'toArray'))
			{
				$result = $result->toArray();
			}
			// Try to cast it
			else
			{
				$result = (array) $result;
			}
		}

		// Nothing left to do but give up
		else
		{
			throw new \RuntimeException(lang('Fabricator.missingFormatters'));
		}

		// Replace overridden fields
		return array_merge($result, $this->getOverrides());
	}

	/**
	 * Generate an object of faked data
	 *
	 * @param string|null $className Class name of the object to create; null to use model default
	 *
	 * @return object  An instance of the class with faked data
	 *
	 * @throws \RuntimeException
	 */
	public function makeObject(string $className = null): object
	{
		if (is_null($className))
		{
			if ($this->model->returnType === 'object' || $this->model->returnType === 'array')
			{
				$className = 'stdClass';
			}
			else
			{
				$className = $this->model->returnType;
			}
		}

		// If using the model's fake() method then check it for the correct return type
		if (is_null($this->formatters) && method_exists($this->model, 'fake'))
		{
			$result = $this->model->fake($this->faker);

			if ($result instanceof $className)
			{
				// Set overrides manually
				foreach ($this->getOverrides() as $key => $value)
				{
					$result->{$key} = $value;
				}

				return $result;
			}
		}

		// Get the array values and apply them to the object
		$array  = $this->makeArray();
		$object = new $className();

		// Check for the entity method
		if (method_exists($object, 'fill'))
		{
			$object->fill($array);
		}
		else
		{
			foreach ($array as $key => $value)
			{
				$object->{$key} = $value;
			}
		}

		return $object;
	}

	//--------------------------------------------------------------------

	/**
	 * Generate new entities from the database
	 *
	 * @param integer|null $count    Optional number to create a collection
	 * @param array        $override Array of data to add/override
	 * @param boolean      $mock     Whether to execute or mock the insertion
	 *
	 * @return array|object  An array or object (based on returnType), or an array of returnTypes
	 */
	public function create(int $count = null, bool $mock = false)
	{
		// Intercept mock requests
		if ($mock)
		{
			return $this->createMock($count);
		}

		$ids = [];

		// Iterate over new entities and insert each one, storing insert IDs
		foreach ($this->make($count ?? 1) as $result)
		{
			if ($id = $this->model->insert($result, true))
			{
				$ids[] = $id;
				self::upCount($this->model->table);
			}
		}

		// If the model defines a "withDeleted" method for handling soft deletes then use it
		if (method_exists($this->model, 'withDeleted'))
		{
			$this->model->withDeleted();
		}

		return $this->model->find(is_null($count) ? reset($ids) : $ids);
	}

	/**
	 * Generate new database entities without actually inserting them
	 *
	 * @param integer|null $count Optional number to create a collection
	 *
	 * @return array|object  An array or object (based on returnType), or an array of returnTypes
	 */
	protected function createMock(int $count = null)
	{
		switch ($this->model->dateFormat)
		{
			case 'datetime':
				$datetime = date('Y-m-d H:i:s');
			case 'date':
				$datetime = date('Y-m-d');
			default:
				$datetime = time();
		}

		// Determine which fields we will need
		$fields = [];

		if (! empty($this->model->useTimestamps))
		{
			$fields[$this->model->createdField] = $datetime;
			$fields[$this->model->updatedField] = $datetime;
		}

		if (! empty($this->model->useSoftDeletes))
		{
			$fields[$this->model->deletedField] = null;
		}

		// Iterate over new entities and add the necessary fields
		$return = [];
		foreach ($this->make($count ?? 1) as $i => $result)
		{
			// Set the ID
			$fields[$this->model->primaryKey] = $i;

			// Merge fields
			if (is_array($result))
			{
				$result = array_merge($result, $fields);
			}
			else
			{
				foreach ($fields as $key => $value)
				{
					$result->{$key} = $value;
				}
			}

			$return[] = $result;
		}

		return is_null($count) ? reset($return) : $return;
	}
}
