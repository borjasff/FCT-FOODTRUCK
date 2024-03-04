import React from 'react'
import Image from 'next/image'
import { formatMoney } from '../helpers'
import useFoodtruck from '../hooks/useFoodtruck'
const AbstractOrder = ({product}) => {
    const {hundleEditQuantity, hundleDeleteProduct} = useFoodtruck()
  return (
    <div className='shadow p-5 mb-3 flex gap-8 items-center'>
        <div className='md:w-1/6'>
            <Image
                width={300}
                height={400}
                src={`/assets/img/${product.image}.jpg`} alt={`Image ${product.name}`}
            />
        </div>
        <div className='md:w-4/6'>
            <h3 className='font-bold mt-2 text-3xl'>{product.name}</h3>
            <h4 className='font-bold mt-2 text-2xl'>Cantidad: {product.quantity}</h4>
            <p className='font-bold mt-2 text-xl text-red-500'>Precio: {formatMoney(product.price)}</p>
            <p className='font-bold mt-2 text-sm text-red-900'>Subtotal: {formatMoney(product.price * product.quantity)}</p>
            
        </div>
        <div>
            <button type='button' onClick={() => hundleEditQuantity(product.id)}
             className='bg-green-700 hover:bg-black text-center flex px-5 py-3 mt-5 rounded-md font-bold uppercase text-white shadow-sm w-full '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
            </button>
            <button type='button' onClick={() => hundleDeleteProduct(product.id)}
             className='bg-red-800 hover:bg-black text-center flex px-5 py-3 mt-5 rounded-md font-bold uppercase text-white shadow-sm w-full '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default AbstractOrder