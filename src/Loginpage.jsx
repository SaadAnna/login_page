export default function Loginpage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:w-[50%] w-[90%] mt-32  h-fit border border-raduis border-neutral-300 rounded-3xl justify-center m-auto flex flex-col gap-5 pt-14 pb-14 pl-4 pr-4 text-start">
        <h1 className="font-text text-4xl text-black font-semibold">
          Welcome Back!
        </h1>
        <div className="flex flex-col text-start gap-1">
          <label className="font-text text-neutral-800 mt-5 font-normal text-lg">
            Username
          </label>
          <input
            required
            type="text"
            placeholder="Username"
            className="placholder:font-text placholder:text-neutral-500 placholder:text-base placholder:font-normal w-full h-10 font-text border border-solid border-neutral-300 pl-2 rounded-lg focus:outline-none focus:border-black"
          ></input>
          <label className="font-text text-neutral-800 mt-5 font-normal text-lg">
            Email
          </label>

          <input
            required
            type="email"
            placeholder="Email"
            className="placholder:font-text placholder:text-neutral-500 placholder:text-base placholder:font-normal w-full h-10 font-text border border-solid border-neutral-300 pl-2 rounded-lg focus:outline-none focus:border-black"
          ></input>
          <label className="font-text text-neutral-800 mt-5 font-normal text-lg">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="Password"
            className="placholder:font-text placholder:text-neutral-500 placholder:text-base placholder:font-normal w-full h-10 font-text border border-solid border-neutral-300 pl-2 rounded-lg focus:outline-none focus:border-black"
          ></input>
          <input
            type="submit"
            value="Login"
            className="font-text font-normal text-lg mt-8 cursor-pointer text-white bg-green-700 duration-200 hover:bg-green-800 w-full h-10 font-text pl-2 rounded-lg focus:outline-none"
          ></input>
          <span className="font-text text-base font-normal mt-8 text-neutral-500">
            New in forty?{" "}
            <a
              href="#"
              className="font-text text-base text-blue-700 font-normal hover:text-blue-800"
            >
              Sign Up
            </a>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
