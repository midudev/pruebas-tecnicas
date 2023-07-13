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

use CodeIgniter\Events\Events;
use CodeIgniter\HTTP\IncomingRequest;
use CodeIgniter\HTTP\Request;
use CodeIgniter\HTTP\URI;
use CodeIgniter\HTTP\UserAgent;
use Config\App;
use Config\Services;

/**
 * Trait FeatureTestTrait
 *
 * Provides additional utilities for doing full HTTP testing
 * against your application in trait format.
 *
 * @package CodeIgniter\Test
 */
trait FeatureTestTrait
{
	/**
	 * Sets a RouteCollection that will override
	 * the application's route collection.
	 *
	 * Example routes:
	 * [
	 *    ['get', 'home', 'Home::index']
	 * ]
	 *
	 * @param array $routes
	 *
	 * @return $this
	 */
	protected function withRoutes(array $routes = null)
	{
		$collection = Services::routes();

		if ($routes)
		{
			$collection->resetRoutes();
			foreach ($routes as $route)
			{
				$collection->{$route[0]}($route[1], $route[2]);
			}
		}

		$this->routes = $collection;

		return $this;
	}

	/**
	 * Sets any values that should exist during this session.
	 *
	 * @param array|null Array of values, or null to use the current $_SESSION
	 *
	 * @return $this
	 */
	public function withSession(array $values = null)
	{
		$this->session = is_null($values) ? $_SESSION : $values;

		return $this;
	}

	/**
	 * Don't run any events while running this test.
	 *
	 * @return $this
	 */
	public function skipEvents()
	{
		Events::simulate(true);

		return $this;
	}

	/**
	 * Calls a single URI, executes it, and returns a FeatureResponse
	 * instance that can be used to run many assertions against.
	 *
	 * @param string     $method
	 * @param string     $path
	 * @param array|null $params
	 *
	 * @return \CodeIgniter\Test\FeatureResponse
	 * @throws \CodeIgniter\Router\Exceptions\RedirectException
	 * @throws \Exception
	 */
	public function call(string $method, string $path, array $params = null)
	{
		$buffer = \ob_get_level();

		// Clean up any open output buffers
		// not relevant to unit testing
		// @codeCoverageIgnoreStart
		if (\ob_get_level() > 0 && (! isset($this->clean) || $this->clean === true))
		{
			\ob_end_clean();
		}
		// @codeCoverageIgnoreEnd

		// Simulate having a blank session
		$_SESSION                  = [];
		$_SERVER['REQUEST_METHOD'] = $method;

		$request = $this->setupRequest($method, $path);
		$request = $this->populateGlobals($method, $request, $params);

		// Make sure the RouteCollection knows what method we're using...
		$routes = $this->routes ?: Services::routes();
		$routes->setHTTPVerb($method);

		// Make sure any other classes that might call the request
		// instance get the right one.
		Services::injectMock('request', $request);

		// Make sure filters are reset between tests
		Services::injectMock('filters', Services::filters(null, false));

		$response = $this->app
				->setRequest($request)
				->run($routes, true);

		$output = \ob_get_contents();
		if (empty($response->getBody()) && ! empty($output))
		{
			$response->setBody($output);
		}

		// Reset directory if it has been set
		Services::router()->setDirectory(null);

		// Ensure the output buffer is identical so no tests are risky
		// @codeCoverageIgnoreStart
		while (\ob_get_level() > $buffer)
		{
			\ob_end_clean();
		}
		while (\ob_get_level() < $buffer)
		{
			\ob_start();
		}
		// @codeCoverageIgnoreEnd

		return new FeatureResponse($response);
	}

	/**
	 * Performs a GET request.
	 *
	 * @param string     $path
	 * @param array|null $params
	 *
	 * @return \CodeIgniter\Test\FeatureResponse
	 * @throws \CodeIgniter\Router\Exceptions\RedirectException
	 * @throws \Exception
	 */
	public function get(string $path, array $params = null)
	{
		return $this->call('get', $path, $params);
	}

	/**
	 * Performs a POST request.
	 *
	 * @param string     $path
	 * @param array|null $params
	 *
	 * @return \CodeIgniter\Test\FeatureResponse
	 * @throws \CodeIgniter\Router\Exceptions\RedirectException
	 * @throws \Exception
	 */
	public function post(string $path, array $params = null)
	{
		return $this->call('post', $path, $params);
	}

	/**
	 * Performs a PUT request
	 *
	 * @param string     $path
	 * @param array|null $params
	 *
	 * @return \CodeIgniter\Test\FeatureResponse
	 * @throws \CodeIgniter\Router\Exceptions\RedirectException
	 * @throws \Exception
	 */
	public function put(string $path, array $params = null)
	{
		return $this->call('put', $path, $params);
	}

	/**
	 * Performss a PATCH request
	 *
	 * @param string     $path
	 * @param array|null $params
	 *
	 * @return \CodeIgniter\Test\FeatureResponse
	 * @throws \CodeIgniter\Router\Exceptions\RedirectException
	 * @throws \Exception
	 */
	public function patch(string $path, array $params = null)
	{
		return $this->call('patch', $path, $params);
	}

	/**
	 * Performs a DELETE request.
	 *
	 * @param string     $path
	 * @param array|null $params
	 *
	 * @return \CodeIgniter\Test\FeatureResponse
	 * @throws \CodeIgniter\Router\Exceptions\RedirectException
	 * @throws \Exception
	 */
	public function delete(string $path, array $params = null)
	{
		return $this->call('delete', $path, $params);
	}

	/**
	 * Performs an OPTIONS request.
	 *
	 * @param string     $path
	 * @param array|null $params
	 *
	 * @return \CodeIgniter\Test\FeatureResponse
	 * @throws \CodeIgniter\Router\Exceptions\RedirectException
	 * @throws \Exception
	 */
	public function options(string $path, array $params = null)
	{
		return $this->call('options', $path, $params);
	}

	/**
	 * Setup a Request object to use so that CodeIgniter
	 * won't try to auto-populate some of the items.
	 *
	 * @param string      $method
	 * @param string|null $path
	 *
	 * @return \CodeIgniter\HTTP\IncomingRequest
	 */
	protected function setupRequest(string $method, string $path = null): IncomingRequest
	{
		$config = config(App::class);
		$uri    = new URI(rtrim($config->baseURL, '/') . '/' . trim($path, '/ '));

		$request      = new IncomingRequest($config, clone($uri), null, new UserAgent());
		$request->uri = $uri;

		$request->setMethod($method);
		$request->setProtocolVersion('1.1');

		if ($config->forceGlobalSecureRequests)
		{
			$_SERVER['HTTPS'] = 'test';
		}

		return $request;
	}

	/**
	 * Populates the data of our Request with "global" data
	 * relevant to the request, like $_POST data.
	 *
	 * Always populate the GET vars based on the URI.
	 *
	 * @param string                    $method
	 * @param \CodeIgniter\HTTP\Request $request
	 * @param array|null                $params
	 *
	 * @return \CodeIgniter\HTTP\Request
	 * @throws \ReflectionException
	 */
	protected function populateGlobals(string $method, Request $request, array $params = null)
	{
		// $params should set the query vars if present,
		// otherwise set it from the URL.
		$get = ! empty($params) && $method === 'get'
			? $params
			: $this->getPrivateProperty($request->uri, 'query');

		$request->setGlobal('get', $get);
		if ($method !== 'get')
		{
			$request->setGlobal($method, $params);
		}

		$request->setGlobal('request', $params);

		$_SESSION = $this->session ?? [];

		return $request;
	}
}
