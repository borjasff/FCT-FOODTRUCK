import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const FoodtruckContext = createContext()

const FoodtruckProvider = ({children}) => {
  const [category, setCategories] = useState([])
  const [product, setProduct] = useState([])
  const [currentCategory, setCurrentCategory] = useState([])
  const [currentProduct, setCurrentProduct] = useState([])
  const [modal, setModal] = useState(false)
  const [order, setOrder] = useState([])
  const [name, setName] = useState('')
  const [ text, setText] = useState('')
  const [ priceTotal, setPriceTotal] = useState(0)

  const router = useRouter()


  //funcion para la ventana modal
  const handleModalChange = () => {
    setModal(!modal)
  }

  //obtener los productos
  const getProducts = async () => {
    const { data } = await axios('/api/product')
    setProduct(data)
}
useEffect(() =>{
  getProducts();
},[])

//obtener el total
useEffect(() =>{
  const newTotal = order.reduce((priceTotal, currentProduct) => (currentProduct.price * currentProduct.quantity) + priceTotal, 0)
  setPriceTotal(newTotal)
},[order])

  //obtener el producto actual
  const handleClickProduct = product => {
    setCurrentProduct(product)
  }

  //obtener las categorias
  const getCategories = async () => {
      const { data } = await axios('/api/category')
      setCategories(data)
  }
  useEffect(() =>{
    getCategories();
  },[])

  useEffect(() =>{
    setCurrentCategory(category[0]);
  },[category])

  //obtener la categoria actual
  const handleClickCategory = id => {
    const categories =category.filter(cat => cat.id === id)
    setCurrentCategory(categories[0])
    router.push('/')
  }

  const handleAddOrder = ({categoryId, ...currentProduct}) => {
    if(order.some(productState => productState.id === currentProduct.id )){
      //actualizar cantidad
      const UpdateOrder = order.map(productState => productState.id === currentProduct.id ? currentProduct : productState)

      setOrder(UpdateOrder)
    } else {
      setOrder([...order, currentProduct])
    }
    setModal(false)
  }
  const hundleEditQuantity = id => {
    const updateProduct = product.filter(productState => productState.id === id)
    setCurrentProduct(updateProduct[0])
    setModal(!modal)
  }
  const hundleDeleteProduct = id => {
    const updateOrder = order.filter(productState => productState.id !== id)
    setOrder(updateOrder)
  }
  const sendOrder = async(e) => {
    e.preventDefault()
    console.log("Checking order")
  }
  return (
    <FoodtruckContext.Provider
        value={{
          category,
          handleClickCategory,
          currentCategory,
          product,
          handleClickProduct,
          currentProduct,
          handleModalChange,
          modal,
          handleAddOrder,
          order,
          hundleEditQuantity,
          hundleDeleteProduct,
          setName,
          name,
          text,
          setText,
          sendOrder,
          priceTotal


        }}
        >{children}
    </FoodtruckContext.Provider>
  )
}
export {
    FoodtruckProvider
}
export default FoodtruckContext