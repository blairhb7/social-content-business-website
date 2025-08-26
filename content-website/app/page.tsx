import { Bodoni_Moda } from 'next/font/google'
import Nav from './navigation/page'

const Bodoni_ModaFont = Bodoni_Moda({
  subsets: ["latin"], 
  
})

export default function Home() {
  return (
    <div className="font-sans ">
      
      <main className="flex flex-col  w-screen text-[#EDC99D] bg-[#43D5FA]">
      <Nav/>
      <div className="flex px-10 flex-col justify-center h-[900px] gap-4 w-screen ">
        <h1 className={`${Bodoni_ModaFont.className} uppercase flex font-semibold text-9xl  text-[#EDC99D]`}>Suros</h1>
        <h2 className=" flex font-light text-white text-4xl w-[75%] ">Stand Out With Social Media
        Content That Converts. </h2>
      </div>
      </main>
    </div>
  );
}
