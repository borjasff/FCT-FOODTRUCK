import Head from 'next/head'
import React, { Children } from 'react'
import Sidebar from '../components/Sidebar'
import ProductModal from '../components/ProductModal'
import Modal from 'react-modal'
import useFoodtruck from '../hooks/useFoodtruck'
import Steps from '../components/steps'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#__next');

const Layout = ({children, page }) => {
    const {modal} = useFoodtruck()
  return (
    <>
        <Head>
            <title>Foodtruck BFF - {page}</title>
            <meta name='description' content="Foodtruck BFF"/>
        </Head>
        <div className='bg-gray-100 md:flex'>
            <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
                <Sidebar/>
            </aside>
            <main className='bg-gray-100 md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
                <div className='mt-7 p-7'>
                    <Steps />
                    {children}
                </div>              
            </main>
            {modal && (
                <Modal isOpen={modal}
                        style={customStyles}>
                    <ProductModal />
                </Modal>
            )}
        </div>
    </>
  )
}

export default Layout