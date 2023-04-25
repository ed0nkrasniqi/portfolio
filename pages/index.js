import Image from 'next/image'
import Head from 'next/head'
import Mainsection from '@/components/Mainsection'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import Footer from '@/components/Footer'
import MyIntro from '@/components/MyIntro'

import Aboutme from './aboutme'
import Description from '@/components/Description'
import Footer2 from '@/components/Footer2'
import Menu from '@/components/icons/Menu'
export default function Home({ data }) {
  
  return (
    <>

    
    <main >
     <Menu />

    <div className="navbar">
        <Navbar  />
        </div>
      <Mainsection />
    

<div className='container'>
      <div className='sm:flex mt-64 mb-20  justify-center mx-auto items-center'>
      <img className='hacker mr-10 rounded-xl' src={`${data.myImage.url}`}/>
      <MyIntro intro={data.myIntro}/>
     
    
    </div> 
    <Description desc={data.mydescription}/>
</div>
      
      <Footer2 />
    </main>
    </>
  )}


  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/about/64392b419fdb8eb62d4cd5e8`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }