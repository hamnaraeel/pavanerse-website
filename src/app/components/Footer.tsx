import React from "react";
function Footer() {
  return (
    <div>
      <div className="bg-black text-white">
        <div className="w-10/12 m-auto py-16">
          <div className="grid grid-cols-6 flex">
            <div className="col-span-4 md:col-span-2 w-5/6 flex flex-col gap-4 my-auto mb-8">
              <img
                className="block h-8 mr-auto"
                src="/favicon.png"
                alt="Your Company"
              />
              <p className="text-white text-sm">
                Lorem ipsum dolor sit, amet consectetur elit. Voluptatum
                architecto, in adipisci?
              </p>
              <p className="text-gray-300 text-xs">
                All right reserved by Hamnaraeel
              </p>
            </div>
            <div className="grid grid-cols-4 col-span-6 md:col-span-4">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 mb-4 pr-2">
                <h1 className="font-bold text-md text-white mb-3">Class</h1>
                <div className="flex flex-col text-sm font-normal gap-1 text-gray-300">
                  <a href="">Web 3.0 Blockchain...</a>
                  <a href="">Artificial Intelligence...</a>
                  <a href="">Cloud-Native...</a>
                  <a href="">Ambient Computing...</a>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-2 md:col-span-1 mb-4 sm:px-2">
                <h1 className="font-bold text-md text-white mb-3">
                  Our Company
                </h1>
                <div className="flex flex-col text-sm font-normal gap-1 text-gray-300">
                  <a href="">Home</a>
                  <a href="">Courses</a>
                  <a href="">About Us</a>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-2 md:col-span-1 mb-4 md:px-2">
                <h1 className="font-bold text-md text-white mb-3">Legal</h1>
                <div className="flex flex-col text-sm font-normal gap-1 text-gray-300">
                  <a href="">Privacy policy</a>
                  <a href="">Terms & Conditions</a>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-2 md:col-span-1 mb-4 sm:pl-2">
                <h1 className="font-bold text-md text-white mb-3">Follow us</h1>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur elit.
                </p>
                <div className="flex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
