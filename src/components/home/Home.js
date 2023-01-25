import React from 'react'
import CardCategory from '../cards/CardCategory'
import HomeCarousel from '../Carousels/HomeCarousel'
import Navbar from './Navbar'
import Cart from '../../assets/shopping_cart_black_24dp.svg'
import Heading from '../common/Heading'
import vegetable from '../../assets/vegetable.png'
import ProductCard from '../cards/ProductCard'
import papaya from "../../assets/papaya.jpeg"


const categorySchema = [
  {
    icon: vegetable,
    categoryName: 'Vegetables',
  },
  {
    icon: vegetable,
    categoryName: 'Fruits',
  },
  {
    icon: vegetable,
    categoryName: 'Exotics',
  },
  {
    icon: vegetable,
    categoryName: 'Farm Fresh',
  },
  {
    icon: vegetable,
    categoryName: 'Vegetables',
  },
  {
    icon: vegetable,
    categoryName: 'Vegetables',
  },
]


const productData = [
    {
      tag: 'New',
      wishlist: true,
      img: papaya,
      categoryName: 'vegetable',
      productName: 'Papaya',
      rating: '4',
      priceCategory: 'Price Per Kg',
      price: '$24',
      omittedPrice: '$30',
      productCount:'0'
    },
    {
        tag: 'New',
        wishlist: true,
        img: papaya,
        categoryName: 'vegetable',
        productName: 'Papaya',
        rating: '4',
        priceCategory: 'Price Per Kg',
        price: '$24',
        omittedPrice: '$30',
        productCount:'0'
      },  {
        tag: 'New',
        wishlist: true,
        img: papaya,
        categoryName: 'vegetable',
        productName: 'Papaya',
        rating: '4',
        priceCategory: 'Price Per Kg',
        price: '$24',
        omittedPrice: '$30',
        productCount:'0'
      },
  ]
  
const Home = () => {
  const renderCategories = () => {
    return (
      <div className="sectionGap">
        <Heading black="Shop by " green=" Categories" />
        <CardCategory data={categorySchema} />
      </div>
    )
  }

  const renderPopularProducts=()=>{
    return(
        <>
        <div className="sectionGap">
        <Heading black="Popular " green=" Products" />
        <ProductCard data={productData} />
      </div>
        </>
    )
  }
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      {renderCategories()}
      {renderPopularProducts()}
    </div>
  )
}

export default Home
