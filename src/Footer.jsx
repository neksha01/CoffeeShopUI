import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer(){
    return(
        <div className="bg-[#2B1B10] text-white max-h-md flex space-x-25 justify-between p-10" >
            <div className=" text-3xl font-semibold uppercase">COFFEE</div>
            <div className="flex flex-col space-y-3">
                <h1 className="font-bold text-lg">PRIVACY</h1>
                <div>Terms of use</div>
                <div>Privacy policy</div>
                <div>Cookies</div>
            </div>
             <div className="flex flex-col space-y-3">
                <h1 className="font-bold text-lg">SERVICES</h1>
                <div>Shop</div>
                <div>Owner ahead</div>
                <div>Menu</div>
            </div>
             <div className="flex flex-col space-y-3">
                <h1 className="font-bold text-lg">ABOUT US</h1>
                <div>Find a location</div>
                <div>About Us </div>
                <div>Our story</div>
            </div>
             <div className="flex flex-col space-y-3">
                <h1 className="font-bold text-lg">INFORMATION</h1>
                <div>Plans and pricing</div>
                <div>Sell your products</div>
                <div>Jobs</div>
            </div>
             <div className="flex flex-col space-y-4">
                <h1 className="font-bold text-lg">SOCIAL MEDIA</h1>
                <div className='flex gap-x-3'>
                    <TwitterIcon/>
                    <FacebookOutlinedIcon/>
                    <InstagramIcon/>
                    <LinkedInIcon/> 

                </div>
            </div>
         

            

        </div>
    )
}
export default Footer;
