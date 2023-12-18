"use client"
import Image from "next/image";
import { useState } from "react";

interface PredictionProps {
    result: File;
    check: Boolean;
    onClose: () => void; // Tipe fungsi tanpa parameter dan tanpa nilai kembali (void)
}

const Prediction: React.FC<PredictionProps> = ({ check, result, onClose }) => {

    const [startPredict, setPredict] = useState(false);
    const [resultPrediction, setResultPrediction] = useState('');

    const handleSubmit = async () => {
        try {
          const formData = new FormData();
          formData.append('image', result);
    
          const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            body: formData,
          });
    
          if (response.ok) {
            const data = await response.json();
            setResultPrediction(data.data.className);
            setPredict(current=>!current);
          } else {
            console.error('Failed to call API:', response.statusText);
          }
        } catch (error) {
          console.error('Error calling API', error);
        }
      };

    return (
      <div className="absolute bg-opacity-80 left-0 w-full h-full top-0 flex items-center justify-center bg-black">
        <div className="relative rounded-3xl w-3/5 h-4/5 bg-white opacity-100 flex items-center justify-center">
            <button onClick={onClose} className="tett-lg font-bold absolute top-10 right-10">
                Back
            </button>
            <div className="relative w-3/6 h-3/4 mr-5">
                <Image 
                    src={URL.createObjectURL(result)}
                    alt="Uploaded"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="w-2/6 h-3/4 ml-5 flex flex-col items-center justify-center">
                
                {startPredict === true?  
                
                <button className="hidden bg-[#EE5874] hover:bg-[#FB2F55] text-white font-semibold rounded-xl px-12 py-2 text-2xl">Predict</button>

                :

                <button onClick={handleSubmit} className="bg-[#EE5874] hover:bg-[#FB2F55] text-white font-semibold rounded-xl px-12 py-2 text-2xl">Predict</button>
                }
                

                {startPredict === true?  
                
                <div className="flex flex-col items-center">
                    <h1 className="mt-16 w-full font-bold text-xl text-[#282828] text-center">Result : <span className="font-medium">{resultPrediction}</span></h1>
                    <button onClick={() => setPredict(false)} className="w-fit mt-5 bg-[#1AD163] hover:bg-[#1AA351] text-white font-semibold rounded-sm px-4 py-1 text-lg">Retry</button>
                </div>

                :

                <div className="mt-2 lds-ring w-full h-1/6 flex items-center justify-center"><div></div><div></div><div></div><div></div></div>
                }

                
            </div>
        </div>
      </div>
    );
  };
  
  export default Prediction;
  