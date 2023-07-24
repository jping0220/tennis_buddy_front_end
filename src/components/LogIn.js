import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;



// export const LogIn = () => (
//     <div>
//         <h2>log in format will be here</h2>
//     </div>
// )
