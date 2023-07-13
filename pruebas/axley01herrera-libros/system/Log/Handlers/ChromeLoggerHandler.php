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

namespace CodeIgniter\Log\Handlers;

use CodeIgniter\HTTP\ResponseInterface;
use Config\Services;

/**
 * Class ChromeLoggerHandler
 *
 * Allows for logging items to the Chrome console for debugging.
 * Requires the ChromeLogger extension installed in your browser.
 *
 * @see https://craig.is/writing/chrome-logger
 *
 * @package CodeIgniter\Log\Handlers
 */
class ChromeLoggerHandler extends BaseHandler implements HandlerInterface
{

	/**
	 * Version of this library - for ChromeLogger use.
	 *
	 * @var float
	 */
	const VERSION = 1.0;

	/**
	 * The number of track frames returned from the backtrace.
	 *
	 * @var integer
	 */
	protected $backtraceLevel = 0;

	/**
	 * The final data that is sent to the browser.
	 *
	 * @var array
	 */
	protected $json = [
		'version' => self::VERSION,
		'columns' => [
			'log',
			'backtrace',
			'type',
		],
		'rows'    => [],
	];

	/**
	 * The header used to pass the data.
	 *
	 * @var string
	 */
	protected $header = 'X-ChromeLogger-Data';

	/**
	 * Maps the log levels to the ChromeLogger types.
	 *
	 * @var array
	 */
	protected $levels = [
		'emergency' => 'error',
		'alert'     => 'error',
		'critical'  => 'error',
		'error'     => 'error',
		'warning'   => 'warn',
		'notice'    => 'warn',
		'info'      => 'info',
		'debug'     => 'info',
	];

	//--------------------------------------------------------------------

	/**
	 * Constructor
	 *
	 * @param array $config
	 */
	public function __construct(array $config = [])
	{
		parent::__construct($config);

		$request = Services::request(null, true);

		$this->json['request_uri'] = (string) $request->uri;
	}

	//--------------------------------------------------------------------

	/**
	 * Handles logging the message.
	 * If the handler returns false, then execution of handlers
	 * will stop. Any handlers that have not run, yet, will not
	 * be run.
	 *
	 * @param $level
	 * @param $message
	 *
	 * @return boolean
	 */
	public function handle($level, $message): bool
	{
		// Format our message
		$message = $this->format($message);

		// Generate Backtrace info
		$backtrace = debug_backtrace(false, $this->backtraceLevel);
		$backtrace = end($backtrace);

		$backtraceMessage = 'unknown';
		if (isset($backtrace['file']) && isset($backtrace['line']))
		{
			$backtraceMessage = $backtrace['file'] . ':' . $backtrace['line'];
		}

		// Default to 'log' type.
		$type = '';

		if (array_key_exists($level, $this->levels))
		{
			$type = $this->levels[$level];
		}

		$this->json['rows'][] = [
			[$message],
			$backtraceMessage,
			$type,
		];

		$this->sendLogs();

		return true;
	}

	//--------------------------------------------------------------------

	/**
	 * Converts the object to display nicely in the Chrome Logger UI.
	 *
	 * @param $object
	 *
	 * @return array
	 */
	protected function format($object)
	{
		if (! is_object($object))
		{
			return $object;
		}

		// @todo Modify formatting of objects once we can view them in browser.
		$objectArray = (array) $object;

		$objectArray['___class_name'] = get_class($object);

		return $objectArray;
	}

	//--------------------------------------------------------------------

	/**
	 * Attaches the header and the content to the passed in request object.
	 *
	 * @param ResponseInterface $response
	 */
	public function sendLogs(ResponseInterface &$response = null)
	{
		if (is_null($response))
		{
			$response = Services::response(null, true);
		}

		$data = base64_encode(utf8_encode(json_encode($this->json)));

		$response->setHeader($this->header, $data);
	}

}
