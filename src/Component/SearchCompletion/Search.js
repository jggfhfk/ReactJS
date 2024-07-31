import React, { useState, useEffect } from 'react'
import "./Search.css"

const Search = () => {

    const [query, setQuery] = useState("")
    const [products, setProducts] = useState()
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=10`)
            const data = await res.json()
            // console.log(data)
            setProducts(data.products)
            console.log(products)
        }

        getData()
    }, [query]);

  return (
    <div className='searchMain'>
        <input type="text" value={query} placeholder='Search Here' onChange={(e) => setQuery(e.target.value)}/>  
        <br />
        {products?.map((val, index) => {
            return <div key={index}>
                {val.title}
            </div>
        })}    
    </div>
  )
}

export default Search
