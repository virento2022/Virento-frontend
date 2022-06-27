import { Footer } from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import SingleProductPage from "../../components/Product/SingleProductPage"
import baseUrl from "../../utils/baseUrl"

export const getStaticPaths = async () => {
    const res = await fetch(`${baseUrl}/items`)
    const data = await res.json()
  
    const paths = data.map(product => {
        return {
            params: { id: product.id.toString() } 
        }
    })

    return {
        paths,
        fallback: false
    }
  }
  
export const getStaticProps = async ({params}) => {
    const res = await fetch(`${baseUrl}/items/${params.id}`)
    const data = await res.json()
  
    return { 
        props: { product: data } 
    }
}

const ProductDetail = ( {product} ) => {
    return(
        <>
            <Navbar />
            <div className="max-w-screen-xl mx-auto">
                <SingleProductPage
                    key={product.id}
                    title={product.title}
                    category={product.category}
                    description={product.description}
                    price={product.price}
                />
                <Footer/>
            </div>  
        </>

    )
}

export default ProductDetail