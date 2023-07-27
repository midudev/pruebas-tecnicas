import Filter from "./Filter"
import ReadList from "./ReadList"

const Sidebar = ({ data, setCategory, category, myList, setMyList, setData }) => {
  return (
    <aside className='w-[20%] side-bar'>
      <Filter data={data} setCategory={setCategory} category={category} setData={setData}/>
      <ReadList myList={myList} setMyList={setMyList} setData={setData} data={data}/>
    </aside>
  )
}

export default Sidebar