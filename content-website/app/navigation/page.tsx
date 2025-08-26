import { Bodoni_Moda } from 'next/font/google'
import React from 'react'


const Bodoni_ModaFont = Bodoni_Moda({
    subsets: ["latin"], 
    
  })
const nav = () => {


  return (
    <main className="flex justify-center items-center  py-6 z-50">
        <nav className=' w-[800px] flex justify-between px-6 items-center bg-white rounded-full '>
            <div className={`${Bodoni_ModaFont.className} p-4 uppercase text-3xl text-[#43D5FA] font-semibold`}>Suros</div>
            <div className="">
                <ul className="gap-4 uppercase font-normal text-xl flex text-[#EDC99D]">
                    <li className="">Home</li>
                    <li className="">About</li>
                    <li className="">Services</li>
                    <li className="">Contact</li>
                </ul>
            </div>
        </nav>
    </main>
  )
}

export default nav