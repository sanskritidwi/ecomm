import React, { useState, useRef } from 'react'

const ProductCard = ({ data }) => {
  /* States */

  const [noItems, setItems] = useState(false)
  const [productCount, setProductCount] = useState(0)

  const [count, setCount] = useState(0)
  /* Hooks */
  const dataRef = useRef(data)

  /* Helper Functions */
  const handleHeart = (index) => {
    dataRef.current[index].wishlist = !dataRef.current[index].wishlist
    console.log(dataRef.current)
    setCount(count + 1)
  }

  const handleAdd = (index) => {
    setItems(true)
    setProductCount(1)
    dataRef.current[index].productCount = 1
  }

  const handleDecrement=(index)=>{
    if (productCount >1) setProductCount(productCount - 1)
    else if (productCount === 1){ setItems(false); setCount(count+1)}
  }

/* Render Functions */
const renderTag = (item) => {
  if (item.tag === 'New') {
    return (
      <>
        <div className="tag">{item.tag}</div>
      </>
    )
  }
}
const renderHeart = (item,index) => {
  console.log(item.wishlist)
  if (item.wishlist === false) {
    return (
      <>
        <div
          className="heart_black"
          onClick={() => handleHeart(index)}
        ></div>
      </>
    )
  } else {
    return (
      <>
        <div
          className="heart_filled"
          onClick={() => handleHeart(index)}
        ></div>
      </>
    )
  }
}
const renderProductName = (item) => {
  return (
    <>
      <div className="productCategory">{item.categoryName}</div>
      <div className="productName">{item.productName}</div>
    </>
  )
}
const renderRating = (item) => {
  return (
    <>
      <div className="rating">{item.rating}</div>
      <div className="productCategory">{item.priceCategory}</div>
    </>
  )
}
const renderPrice = (item) => {
  return (
    <div className="price">
      <div className="price">{item.price}</div>
      <div className="omittedPrice">{item.omittedPrice}</div>
    </div>
  )
}
const renderAddCartButton = () => {
  if (noItems === false) {
    return (
      <>
        <button className="btnSecondary" onClick={handleAdd}>
          Add
        </button>
      </>
    )
  } else {

    return (
      <>
        <div className="addToCart">
          <div className="btnCounter" onClick={() => handleDecrement()}>
            
            -
          </div>
          <div className="btnCounter"> {productCount}</div>
          <div
            className="btnCounter"
            onClick={() => setProductCount(productCount + 1)}
          >   
            +
          </div>
        </div>
      </>
    )
  }
}
const renderProductImage = (item) => {
  return (
    <div className="productImage">
      <img src={item.img} alt="noimg" />
    </div>
  )
}

return (
  <div className="ProductLoopWrapper">
  <>
    {dataRef.current.map((item, index) => {
      return (
        <div className="ProductCardWrapper">
          <div className="productImageRow">
            {renderProductImage(item)}
            {renderTag(item)}
            {renderHeart(item,index)}
          </div>

          {renderProductName(item)}
          {renderRating(item)}
          <div className="lastRow">
            {renderPrice(item)}
            {renderAddCartButton(index)}
          </div>
        </div>
      )
    })}
  </>

 </div>
)}

export default ProductCard
