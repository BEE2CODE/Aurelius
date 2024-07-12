import React from 'react'

function HomeText() {
  return (
  <>
    <div className='home__text'>
      <h2 className='explore'>Explore Classy  Backpacks</h2>
      <p className='Carry'>Carry the weight of the world in comfort.</p>
    </div>
    <div className='category__fifty-nine'>
      <div className='fifty-nine'>| 59 items</div>
        <div className='category__sort'>
          <select className='category'>
            <option value="fruit">Category</option>
            <option value="vegetable">brand</option>
            <option value="meat">design</option>
          </select>
          <select>
            <option value="fruit">Sort by</option>
            <option value="vegetable">Size</option>
            <option value="meat">Price</option>
          </select>
        </div>
      </div>
    <div>
   </div>
   
    
  </>
    
  )
}

export default HomeText
