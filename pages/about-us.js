import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function About() {
    return(
        <>
            <Navbar/>
            <div className="max-w-screen-xl mx-auto">  
                <section className="py-12 md:py-20">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-5xl mx-auto mb-12 text-center">
                            <span className="inline-block py-1 px-3 text-xl font-semibold bg-green-100 text-green-600 rounded-xl">
                                Virento
                            </span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
                                Nền tảng cho thuê trực tuyến tại Việt Nam
                            </h2>
                            <p className="text-gray-400 leading-loose">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="flex flex-wrap lg:flex-nowrap lg:items-center max-w-lg lg:max-w-full mx-auto">
                        
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    )
}