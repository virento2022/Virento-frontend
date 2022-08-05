import Navbar from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import baseUrl from "../utils/baseUrl";
import RequestCard from "../components/Request/RequestCard";
import SingleRequestCard from "../components/Request/SingleRequestCard";
import { useUser } from "@auth0/nextjs-auth0";
import React from "react";
import { useRouter } from "next/router";


export const getStaticProps = async () => {
  // const { user } = useUser;

  // console.log(user);

      const res = await fetch(`${baseUrl}/request`);
      const requests = await res.json();

      return {
        props: { requests },
      }

};

function Request({ requests }) {


    return (
      <>
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <section className="relative py-20 bg-white">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mb-20 mx-auto text-center">
                <span className="text-xl text-green-600 font-semibold">
                  Thông báo đơn hàng
                </span>
              </div>
              <div className="flex flex-wrap -m-3 mb-16">
                {requests.map((request) => (
                  <RequestCard
                    key={request.id}
                    userFrom={request.userfrom}
                    userTo={request.userto}
                  />
                ))}
              </div>
              <div className="text-center">
                <button className="px-6 py-4 text-white text-sm font-semibold bg-green-600 hover:bg-green-700 rounded transition duration-200">
                  Xem thêm đơn hàng
                </button>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </>
    );
}

export default Request