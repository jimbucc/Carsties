'use client'

import { useParamsStore } from '@/hooks/useParamStore'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'

const Logo = () => {
  const router = useRouter()
  const pathName = usePathname()
  const reset = useParamsStore(state => state.reset)
  const doReset = () => {
    if(pathName !== '/') router.push('/')
    reset();
  }
  return (
    <div onClick={doReset} className=" cursor-pointer flex items-center gap-2 text-3xl font-semibold text-red-500">
        <AiOutlineCar size={34} />
        <div>Carsties Auctions</div>
      </div>
  )
}

export default Logo