
const PostProduct = () => {
    return(
        <div className="mx-32 my-12">
            <form action="#">
                    <fieldset className="border-emerald-200 border-2 rounded-2xl text-green-600 text-xl drop-shadow-xl">
                        <div className="mx-16">
                            <legend className="mx-32 my-4 p-1 text-3xl text-center font-bold">Đăng tải sản phẩm</legend>
                            <label for="tenSP" className="">Tên Sản Phẩm</label>
                            <br />
                            <input type="text" name="tenSP" className="bg-green-200 rounded drop-shadow-lg my-3 text-black w-full h-10"/>
                            <br />
                            <label for="hinhAnh" className="">Lựa chọn hình ảnh</label>
                            <br />
                            <form className="my-3 w-20">
                                <label for="form__input">
                                    <input type="file" id="form__input" name="chonAnh" className="hidden"/>
                                    <img src="./assets/plus-icon.png" alt="ảnh" className="w-24 hover:opacity-80 hover:cursor-pointer"/>
                                </label>
                            </form>
                            <label for="phanLoai" className="">Phân loại sản phẩm</label>
                            <br />
                            <input type="text" name="phanLoai" className="bg-green-200 rounded drop-shadow-lg my-3 text-black w-full h-10"/>
                            <br />
                            <label for="thongTin" className="">Thông tin chi tiết</label>
                            <br />
                            <input type="text" name="thongTin" className="break-words align-top bg-green-200 rounded drop-shadow-lg my-3 text-black w-full h-32"/>
                            <br />
                            <label for="diaChiNhanDo" className="">Địa chỉ nhận sản phẩm</label>
                            <br />
                            <input type="text" name="diaChiNhanDo" className="bg-green-200 rounded drop-shadow-lg my-3 text-black w-full h-10"/>
                            <br />
                            <div className="flex my-3">
                                <div className="flex-1">
                                    <p for="diaChiNhanDo" className="pt-3.5">Giá cho thuê</p>
                                    <br />
                                    <p for="tienDatCoc" className="">Tiền cần đặt cọc</p>
                                    <br />
                                    <p for="giaTri" className="">Giá trị sản phẩm</p>
                                    <br />
                                    <p for="sdt" className="">Số điện thoại liên hệ</p>
                                </div>

                                <div className="flex-auto">
                                    <input type="text" name="diaChiNhanDo" className="bg-green-200 rounded drop-shadow-lg my-2 text-black w-full h-10"/>
                                    <br />
                                    <input type="text" name="tienDatCoc" className="bg-green-200 rounded drop-shadow-lg my-2 text-black w-full h-10"/>
                                    <br />
                                    <input type="text" name="giaTri" className="bg-green-200 rounded drop-shadow-lg my-2 text-black w-full h-10"/>
                                    <br />
                                    <input type="text" name="sdt" className="bg-green-200 rounded drop-shadow-lg my-2 text-black w-full h-10"/>
                                </div>
                            </div>
                            <br />
                            <input type="checkbox" className="accent-green-500 border-green-400"/>
                            <label> Tôi đồng ý với các <a href="" className="text-green-400 underline">điều khoản</a> của VIRENTO.</label>
                            <br />
                            <div className="flex justify-center">
                                <input type="submit" value="Submit" className="my-4 py-4 px-12 bg-green-300 text-green-800 border-2 hover:bg-green-500 hover:cursor-pointer rounded-full"></input>
                            </div>                            

                        </div>
                    </fieldset>
                

            </form>
        </div>

    )
}

export default PostProduct
