import Introduction from "../components/Homepage/Introduction"
import Pros from "../components/Homepage/Pros"
import Categories from "../components/Homepage/Categories/Categories"
import Navbar from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"
import Partners from "../components/Homepage/Partners"
import Testimonial from "../components/Homepage/Testimonial"

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="max-w-screen-2xl mx-auto">  
        <Introduction/>
        <Pros/>
        <Categories/>
        <Testimonial/>
        <Partners/>        
        <Footer/>
      </div>
    </>
  )
}
