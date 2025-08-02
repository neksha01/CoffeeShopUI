import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
function Home(){
    return(
        <>
        <div className="bg-[url('/background.jpg')] bg-cover  h-screen">
        <nav className="flex items-center justify-between px-10 py-4">

          <div className="text-white text-2xl font-semibold uppercase">COFFEE</div>

          <div className="flex space-x-10 text-gray-300 text-lg justify-center">
            <div>HOME</div>
            <div>COFFEE</div>
            <div>BAKERY</div>
            <div>SHOP</div>
            <div>ABOUT</div>
            <div>LOGIN</div>
          </div>
          <div className="text-white">
            <SearchIcon/>
          </div>
        </nav>

        <div className='text-white  p-48 font-bold space-y-3 ' >
            <p className='text-2xl font-medium'>Welcome !</p>
            <p className='text-4xl font-bold'>We serve the richest coffee </p>
            <p className='text-4xl font-bold'>in the city!</p>
             <button className="bg-gray-500 text-black px-4 py-2 rounded-3xl hover:bg-gray-400">
  Order Now
</button>
        </div>
      
        </div>
       
        </>
    )
}
export default Home
