import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar'
import Service from './components/Service/Service'
import Projects from './components/PastProjects/Projects'
import Testimonial from './components/Testimonials/Testimonial'
import Test from './components/Testimonials/Test'
import Features from './components/Features/Features'
import Team from './components/Team/Team'
import OfferStrip from './components/OfferStrip'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Service/>
  <Testimonial/>
  <Features/>
  <Footer/>

    </>
  )
}
