import React from 'react'
import Layout from '../layout/Layout'
import useFoodtruck from '../hooks/useFoodtruck'
import AbstractOrder from '../components/AbstractOrder'
const abstract = () => {
  const {order} = useFoodtruck()
  return (
    <Layout page="abstract">
        <h1 className='font-black text-5xl'>Resumen</h1>
        <p className="my-7 text-xl">¡UN MOMENTO! Comprueba tu Pedido...</p>

        {order.length === 0 ? (
          <p className='text-center text-2xl'>No tienes productos en tu pedido</p>
        ): (
          order.map(product => (
            <AbstractOrder key={product.id} product={product}/>
          ))
        )}
    </Layout>
  )
}

export default abstract