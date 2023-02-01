import React from "react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import Router from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

const Form = () => {
    const { user } = useUser();

    const [state, setState] = React.useState({
        title: "",
        category: "",
        price: 0,
        condition: "",
        statusItem: true,
        description: "",
        ownerid: "",
        keyword: "",
        file: null,
    });

    function handleChange(e) {
        if (e.target.files) {
            setState({ ...state, [e.target.name]: e.target.files[0], "ownerid": user.email });
        } else {
            setState({ ...state, [e.target.name]: e.target.value });
        }
    }

    async function handleSubmit(e) {

        e.preventDefault();

        let formData = new FormData();

        for (let [key, value] of Object.entries(state)) {
            formData.append(key, value);
        }

        // Use fetch or axios to submit the form
        await axios
            .post(`${baseUrl}/items`, formData)
            .then(({ data }) => {
                const { redirect } = data;
                // Redirect used for reCAPTCHA and/or thank you page
                // window.location.href = redirect;
                // console.log(redirect);
                Router.push("/product");
            })
            .catch((e) => {
                window.location.href = e.response.data.redirect;
            });
        
        
        
    }

    return (
      <div className="block p-6 rounded-lg shadow-lg bg-white w-5/6 mx-auto h-100">
        <form onSubmit={handleSubmit}>
          <div className="text-green-600 text-xl drop-shadow-xl mx-8">
            <legend className="mx-32 my-4 p-1 text-3xl text-center font-bold">
              Đăng tải sản phẩm
            </legend>
            <label htmlFor="title" className="">
              Tên Sản Phẩm
            </label>
            <br />
            <input className="my-2 h-12 w-full rounded bg-[#B9DCAC36] border border-black p-2"
              name="title"
              type="text"
              placeholder
              onChange={handleChange}
              value={state.title}
              required
            />
            <br />
            <label htmlFor="category" className="">
              Danh mục sản phẩm
            </label>
            <br />
            <select className="my-2 h-12 w-full rounded bg-[#B9DCAC36] border border-black pl-1"
              name="category"
              type="text"
              placeholder="Enter category"
              onChange={handleChange}
              value={state.category}
              required>
                <option selected>Chọn danh mục</option>
                <option>Thời trang</option>
                <option>Công nghệ</option>
                <option>Du lịch</option>
              </select>
            <br />
            <label htmlFor="price" className="">
              Giá cho thuê
            </label>
            <br />
            <input className="my-2 h-12 w-full rounded bg-[#B9DCAC36] border border-black p-2"
              name="price"
              type="number"
              placeholder
              onChange={handleChange}
              value={state.price}
              required
            />
            <br />
            <label htmlFor="condition" className="">
              Tình trạng sản phẩm
            </label>
            <br />
            <input className="my-2 h-12 w-full rounded bg-[#B9DCAC36] border border-black p-2"
              name="condition"
              placeholder
              onChange={handleChange}
              value={state.condition}
              required
            />
            <br />

            <label htmlFor="description" className="">
              Miêu tả sản phẩm
            </label>
            <br />
            <textarea className="my-2 h-40 w-full rounded bg-[#B9DCAC36] border border-black p-2"
              name="description"
              placeholder
              onChange={handleChange}
              value={state.description}
              required
            />
            <br />
            <input type="file" name="file" onChange={handleChange} />
            <br />
            <input
              name="bot-field"
              type="text"
              onChange={handleChange}
              style={{ display: "none" }}
            />
            <button
              type="submit"
              className="object-center my-4 py-4 px-12 bg-[#B9DCAC] text-[#026B2E] font-semibold border-2 hover:bg-[#8FAB85] hover:text-[#084708] hover:cursor-pointer rounded-full"
            >
              Đăng sản phẩm
            </button>
          </div>
        </form>
      </div>
    );
};

const PostProduct = () => {
    return (
        <div>
            <Form />
        </div>
    );
};

export default PostProduct;
