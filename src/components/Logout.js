import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

function Logout({onLogout}) {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "";
    const handleLogout = () => {
        gapi.auth2.getAuthInstance().signOut().then(() => {
          // setToken(null);
          localStorage.removeItem('accessToken');
      
          // Clear sessionStorage
          sessionStorage.clear();
        
          // Clear all cookies
          document.cookie.split(";").forEach((cookie) => {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
          });
      
          // Clear all caches
          caches.keys().then((keys) => {
            keys.forEach((key) => {
              caches.delete(key);
            });
          });
        });
        window.location.href = 'http://localhost:3000/login';
      }

    return (
        <div className='p-2'>
            <GoogleLogout
                clientId={CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={handleLogout}
            >
            </GoogleLogout>
        </div>
    )
}

export default Logout;
