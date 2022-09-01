import Navbar from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import baseUrl from "../utils/baseUrl";
import { useUser } from "@auth0/nextjs-auth0";
import React from "react";
import { useEffect } from "react";
import NotificationCard from "../components/Notification/NotificationCard";
NotificationCard

import Head from 'next/head'

function Request() {

    const { user } = useUser();
    const [notifications, setNotification] = React.useState([]);

    useEffect(() => {
        async function loadData() {
            if (user) {
                const response = await fetch(
                    `${baseUrl}/notification/${user.email}`
                );
                const notificationList = await response.json();
                setNotification(notificationList);
            }
        }

        loadData();
    }, [user, notifications]);

    return (
        <>
            <Head>
                <title>Thông báo</title>
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
                                Thông báo đơn hàng
                            </span>
                        </div>
                        <div className="flex flex-wrap -m-3 mb-16">
                            {notifications.map((notification) => (
                                <NotificationCard
                                    key={notification.id}
                                    description={notification.description}
                                />
                            ))}
                        </div>
                        <div className="text-center">
                            <button className="px-6 py-4 text-white text-sm font-semibold bg-green-600 hover:bg-green-700 rounded transition duration-200">
                                Xem thêm
                            </button>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}

export default Request;
