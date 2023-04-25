import Link from "next/link"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Footer2 from "@/components/Footer2"


export default function Contact () {
return(
<>
<Navbar />


<h3 className="text-gray-500 my-10 text-9xl font-mono font-semibold text-center">CONTACT</h3>  

<div class="max-w-md mx-auto">
  <form className="bg-neutral-800  rounded-xl shadow-md  p-10">

    <div className="mb-4 flex flex-wrap">

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="first-name">First Name</label>
        <input className=" appearance-none block w-full  text-gray-200 bg-transparent border-b-2 border-neutral-600 focus:bg-neutral-600 rounded-lg p-2  focus:outline-none" type="text" placeholder="John"/>
      </div>

      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="last-name">
          Last Name
        </label>
        <input className="appearance-none block w-full  text-gray-200 bg-transparent border-b-2 border-neutral-600 focus:bg-neutral-600 rounded-lg p-2  focus:outline-none" type="text" placeholder="Doe"/>
      </div>

    </div>

    <div className="mb-4 flex flex-wrap">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="email">
          Email
        </label>
        <input className="appearance-none block w-full  text-gray-200 bg-transparent border-b-2 border-neutral-600 focus:bg-neutral-600 rounded-lg p-2  focus:outline-none"  type="email" placeholder="john.doe@example.com"/>
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="phone">
          Phone
        </label>
        <input className="appearance-none block w-full  text-gray-200 bg-transparent border-b-2 border-neutral-600 focus:bg-neutral-600 rounded-lg p-2  focus:outline-none" type="text" placeholder="(555) 555-5555"/>
      </div>
    </div>

    <div className="mb-4">
      <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="message">
        Message
      </label>
      <textarea className="appearance-none block w-full  text-gray-200 bg-transparent border-b-2 border-neutral-600 focus:bg-neutral-600 rounded-lg p-2  focus:outline-none" id="message" rows="6" placeholder="Enter your message"></textarea>
    </div>

    <div className="flex items-center justify-center">
      <button className="rounded-lg bg-purple-700 hover:bg-purple-900 text-gray-200 font-bold py-2 px-8  focus:outline-none focus:shadow-outline" type="button">
        Send
      </button>
    </div>

  </form>
</div>


<Footer2 />
</>
)
}