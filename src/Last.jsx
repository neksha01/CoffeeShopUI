import TextField from "@mui/material/TextField"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Last(){
    return(
        <div className="bg-[#EDE5DB] h-60 flex justify-between  mt-10 overflow-hidden">
            <img src="/beans1.png"className="h-60 object-contain"/>
             <div className="text-center max-w-md space-y-5">
        <h2 className="text-3xl font-bold text-amber-950 mt-12">
           Join in and get 15% Off
        </h2>
        <p className="text-amber-900 mt-3">Subscribe to our new newsletter and get 15% off discount</p>
       <div className="flex justify-between gap-x-4">
        <input type="text " placeholder="Email-Address" className="bg-white w-80 rounded-3xl p-2"/>
          <button className="bg-amber-950 text-white rounded-3xl w-30 p-2  ">
           Subscribe</button>
        </div>
        
      </div>
            <img src="/beans2.png" className="h-full object-contain " />

        </div>
    )
}
export default Last