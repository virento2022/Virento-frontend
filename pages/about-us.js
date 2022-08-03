import Image from "next/image";

import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import Virento from "../public/assets/logo.svg";
import SDG8 from "../public/assets/SDG-8.svg"
import SDG11 from "../public/assets/SDG-11.svg"
import SDG12 from "../public/assets/SDG-12.svg"
import SDG13 from "../public/assets/SDG-13.svg"
import hand from "../public/assets/hand.svg"

import LP from "../public/assets/LP.png"
import DQV from "../public/assets/DQV.png"
import PMH from "../public/assets/PMH.png"
import NNA from "../public/assets/NNA.png"
import HA from "../public/assets/NHA.png"
import NDD from "../public/assets/NDD.png"

import AD1 from "../public/assets/Mrs_ThuHang.png"
import AD2 from "../public/assets/Mr_SonCong.png"
import AD3 from "../public/assets/Mrs_Quynh.png"
import AD4 from "../public/assets/Mr_DinhDat.png"
import AD5 from "../public/assets/Mrs_LinhChi.png"
import AD6 from "../public/assets/Mr_TatThang.png"

import DKS from "../public/assets/DKS_logo.jpg"
import ECO from "../public/assets/ECO_logo.png"

export default function About() {
    return(
        <>
            <Navbar/>
            <div className="max-w-screen-xl mx-auto">
                <section className="py-12 md:py-20">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-5xl mx-auto mb-12">
                            <span className="inline-block py-1 px-3 text-xl font-semibold bg-green-100 text-green-600 rounded-xl">
                                About us
                            </span>
                            <h1 className="text-4xl md:text-6xl mt-4 mb-6 font-heading">
                                OUR STORY
                            </h1>
                            <div className="columns-2">
                                <div>
                                    <p className="text-gray-400 leading-loose text-lg">
                                    Ngày nay, với công nghệ phát triển cùng sự đầy đủ về mặt vật chất, phần lớn trong chúng ta đều có xu hướng lãng phí tiền bạc, tài nguyên cho những vật dụng, đồ đạc chỉ dùng một lần và bỏ đi chỉ vì "lạc hậu". Nhưng nếu bạn không cần, điều này không đồng nghĩa với việc người khác không cần.
                                    <br/>
                                    <br/>
                                    Với sứ mệnh giải quyết vấn đề về sự lãng phí trong tiêu dùng và ảnh hưởng tiêu cực tới môi trường, <span className="font-bold text-green-600">VIRENTO</span> đã được thành lập bởi một nhóm bạn trẻ khát khao đóng góp cho xã hội. Đây là một nền tảng thuê và cho thuê trực tuyến tại Việt Nam.
                                    </p>
                                </div>
                                <div className="ml-16">
                                    <Image width={375} height={375} src={Virento}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container px-8 mx-auto mt-48">
                        <div className="max-w-5xl mx-auto mb-12 text-left">
                            <h1 className="text-4xl md:text-6xl mt-4 mb-6 font-heading">
                                OUR MISSIONS
                            </h1>
                            <p className="text-gray-400 leading-loose text-xl w-5/6">
                                <span className="font-bold text-green-600">VIRENTO</span> cung cấp giải pháp đi thuê và cho thuê dễ dàng, tiện ích dựa trên 03 trên 17 mục tiêu phát triển bền vững (<span className="text-gray-500 font-bold">SDGs</span>) của <span className="text-gray-500 font-bold">Liên Hợp Quốc</span>.
                            </p>
                        </div>
                        <div className="md:columns-2 lg:columns-4 gap-2 mt-12 ml-24">
                            <div className="mb-4">
                                <Image className="m-12 p-12" width={175} height={175} src={SDG8} />
                                <h2 className="font-bold text-xl text-gray-500">SDG 8</h2>
                                <h3 className="text-gray-400 w-3/4 text-lg">Công việc tốt và tăng trưởng kinh tế</h3>
                            </div>
                            <div className="mb-4">
                                <Image className="m-12 p-12" width={175} height={175} src={SDG11} />
                                <h2 className="font-bold text-xl text-gray-500">SDG 11</h2>
                                <h3 className="text-gray-400 w-3/4 text-lg">Xây dựng đô thị và cộng đồng bền vững</h3>
                            </div>
                            <div className="mb-4">
                                <Image className="m-12 p-12" width={175} height={175} src={SDG12} />
                                <h2 className="font-bold text-xl text-gray-500">SDG 12</h2>
                                <h3 className="text-gray-400 w-3/4 text-lg">Thúc đẩy tiêu dùng và sản xuất có trách nhiệm</h3>
                            </div>
                            <div className="mb-4">
                                <Image className="m-12 p-12" width={175} height={175} src={SDG13} />
                                <h2 className="font-bold text-xl text-gray-500">SDG 13</h2>
                                <h3 className="text-gray-400 w-3/4 text-lg">Hành động ứng phó với biến đổi khí hậu</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="mx-auto bg-[#E4F2E7]">
                <section className="px-12 md:px-20 py-16 leading-loose">
                    <div className="container px-8 mx-auto">
                        <div className="">
                            <h1 className="font-bold text-2xl md:text-4xl text-gray-800">Đến với VIRENTO,</h1>
                            <p className="text-lg">
                                <span className="font-bold text-xl text-gray-800">Người cho thuê</span> có thể kiếm thêm thu nhập từ việc gia tăng <br/> lợi ích của những đồ vật ít dùng và gia tăng không gian sống.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="bg-[#1aa939]">
                <section className="text-center">
                    <div className="container mx-auto w-full">
                        <Image src={hand} height={400} />
                    </div>
                </section>
            </div>
            <div className="mx-auto bg-[#E4F2E7]">
                <section className="px-12 md:px-20 py-16 text-right leading-loose">
                    <div className="container px-8 mx-auto">
                        <div className="">
                            <h1 className="font-bold text-2xl md:text-4xl text-gray-800">Đồng thời</h1>
                            <p className="text-lg">
                                <span className="font-bold text-xl text-gray-800">Người đi thuê</span> sẽ tiết kiệm được tiền bạc, thời gian và <br /> gia tăng sự đa dạng trong vật phẩm sử dụng.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <section className="py-12 md:py-20">
                    <div className="container px-8 mx-auto mt-48">
                        <div>
                            <h1 className="text-4xl md:text-6xl mt-4 font-heading mx-auto text-center">OUR CORE VALUES</h1>
                            <h1 className="text-4xl md:text-6xl mb-16 font-heading mx-auto text-center">____________________</h1>
                        </div>
                        <div className="lg:columns-3 text-center ">
                            <div className="mx-12">
                                <h3 className="font-bold heading text-2xl md:text-3xl mb-2 w-full">Hiệu quả</h3>
                                <p className="text-gray-400 mb-6 w-full">
                                    Luôn chủ động áp dụng tiến bộ công nghệ thông tin vào sản phẩm, sẵn sàng cung cấp các gói dịch vụ đáp ứng đầy đủ nhu cầu về chất lượng và sự nhanh chóng của người dùng. 
                                </p>
                            </div>
                            <div className="mx-12">
                                <h3 className="font-bold heading text-2xl md:text-3xl mb-2 w-full">Trách nhiệm</h3>
                                <p className="text-gray-400 mb-6 w-full">
                                    Cam kết tích cực đồng hành cùng người dùng trong các hoạt động kết nối, giao dịch, vân chuyển nhằm tăng tính hiệu quả, giảm thiểu tối đa sai sót hay nhanh chóng khắc phục thiệt hại nếu có để luôn đảm bảo chất lượng dịch vụ và trải nghiệm của người dùng.
                                </p>
                            </div>
                            <div className="mx-12">
                                <h3 className="font-bold heading text-2xl md:text-3xl mb-2 w-full">Vì cộng đồng</h3>
                                <p className="text-gray-400 mb-6 w-full">
                                    Luôn tin tưởng và hành động vì cộng đồng và những giá trị bền vững thông qua sáng tạo các giải pháp tiêu dùng xanh, hướng tới các mục tiêu phát triển bền vững (SDGs) của Liên Hợp Quốc.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container px-8 mx-auto mt-48">
                        <h1 className="text-4xl md:text-6xl mt-4 font-heading mx-auto text-center">OUR TEAM</h1>
                        <div className="text-center text-lg mt-12">
                            <Image src={LP} height={200} width={200}/>
                            <h3>Phan Thanh Diệu Linh</h3>
                            <h4 className="text-green-600 font-bold">Founder</h4>
                            <h4 className="text-green-600 font-bold">Leader of Business and Human Resources</h4>
                        </div>
                        <div className="lg:columns-5 text-lg mt-16 text-center">
                            <Image src={DQV} height={150} width={150}/>
                            <h3>Đặng Quang Vinh</h3>
                            <h4 className="text-green-600 font-bold">Leader of Technology</h4>
                            <Image src={NNA} height={150} width={150}/>
                            <h3>Nguyễn Nhật Anh</h3>
                            <h4 className="text-green-600 font-bold">Leader of Marketing</h4>
                            <Image src={HA} height={150} width={150}/>
                            <h3>Nguyễn Hà An</h3>
                            <h4 className="text-green-600 font-bold">Leader of Finance</h4>
                            <Image src={PMH} height={150} width={150}/>
                            <h3>Phạm Minh Hà</h3>
                            <h4 className="text-green-600 font-bold">Leader of Public Relations and Advertising</h4>
                            <Image src={NDD} height={150} width={150}/>
                            <h3>Nguyễn Đức Dũng</h3>
                            <h4 className="text-green-600 font-bold">Leader of Laws</h4>
                        </div>
                    </div>
                    <div className="container px-8 mx-auto mt-48">
                        <h1 className="text-4xl md:text-6xl mt-4 font-heading mx-auto text-center">OUR ADVISORS</h1>
                        <div className="lg:columns-3 text-lg mt-16 text-center">
                            <Image src={AD1} height={150} width={150}/>
                            <h3>Mrs. Nguyễn Thu Hằng</h3>
                            <h4 className="text-green-600 font-bold mb-6">Description</h4>
                            <Image src={AD2} height={150} width={150}/>
                            <h3>Mr. Hoàng Sơn Công</h3>
                            <h4 className="text-green-600 font-bold mb-6">Description</h4>
                            <Image src={AD3} height={150} width={150}/>
                            <h3>Mrs. Nguyễn Thị Quỳnh</h3>
                            <h4 className="text-green-600 font-bold mb-6">Description</h4>
                            <Image src={AD4} height={150} width={150}/>
                            <h3>Mr. Nguyễn Đình Đạt</h3>
                            <h4 className="text-green-600 font-bold mb-6">Description</h4>
                            <Image src={AD5} height={150} width={150}/>
                            <h3>Mrs. Lương Thị Linh Chi</h3>
                            <h4 className="text-green-600 font-bold mb-6">Description</h4>
                            <Image src={AD6} height={150} width={150}/>
                            <h3>Mr. Nguyễn Tất Thắng</h3>
                            <h4 className="text-green-600 font-bold mb-6">Description</h4>
                        </div>
                    </div>
                    <div className="container px-8 mx-auto mt-48">
                        <h1 className="text-4xl md:text-6xl mt-4 mb-16 font-heading mx-auto text-center">OUR KEY PARTNERS</h1>
                        <div className="columns-2">
                            <div className="w-1/2 mx-auto">
                                <Image src={ECO} height={150} width={215} />
                            </div>
                            <div className="w-1/2 mx-auto">
                                <Image src={DKS} height={150} width={324}/>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    )
}