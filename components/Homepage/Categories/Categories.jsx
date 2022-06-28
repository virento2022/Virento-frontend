import CategoryCard from "./CategoryCard";

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
        <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
            <div className="w-full relative flex items-center justify-center">
                <button onClick={goPrev} className="absolute z-30 left-0 ml-10 cursor-pointer">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                        <CategoryCard/>
                        <CategoryCard/>
                        <CategoryCard/>
                        <CategoryCard/>
                        <CategoryCard/>
                        <CategoryCard/>
                        <CategoryCard/>
                        <CategoryCard/>
                        <CategoryCard/>
                    </div>
                </div>
                <button onClick={goNext} className="absolute z-30 right-0 mr-10 focus:outline-none">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Categories