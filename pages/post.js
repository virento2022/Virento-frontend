import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PostProduct from "../components/Product/PostProduct";
import baseUrl from "../utils/baseUrl";
import axios from "axios";



export default function Post() {

    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data)
        });

        const json = await response.json();
        return json;
    }

    async function getresponse(data) {
        postData(`${baseUrl}/items`, data).then(
            res => {
                alert(res.body)
            })
    }


    return (
        <>
            <Navbar />
            <PostProduct />
            <Footer />
        </>
    )
}