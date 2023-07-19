const SliderFilter = () => {
  return (
    <div>
      <label
        htmlFor="default-range"
        className="block text-sm font-medium text-white-900 dark:text-white text-center"
      >
        Numero de paginas
      </label>
      <input
        id="default-range"
        type="range"
        defaultValue="50"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 custom-slider"
      />
    </div>
  )
}

export default SliderFilter
