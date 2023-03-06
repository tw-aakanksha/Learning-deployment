import { useNavigate } from "react-router-dom"

const Navigate = ({ path }) => {
    const navigate = useNavigate()
    navigate(path)
    return <></>
}

export default Navigate
