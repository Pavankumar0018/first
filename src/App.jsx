"use client"
import React, { useState } from 'react'
import Header from '../Components/Header';
// import Link from 'next/link' //routing

function App() {
    const groom="salmon";
    const bride="kat";
    const groom2="praveen";
    const [name, setname] = useState("pavan");

  return (
    <>
    <Header bhakt={name} bhakt2={groom2}/>
    <Header bhakt={groom} bhakt2={bride}/>

    <div className="Main">
      <div className="nav">
        <h1 className="">RAM RAM</h1>
        <p>{groom} weds {bride}</p>
        <p>vicky weds {bride}</p>
        <h1>This is Home Page</h1>
    
        <Link href="/About">About</Link>
        <Link href="/Product">Product</Link>
        <Link href="/Courses">Courses</Link>
        <Link></Link>
      </div>
    </div>
    </>
  )
}

// const page = () =>{
//   return (<h1>I am Ram Bhakt</h1>)
// }

export default App
// export default page
//RAFCE

//component ek function hai jo ki jsx ko return kare