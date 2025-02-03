const NavBar = ({onDataChange}) => {

    const handleChange = (e) => {
        onDataChange(e.target.value)
    }

    return(
        <label>
            Search
            <input
            className='navbar'
            type="text"
            placeholder="Enter Name"
            onChange={(e) => {handleChange(e)}}
            />
        </label>

    )
}

export default NavBar