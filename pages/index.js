import Introduction from "../components/Homepage/Introduction"
import Pros from "../components/Homepage/Pros"
import Categories from "../components/Homepage/Categories/Categories"
import Navbar from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"
import Partners from "../components/Homepage/Partners"

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="max-w-screen-2xl mx-auto">  
        <Introduction/>
        <Pros/>
        <Categories/>
        <Partners/>        
        <Footer/>
      </div>
    </>
  )
}
