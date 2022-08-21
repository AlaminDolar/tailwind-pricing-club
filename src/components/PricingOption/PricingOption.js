import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefits/Benefit';

const PricingOption = (props) => {
    const { name, price, benefits } = props.op;
    return (
        <div className='bg-white rounded p-4 mt-3'>
            <h1 className=' bg-indigo-300 rounded font-bold text-2xl py-2xl'>{name}</h1>
            <p> <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl text-gray-400 font-bold text-center'>\mo</span></p>
            <div >
                <h1 className=' text-xl text-left'>Benefits:</h1>
                {
                    benefits.map(benefit => <Benefit
                        benefit={benefit}
                    ></Benefit>)
                }
            </div>
            <button className='bg-green-500 hover:bg-green-800 text-white mt-8 flex w-full justify-center py-2 rounded'>Buy Now <ArrowRightIcon className='w-6 h-6 ml-2 '></ArrowRightIcon> </button>
        </div>
    );
};

export default PricingOption;