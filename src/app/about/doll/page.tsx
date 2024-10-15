"use client"
import Cart from '@/app/components/Cart';
import React from 'react';
import AOS from 'aos'
 const Doll = () => {
  return (
    <div className='mx-auto flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 max-w-7xl justify-items-center'>
      <Cart imgSrc='/images/d1.jpg' title='Princess Sparkle Doll'  price={20000}/>
      <Cart imgSrc='/images/d78.jpg' title='Ballet Dancer Doll'  price={30000}/>

      <Cart imgSrc='/images/d3.jpg' title='Fashionista Trendsetter Doll'  price={40000}/>

      <Cart imgSrc='/images/d34.jpg' title='Mighty Monster Doll'  price={50000}/>

      <Cart imgSrc='/images/d21.jpg' title='Funky Doll'  price={60000}/>

      <Cart imgSrc='/images/d2.jpg' title='Adventurous Explorer Doll'  price={70000}/>

      </div>
      
    </div>
  )
}

export default Doll
