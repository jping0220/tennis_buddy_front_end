import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginRedirect = () => {
  const { loginWithRedirect } = useAuth0();
  loginWithRedirect();
//  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};




// export const LogIn = () => (
//     <div>
//         <h2>log in format will be here</h2>
//     </div>
// )
