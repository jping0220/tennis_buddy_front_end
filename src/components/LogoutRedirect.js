import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutRedirect = () => {
  const { logout } = useAuth0();
  logout({ logoutParams: { returnTo: window.location.origin } });
  // return (
  //   <button
  //     onClick={() =>
  //       logout({ logoutParams: { returnTo: window.location.origin } })
  //     }
  //   >
  //     Log Out
  //   </button>
  // );
};
