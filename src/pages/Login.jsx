import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { getAuth,  signInWithPopup,signOut, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/shopSlice";
import {useNavigate} from 'react-router-dom'
const Login = () => {
   const dispatch=useDispatch();
   const navigate= useNavigate()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleLoginGoogle =(e)=>{
        e.preventDefault();
        signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    dispatch(addUser({
        _id:user.uid,
        name:user.displayName,
        email:user.email,
        image:user.photoURL,
    }));
    setTimeout(() => {
      navigate("/EcommerceShope/")
    }, 1500);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(error)
  });

    }

    const handleSignout =()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            toast.success(" Log Out Successfully");
            dispatch(removeUser())
           
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className="bg bg-amber-200 w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className=" w-full flex  items-center justify-center gap-10">
        <div onClick={handleLoginGoogle} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-600 ronded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
        <FcGoogle size={30} />
        <span className="text-gray-600 hover:text-blue-600">Sign in with Google</span>
        </div>
        <button onClick={handleSignout} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-900 duration-300'> Sign out</button>
      </div>

      <div className=" w-full flex  items-center justify-center gap-10">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-600 ronded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
        <FaGithub size={30} />
        <span className="text-gray-600 hover:text-blue-600">Sign in with Github</span>
        </div>
        <button className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-900 duration-300'> Sign out</button>
      </div>
    </div>
  );
};

export default Login;
