<?php namespace CodeIgniter\Test\Mock;

class MockTable extends \CodeIgniter\View\Table {

	// Override inaccessible protected method
	public function __call($method, $params)
	{
		if (is_callable([$this, '_' . $method]))
		{
			return call_user_func_array([$this, '_' . $method], $params);
		}

		throw new BadMethodCallException('Method ' . $method . ' was not found');
	}

}
