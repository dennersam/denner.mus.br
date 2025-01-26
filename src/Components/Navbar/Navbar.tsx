import { useEffect, useState } from 'react';
import dennerLogo from '../../assets/img/logo.svg';
import menu from '../../assets/img/menu-regular-24.png';
import close from '../../assets/img/x-regular-36.png';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu ] = useState(false);
  useEffect(() => {
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  },[showMobileMenu])

  return (
    <div className="absolute top-0 left-0 w-full z-10 text-white">
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
        <a href='#' className='flex items-center'>
          <img src={dennerLogo} className='w-10 m-2'/>
          <span className='text-3xl font-bold text-white'>Denner</span>
        </a>
        <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
          <a href='#Sobre' className='p-3 hover:bg-white hover:text-black rounded-md transition-all cursor-pointer'>Sobre</a>
          <a href='#Musica' className='p-3 hover:bg-white hover:text-black rounded-md transition-all cursor-pointer'>Musica</a>
          <a href='#Fotos' className='p-3 hover:bg-white hover:text-black rounded-md transition-all cursor-pointer'>Fotos</a>
          <a href='#Contato' className='p-3 hover:bg-white hover:text-black rounded-md transition-all cursor-pointer'>Contato</a>
        </ul>
        <div className='relative hidden md:flex items-center justify-center gap-3'>
          <i className='bx bx-search absolute left-3 text-2xl text-white'></i>
          <input type='text' placeholder='Pesquisa...' className='py-2 pl-10 rounded-xl border-2 border-white focus:outline-0 ' />
        </div>
        <img onClick={() => setShowMobileMenu(true)} src={menu} className='md:hidden w-7 cursor-pointer' />
        
      </div>
      { /* Mobile menu */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0' }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all text-black`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() => setShowMobileMenu(false)} src={close} className='w-10' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={() => setShowMobileMenu(false)} href='#Sobre' className='px-4 py-2 rounded-full inline-block'>Sobre</a>
          <a onClick={() => setShowMobileMenu(false)} href='#Musica' className='px-4 py-2 rounded-full inline-block'>Música</a>
          <a onClick={() => setShowMobileMenu(false)} href='#Fotos' className='px-4 py-2 rounded-full inline-block'>Fotos</a>
          <a onClick={() => setShowMobileMenu(false)} href='#Contato' className='px-4 py-2 rounded-full inline-block'>Contato</a>
        </ul>
      </div>
    </div>
  )
}