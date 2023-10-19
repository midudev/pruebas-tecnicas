import PropTypes from 'prop-types'
import { useState } from 'react'

export function Tabs({ data, selectedTabIndex = 0 }) {
  const [selectedTab, setSelectedTab] = useState(selectedTabIndex)

  const tabsHeadings = data.map((tab, index) => {
    let tabStyles =
      'pb-2 font-heading font-bold cursor-pointer transition duration-300 border-b-2 leading-tight text-[0.85rem] sm:text-xl'
    tabStyles +=
      selectedTab === index
        ? ' text-gray-900 dark:text-gray-300 border-gray-900 dark:border-slate-500'
        : ' text-[#929191] dark:text-gray-600 dark:border-transparent hover:text-gray-600 dark:hover:text-gray-400'

    return (
      <li key={index} className={tabStyles} onPointerDown={() => setSelectedTab(index)}>
        {tab.name}
      </li>
    )
  })

  return (
    <div className='w-full'>
      <nav>
        <ul className='flex gap-x-16 border-b border-[#f0f5ff] dark:border-slate-800 mb-7'>
          {tabsHeadings}
        </ul>
      </nav>
      <div className='text-sm text-gray-400 mb-10'>{data[selectedTab].content}</div>
    </div>
  )
}

Tabs.propTypes = {
  data: PropTypes.array.isRequired,
  selectedTabIndex: PropTypes.number,
}
