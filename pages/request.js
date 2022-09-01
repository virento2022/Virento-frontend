import Navbar from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import baseUrl from "../utils/baseUrl";
import RequestCard from "../components/Request/RequestCard";
import SingleRequestCard from "../components/Request/SingleRequestCard";
import { useUser } from "@auth0/nextjs-auth0";
import React from "react";
import { useRouter } from "next/router";
import { data } from "autoprefixer";
import {useEffect} from "react"
import Head from 'next/head'

// export const getStaticProps = async () => {
//   // const { user } = useUser();
//   // console.log(user);
//     const res = await fetch(`${baseUrl}/request`);
//     const requests = await res.json();

//     return {
//       props: { requests },
//     }

// };

// const getRequest = async ({userRequest}) => {
//   const requests = await fetch(`${baseUrl}/request/${userRequest}`).then((res) =>
//     res.json()
//   );
//   // const requests = await res.json();

//   // console.log(requests)
//   return requests;
// };

function Request() {
  // const { user } = useUser();
  // if (user) {
  //   const request = getRequest(user.email);
  //   // console.log(requests);

  //   const requests = request.then((res) => res.json());

  //   console.log(requests);

  const { user } = useUser();
  const [requests, setRequests] = React.useState([]);

  useEffect(() => {
    async function loadData() {
      if (user) {
        const response = await fetch(`${baseUrl}/request/${user.email}`);
        const requestList = await response.json();
        setRequests(requestList);
      }
    }

    loadData();
  }, [user, requests]);

  return (
      <>
          <Head>
              <title>Đơn hàng</title>
              <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
              />
          </Head>

          <Navbar />
          <div className="max-w-screen-xl mx-auto">
              <section className="relative py-20 bg-white">
                  <div className="container px-4 mx-auto">
                      <div className="max-w-3xl mb-20 mx-auto text-center">
                          <span className="text-xl text-green-600 font-semibold">
                              Đơn hàng của tôi
                          </span>
                      </div>
                      <div className="flex flex-wrap -m-3 mb-16">
                          {requests.length !== 0 ? (
                              requests.map((request) => (
                                  <>
                                      <RequestCard
                                          key={request.id}
                                          productID={request.productid}
                                          productTitle={request.producttitle}
                                          userFrom={request.userfrom}
                                          userTo={request.userto}
                                          id={request.id}
                                      />
                                      <div className="text-center">
                                          <button className="px-6 py-4 text-white text-sm font-semibold bg-green-600 hover:bg-green-700 rounded transition duration-200">
                                              Xem thêm đơn hàng
                                          </button>
                                      </div>
                                  </>
                              ))
                          ) : (
                              <div className="text-center">
                                  Bạn hiện tại không có yêu cầu cho thuê
                              </div>
                          )}
                      </div>
                  </div>
              </section>
              <Footer />
          </div>
      </>
  );
}

export default Request