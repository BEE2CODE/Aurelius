import img1 from '../images/bag1.png'
import star from '../images/star.png'
import img2 from '../images/bag2.png'
import img3 from '../images/bag7.png'
import img4 from '../images/bag4.png'
import img5 from '../images/bag5.png'
import img6 from '../images/bag6.png'
import Counter from './counter'



function ProductLists() {
  return (
    <>
      <div className='products'>
      <div className='product-image'>
        <img src={img1} height={440} width={440} />
        <div className='product-details'>
          <h3>Herschel Heritage Backpack | XL</h3>  
          
        </div>
      </div>
      <div className='product-image'>
        <img src={img2} height={440} width={440} />
        <div>
          <h3>Herschel Heritage Backpack | XL</h3>  
          <img src={star} width={24} height={24} /><span className='mystyle'>4.5</span>
          <h2>$200</h2>
        </div>
      </div>

        <div className='product-image'>
          <img src={img3} height={440} width={440} />
          <div>
            <h3>Herschel Heritage Backpack | XL</h3>  
            <img src={star} width={24} height={24} /><span className='mystyle'>4.5</span>
            <h2>$200</h2>
          </div>
        </div>
        <div className='product-image'>
          <img src={img4} height={440} width={440} />
          <div>
            <h3>Herschel Heritage Backpack | XL</h3>  
            <img src={star} width={24} height={24} /><span className='mystyle'>4.5</span>
            <h2>$200</h2>
          </div>
        </div>
        <div className='product-image'>
          <img src={img5} height={440} width={440} />
          <div>
            <h3>Herschel Heritage Backpack | XL</h3>  
            <img src={star} width={24} height={24} /><span className='mystyle'>4.5</span>
            <h2>$200</h2>
          </div>
        </div>
        <div className='product-image'>
          <img src={img6} height={440} width={440} />
          <div >
            <h3>Herschel Heritage Backpack | XL</h3>  
            <img src={star} width={24} height={24} /><span className='mystyle'>4.5</span>
            <h2>$200</h2>
          </div>
        </div>
      
      </div>
      <Counter />


    </>
    
      
          
      
     
  )
}

export default ProductLists
