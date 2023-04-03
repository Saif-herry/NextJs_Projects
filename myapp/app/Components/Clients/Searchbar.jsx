"use client"
import React, { useState } from 'react'

const Searchbar = () => {
    const [searchQuery,setSearchQuery] = useState("")
    console.log(searchQuery)
  return (

      <input type="text"  value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder='Search...'/>
   
  )
}

export default Searchbar
