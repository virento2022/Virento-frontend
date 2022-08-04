import ProductCard from "../components/Product/ProductCard";
import baseUrl from "../utils/baseUrl"
import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PostProduct from "../components/Product/PostProduct";

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
                            Virento
                        </span>
                    
                    <h2 className="text-blueGray-400 mt-8 mb-10 text-4xl font-semibold font-heading">
                    Giảm thiểu tác hại của chủ nghĩa tiêu dùng (consumerism) tới xã hội và môi trường cùng với VIRENTO - nền tảng thuê đồ online dành cho người Việt. Hãy để chúng tôi đồng hành cùng bạn trên con đường hướng tới tương lai xanh, bạn nhé!
                    </h2>
                    <p className="text-xl text-blueGray-400">
                    Chỉ với vài bước đăng kí, bạn đã có thể thuê đồ tại VIRENTO. Còn nếu như bạn có (hơi) nhiều đồ vật ở nhà không dùng đến, trở thành chủ tiệm cho thuê tại VIRENTO sẽ là một sự lựa chọn hoàn hảo. Chần chừ gì nữa, hãy gia nhập cộng đồng của chúng tôi ngay hôm nay!
                    </p>
                    </div>
                    <div className="flex flex-wrap -m-3 mb-16">
                        {products.map((product) => (
                            <ProductCard
                                id = {product.id}
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
                        Xem thêm
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
