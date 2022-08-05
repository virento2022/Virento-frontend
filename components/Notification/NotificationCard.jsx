
const NotificationCard = (props) => {

    
    return (
        <div className="w-full">
            <div className="p-6 inline-flex border rounded-xl">
                <p className="my-4 py-4 px-24 text-xl">
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default NotificationCard;
