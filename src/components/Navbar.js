import { React, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

/* This array has the classes on each part of the navbar */
const navigation = [
    {name:"HOME",       href:"/",        show:true },
    {name:"Gallery",    href:"/gallery", show:false},
    {name:"VIP",        href:"/vip",     show:false},
    {name:"Party Room", href:"/party",   show:false}
    ];

/* This function is to insert the classes and the info on each part of the navbar */
function classNames(...classes){
    return classes.filter(Boolean).join("");
}



export function Navbar() {
    const [Session, setSession] = useState(false);

    /* Checks if the cookie is already active */
    const checkCookie = (session) => {
        if(session){
            navigation.forEach((item) => {
                item.show = true;
            });
            setSession(true)
        }
    }

    /* This function is the one we call when the "log out" button is pressed */
    const LogOut = () => {
        Cookies.remove("Session_Event");
        setSession(false);
        window.location.reload();
    }

    useEffect(() => {
    const session = Cookies.get("Session_Event");
    
    /* Here we call the function to check the cookie */
    checkCookie(session);
    });



    return(
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <img className="w-1/12 h-1/12 mr-2" src="https://us.123rf.com/450wm/poenya200/poenya2001810/poenya200181000042/110198641-icono-de-l%C3%ADnea-de-e-learning-s%C3%ADmbolo-de-educaci%C3%B3n-de-internet-en-l%C3%ADnea-gorro-de-graduaci%C3%B3n-en-la.jpg?ver=6" alt="logo"/>
        {
                        <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item ) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.show ? "" : "hidden"
                            )}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                      
        }
        {
          Session ? (            
          <div>
           <button onClick={() => LogOut()} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Log Out</button>             
            </div>

          ) : (
            <div>
              <a href="/login" className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Login</a>
          <a href="/signup" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up</a>
            </div>
          )
        }
      </nav>
    );
}