import React from "react";
import axios from "axios";

const Form = () => {
    const [state, setState] = React.useState({
        title: "",
        category: "",
        price: 0,
        condition: "",
        statusItem: true,
        description: "",
        ownerid: 1,
        keyword: "",
        file: null,
    });

    function handleChange(e) {
        if (e.target.files) {
            setState({ ...state, [e.target.name]: e.target.files[0] });
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
            .post("http://localhost:5000/items", formData)
            .then(({ data }) => {
                const { redirect } = data;
                // Redirect used for reCAPTCHA and/or thank you page
                window.location.href = redirect;
                console.log(redirect);
            })
            .catch((e) => {
                window.location.href = e.response.data.redirect;
            });
        
    }

    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white w-4/5 mx-30 mx-10 h-100">
            <form onSubmit={handleSubmit}>
                <div className="border-emeral d-400 border-2 rounded-2x1 text-green-600 text-xl drop-shadow-xl">
                    <legend className="mx-32 my-4 p-1 text-3xl p-1 text-3xl text-center font-bold">
                        Đăng tải sản phẩm
                    </legend>
                    <label for="title" className="">
                        Tên Sản Phẩm
                    </label>
                    <br />
                    <input
                        name="title"
                        type="text"
                        placeholder="Enter title"
                        onChange={handleChange}
                        value={state.title}
                        required
                    />
                    <br />
                    <label for="category" className="">
                        Tên Sản Phẩm
                    </label>
                    <br />
                    <input
                        name="category"
                        type="text"
                        placeholder="Enter category"
                        onChange={handleChange}
                        value={state.category}
                        required
                    />
                    <br />
                    <label for="price" className="">
                        Giá cho thuê
                    </label>
                    <br />
                    <input
                        name="price"
                        type="number"
                        placeholder="Enter price"
                        onChange={handleChange}
                        value={state.price}
                        required
                    />
                    <br />
                    <label for="condition" className="">
                        Tình trạng sản phẩm
                    </label>
                    <br />
                    <input
                        name="condition"
                        placeholder="Enter condition"
                        onChange={handleChange}
                        value={state.condition}
                        required
                    />
                    <br />

                    <label for="description" className="">
                        Miêu tả sản phẩm
                    </label>
                    <br />
                    <textarea
                        name="description"
                        placeholder="Enter description"
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
                    <button type = "submit" lassName="my-4 py-4 px-12 bg-green-300 text-green-800 border-2 hover:bg-green-500 hover:cursor-pointer rounded-full">
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
