import React from 'react'
import Image from 'next/image'
import { formatMoney } from '../helpers'
import useFoodtruck from '../hooks/useFoodtruck'
const Product = ({pro}) => {
    const {handleClickProduct, handleModalChange } = useFoodtruck()
    const {name, image, price} = pro
    return (
    
    <div className='border p-3'>
        
        <Image  src={`/assets/img/${image}.jpg`} 
                alt={`Image Dish ${name}`} 
                width={400} height={600}/>
        <div className='p-5'>
            <h3 className='text-2xl font-bold'>{name}</h3>
            <p className='font-black mt-5 text-4xl text-red-500'>
                {formatMoney(price)}
            </p>
            <button type='button' 
                    onClick={() => {    
                                    handleModalChange()
                                    handleClickProduct(pro)}}
                    className='bg-red-700 hover:bg-green-400 w-full mt-4 p-3 uppercase text-white font-bold'>Pruébame</button>
        </div>           
    </div>
    
  )
}

export default Product