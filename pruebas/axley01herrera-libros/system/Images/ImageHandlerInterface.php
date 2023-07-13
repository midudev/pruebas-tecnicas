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

/**
 * Expected behavior of an Image handler
 */
interface ImageHandlerInterface
{

	/**
	 * Resize the image
	 *
	 * @param integer $width
	 * @param integer $height
	 * @param boolean $maintainRatio If true, will get the closest match possible while keeping aspect ratio true.
	 * @param string  $masterDim
	 *
	 * @return $this
	 */
	public function resize(int $width, int $height, bool $maintainRatio = false, string $masterDim = 'auto');

	//--------------------------------------------------------------------

	/**
	 * Crops the image to the desired height and width. If one of the height/width values
	 * is not provided, that value will be set the appropriate value based on offsets and
	 * image dimensions.
	 *
	 * @param integer|null $width
	 * @param integer|null $height
	 * @param integer|null $x             X-axis coord to start cropping from the left of image
	 * @param integer|null $y             Y-axis coord to start cropping from the top of image
	 * @param boolean      $maintainRatio
	 * @param string       $masterDim
	 *
	 * @return $this
	 */
	public function crop(int $width = null, int $height = null, int $x = null, int $y = null, bool $maintainRatio = false, string $masterDim = 'auto');

	//--------------------------------------------------------------------

	/**
	 * Changes the stored image type to indicate the new file format to use when saving.
	 * Does not touch the actual resource.
	 *
	 * @param integer|null $imageType A PHP imagetype constant, e.g. https://www.php.net/manual/en/function.image-type-to-mime-type.php
	 *
	 * @return $this
	 */
	public function convert(int $imageType);

	//--------------------------------------------------------------------

	/**
	 * Rotates the image on the current canvas.
	 *
	 * @param float $angle
	 *
	 * @return $this
	 */
	public function rotate(float $angle);

	//--------------------------------------------------------------------

	/**
	 * Flattens transparencies, default white background
	 *
	 * @param integer $red
	 * @param integer $green
	 * @param integer $blue
	 *
	 * @return $this
	 */
	public function flatten(int $red = 255, int $green = 255, int $blue = 255);

	//--------------------------------------------------------------------

	/**
	 * Reads the EXIF information from the image and modifies the orientation
	 * so that displays correctly in the browser.
	 *
	 * @return ImageHandlerInterface
	 */
	public function reorient();

	//--------------------------------------------------------------------

	/**
	 * Retrieve the EXIF information from the image, if possible. Returns
	 * an array of the information, or null if nothing can be found.
	 *
	 * @param string|null $key If specified, will only return this piece of EXIF data.
	 *
	 * @return mixed
	 */
	public function getEXIF(string $key = null);

	//--------------------------------------------------------------------

	/**
	 * Flip an image horizontally or vertically
	 *
	 * @param string $dir Direction to flip, either 'vertical' or 'horizontal'
	 *
	 * @return $this
	 */
	public function flip(string $dir = 'vertical');

	//--------------------------------------------------------------------

	/**
	 * Combine cropping and resizing into a single command.
	 *
	 * Supported positions:
	 *  - top-left
	 *  - top
	 *  - top-right
	 *  - left
	 *  - center
	 *  - right
	 *  - bottom-left
	 *  - bottom
	 *  - bottom-right
	 *
	 * @param integer $width
	 * @param integer $height
	 * @param string  $position
	 *
	 * @return $this
	 */
	public function fit(int $width, int $height, string $position);

	//--------------------------------------------------------------------

	/**
	 * Overlays a string of text over the image.
	 *
	 * Valid options:
	 *
	 *  - color         Text Color (hex number)
	 *  - shadowColor   Color of the shadow (hex number)
	 *  - hAlign        Horizontal alignment: left, center, right
	 *  - vAlign        Vertical alignment: top, middle, bottom
	 *  - hOffset
	 *  - vOffset
	 *  - fontPath
	 *  - fontSize
	 *  - shadowOffset
	 *
	 * @param string $text
	 * @param array  $options
	 *
	 * @return $this
	 */
	public function text(string $text, array $options = []);

	//--------------------------------------------------------------------

	/**
	 * Saves any changes that have been made to file.
	 *
	 * Example:
	 *    $image->resize(100, 200, true)
	 *          ->save($target);
	 *
	 * @param string  $target
	 * @param integer $quality
	 *
	 * @return boolean
	 */
	public function save(string $target = null, int $quality = 90);
}
