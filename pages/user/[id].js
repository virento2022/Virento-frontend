import { Footer } from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ProfileDetails from "../../components/Profile/ProfileDetails"
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from "next/router";
import { useEffect } from 'react';

import Head from 'next/head'

const ProfilePage = () => {
    const router = useRouter()
    const { user } = useUser()

    useEffect(() => {
        if (!user) router.push("/")
    }, [])
    return (
        <>
            <Head>
                <title>Trang cá nhân</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Navbar />
            <div className="max-w-screen-xl mx-auto">
                <ProfileDetails />
            </div>
            <Footer />
        </>
    ); 
}

export default ProfilePage