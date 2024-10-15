import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface CardProp {
    imgSrc: string;
    title: string;
    price: number;
 }

const Cart = (prop:CardProp) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <div className="flex flex-col items-center p-4 justify-center bg-rose-300 bg-opacity-20 rounded-md gap-2"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
           >
            <img src={prop.imgSrc} alt={prop.title} className="w-100 h-100 rounded-md" />
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold italic">{prop.title}</h2>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold italic bg-rose-400 p-2 m-5 rounded-md cursor-pointer hover:bg-rose-600">{prop.price}</p>

            
        </div>
    )

}

export default Cart;



