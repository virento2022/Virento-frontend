import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";
import React from "react";
import baseUrl from "../../utils/baseUrl";
import Router from "next/router";

const SingleProductPage = (props) => {
    const { user } = useUser();
    const [defaultValue, setdefaultValue] = React.useState(0);
    const [stop, setStop] = React.useState(true);
    const [request, setRequest] = React.useState({
      productID: props.id,
      productTitle: props.title,
      userFrom: "",
      userTo: props.ownerid,
    });
    if (user && stop) {
        setRequest({ ...request, userFrom: user.email });
        setStop(false);
    }
    
    async function confirmSubmit() {
        
        await axios
            .post(`${baseUrl}/request`, request)
            .then(({ data }) => {
            const { redirect } = data;
            // Redirect used for reCAPTCHA and/or thank you page
            // window.location.href = redirect;
            // console.log(redirect);
            Router.push("/product");
        })
    }

    function plus() {
        setdefaultValue(defaultValue + 1)
    }
    
    function minus() {
        setdefaultValue(defaultValue - 1)
    }
    
    return (
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
            <div className="w-full lg:w-8/12 bg-white flex justify-center items-center">
              <img src={props.images[0]} alt="Wooden Chair Previw" />
            </div>
            <div className="w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
              <div className="bg-white flex justify-center items-center py-4">
                <img src={props.images[0]} alt="Wooden chair - preview 1" />
              </div>
              <div className="bg-white flex justify-center items-center py-4">
                <img src={props.images[0]} alt="Wooden chair - preview 2" />
              </div>
              <div className="bg-white flex justify-center items-center py-4">
                <img src={props.images[0]} alt="Wooden chair- preview 3" />
              </div>
            </div>
          </div>

          <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <p className="font-normal text-base leading-4 text-gray-600">
              {props.category}
            </p>
            <h2 className="font-semibold text-green-600 lg:text-4xl text-3xl lg:leading-9 leading-7np mt-4">
              {props.title}
            </h2>

            <div className="flex flex-row justify-between mt-5">
              <img
                className="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1.svg"
                alt="stars"
              ></img>
            </div>

            <p className="font-normal text-base leading-6 text-gray-600  mt-7">
              {props.description}.
            </p>
            <p className="font-semibold lg:text-2xl text-green-500 text-xl lg:leading-6 leading-5 mt-6  hover:text-green-600">
              $ {props.price}
            </p>

            <div className="lg:mt-11 mt-10">
              <div className="flex flex-row justify-between">
                <p className="font-medium leading-4 text-gray-600 ">
                  Chọn số lượng
                </p>
                <div className="flex">
                  <button
                    onClick={minus}
                    className="cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                  >
                    -
                  </button>
                  <input
                    id="counter"
                    aria-label="input"
                    className="border border-gray-300 h-full text-center w-14 pb-1"
                    type="text"
                    value={defaultValue}
                  />
                  <button
                    onClick={plus}
                    className="cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1"
                  >
                    +
                  </button>
                </div>
              </div>
              <hr className="bg-gray-200 w-full my-2" />
            </div>

            {user ? (
              <>
                <button
                  onClick={async () => {
                    confirmSubmit();
                  }}
                  className="hover:bg-green-600 font-medium text-base leading-4 text-white bg-green-500 w-full rounded-3xl py-5 lg:mt-12 mt-6 "
                >
                  Thuê
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    );
}

export default SingleProductPage