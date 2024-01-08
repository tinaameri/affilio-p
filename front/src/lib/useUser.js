import { useEffect, useState } from 'react';
import Router from 'next/router';

export default function useUser({
  redirectTo = '',
  redirectIfFound = false,
} = {}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user', {
      credentials: 'same-origin',
      headers: {
        accept: 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok)
          return Promise.reject(new Error(`HTTP Error ${res.status}`));
        return res.json(); // parse json body
      })
      .then((data) => {
        // do stuff with data from parsed json response body
        // console.log("userinside hoook?>>>>>>>>>>>>>>",data);
        setUser(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!redirectTo || !user) return;
    // console.log("00000000000", redirectIfFound && user?.isLoggedIn)
    // console.log("user", user?.isLoggedIn)
    // console.log("username", user?.username)

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);

  //   console.log(">>>>>>>>>>>>>>>>>>>>>>user", user)

  return { user };
}
