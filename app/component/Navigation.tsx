export default function Navigation() {
    return(
        <div className='w-full bg-white h-fit nav flex justify-between py-6 px-40 text-[#2D2D2D]'>
            <h1 className='text-2xl font-extrabold'>Lung Cancer Diagnosis AI System</h1>
            <div className='flex w-2/6 items-center justify-between'>
                <a href="#">
                    <h3 className='font-semibold text-xl'>Home</h3>
                </a>

                <a href="#">
                    <h3 className='font-semibold text-xl'>About</h3>
                </a>
                
                <a href="#">
                    <h3 className='font-semibold text-xl'>Developer</h3>
                </a>
            </div>
        </div>
    )
}