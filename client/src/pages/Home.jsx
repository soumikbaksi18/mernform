import React, { useState } from "react";
import bg from "../assets/bg.webp";

const Home = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const submitHandler = () => {};

  return (
    <>
      <div className="absolute z-0">
        <img src={bg} className="h-[100vh] w-[100vw]" />
      </div>

      <div className="relative z-10">
        <div className="flex justify-center pt-60">
          <h1 className="box poppins text-white font-thin text-4xl tracking-widest">
            MERNFORM
          </h1>
        </div>

        <div className="box login flex justify-center pt-8 ">
          <input
            label="Name"
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
            className="p-1 w-80 rounded-sm"
          />
        </div>

        <div className="box login flex justify-center pt-8 ">
          <input
            label="Email"
            placeholder="Enter your Mail"
            onChange={(e) => setEmail(e.target.value)}
            className="p-1 w-80 rounded-sm"
          />
        </div>

        <div className="box login flex justify-center pt-8 ">
          <input
            label="Password"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-1 w-80 rounded-sm"
          />
        </div>

        <div className="flex justify-center">
          <button
           className="bg-blue-100 p-1 px-5 mt-6 rounded-sm"
            type="submit"
            width="full"
            onClick={() => submitHandler()}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
