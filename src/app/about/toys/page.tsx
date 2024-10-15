"use client"
import Cart from '@/app/components/Cart';
import React from 'react';

 const Toys = () => {
  return (
    <div className='mx-auto flex'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 max-w-7xl justify-items-center'>
      <Cart imgSrc='/images/t7.jpg' title='Super Speed Racer'  price={10000}/>
      <Cart imgSrc='/images/t2.webp' title='Adventure Off-Roader'  price={3000}/>

      <Cart imgSrc='/images/t3.webp' title='Colorful Convertible'  price={4000}/>

      <Cart imgSrc='/images/t4.jpg' title='Mighty Monster Truck'  price={5000}/>

      <Cart imgSrc='/images/t5.jpg' title='Funky Fire Truck'  price={6000}/>

      <Cart imgSrc='/images/t6.jpg' title='Cute Mini Cooper'  price={7000}/>

      </div>
      
    </div>
  )
}

export default Toys
