import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import useFoodtruck from '../hooks/useFoodtruck'
import { formatMoney } from '../helpers'
const ProductModal = () => {
    const { currentProduct, handleModalChange, handleAddOrder, order} = useFoodtruck()
    const [quantity, setQuantity] = useState(1)
    const [ update, setUpdate] = useState(false)
    
    useEffect(() =>{
        //verificar si el producto esta dentro del pedido
            if(order.some(OrderState => OrderState.id === currentProduct.id)){
                const productUpdate = order.find(OrderState => OrderState.id === currentProduct.id)
                setUpdate(true)
                setQuantity(productUpdate.quantity)
            }
    },[currentProduct, order])

    
  return (
    <div className='md:flex gap-10'>
            <div className='md:w-1/3'>
            <Image width={400} height={800} 
            alt={`Image Product ${currentProduct.name}`} 
            src={`/assets/img/${currentProduct.image}.jpg`}/>
            </div>
            <div className='md:w-2/3'>
                <div className='flex justify-end'>
                    <button onClick={handleModalChange}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    </button>
                </div>
                <h1 className='text-4xl font-bold mt-5'>{currentProduct.name}</h1>
                <p className='text-5xl font-bold mt-5 text-red-500'>{formatMoney(currentProduct.price)}</p>
                <div className='flex gap-4 mt-5'>
                    <button type='button' onClick={() => {if(quantity <= 1) return 
                                                            setQuantity(  quantity - 1)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <p className='text-2xl'>{quantity}</p>
                    <button type='button' onClick={() => {if(quantity >= 10) return 
                                                            setQuantity(  quantity + 1)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>

                <button type="button" onClick={() => handleAddOrder({...currentProduct, quantity})} className='bg-red-500 hover:bg-green-400 px-5 py-2 mt-5 text-white font-bold uppercase rounded' >{update ? "Actualizar Pedido" : "Añadir al Pedido"}</button>
            </div>
    </div>
  )
}

export default ProductModal