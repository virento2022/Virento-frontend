import { Footer } from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ProfileDetails from "../../components/Profile/ProfileDetails"
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from "next/router";
import { useEffect } from 'react';

const ProfilePage = () => {
    const router = useRouter()
    const { user } = useUser()

    useEffect(() => {
        if (!user) router.push("/")
    }, [])
    return(
        <>
            <Navbar/>
            <div className="max-w-screen-xl mx-auto">
                <ProfileDetails />
            </div>
            <Footer/>
        </>
    ) 
}

export default ProfilePage