import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../utils/baseUrl";


const RequestCard = (props) => {
    const [noti, setNoti] = useState({
      userFrom: props.userFrom,
      description: `${props.userTo} đã đồng ý yêu cầu thuê sản phẩm ${props.productTitle} từ bạn `,
    });

    const accept = async () => {

        await axios.delete(`${baseUrl}/request/${props.id}`);

        await axios
            .post(`${baseUrl}/notification`, noti)
            .then(({ data }) => {
            const { redirect } = data;
            
            Router.push("/request");
        })
        
    }

    const decline = async (e) => {

    }

    
    return (
      <div className="w-full">
        <div className="p-6 inline-flex border rounded-xl">
          <p className="my-4 py-4 px-24 text-xl">
            {props.userFrom} có yêu cầu thuê {props.productTitle} từ bạn
          </p>
          <button onClick={accept} className="mx-5 my-4 py-4 px-16 bg-green-300 text-green-800 border-2 hover:bg-green-500 hover:cursor-pointer rounded-full">
            Đồng ý
          </button>
          <button className="mx-5 my-4 py-4 px-16 bg-red-300 text-green-800 border-2 hover:bg-red-500 hover:cursor-pointer rounded-full">
            Từ chối
          </button>
        </div>
      </div>
    );
};

export default RequestCard;
