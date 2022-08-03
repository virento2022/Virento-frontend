import CategoryCard from "./CategoryCard";
import Image from "next/image";
import clothes from "../../../public/assets/clothes-01.png"
import tech from "../../../public/assets/tech-01.png"
import travel from "../../../public/assets/travel-01.png"
import moto from "../../../public/assets/moto-01.png"

const Categories = () => {

    let defaultTransform = 0;
    function goNext() {
        defaultTransform = defaultTransform - 398;
        var slider = document.getElementById("slider");
        if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
        slider.style.transform = "translateX(" + defaultTransform + "px)";
    }
    function goPrev() {
        var slider = document.getElementById("slider");
        if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
        else defaultTransform = defaultTransform + 398;
        slider.style.transform = "translateX(" + defaultTransform + "px)";
    }

    return(
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-green-600">Renting Categories</h1>
                <p className="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">Find out all the categories that you want to rent here!</p>
            </div>
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                <div className="w-full relative flex items-center justify-center">
                    <button onClick={goPrev} className="absolute z-30 left-0 ml-10 cursor-pointer">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                            <div className="flex flex-shrink-0 relative sm:w-auto">
                                <Image src={clothes} height={493} width={300} />
                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog</h2>
                                    <div className="flex h-full items-end pb-6">
                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Thời trang</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-shrink-0 relative sm:w-auto">
                                <Image src={tech} height={493} width={300} />
                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog</h2>
                                    <div className="flex h-full items-end pb-6">
                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Công nghệ</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-shrink-0 relative sm:w-auto">
                                <Image src={travel} height={493} width={300} />
                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog</h2>
                                    <div className="flex h-full items-end pb-6">
                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Du lịch</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-shrink-0 relative sm:w-auto">
                                <Image src={moto} height={493} width={300} />
                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog</h2>
                                    <div className="flex h-full items-end pb-6">
                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Phương tiện</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-shrink-0 relative sm:w-auto">
                                <Image src={clothes} height={493} width={300} />
                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog</h2>
                                    <div className="flex h-full items-end pb-6">
                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Thời trang</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-shrink-0 relative sm:w-auto">
                                <Image src={tech} height={493} width={300} />
                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog</h2>
                                    <div className="flex h-full items-end pb-6">
                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Công nghệ</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-shrink-0 relative sm:w-auto">
                                <Image src={travel} height={493} width={300} />
                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog</h2>
                                    <div className="flex h-full items-end pb-6">
                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Du lịch</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-shrink-0 relative sm:w-auto">
                                <Image src={moto} height={493} width={300} />
                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog</h2>
                                    <div className="flex h-full items-end pb-6">
                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Phương tiện</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={goNext} className="absolute z-30 right-0 mr-10 focus:outline-none">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Categories