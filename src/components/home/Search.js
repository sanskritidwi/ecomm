import React, { useState ,useEffect} from 'react'


function Search({data,field}) {
  const [query, setQuery] = useState('')
  



  const handleChange = (e) => {
    setQuery(e.target.value)
    if (query.length > 0) {
      data.filter((tobi) => {
        console.log(tobi.last_name.match(query))
        return tobi.last_name.match(query)
      })
    }
  }
  return (
    <>
      <input
        placeholder="Search Here"
        defaultValue={query}
        onChange={handleChange}
      />
{
  data.filter(post => {
    if (query === '') {
      return post;
    } else if (post.field.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  }).map((post, index) => (
    <div className="box" key={index} style={{border:"1px solid", padding:"8px", margin:"10px"}}>
      <p>{post.first_name}</p>
      <p>{post.email}</p>
    </div>
  ))
}
    </>
  )
}

export default Search
