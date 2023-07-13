<?php namespace CodeIgniter\Test\Mock;

use CodeIgniter\RESTful\ResourceController;

class MockResourceController extends ResourceController
{

	public function getModel()
	{
		return $this->model;
	}

	public function getModelName()
	{
		return $this->modelName;
	}

	public function getFormat()
	{
		return $this->format;
	}

}
