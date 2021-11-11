import './App.css';

// temporary code for navbar
import { useEffect, useState } from "react"

import { Community } from './communityPage/communityPage';
import { NavBar } from './Navbar/navbar';

function App() {
  // temporary code for navbar
  // const [offset, setOffset] = useState(0);
  // useEffect(() => {
  //   window.onscroll = () => {
  //     setOffset(window.pageYOffset)
  //   }
  // }, []);
  // console.log(offset);
  // -----------------------------------

  return (
    <div>
      {/* temporary div for navbar */}
      {/* <div className="one" style={{ position: offset > 0 ? "fixed" : "", transition: "ease-in" }}>Navbar code</div> */}
      {/* -------------------- */}
      <NavBar />
      <Community />
    </div>
  );
}

export default App;






// import React from 'react'
// import GoogleLogin from 'react-google-login'
// function App() {

//   const responseGoogle = (response) => {
//     console.log(response);
//     console.log(response.profileObj);
//     var date = new Date();
//     date.setTime(date.getTime());
//     var expires = "expires=" + date.toGMTString();
//     document.cookie = "harsh ;" + expires + ";path=/";


//   }
//   return (
//     <div style={{ width: "300px", border: "1px solid" }}>
//       <GoogleLogin
//         clientId="242686329654-9farf0lceq071kj8g0olrk33pom3mqo2.apps.googleusercontent.com"
//         buttonText="Sign in with google"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={'single_host_origin'}

//       />
//     </div>
//   )

// }

// export default App