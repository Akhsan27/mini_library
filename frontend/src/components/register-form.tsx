const registerForm = () => {
  return (
    <div>
      <div className="title mb-20">Register you account</div>
      <div className="rounded p-10 ">
        <form method="post" action="login" className="">
          <div className="error">error</div>

          <div className="mb-3">
            <label htmlFor="user-name" className="text-gray-600">
              User Name
            </label>
            <input
              type="text"
              className="ocus:outline focus:outline-blue-500 block w-full border-gray-300 border-b"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="text-gray-600">
              Email:
            </label>
            <input
              type="text"
              className="ocus:outline focus:outline-blue-500 block w-full border-gray-300 border-b"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="text-gray-600">
              Password:
            </label>
            <input
              type="text"
              className="focus:outline focus:outline-blue-500 block w-full border-gray-300 border-b"
            />
          </div>
          <button className="block w-full hover:bg-gray-100 bg-gray-500 text- p-1 rounded font-semibold">
            SUBMIT
          </button>
        </form>
        <div>
          <a href="#" className="remember">
            Remember your registration account
          </a>
        </div>
      </div>
    </div>
  );
};

export default registerForm;
