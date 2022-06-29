import Image from "next/image"
import Link from "next/link"

import Bicycle from '../../public/assets/Bicycle.png'

const Introduction = () => {
    return(
        <section>
            <div className="2xl:mx-auto 2xl:container px-5 md:py-12 py-9">
                <div className="relative rounded-md">
                    <img src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png" alt="city view" className="w-full h-full rounded-md  object-center object-fill absolute sm:block hidden" />
                    <img src="https://i.ibb.co/LQpxBsc/mobile.png" alt="city view" className="w-full h-full rounded-md absolute object-center object-fill sm:hidden" />
                    <div className="text-xl relative z-20 bg-gradient-to-r from-green-600 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
                        <div>
                            <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">Virento</h1>
                            <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">Nền tảng cho thuê trực tuyến tại Việt Nam</p>
                        </div>
                        <div className="md:mt-12 mt-20">
                            <button className="text-base font-medium leading-4 text-green-600 bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100">
                                <Link href="/product">
                                     Trải nghiệm
                                </Link>    
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    )
}

export default Introduction