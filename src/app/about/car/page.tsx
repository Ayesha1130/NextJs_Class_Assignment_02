"use client"
import Cart from '@/app/components/Cart';
import React from 'react';

 const Car = () => {
  return (
    <div className='mx-auto flex'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 max-w-7xl justify-items-center'>
      <Cart imgSrc='/images/c1.jpg' title='Super Speed Racer'  price={20000}/>
      <Cart imgSrc='/images/c2.jpg' title='Adventure Off-Roader'  price={30000}/>

      <Cart imgSrc='/images/c8.jpeg' title='Colorful Convertible'  price={40000}/>

      <Cart imgSrc='/images/c4.webp' title='Mighty Monster Truck'  price={50000}/>

      <Cart imgSrc='/images/c5.webp' title='Funky Fire Truck'  price={60000}/>

      <Cart imgSrc='/images/c6.jpeg' title='Cute Mini Cooper'  price={70000}/>

      </div>
      
    </div>
  )
}

export default Car
