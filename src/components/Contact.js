import React, { useState } from "react";

export default function Contact() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

   function encode(data) {
      return Object.keys(data)
         .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
         )
         .join("&");
   }

   function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
         method:"Post",
         headers:{ "Content-Type": "application/x-www-form-urlencoded" },
         body: encode({ "form-name": "contact", name, email, message }),
      })
      .then(() => alert("Message sent"))
      .catch((error) => alert(error));
   }

   return(
      <section id="contact" className="relative">
         <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
               <iframe 
                  width="100%"
                  height="100%"
                  title="map"
                  className="absolute inset-0"
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  scrolling="no"
                  style={{ filter: "opacity(0.7)" }}
                  src="https://cn.bing.com/maps/embed?h=800&w=800&cp=28.007985423413565~120.72137355804443&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8"/>
               <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                     <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        ADDRESS
                     </h2>
                     <p className="mt-1">
                        富强市民主区文明路和谐小区8-808
                     </p>
                  </div>
                  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                     <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        EMAIL
                     </h2>
                     <a className="text-indigo-400 leading-relaxed">
                        pha@email.com
                     </a>
                     <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        PHONE
                     </h2>
                     <p className="leading-relaxed">
                        123-456-7890
                     </p>
                  </div>
               </div>
            </div>
            <form
               netlify
               name="contact"
               onSubmit={handleSubmit}
               className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
               <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                  Hire me
               </h2>
               <p className="leading-relaxed mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                  facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                  fuga dolore?
               </p>
               <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                     Name
                  </label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     onChange={(e) => setName(e.target.value)}
                     className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
               </div>    

               <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                     Email
                  </label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
               </div>  

               <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                     Message
                  </label>
                  <textarea
                     id="message"
                     name="message"
                     onChange={(e) => setMessage(e.target.value)}
                     className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
               </div> 
               <button 
                  type="submit"
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
               </button>          
            </form>
         </div>
      </section>
   )
}