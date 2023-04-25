import Link from "next/link"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Aboutme () {
    return(
        <>
        
        


        <div className="container ">
        <div className="flex my-20  justify-center mx-auto items-center">
        <img className="hacker mr-10 rounded-xl" src="/hacker.jpg" />
        <h3 className="w-64 font-semibold text-white text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</h3>
        </div>
        <div className="flex-col  justify-center items-center">
        <p className="text-white font-medium items-center py-5 mx-auto w-7/12">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="text-white font-medium items-center py-5 mx-auto w-7/12">Arrr, ye scallywags! Hoist the Jolly Roger and let's set sail for adventure on the high seas! Ye may be lookin' fer some pirate-themed placeholder text for yer next design project, and Pirate Ipsum is just the thing!</p>
        <p className="text-white font-medium items-center py-5 mx-auto w-7/12">Blimey, if ye be needin' some sample text to fill yer layout, try this on for size: "Avast, me hearties! Weigh anchor and hoist the mizzen, for we're bound for Tortuga with a cargo of gold doubloons and fine silks from the Orient."</p>
        </div>
        <div className="flex items-center justify-center my-10">
        <a href="mailto:ekrasniqi567@gmail.com" className="  border-purple-700 border-b-2 text-gray-400 hover:bg-purple-700 hover:text-gray-200  text-center py-2 rounded-xl font-semibold w-28 text-center mr-10 py-2 rounded-xl font-semibold">Reach Out</a>
        <a href="#" className="px-5 py-2 border-purple-700 border-b-2 text-gray-400 hover:bg-purple-700 hover:text-gray-200 w-28 text-center py-2 rounded-xl font-semibold"><Link className="" href="/contact">Contact</Link></a>
        </div>
        </div>

        </>
    )
}