const DisplayFilters = ({ selectedFilters }) => {
  return (
    <div>
      {selectedFilters.map((filter) => (
        <p key={filter}>{filter}</p>
      ))}
    </div>
  )
}

export default DisplayFilters
