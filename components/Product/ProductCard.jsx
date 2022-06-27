import Link from "next/link"

const ProductCard = (props) => {
    return(
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3">
            <div className="p-6 border rounded-xl">
                <div className="relative h-52 mb-6">
                    
                    <span className="absolute top-0 right-0 mt-4 mr-4 text-xs text-white px-2 py-1 font-semibold bg-gray-600 bg-opacity-50 rounded-md uppercase">
                        {props.category}
                    </span>
                    
                    <img
                    className="w-full h-full object-cover rounded-lg"
                    src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/281736314_103646749028066_8874301070538351434_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FGwgDV4PoKwAX_W76hT&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8MSpv11wwOd_ZeVjc8BDAcZu9aJH9hczxYLK5QhxaTog&oe=62BC6A17"
                    alt="" 
                    />
                </div>
                <span className="inline-block mb-4 text-xl">
                    ${props.price}
                </span>
                <Link href={'/product/' + props.id} key={props.id}>
                    <h2 className="text-green-600 mb-4 text-2xl font-semibold font-heading cursor-pointer">
                    {props.title}
                    </h2>
                </Link>
                <p className="mb-4 leading-relaxed"> {props.description} </p>
            </div>
        </div>
    )
}

export default ProductCard