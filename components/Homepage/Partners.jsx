const Partners = () => {
    return(
        <div className="md:py-12 py-8 px-4"> 
            <div className="flex flex-col items-center justify-center">
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-green-600">Our Trusted Partners</h1>
                <p className="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">We just got featured in the following magazines and it has been the most incredible journey. We work with the best fashion magazines across the world</p>
            </div>
            <div className="flex items-center justify-center mt-10">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full">
                    <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg1.svg" alt="google"></img>
                    </div>
                    <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg2.svg" alt="dribble"></img>
                    </div>
                    <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg3.svg" alt="amazon"></img>
                    </div>
                    <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg4.svg" alt="linkedIn"></img>                
                    </div>
                    <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg5.svg" alt="blackberry"></img>
                    </div>
                    <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg6.svg" alt="microsoft"></img>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Partners