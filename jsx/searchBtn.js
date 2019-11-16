const SearchBtn = (props) => {
    const handleClcik = () => {
      props.onClick()
    }
    return <button className={props.className} onClick={handleClcik}>search</button>
  }
  
  export default SearchBtn
  