import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-gray-100 py-20 flex flex-col items-center">

      {/* CONTACT SECTION */}
      <div className="w-[90%] md:w-[70%] flex flex-col items-center">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Contact Mark Wythe
        </h1>

        <div className="w-16 h-[2px] bg-gray-300 my-6"></div>

        <p className="text-lg mb-10 text-gray-800">Send Message</p>

        {/* FORM */}
        <form className="w-full flex flex-col gap-6">

          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md p-4 outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Email*"
            className="w-full border border-gray-300 rounded-md p-4 outline-none focus:border-black"
          />

          <textarea
            placeholder="Tell me about your dream home!"
            rows="6"
            className="w-full border border-gray-300 rounded-md p-4 outline-none focus:border-black"
          />

          <div className="flex justify-center mt-4">
            <button className="bg-black text-white px-10 py-4 rounded-md font-semibold hover:bg-gray-900 transition">
              SEND
            </button>
          </div>

        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>


      {/* CONTACT INFO */}
      <div className="w-[90%] md:w-[70%] mt-20 grid md:grid-cols-2 gap-10 text-center md:text-left">

        {/* Address */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Mark Wythe</h2>
          <p className="text-gray-600">3111 Fake Street Anytown AZ 12121</p>
          <p className="text-gray-600 mt-4">(111) 555–1212</p>
        </div>

        {/* Hours */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Hours</h2>

          <div className="space-y-2 text-gray-600">
            <p>Mon &nbsp;&nbsp; 09:00 am – 05:00 pm</p>
            <p>Tue &nbsp;&nbsp; 09:00 am – 05:00 pm</p>
            <p>Wed &nbsp;&nbsp; 09:00 am – 05:00 pm</p>
            <p>Thu &nbsp;&nbsp; 09:00 am – 05:00 pm</p>
            <p>Fri &nbsp;&nbsp; 09:00 am – 05:00 pm</p>
            <p className="font-semibold">Sat &nbsp;&nbsp; Closed</p>
            <p>Sun &nbsp;&nbsp; Closed</p>
          </div>

        </div>

      </div>


      {/* APPOINTMENT SECTION */}
      <div className="w-full mt-24 flex flex-col items-center">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
          Make an Appointment online
        </h2>

        <div className="w-16 h-[2px] bg-gray-300 my-6"></div>

        {/* Appointment Card */}
        <div className="bg-white shadow-sm border mt-10 w-[320px]">

          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
            alt="appointment"
            className="w-full h-[220px] object-cover"
          />

          <div className="p-6">
            <h3 className="text-lg font-medium">
              Free Phone Consultation
            </h3>

            <p className="text-gray-600 mt-2">
              20 mins | Free
            </p>

            <button className="mt-4 bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition">
              BOOK
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;