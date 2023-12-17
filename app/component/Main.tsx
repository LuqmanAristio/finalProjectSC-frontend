"use client"
import Image from 'next/image'
import lung from "../../public/image/lung.png"
import adeno from "../../public/image/adeno.png"
import large from "../../public/image/large.png"
import normal from "../../public/image/normal.png"
import squamos from "../../public/image/squamos.png"

import { useState } from 'react'
import Prediction from './Prediction'


export default function Main() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [lokalImage, setLokal] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setLokal(false)   
    };

    const handleImageClick = (image) => {
        setSelectedFile(image);
        setLokal(true)
      };
    

    const handleClosePrediction = () => {
        setSelectedFile(null);
    }

    return(
        <div className='w-5/6 h-full flex items-center justify-between'>
            <div className="w-2/4 h-full mr-10 flex flex-col justify-center">
                <Image
                    src={lung}
                    alt='Lung Image'
                    className='w-3/5 mx-auto mb-5'
                />
                <div className='flex flex-col w-4/5 mx-auto'>
                    <h1 className='text-5xl font-extrabold text-[#282828]'>Lung Cancer Diagnosis <br /> Based on CT Scan Image</h1>
                    <h3 className='text-2xl mt-10 font-semibold text-[#4D4D4D]'>100% Automatically and <span className='text-white bg-[#DB3A58] px-5 py-2 rounded-md'>Free</span></h3>
                </div>
            </div>
            <div className="w-2/4 h-full ml-10 flex items-center justify-center flex-col">
                <div className='rounded-xl w-full h-3/6 bg-white upload flex items-center justify-center flex-col relative'>
                    <button
                        className="block bg-[#EE5874] text-white font-semibold py-3 rounded-2xl px-7 text-xl absolute hover:bg-[#FB2F55]"
                        onClick={() => document.getElementById('getFile').click()}
                    >
                        Upload Image
                    </button>
                    <input
                        type="file"
                        id="getFile"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    
                    <h4 className='absolute bottom-32 text-lg text-[#727272]'>or drag and drop a file</h4>
                </div>
                <div className='w-5/6 h-fit flex items-center mt-10 mb-5'>
                    <div className='w-1/4 font-bold text-[#4D4D4D]'>
                        <h3 className='text-lg'>No image?</h3>
                        <h3 className='text-lg'>Try one of these :</h3>
                    </div>
                    <div className='flex w-3/4 justify-between ml-3'>
                        <div className='w-1/5 h-16 bg-black'>
                            <Image 
                                src={adeno}
                                alt='adeno'
                                className='object-cover w-full h-full'
                                onClick={() => handleImageClick(adeno)}
                            />
                        </div>
                        <div className='w-1/5 h-16 bg-black'>
                            <Image 
                                src={normal}
                                alt='normal'
                                className='object-cover w-full h-full'
                                onClick={() => handleImageClick(normal)}
                            />
                        </div>
                        <div className='w-1/5 h-16 bg-black'>
                            <Image 
                                src={large}
                                alt='large'
                                className='object-cover w-full h-full'
                                onClick={() => handleImageClick(large)}
                            />
                        </div>
                        <div className='w-1/5 h-16 bg-black'>
                            <Image 
                                src={squamos}
                                alt='squamos'
                                className='object-cover w-full h-full'
                                onClick={() => handleImageClick(squamos)}
                            />
                        </div>
                    </div>
                </div>
                <div className='w-5/6 mt-5'>
                    <h4 className='text-[#4D4D4D]'><span className='font-bold'>Note</span> : The system built is not always accurate, it is only used for initial diagnosis.  The final decision is in the hands of the expert</h4>
                </div>
            </div>

            {selectedFile && 
                        <Prediction check={lokalImage} result={selectedFile} onClose={handleClosePrediction}></Prediction>
                    }
        </div>
    )
}