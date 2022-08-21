import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0, benefits: ['lifetime free', 'unlimited deals', 'localized deals', 'crazy deals'] },
        { id: 2, name: 'Regular', price: 9.99, benefits: ['everything on free', 'unlimited deals', 'localized deals', 'crazy deals'] },
        { id: 3, name: 'Premimum', price: 19.99, benefits: ['Everything on regular', 'unlimited deals', 'localized deals', 'crazy deals'] }
    ]
    return (
        <div className=' bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deal of the Town</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dolore incidunt quaerat quas, distinctio doloremque illum sunt facere obcaecati ratione.</p>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        op={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;