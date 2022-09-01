import Introduction from "../components/Homepage/Introduction"
import Pros from "../components/Homepage/Pros"
import Categories from "../components/Homepage/Categories/Categories"
import Navbar from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"
import Partners from "../components/Homepage/Partners"

import Head from 'next/head'

export default function Home() {
  return (
      <>
          <Head>
              <title>Trang chủ</title>
              <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
              />
          </Head>

          <Navbar />
          <div className="max-w-screen-2xl mx-auto">
              <Introduction />
              <Pros />
              <Categories />
              <Partners />
              <Footer />
          </div>
      </>
  );
}
