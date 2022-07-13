import Link from "next/link";

const RequestCard = (props) => {
    return (
        <div className="w-full">
            <div className="p-6 border rounded-xl">
                    <p>You have a notification from {props.userFrom}</p>
            </div>
        </div>
    );
};

export default RequestCard;
