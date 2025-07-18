import { useEffect, useState } from "react";

const useStatus = () => {

  const [ onlinestatus, setonlinestatus ] = useState(true);

  // chek  if  online
  useEffect(() => {
    window.addEventListener("offline", () => {
       setonlinestatus(false);
    });

     window.addEventListener("online", () => {
       setonlinestatus(true);
    });
  }, []);

    // return Boolean  value
    return onlinestatus;
}
export default useStatus;