import React, {useContext} from 'react'
import FoodtruckContext from '../context/FoodtruckProvider'

const useFoodtruck = () => {
  return useContext(FoodtruckContext)
}

export default useFoodtruck