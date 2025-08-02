import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Deserts(){
    return(
        <div>
        <div className="text-center">
            <h1 className="text-2xl text-amber-950 font-bold mt-10">OUR SPECIAL DESSERT</h1>
        </div>

        <div className="flex space-x-10 m-10">
        <div className="flex-col items-center bg-amber-50 h-88">
         <div className='relative'>
               <img src={import.meta.env.BASE_URL + "GulabJamun.jpg"} className="h-60 w-90" />
               <FavoriteBorderIcon className="absolute top-2 right-2 text-white cursor-pointer rounded-full p-1" />
         </div>
            
             <p className="text-l font-bold mt-2 ml-2 text-amber-900">Gulab Jamun</p>
             <p className="text-sm text-amber-800 ml-2">Made with milk solid,sugar and curd</p>
          <div className='flex py-2'>
                <h2 className="m-2 font-bold text-neutral-800"> Rs.199</h2>
               <button className='bg-stone-800   rounded-xl text-white p-2 ml-26'>Order Now</button>
            </div>     
      </div>

         <div className="flex-col items-center  bg-amber-50 h-88">
            <div className='relative'>
            <img src={import.meta.env.BASE_URL + "chocolateTiramisu.webp"} className="h-60 w-90"/>
              <FavoriteBorderIcon className="absolute top-2 right-2 text-white cursor-pointer rounded-full p-1" />
            </div>
            
             <p className="text-l font-bold mt-2 text-amber-900 ml-2">Chocolate Tiramisu</p>
              <p className="text-sm text-amber-800 ml-2">Made with layer of mascarpone cream</p>
               <div className='flex py-2'>
                <h2 className="m-2 font-bold text-neutral-800"> Rs.259</h2>
               <button className='bg-stone-800   rounded-xl text-white p-2 ml-26'>Order Now</button>
            </div>

        </div>

         <div className="flex-col items-center  bg-amber-50 h-88">
            <div className='relative'>
            <img src={import.meta.env.BASE_URL + "churos.jpg"} className="h-60 w-90"/>
             <FavoriteBorderIcon className="absolute top-2 right-2 text-white cursor-pointer  p-1" />
            </div>
             <p className="text-l font-bold mt-2 text-amber-900 ml-2">Churros</p>
              <p className="text-sm text-amber-800 ml-2">Made with bittersweet chocolate</p>
              <div className='flex py-2'>
                <h2 className="m-2 font-bold text-neutral-800"> Rs.159</h2>
               <button className='bg-stone-800   rounded-xl text-white p-2 ml-26'>Order Now</button>
            </div>

        </div>

         <div className="flex-col items-center  bg-amber-50 h-88">
            <div className='relative'>
            <img src={import.meta.env.BASE_URL + "lamingtons.jpg"} className="h-60 w-90"/>
             <FavoriteBorderIcon className="absolute top-2 right-2 text-white cursor-pointer  p-1" />

            </div>
             <p className="text-l font-bold mt-2 text-amber-900 ml-2">Australian Lamingtons</p>
              <p className="text-sm text-amber-800 ml-2 ">Made with delicious sponge cake </p>
            <div className='flex py-2'>
                <h2 className="m-2 font-bold text-neutral-800"> Rs.359</h2>
               <button className='bg-stone-800   rounded-xl text-white p-2 ml-26'>Order Now</button>
            </div>

        </div>

        </div>
        </div>
    )
}
 export default Deserts