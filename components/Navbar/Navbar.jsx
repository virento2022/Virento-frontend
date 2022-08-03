import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";

import Virento from "../../public/assets/logo.svg";

function Navbar() {
  const [navBar, setNavBar] = useState(false);
  const { user } = useUser();

  return (
    <section className="relative bg-white overflow-hidden">
      <nav className="relative flex px-16 justify-between bg-transparent border-b">
        <div className="pr-14 py-4 lg:border-r">
          <Link href="/">
            <a className="inline-block" href="#">
              <Image width={100} height={100} src={Virento} alt="" />
            </a>
          </Link>
        </div>
        <div className="hidden xl:flex items-center ml-10 xl:ml-0 py-4 xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2">
          <ul className="flex justify-center font-medium text-xl items-center">
            <li className="mr-12">
              <Link href="/product">
                <a className="text-black-600 hover:text-gray-400" href="#">
                  Sản phẩm
                </a>
              </Link>
            </li>
            <li className="mr-12">
              <Link href="/about-us">
                <a className="text-black-500 hover:text-gray-400" href="#">
                  Giới thiệu
                </a>
              </Link>
            </li>
            <li className="mr-12">
              <Link href="/contact">
                <a className="text-black-500 hover:text-gray-400" href="#">
                  Liên hệ
                </a>
              </Link>
            </li>
            {/* check if user authenticated, if yes, show link, if not, do not show link */}
            {user ? (
              <li className="mr-12">
                <Link href="/request">
                  <a className="text-black-500 hover:text-gray-400" href="#">
                    Request
                  </a>
                </Link>
              </li>
            ) : null}
            
            {user ? (
              <li className="mr-12">
                <Link href="/post">
                  <a className="text-black-500 hover:text-gray-400" href="#">
                    Đăng sản phẩm
                  </a>
                </Link>
              </li>
            ) : null}

            {user ? (
              <li className="mr-12">
                <Link href={`user/${user.sub}`}>
                  <a className="text-black-500 hover:text-gray-400" href="#">
                    Profile
                  </a>
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
        <div className="hidden xl:flex ml-auto items-center">
          {user ? (
            <Link href="/api/auth/logout">
              <a
                className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-green-500 hover:bg-green-600 transform duration-200"
                href="#"
              >
                <svg
                  className="mr-3"
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z"
                    fill="white"
                  ></path>
                </svg>
                <span className="text-xs text-white font-heading">Log Out</span>
              </a>
            </Link>
          ) : (
            <Link href="/api/auth/login">
              <a
                className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-green-500 hover:bg-green-600 transform duration-200"
                href="#"
              >
                <svg
                  className="mr-3"
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z"
                    fill="white"
                  ></path>
                </svg>
                <span className="text-xs text-white font-heading">Sign In</span>
              </a>
            </Link>
          )}
        </div>
        <button
          className="navbar-burger xl:hidden self-center"
          onClick={() => setNavBar(!navBar)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="6" width="24" height="2" fill="green"></rect>
            <rect y="11" width="24" height="2" fill="green"></rect>
            <rect y="16" width="24" height="2" fill="green"></rect>
          </svg>
        </button>
      </nav>
      <div
        className={
          navBar
            ? "navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
            : "hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
        }
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={() => setNavBar(!navBar)}
        ></div>
        <nav className="relative flex flex-col py-8 px-10 w-full h-full bg-white border-r overflow-y-auto">
          <Link href="/">
            <a
              className="inline-block text-xl text-black font-medium font-heading mb-16 md:mb-32"
              href="#"
            >
              <img
                className="h-8"
                src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/281736314_103646749028066_8874301070538351434_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FGwgDV4PoKwAX_W76hT&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8MSpv11wwOd_ZeVjc8BDAcZu9aJH9hczxYLK5QhxaTog&oe=62BC6A17"
                alt=""
              />
            </a>
          </Link>
          <ul className="mb-32">
            <li className="mb-10">
              <Link href="/product">
                <a className="flex items-center" href="#">
                  <span className="mr-3 text-lg text-black">Products</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="6" width="24" height="2" fill="green"></rect>
                    <rect y="11" width="24" height="2" fill="green"></rect>
                    <rect y="16" width="24" height="2" fill="green"></rect>
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
          {user ? (
            <Link href="/api/auth/logout">
              <a
                className="flex mb-8 items-center justify-center py-4 px-6 rounded-full bg-green-500 hover:bg-green-600 transform duration-200"
                href="#"
              >
                <svg
                  className="mr-3"
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z"
                    fill="white"
                  ></path>
                </svg>
                <span className="text-sm text-white font-medium uppercase tracking-wider">
                  Log Out
                </span>
              </a>
            </Link>
          ) : (
            <Link href="/api/auth/login">
              <a
                className="flex mb-8 items-center justify-center py-4 px-6 rounded-full bg-green-500 hover:bg-green-600 transform duration-200"
                href="#"
              >
                <svg
                  className="mr-3"
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z"
                    fill="white"
                  ></path>
                </svg>
                <span className="text-sm text-white font-medium uppercase tracking-wider">
                  Sign In
                </span>
              </a>
            </Link>
          )}

          <p className="text-sm text-gray-500">
            All rights reserved ©Virento 2022
          </p>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
