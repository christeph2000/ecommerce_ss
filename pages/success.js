import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '../context/stateContext';
import { runFireworks } from '../lib/utils';


const Success = () => {
    const { setcartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    useEffect(() => {
        localStorage.clear();
        setcartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);


    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill />
                </p>
                <h2>Thank you for your order</h2>

                <p className='email-msg'>Check you email inbox for the receipt.</p>
                <p className='description'>
                    If you have any questions, please email <a className='email' href="christeph200@gmail.com">
                        christeph200@gmail.com
                    </a>
                    <Link href="/">
                        <button type="button" width="300px" className='btn'>
                            Continue Shopping
                        </button>
                    </Link>
                </p>


            </div>
        </div>
    )
}

export default Success