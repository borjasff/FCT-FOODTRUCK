import React, {useState, useEffect} from "react"
import axios from "axios"
import Layout from "../layout/Layout"
import Product from "../components/Product"
import useFoodtruck from "../hooks/useFoodtruck"

export default function Home() {

    const {currentCategory, product} = useFoodtruck()
    console.log(currentCategory)
    
    return (
      <Layout page={`Menú ${currentCategory?.name}`}>
        <h1 className="font-black text-5xl">{currentCategory?.name}</h1>
        <p className="my-7 text-xl">Tenemos lo que estás buscando...</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {product?.filter((pro) => pro.categoryId === currentCategory.id).map((pro) => (
            <Product key={pro.id} pro={pro} />
          ))}
      </div>
        
        
        {product && product.length === 0 && <p>No hay productos...</p>}
      </Layout>
   
  )
}
