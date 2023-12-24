import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar'
import Service from './components/Service/Service'
import Projects from './components/PastProjects/Projects'
import Testimonial from './components/Testimonials/Testimonial'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Service/>
  <Testimonial/>
    </>
  )
}
