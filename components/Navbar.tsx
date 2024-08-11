import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import { link } from 'fs'
import Button from "./Button"

const Navbar = () => {
  return (
  <nav className="border-2 flexBetween max-container
    padding-container relative z-30 py-5">
        <Link href='/'>
        <Image src="/logoLokakita.png" alt="logo" width={80} height
        ={29}/>
        </Link>
      
          <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
               <Link href={link.href} key={link.key} 
                className=" regular-24 text-gray-50 flexCenter flex-col
                cursor-pointer pb-1.5 transition-all hover:font-extrabold">
               {link.label}
               </Link>
               ))}
          </ul>

    <div className="lg:flexCenter hidden">
        <Link href='https://wa.link/d4orwz'></Link>
        <Button 
          type="button"
          title="Contact Us"
          icon="/call.svg"
          variant="btn_red"
          href="https://wa.link/d4orwz"
          
          
        /> 
      </div>
      <Image
      src="menu.svg"
      alt="menu"
      width={32}
      height={32}
      className='inline-b;ock cursor-pointer lg:hidden'
      />

        
       
  </nav>
  )
}

export default Navbar