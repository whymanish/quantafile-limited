import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar'
import Service from './components/Service/Service'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Service/>
    </>
  )
}
