import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PostProduct from "../components/Product/PostProduct";
import Head from 'next/head'

export default function Post() {
    return (
        <>
            <Head>
                <title>Đăng sản phẩm</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <Navbar />
            <PostProduct />
            <Footer />
        </>
    );
}