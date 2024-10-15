"use client"
import Cart from '@/app/components/Cart';
import React from 'react';
import AOS from 'aos'
 const Bike = () => {
  return (
    <div className='mx-auto flex'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 max-w-7xl justify-items-center'>
      <Cart imgSrc='/images/b1.jpg' title='Super Speed Racer'  price={20000}/>
      <Cart imgSrc='/images/b00.webp' title='Adventure Off-Roader'  price={30000}/>

      <Cart imgSrc='/images/bik.webp' title='Colorful Convertible'  price={40000}/>

      <Cart imgSrc='/images/b6.webp' title='Mighty Monster Truck'  price={50000}/>

      <Cart imgSrc='/images/b2.webp' title='Funky Fire Truck'  price={60000}/>

      <Cart imgSrc='/images/b5.jpg' title='Cute Mini Cooper'  price={70000}/>

      </div>
      
    </div>
  )
}

export default Bike