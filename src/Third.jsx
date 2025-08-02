import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Third(){
    return(
        <div>
        <div className="text-center">
            <h1 className="text-2xl text-amber-950 font-bold mt-10">OUR SPECIAL COFFEE</h1>
        </div>

        <div className="flex space-x-10 m-10">
        <div className="flex-col items-center bg-amber-50 h-88">
         <div className='relative'>
               <img src={import.meta.env.BASE_URL + "LungoCoffee.jpg"} className="h-60 w-90" />
               <FavoriteBorderIcon className="absolute top-2 right-2 text-white cursor-pointer rounded-full p-1" />
         </div>
            
             <p className="text-l font-bold mt-2 ml-2 text-amber-900">Lungo Coffee</p>
             <p className="text-sm text-amber-800 ml-2">An Expresso coffee Drink</p>
          <div className='flex py-2'>
                <h2 className="m-2 font-bold text-neutral-800"> Rs.229</h2>
               <button className='bg-stone-800   rounded-xl text-white p-2 ml-26'>Order Now</button>
            </div>     
      </div>

         <div className="flex-col items-center  bg-amber-50 h-88">
            <div className='relative'>
            <img src={import.meta.env.BASE_URL + "DalgonaCoffee.jpg"} className="h-60 w-90"/>
              <FavoriteBorderIcon className="absolute top-2 right-2 text-white cursor-pointer rounded-full p-1" />
            </div>
            
             <p className="text-l font-bold mt-2 text-amber-900 ml-2">Dalgona Coffee</p>
              <p className="text-sm text-amber-800 ml-2">Whipped Coffe made with instant coffee</p>
               <div className='flex py-2'>
                <h2 className="m-2 font-bold text-neutral-800"> Rs.259</h2>
               <button className='bg-stone-800   rounded-xl text-white p-2 ml-26'>Order Now</button>
            </div>

        </div>

         <div className="flex-col items-center  bg-amber-50 h-88">
            <div className='relative'>
            <img src={import.meta.env.BASE_URL + "IcedCoffee.avif"} className="h-60 w-90"/>
             <FavoriteBorderIcon className="absolute top-2 right-2 text-white cursor-pointer  p-1" />
            </div>
             <p className="text-l font-bold mt-2 text-amber-900 ml-2">Iced Coffee</p>
              <p className="text-sm text-amber-800 ml-2">Iced Coffee is a beverage served cold</p>
              <div className='flex py-2'>
                <h2 className="m-2 font-bold text-neutral-800"> Rs.189</h2>
               <button className='bg-stone-800   rounded-xl text-white p-2 ml-26'>Order Now</button>
            </div>

        </div>

         <div className="flex-col items-center  bg-amber-50 h-88">
            <div className='relative'>
            <img src={import.meta.env.BASE_URL + "filterCoffee.webp"} className="h-60 w-90"/>
             <FavoriteBorderIcon className="absolute top-2 right-2 text-white cursor-pointer  p-1" />

            </div>
             <p className="text-l font-bold mt-2 text-amber-900 ml-2">Filter Coffee</p>
              <p className="text-sm text-amber-800 ml-2 ">75% coffee with 25% chicory roasted </p>
            <div className='flex py-2'>
                <h2 className="m-2 font-bold text-neutral-800"> Rs.59</h2>
               <button className='bg-stone-800   rounded-xl text-white p-2 ml-26'>Order Now</button>
            </div>

        </div>

        </div>
        </div>
    )
}
 export default Third