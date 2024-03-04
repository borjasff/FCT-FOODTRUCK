import React from 'react'
import Image from 'next/image'
import useFoodtruck from '../hooks/useFoodtruck'

const Category = ({category}) => {
    const {name, icon, id} = category
    const {currentCategory, handleClickCategory} = useFoodtruck()
  return (
    <div className={`${currentCategory?.id === id ? "bg-red-400" : ""} flex items-center gap-4 w-full border p-5 hover:bg-red-400`}>
        
        <Image
        alt="Icon Image"
        width={60} height={60}
        src={`/assets/img/icono_${icon}.svg`}
        />
        <button
            onClick={() => handleClickCategory(id)}
            type='button' className='text-2xl font-bold hover:cursor-pointer'>
            {name}
        </button>
    </div>
  )
}

export default Category