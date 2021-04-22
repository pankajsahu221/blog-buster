import React from 'react'

function SearchTab({ fetchSearchData }) {

    const handleChange = (e)=>{
        fetchSearchData(e.target.value);
    }

    return (
        <div className="searchtab">
             <form>
                 <input onChange={ handleChange } placeholder="Search news" className="search__inp"/>
             </form>
        </div>
    )
}

export default SearchTab
