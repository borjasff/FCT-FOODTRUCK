import React from 'react'
import {useRouter} from "next/router"

const steps = [
    {step: 1, name: "Carta", url: "/"},
    {step: 2, name: "Resumen", url: "/abstract"},
    {step: 3, name: "Pedido y Pago", url: "/final"},
]
const Steps = () => {

    const router = useRouter()
    const calculateProcess = () => {
        
        let StepValue
        if(router.pathname === "/"){
            StepValue =2;
        } else if (router.pathname === "/abstract"){
            StepValue = 50;
        } else{
            StepValue = 100;
        }
        return StepValue;
    }
  return (
    <>
        <div className='flex justify-between mb-5'>
            {steps.map((step) => (
                <button
                type='button'
                onClick={() => {
                    router.push(step.url)
                }}
                className='text-2xl font-bold uppercase'
                key={step.step}>
                    {step.name}
                </button>
            ) )}
        </div>
        <div className='bg-gray-100 mb-10'>
            <div className='bg-red-500 rounded-full text-xs leading-none h-2 text-center text-white' style={{width: `${calculateProcess()}%`}}></div>
        </div>
    </>
  )
}

export default Steps