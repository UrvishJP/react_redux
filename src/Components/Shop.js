import React from 'react'

const Shop = () => {
  return (
    <>
        <h2>Buy PUMA shoes 5000 Rs</h2>
    <div style={{display:'flex',justifyContent:'center',marginTop:'150px'}}>
        <button className="btn btn-primary mx-2">-</button>
        Add to cart
        <button className="btn btn-primary mx-2">+</button>
    </div>
    </>
  )
}

export default Shop