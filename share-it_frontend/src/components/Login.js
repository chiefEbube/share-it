import { GoogleLogin } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

import ShareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'


const Login = () => {

  const responseGoogle = (response) => {
    const userObj = jwtDecode(response.credential)
    localStorage.setItem('user', JSON.stringify(userObj))
    const {name, sub, picture} = userObj

    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture
    }
  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={ShareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />

        <div className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width="130px" alt='logo' />
          </div>

          <div className='shadow-2xl'>
            <GoogleLogin
              onSuccess={responseGoogle}
              onError={responseGoogle}
            />;
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
