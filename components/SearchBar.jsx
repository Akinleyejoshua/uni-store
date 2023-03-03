import { FaSearch } from "react-icons/fa"

export const SearchBar = ({}) => {
    return <div className="search-bar flex items-center">
        <FaSearch/>
        <div className="space-2"></div>
        <input type="text" placeholder="Search"/>
    </div>
}