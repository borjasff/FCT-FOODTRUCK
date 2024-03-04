import Layout from '../layout/Layout'
import React, { useEffect, useCallback } from 'react'
import useFoodtruck from '../hooks/useFoodtruck'
import { formatMoney } from '../helpers'

const final = () => {
  const {order, name, setName, text, setText, sendOrder, priceTotal} = useFoodtruck()

  const checkOrder = useCallback(() => {
    return order.length === 0 || name === '' || name.length < 3
  }, [order, name])

  useEffect(() => {
    checkOrder()
  }, [order, checkOrder])

  return (
    <Layout page="final">
        <h1 className='font-black text-5xl'>Pedido y Pago</h1>
        <p className="my-7 text-xl">Unos últimos pasos antes de disfrutar...</p>

        <form onSubmit={sendOrder}>
          <div>
            <label htmlFor='name' className='block uppercase text-gray-700 font-bold text-2xl'>Nombre</label>
            <input type='text' placeholder="Tu nombre" id="name" className='bg-gray-300 w-full lg:w-1/2 mt-4 rounded p-3' value={name}
            onChange={e => setName(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='nota' className='block uppercase text-gray-700 font-bold text-xl mt-10'>Comentario </label>
            <textarea type='text' id="nota" placeholder='Ejemplo: Sin cebolla en la hamburguesa BigBug' className='bg-gray-300 w-full lg:w-1/2 mt-4 rounded p-3' maxLength='150' 
            value={text}
            onChange={e => setText(e.target.value)}
            ></textarea>
          </div>
          <div className='mt-10'>
              <p className='text-2xl'>Total a pagar {''} <span className='font-bold text-red-500'>{formatMoney(priceTotal)}</span></p>
          </div>
          <div>
              <input   type='submit'
              className={`${checkOrder() ? "bg-gray-400" : "bg-red-500 hover:bg-red-800" } w-full lg:w-auto px-5 py-3 rounded text-white text-center uppercase mt-10 font-bold cursor:pointer`}
              value="Realizar pedido" disabled={checkOrder()}/>
          </div>
        </form>
    </Layout>
  )
}

export default final