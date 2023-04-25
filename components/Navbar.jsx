import Link from "next/link";


export default function Navbar() {
  return (
    <>
    <div className="container">
    <div className="flex items-baseline justify-between p-5 my-10 bg-zinc-900 rounded-full">
      <h1 className="font-bold text-white text-xl">Edon <span className="font-bold text-purple-700 ">Krasniqi</span></h1>
       <ul className="flex  text-md text-white ">
       <li className="px-8"><a href="#home">Home</a></li>
       <li className="px-8"><a href="#about">About</a></li>
       <li className="px-8"><a href="#info">Info</a></li>
       </ul>
       <ul>
      <Link className=" text-white mr-5  text-md bg-purple-700 hover:bg-purple-900 px-3 py-1 rounded-full" href="/contact">Contact</Link>
       <Link className=" text-white  text-md bg-purple-700 hover:bg-purple-900 px-3 py-1 rounded-full" href="/project">Projects</Link>
       </ul>
    </div>
    </div>
</>
  );
}
