import Image from "next/image"
import ECO from "../../public/assets/ECO_logo.png"
import DKS from "../../public/assets/DKS_logo.png"

const Partners = () => {
    return(
        <div className="md:py-12 py-8 px-4 mb-12"> 
            <div className="flex flex-col items-center justify-center">
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-green-600">Đối tác tin cậy</h1>
                <p className="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12"></p>
            </div>
            <div className="container px-8 mx-auto mt-8">
                <div className="md:columns-2">
                    <div className="w-1/2 mx-auto">
                        <a href="https://eco.com.vn" target="_blank" rel="noreferrer">
                            <Image src={ECO} height={400} width={580} />
                        </a>
                    </div>
                    <div className="w-1/2 mx-auto">
                        <a href="https://dks-didactic.com" target="_blank" rel="noreferrer">
                            <Image src={DKS} height={400} width={864} />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Partners