import { useUser } from "@auth0/nextjs-auth0";

const ProfileDetails = () => {
  const { user } = useUser();
  if (user) {
    return (
      <>
        <div className="flex mt-5 items-center justify-center">
          <div className="xl:w-10/12 w-full px-8">
            <div className="xl:px-24">
              <div className="flex justify-center items-center ">
                <img
                  src={user.picture}
                  className="w-32 h-32"
                  alt="display avatar"
                  role="img"
                />
              </div>
              <p className="pt-5 text-center">{user.name}</p>
              <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 9.99999H20C20.2652 9.99999 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 9.99999 4 9.99999H5V8.99999C5 8.08074 5.18106 7.17049 5.53284 6.32121C5.88463 5.47193 6.40024 4.70026 7.05025 4.05025C7.70026 3.40023 8.47194 2.88462 9.32122 2.53284C10.1705 2.18105 11.0807 1.99999 12 1.99999C12.9193 1.99999 13.8295 2.18105 14.6788 2.53284C15.5281 2.88462 16.2997 3.40023 16.9497 4.05025C17.5998 4.70026 18.1154 5.47193 18.4672 6.32121C18.8189 7.17049 19 8.08074 19 8.99999V9.99999ZM17 9.99999V8.99999C17 7.67391 16.4732 6.40214 15.5355 5.46446C14.5979 4.52678 13.3261 3.99999 12 3.99999C10.6739 3.99999 9.40215 4.52678 8.46447 5.46446C7.52678 6.40214 7 7.67391 7 8.99999V9.99999H17ZM11 14V18H13V14H11Z"
                        fill="#4B5563"
                      />
                    </svg>
                  </div>

                  <p className="text-sm text-gray-800 pl-3">
                    Chúng tôi rất coi trọng các vấn đề về quyền riêng tư. Bạn có
                    thể chắc chắn rằng dữ liệu cá nhân được bảo vệ an toàn.
                  </p>
                </div>
                <button className="md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded">
                  <svg
                    aria-label="Close this banner"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8337 5.34166L14.6587 4.16666L10.0003 8.825L5.34199 4.16666L4.16699 5.34166L8.82533 10L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 10L15.8337 5.34166Z"
                      fill="#79808F"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-16 w-full  border-b border-gray-200 pb-16">
                <div className=" w-100 mx-auto">
                  <div className="md:flex items-center lg:mt-0 mt-4">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="firstName"
                      >
                        Họ và tên
                      </label>
                      <input
                        type="name"
                        tabindex="0"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="firstName"
                        placeholder={user.name}
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="lastName"
                      >
                        Tên người dùng
                      </label>
                      <input
                        type="name"
                        tabindex="0"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="lastName"
                        placeholder={user.nickname}
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center mt-8">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="emailAddress"
                      >
                        Địa chỉ email
                      </label>
                      <input
                        type="email"
                        tabindex="0"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="emailAddress"
                        placeholder={user.email}
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="phone"
                      >
                        Số điện thoại
                      </label>
                      <input
                        type="name"
                        tabindex="0"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="phone"
                        placeholder="123-1234567"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ProfileDetails;
