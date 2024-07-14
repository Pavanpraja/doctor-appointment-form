"use client";

import { useState } from "react";
import Header from "../components/Header";
import SelectButton from "../components/SelectButton";
import Submitted from "./submitted";

const DocForm = () => {
  const [submit, setSubmit] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with formData if needed
    setSubmit(false)
  };

  return (
   
    <div className="w-[75%] h-[85%] bg-white">
      <div className="">
        <Header />
        {
          submit ?
        <form className="p-[2rem] font-bold flex flex-col gap-[1rem]" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[0.3rem]">
            <label htmlFor="name">patient Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-[0.2rem] border-[0.1rem] [box-shadow:0rem_0.1rem_.1rem_0rem_gray] border-black"
              required
            />
          </div>

          <div className="flex">
            <div className="flex flex-col gap-[0.3rem]">
              <label htmlFor="phone">Mobile No.*</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="p-[0.2rem] border-[0.1rem] [box-shadow:0rem_0.1rem_.1rem_0rem_gray] border-black w-[16rem]"
                minLength={10}
                maxLength={13}
                required
              />
            </div>
            <div className="flex flex-col gap-[0.3rem] ml-[11rem] w-[4rem]">
              <label htmlFor="age">Age.*</label>
              <input
                type="number"
                name="age"
                id="age"
                className="p-[0.2rem] border-[0.1rem] [box-shadow:0rem_0.1rem_.1rem_0rem_gray] border-black"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-[0.3rem] mb-[2rem]">
            <label htmlFor="gender">Gender*</label>
            <div className="flex gap-[1rem]">
              <div className="flex gap-[0.5rem]">
                <input type="radio" name="gender" id="male" />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex gap-[0.5rem]">
                <input type="radio" name="gender" id="female" />
                <label htmlFor="female">Female</label>
              </div>
              <div className="flex gap-[0.5rem]">
                <input type="radio" name="gender" id="other" />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-[3rem] mb-[2.5rem]">
              <div className="flex gap-[0.5rem]">
                <h1>diabetes</h1>
                <div className="select"><SelectButton first="Yes" second="No"/></div>
              </div>
              <div className="flex gap-[0.5rem]">
                <h1>BP</h1>
                <div className="select"><SelectButton first="Yes" second="No"/></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button type="submit" className="text-[1.2rem] font-bold py-[0.5rem] px-[3rem] bg-[aqua] font-sans tracking-tighter">SUMMIT</button>
          </div>
        </form>
        : <Submitted />
        }
      </div>
    </div>
  );
};

export default DocForm;
