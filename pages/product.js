import ProductCard from "../components/Product/ProductCard";
import baseUrl from "../utils/baseUrl"
import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const getStaticProps = async () => {
    const res = await fetch(`${baseUrl}/items`)
    const products = await res.json()
    return {
        props: {products}
    }
}

const Product = ( {products} ) => {
    return(
        <>
        <Navbar/>
        <div className="max-w-screen-xl mx-auto">  
            
            <section className="relative py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mb-20 mx-auto text-center">
                        <span className="text-xl text-green-600 font-semibold">
                            Virento Shopping Center
                        </span>
                    
                    <h2 className="text-blueGray-400 mt-8 mb-10 text-4xl font-semibold font-heading">
                        Lorem ipsum dolor sit amet consectutar domor at elis
                    </h2>
                    <p className="text-xl text-blueGray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                        aliquet orci.
                    </p>
                    </div>
                    <div className="flex flex-wrap -m-3 mb-16">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                category={product.category}
                                description={product.description}
                                price={product.price}
                                images={product.images}
                                keyword={products.keyword}
                            />
                        ))}
                    </div>
                    <div className="text-center">
                    <button
                        className="px-6 py-4 text-white text-sm font-semibold bg-green-600 hover:bg-green-700 rounded transition duration-200"
                        
                    >
                        View More Products
                    </button>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        </>
    )
}

export default Product