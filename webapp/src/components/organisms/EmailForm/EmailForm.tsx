import React from "react";
import emailjs from "@emailjs/browser";

export interface AppHeaderProps {
  navAction?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function EmailForm({}: AppHeaderProps) {
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h9uucqh",
        "template_l4xnzet",
        e.target,
        "OimTczru9G2EkVsPb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="columns-1 pl-36 pr-36">
      <div className="flex justify-center pb-3">
        <h1 className="text-secondaryBlue font-bold  md:text-4xl sm:text-3xl xs: text-2xl">
          Connect with us
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="md:text-2xl sm:text-xl">(204)-880-1009</h1>
      </div>
      <div className="flex justify-center pb-5">
        <h1 className="md:text-2xl sm:text-xl">admin@health101services.ca</h1>
      </div>
      <form onSubmit={sendEmail}>
        <input
          className="w-full h-50 pb-5 pl-1 mb-3 text-black font-bold border-2 border-black"
          type="text"
          placeholder="Full Name"
          name="name"
          required
        />
        <input
          className="w-full h-50 pb-5 pl-1 mb-3 font-bold border-2 border-black"
          type="email"
          placeholder="Email Address"
          name="email_address"
          required
        />
        <input
          className="w-full h-50 pb-5 pl-1 mb-3 font-bold border-2 border-black"
          type="text"
          placeholder="Subject"
          name="subject"
          required
        />
        <textarea
          className="w-full pb-36 pl-1 mb-3 font-bold border-2 border-black"
          placeholder="Message"
          name="message"
          required
        ></textarea>
        <div className="flex justify-end">
          <input
            className="bg-secondaryBlue hover:bg-secondaryGreen rounded-3xl md:w-44 sm: w-32 text-white font-bold md:text-2xl sm:text-lg p-2"
            type="submit"
            value="Send"
          ></input>
        </div>
      </form>
    </div>
  );
}
