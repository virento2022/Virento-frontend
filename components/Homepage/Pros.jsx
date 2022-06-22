import Image from "next/image"

import TimeSlot from '../../public/assets/TimeSlot.png'
import Coin from '../../public/assets/Coin.png'
import Heart from '../../public/assets/Heart.png'

const Pros = () => {
    return(
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-3 -mb-6 text-center text-green-600">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                        <div className="py-4 bg-white shadow rounded">
                            <div className="h-20 mx-auto ">
                                <Image src={TimeSlot} alt="" />
                            </div>
                            <h3 className="mb-2 font-bold">Tiết kiệm thời gian</h3>
                            <p className="text-sm leading-relaxed">Lướt. Chọn.</p>
                            <p className="text-sm leading-relaxed">Mọi thứ tại mọi nơi.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                        <div className="py-4 bg-white shadow rounded">
                            <div className="h-20 mx-auto ">
                                <Image src={Coin} alt="" />
                            </div>
                            <h3 className="mb-2 font-bold">Tiết kiệm tiền bạc</h3>
                            <p className="text-sm leading-relaxed">Mua ít hơn.</p>
                            <p className="text-sm leading-relaxed">Tiết kiệm nhiều hơn.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-3 mb-6">
                        <div className="py-4 bg-white shadow rounded">
                            <div className="h-20 mx-auto ">
                                <Image src={Heart} alt="" />
                            </div>

                            <h3 className="mb-2 font-bold">Thân thiện môi trường</h3>
                            <p className="text-sm leading-relaxed">Tái chế. Từ chối.</p>
                            <p className="text-sm leading-relaxed">Sống tối giản. Giảm thiểu rác.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pros