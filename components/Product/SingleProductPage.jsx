import React from "react";

const SingleProductPage = (props) => {
    const [defaultValue, setdefaultValue] = React.useState(0);
    function plus() {
        setdefaultValue(defaultValue + 1)
    }
    
    function minus() {
        setdefaultValue(defaultValue - 1)
    }
    
    return (
        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex justify-center items-center lg:flex-row flex-col gap-8">
                <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div class="w-full lg:w-8/12 bg-white flex justify-center items-center">
                        <img src={props.images[0]} alt="Wooden Chair Previw" />
                    </div>
                    <div class="w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                        <div class="bg-white flex justify-center items-center py-4">
                            <img
                                src={props.images[0]}
                                alt="Wooden chair - preview 1"
                            />
                        </div>
                        <div class="bg-white flex justify-center items-center py-4">
                            <img
                                src={props.images[0]}
                                alt="Wooden chair - preview 2"
                            />
                        </div>
                        <div class="bg-white flex justify-center items-center py-4">
                            <img
                                src={props.images[0]}
                                alt="Wooden chair- preview 3"
                            />
                        </div>
                    </div>
                </div>

                <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <p class="font-normal text-base leading-4 text-gray-600">
                        {props.category}
                    </p>
                    <h2 class="font-semibold text-green-600 lg:text-4xl text-3xl lg:leading-9 leading-7np mt-4">
                        {props.title}
                    </h2>

                    <div class="flex flex-row justify-between mt-5">
                        <img
                            class="dark:hidden"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1.svg"
                            alt="stars"
                        ></img>
                        <p class="font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">
                            22 reviews
                        </p>
                    </div>

                    <p class="font-normal text-base leading-6 text-gray-600  mt-7">
                        {props.description}.
                    </p>
                    <p class="font-semibold lg:text-2xl text-green-500 text-xl lg:leading-6 leading-5 mt-6  hover:text-green-600">
                        $ {props.price}
                    </p>

                    <div class="lg:mt-11 mt-10">
                        <div class="flex flex-row justify-between">
                            <p class="font-medium leading-4 text-gray-600 ">
                                Ch???n s??? l?????ng
                            </p>
                            <div class="flex">
                                <button
                                    onClick={minus}
                                    class="cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                                >
                                    -
                                </button>
                                <input
                                    id="counter"
                                    aria-label="input"
                                    class="border border-gray-300 h-full text-center w-14 pb-1"
                                    type="text"
                                    value={defaultValue}
                                />
                                <button
                                    onClick={plus}
                                    class="cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <hr class="bg-gray-200 w-full my-2" />
                    </div>

                    <button class="hover:bg-green-600 font-medium text-base leading-4 text-white bg-green-500 w-full rounded-3xl py-5 lg:mt-12 mt-6 ">
                        Thu??
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleProductPage