import Introduction from "../components/Homepage/Introduction"
import Pros from "../components/Homepage/Pros"
import Categories from "../components/Homepage/Categories"
import Navbar from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="max-w-screen-xl mx-auto">  
        <Introduction/>
        <Pros/>
        <Categories/>
        <Footer/>
      </div>
    </>
  )
}
