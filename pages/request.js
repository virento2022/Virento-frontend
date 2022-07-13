import Navbar from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import baseUrl from "../utils/baseUrl";
import RequestCard from "../components/Request/RequestCard";

export const getStaticProps = async () => {
    const res = await fetch(`${baseUrl}/request`)
    const requests = await res.json();
    return {
        props: {requests}
    }
}

export default function Request(    {requests}  ) {
    return (
        <>
            <Navbar />
            <div className="max-w-screen-xl mx-auto">
                <section className="relative py-20 bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-3xl mb-20 mx-auto text-center">
                            <span className="text-xl text-green-600 font-semibold">
                                Request Notification
                            </span>

                        </div>
                        <div className="flex flex-wrap -m-3 mb-16">
                            {requests.map((request) => (
                                <RequestCard
                                    key={request.id}
                                    userFrom={request.userfrom}
                                    userTo={request.userto}
                                    productId={request.productid}
                                />
                            ))}
                        </div>
                        <div className="text-center">
                            <button className="px-6 py-4 text-white text-sm font-semibold bg-green-600 hover:bg-green-700 rounded transition duration-200">
                                View More Request
                            </button>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}
