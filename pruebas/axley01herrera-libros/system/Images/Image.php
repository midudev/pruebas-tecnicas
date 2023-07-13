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
 * @license    https://opensource.org/licenses/MIT    MIT License
 * @link       https://codeigniter.com
 * @since      Version 4.0.0
 * @filesource
 */

namespace CodeIgniter\Images;

use CodeIgniter\Files\File;
use CodeIgniter\Images\Exceptions\ImageException;

/**
 * Encapsulation of an Image file
 */
class Image extends File
{

	/**
	 * The original image width in pixels.
	 *
	 * @var integer|float
	 */
	public $origWidth;

	/**
	 * The original image height in pixels.
	 *
	 * @var integer|float
	 */
	public $origHeight;

	/**
	 * The image type constant.
	 *
	 * @see http://php.net/manual/en/image.constants.php
	 *
	 * @var integer
	 */
	public $imageType;

	/**
	 * attributes string with size info:
	 * 'height="100" width="200"'
	 *
	 * @var string
	 */
	public $sizeStr;

	/**
	 * The image's mime type, i.e. image/jpeg
	 *
	 * @var string
	 */
	public $mime;

	/**
	 * Makes a copy of itself to the new location. If no filename is provided
	 * it will use the existing filename.
	 *
	 * @param string      $targetPath The directory to store the file in
	 * @param string|null $targetName The new name of the copied file.
	 * @param integer     $perms      File permissions to be applied after copy.
	 *
	 * @return boolean
	 */
	public function copy(string $targetPath, string $targetName = null, int $perms = 0644): bool
	{
		$targetPath = rtrim($targetPath, '/ ') . '/';

		$targetName = is_null($targetName) ? $this->getFilename() : $targetName;

		if (empty($targetName))
		{
			throw ImageException::forInvalidFile($targetName);
		}

		if (! is_dir($targetPath))
		{
			mkdir($targetName, 0755, true);
		}

		if (! copy($this->getPathname(), "{$targetPath}{$targetName}"))
		{
			throw ImageException::forCopyError($targetPath);
		}

		chmod("{$targetPath}/{$targetName}", $perms);

		return true;
	}

	//--------------------------------------------------------------------

	/**
	 * Get image properties
	 *
	 * A helper function that gets info about the file
	 *
	 * @param boolean $return
	 *
	 * @return array|boolean
	 */
	public function getProperties(bool $return = false)
	{
		$path = $this->getPathname();

		if (! $vals = getimagesize($path))
		{
			throw ImageException::forFileNotSupported();
		}

		$types = [
			IMAGETYPE_GIF  => 'gif',
			IMAGETYPE_JPEG => 'jpeg',
			IMAGETYPE_PNG  => 'png',
			IMAGETYPE_WEBP => 'webp',
		];

		$mime = 'image/' . ($types[$vals[2]] ?? 'jpg');

		if ($return === true)
		{
			return [
				'width'      => $vals[0],
				'height'     => $vals[1],
				'image_type' => $vals[2],
				'size_str'   => $vals[3],
				'mime_type'  => $mime,
			];
		}

		$this->origWidth  = $vals[0];
		$this->origHeight = $vals[1];
		$this->imageType  = $vals[2];
		$this->sizeStr    = $vals[3];
		$this->mime       = $mime;

		return true;
	}

	//--------------------------------------------------------------------
}
