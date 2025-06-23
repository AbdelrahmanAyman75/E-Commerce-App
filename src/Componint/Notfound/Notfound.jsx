import React from 'react'
import notfound from "../../Assets/images/error.svg"

export default function Notfound() {
  return (
    <>
    <div className='m-auto w-50'>
        <img width={500} height={500} className='' src={notfound} alt="error not found page" />
    </div>
    </>
  )
}
