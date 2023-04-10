import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";


function AuthDetails() {


  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Succesfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{"fontSize":'5px'}}>
      {authUser ? (
        <>
          <p >{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Sign Out</p>
      )}
    </div>
  );
}

export default AuthDetails;
