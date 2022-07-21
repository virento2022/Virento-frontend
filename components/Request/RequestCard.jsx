import { useEffect, useState } from "react";
import baseUrl from "../../utils/baseUrl";


const RequestCard = (props) => {

    return (
        <div className="w-full">
            <div className="p-6 border rounded-xl">
                <p>
                    {/* User request to rent { item.title } */}
                </p>
                <button>Accept</button>
                <button>Decline</button>
            </div>
        </div>
    )
};

export default RequestCard;
