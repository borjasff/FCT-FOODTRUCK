import React from 'react'
import Image from 'next/image'
import useFoodtruck from '../hooks/useFoodtruck'
import Category from './Category'
import Link from 'next/link'

const Sidebar = () => {

  const {category} = useFoodtruck()
  return (
    <div className='w-full'>  
        <Link href='/'><Image width={250} height={100} 
                src="/assets/img/logo.svg" alt="Logo image"
                className='m-auto'
        /></Link>
        <nav className='mt-10'>
          {category.map(category => (
              <Category 
                  key={category.id}
                  category={category}
              />
          ))}
        </nav>
    </div>
  )
}

export default Sidebar