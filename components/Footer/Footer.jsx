import Image from "next/image";
import Link from "next/link";

import FacebookLogo from "../../public/assets/icons/facebook-green.svg";
import TwitterLogo from "../../public/assets/icons/twitter-green.svg";
import InstagramLogo from "../../public/assets/icons/instagram-green.svg";
import Virento from "../../public/assets/logo.svg"
export const Footer = () => {
  return (
    <section className="pt-20 pb-10">
        <div className="container px-4 mx-auto">
            <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
            <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
                <Link href="/">
                <a
                    className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none"
                    href="#"
                >
                    <Image width={150} height={150} src={Virento} alt=""/>

                </a>
                </Link>
            </div>
            <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
                <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-gray-400 leading-relaxed">
VIRENTO không chỉ dừng lại ở việc mang tới lợi ích cho chính những người sử dụng mà còn hướng tới sự phát triển bền vững trong tiêu dùng.
                </p>
            </div>
            <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-green-600">
                Office
                </p>
                <p className="lg:text-lg text-gray-400">
                    19 Nguyen Trai, Dong Da, Hanoi
                </p>
            </div>
            <div className="w-full lg:w-1/5 px-3">
                <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-green-600">
                Contacts
                </p>
                <p className="lg:text-lg text-gray-400">info@virento.space</p>
            </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <p className="text-xs text-gray-400">
                © 2022. All rights reserved.
            </p>
            <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                <a
                className="inline-block px-2"
                href="https://www.facebook.com/virento.space"
                target="_blank"
                rel="noreferrer"
                >
                <Image src={FacebookLogo} alt="" />
                </a>
                <a className="inline-block px-2" href="#">
                <Image src={TwitterLogo} alt="" />
                </a>
                <a className="inline-block px-2" href="#">
                <Image src={InstagramLogo} alt="" />
                </a>
            </div>
            </div>
        </div>
    </section>
  );
};