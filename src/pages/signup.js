import React, {useState} from 'react'
import { db } from '../components/API'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export function SignUp() {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const Signin = async() => {
        const res = await axios.post(`${db}/signup`, {
            name:name,
            pass:pass
        });
        Cookies.set('Session_Event', res.data.id);
        console.log(res.data.id)
        navigate('/');
    }

    return(
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <img className="w-2/12 h-2/12" src="https://us.123rf.com/450wm/poenya200/poenya2001810/poenya200181000042/110198641-icono-de-l%C3%ADnea-de-e-learning-s%C3%ADmbolo-de-educaci%C3%B3n-de-internet-en-l%C3%ADnea-gorro-de-graduaci%C3%B3n-en-la.jpg?ver=6" alt="logo"/>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log in to your account
              </h1>
              <div className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input value={name} type="text" onChange={(e) =>setName(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jefferson Gutierritos" required=""/>
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={pass} type="password" id="password" onChange={(e) => setPass(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
  
                      </div>
                  </div>
                  <button type="submit" onClick={() => Signin()} className="w-full bg-sky-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              </div>
          </div>
      </div>
  </div>
</section>
);
}