import { useEffect, useState } from 'react';
import dennerLogo from '../../assets/img/logo.svg';
import menu from '../../assets/img/menu-regular-24.png';
import close from '../../assets/img/x-regular-36.png';
import { IoLogoInstagram } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const phoneNumber = "5521982579799";
  const message = "Olá Denner, tenho interesse em fazer um evento, e gostaria de mais detalhes dos seus serviços musicais!";

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
    <div className="absolute top-0 w-full text-white">
      <div className='container mx-auto flex flex-col 2xl:flex-row items-center 2xl:justify-between py-4 px-2 md:px-20 lg:px-60'>
        <a href='#' className='flex items-center justify-center'>
          <img src={dennerLogo} className='w-10 m-2' />
          <span className='text-3xl font-bold text-white'>Denner</span>
        </a>
        <ul className='hidden 2xl:flex flex-col 2xl:flex-row items-center gap-4 2xl:gap-16 font-semibold text-base mt-4 2xl:mt-0'>
          <a href='#Sobre' className='p-3 hover:bg-white hover:text-black rounded-md transition-all cursor-pointer'>Sobre</a>
          <a href='#Musica' className='p-3 hover:bg-white hover:text-black rounded-md transition-all cursor-pointer'>Musica</a>
          <a href='#Fotos' className='p-3 hover:bg-white hover:text-black rounded-md transition-all cursor-pointer'>Fotos</a>
          <a href='#Contato' className='p-3 hover:bg-white hover:text-black rounded-md transition-all cursor-pointer'>Contato</a>
          <a href='https://www.instagram.com/dennersam' target="_blank" className='p-3 hover:bg-white hover:text-black rounded-md transition-all cursor-pointer'><IoLogoInstagram /></a>
          <a href='https://www.youtube.com/@denner_cerqueira' target="_blank" className='p-3 hover:bg-white hover:text-black rounded-md transition-all cursor-pointer'><BsYoutube /></a>
          <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target="_blank" className='p-3 hover:bg-white hover:text-black rounded-md transition-all cursor-pointer'><FaWhatsapp /></a>
        </ul>
        

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
          <a onClick={() => setShowMobileMenu(false)} href='https://www.instagram.com/dennersam' target="_blank" className='px-4 py-2 rounded-full inline-block'><IoLogoInstagram /></a>
          <a onClick={() => setShowMobileMenu(false)} href='https://www.youtube.com/@dennercerqueiraevangelista7662' target="_blank" className='px-4 py-2 rounded-full inline-block'><BsYoutube /></a>
          <a onClick={() => setShowMobileMenu(false)} href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target="_blank" className='px-4 py-2 rounded-full inline-block'><FaWhatsapp /></a>
        </ul>
      </div>
    </div>
  )
}