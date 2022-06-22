import Image from "next/image"

import Bicycle from '../../public/assets/Bicycle.png'
import Green from '../../public/assets/Green.png'

const Introduction = () => {
    return(
        <section className="py-10">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-3 -mb-6  text-green-600">
                    <div className="w-full md:w-1/2 px-3">
                        <div className="xl:py-20 bg-white">
                            <h3 className="text-center md:text-left lg:text-2xl sm:pb-2 mb-2 font-bold">VIRENTO (n.)</h3>
                            <p className="text-left lg:text-2xl sm:pb-2 leading-relaxed">Nền tảng cho thuê trực tuyến tại Việt Nam</p>
                            <p className="text-left lg:text-2xl sn:pb-2 leading-relaxed">Bạn cần gì, chúng tôi có đó.</p>
                            <button className="block my-4 w-full py-4 px-6 mb-2 md:w-auto text-xs text-white font-semibold leading-none bg-green-600 hover:bg-green-700 rounded">Trải nghiệm</button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <div className="bg-white ">
                            <div className="h-full mx-auto">
                                <Image src={Bicycle} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction