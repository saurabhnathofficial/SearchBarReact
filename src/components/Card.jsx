import React, { useState } from 'react'
import data from './TemplateData.json';

function Card() {
    const [inputTerm, setInputTerm] = useState("");
    return (
        <>
            <h2 className='text-white text-4xl font-bold'>Let's search somthing....</h2>
            <div>
                <input className='px-6 py-2 rounded outline-none text-black capatilize bg-zinc-200 w-[30vw]' type="text" placeholder="Enter your name" onChange={(e) => {
                    setInputTerm(e.target.value);
                }} />
            </div>
            
            <div className='flex gap-4'>
                {
                    data.filter((val) => {
                        if (inputTerm === "") {
                            return val;
                        } else if (val.name.toLocaleLowerCase().includes(inputTerm.toLocaleLowerCase())) {
                            return val;
                        }
                    })
                        .map((val, key) => {
                            return (
                                <div className='h-[20vw] w-[20vw] bg-zinc-700 rounded-sm mt-4 overflow-hidden'>
                                    <div className="h-[60%] w-full overflow-hidden ">
                                        <img src={val.image} alt="" className='object-cover object-center' />
                                    </div>
                                    <div className="mt-8 flex flex-col text-2xl text-white font-bold uppercase text-center">
                                        <h2>{val.name}</h2>
                                        <h1>₹{val.price}</h1>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </>
    )
}

export default Card