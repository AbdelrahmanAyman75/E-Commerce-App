import React, { useEffect, useState } from 'react'

export default function useNetwork() {
 const [isonline, setSisonline] = useState(true);
    useEffect(() => {
        CheckOnline()
    } ,[])
    const CheckOnline = () => {
        window.addEventListener("online", () => {
            console.log("is online");
            setSisonline(true);
        })
        window.addEventListener("offline", () => {
            console.log("is offline");
            setSisonline(false);

        })
    }
    return (
        <>
        {isonline?<div className='Network d-flex align-items-center'>you are Online <i className="fa-solid fa-wifi"></i></div>:<div>you are offline </div> }
        </>
    )
}
