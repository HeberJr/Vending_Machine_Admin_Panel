import React from 'react'
import "./product.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Table from '../../components/productTable/Table'

export const Product = () => {
  return (
    <div className='product'>
        <Sidebar />
        <div className="productContainer">
          <Navbar />
          <Table/>
        </div>
    </div>
  )
}

export default Product
