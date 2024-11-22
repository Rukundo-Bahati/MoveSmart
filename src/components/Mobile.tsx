import google from '../assets/google.png'
import apple from '../assets/apple.png'
import { Link } from 'react-router-dom';

const Mobile = () => {
  return (
    <div className="flex items-center justify-center flex-col m-5">
      <h3 className="font-semibold text-2xl my-5">Discover our mobile app</h3>
      <p className="text-xl text-center">Subscribe to our newsletter to receive early discount <br /> offers, updates and new products info.</p>
      <div className="flex gap-5 my-5">
        <Link to={'https://play.google.com/store/apps?pli=1'} className=" w-44 items-center gap-2 flex justify-center rounded-md border border-slate-600 p-2 text-center">
    <img src={google} alt="" className="w-12" />
        <p> Google Play</p>
        </Link>
        <Link to={'www.apple.com/app-store/'} className=" w-44 gap-2 items-center flex justify-center rounded-md border border-slate-600 p-2 text-center">
     <img src={apple} alt="" className="w-12" />
      <p>App store</p>
      </Link>
     
      </div>
    </div>
  )
}

export default Mobile
