import SearchContext from "./searchContext"
import React,{ useState } from "react"

function SearchState(props) {
      const [search, setSearch] = useState("");
      return (
            <SearchContext.Provider value={{search,setSearch}}>
                  {props.children}
            </SearchContext.Provider>
      )
}

export default SearchState
