import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PRODUCT_DATA from "../../Products.json"

import "bootstrap/dist/css/bootstrap.css"

const SearchBar = () => {
    const [data, setData] = useState([])
    const handleChange = (e) => {
        const value = e.target.value
        setSearch(e.target.value)

        if (value && value.trim().length >= 1) {
            const suggestions = PRODUCT_DATA.filter((product) =>
                product.name.toLowerCase().includes(value.toLowerCase())
            )

            const updatedSuggestions = suggestions.slice(0, 5)
            setData(updatedSuggestions)
        } else {
            setData([])
        }
    }

    const [search, setSearch] = useState("")

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/filterdata", { state: { search } })
        setData([])
        setSearch("")
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && search.length != 0) {
            navigate("/filterdata", { state: { search } })
            setData([])
            setSearch("")
        }
    }

    return (
        <div>
            <div className="container">

                <input
                    type='text'
                    className='search'
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder='Search...'
                    value={search}
                />
                {data.length > 0 ? (
                    <div className='suggestions'>
                        <ul>
                            {data.map((d) => (
                                <li key={d.id} onClick={handleClick}>
                                    {d.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    // <Container className="p-9">
                    //   <Dropdown>
                    //     <Dropdown.Menu show>
                    //       {data.map((d) => (
                    //         <Dropdown.Item className="menu">{d.name}</Dropdown.Item>
                    //       ))}
                    //     </Dropdown.Menu>
                    //   </Dropdown>
                    // </Container>
                    <></>
                )}

            </div>
        </div>
    )
}

export default SearchBar
