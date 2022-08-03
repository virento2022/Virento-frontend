import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import FacebookLogo from "../public/assets/icons/facebook-green.svg";
import Image from "next/image";

export default function About() {
    return(
        <>
            <Navbar />
            <section>
                <div className="mt-24 mb-12 text-center">
                    <h2 className="text-4xl font-bold font-heading">Thông tin liên hệ</h2>
                </div>
                <div className="flex flex-wrap text-center">
                    <div className="w-full mb-12">
                        <Image src={FacebookLogo} height={40} width={40} alt="" />
                        <p className="text-sm md:text-md text-gray-400">Facebook</p>
                        <p><a href="https://www.facebook.com/virento.space" target="_blank" className="hover:underline underline-offset-2">Fanpage </a> 
                        / <a href="https://www.facebook.com/groups/595053052004065" target="_blank" className="hover:underline underline-offset-2"> Group</a></p>
                    </div>
                </div>
                <div className="flex flex-wrap text-center">
                    <div className="w-1/2 lg:w-1/3 mb-12">
                        <svg class="mb-6 h-10 w-10 mx-auto text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        <p className="text-sm md:text-md text-gray-400">Điện thoại</p>
                        <p>+84 835-685-658</p>
                        <p>+84 855-635-155</p>
                    </div>
                    <div className="w-1/2 lg:w-1/3 mb-12">
                        <svg class="mb-6 h-10 w-10 mx-auto text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        <p className="text-sm md:text-md text-gray-400">Email</p>
                        <p>Virento.vietnam@gmail.com</p>
                        <p>Info@virento.space</p>
                    </div>
                    <div className="w-full lg:w-1/3 mb-12">
                        <svg class="mb-6 h-8 w-8 mx-auto text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <p className="text-sm md:text-md text-gray-400">Địa chỉ</p>
                        <p>Văn phòng tầng 1, số 19 đường Nguyễn Trãi, <br/> Đống Đa, Hà Nội</p>
                    </div>
                    <iframe className="flex flex-center mx-auto" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3724.760639261716!2d105.81792445083296!3d21.002229885944068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3135ac84f85cdc39%3A0xf17f2793548203f!2zMTkgxJAuIE5ndXnhu4VuIFRyw6NpLCBOZ8OjIFTGsCBT4bufLCBIw6AgTuG7mWksIFZpZXRuYW0!3m2!1d21.0022299!2d105.82011849999999!5e0!3m2!1sen!2s!4v1659521024766!5m2!1sen!2s" width="750" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <Footer />
        </>
    )
}