

import React, { useEffect, useState } from 'react'
import { getToken } from '../firebase/Firebase'

const Notifications = (props) => {
const [isTokenFound, setTokenFound] = useState(false)

console.log("Token found", isTokenFound)

useEffect(() => {
    let data;
    async function tokenFunc() {
      data = await getToken(setTokenFound);
      if (data) {
        console.log("Token is", data);
      }
      return data;
    }
    tokenFunc();
  }, [setTokenFound]);
  return <></>;
 };


export default Notifications