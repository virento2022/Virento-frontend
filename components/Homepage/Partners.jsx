import Image from "next/image"
import ECO from "../../public/assets/ECO_logo.png"
import DKS from "../../public/assets/DKS_logo.jpg"

const Partners = () => {
    return(
        <div className="md:py-12 py-8 px-4"> 
            <div className="flex flex-col items-center justify-center">
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-green-600">Our Trusted Partners</h1>
                <p className="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">We just got featured in the following magazines and it has been the most incredible journey. We work with the best fashion magazines across the world</p>
            </div>
            <div className="container px-8 mx-auto mt-8">
                <div className="columns-2 px-20">
                    <div className="w-1/2 mx-auto pl-12">
                        <Image src={ECO} height={150} width={215} />
                    </div>
                    <div className="w-1/2 mx-auto">
                        <Image src={DKS} height={150} width={324} />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Partners