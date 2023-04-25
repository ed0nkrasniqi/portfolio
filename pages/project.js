import Navbar from "@/components/Navbar"
import ProjectTitle from "@/components/ProjectTitle"
import ProjectFirstParagraph from "@/components/ProjectFirstParagraph"
import ProductName from "@/components/ProductName"
import ProductDesc from "@/components/ProductDesc"
import KnowMe from "@/components/KnowMe"
import KnowDesc from "@/components/KnowDesc"
import UnderImage from "@/components/UnderImage"
import Footer2 from "@/components/Footer2"
import Menu from "@/components/icons/Menu"





export default function Project ({data}) {
    return(
        <>
        <div className="menu">
        <Menu />
</div>
        <div className="navbar">
        <Navbar  />
        </div>
        <div className="text-center my-28">
        <ProjectTitle title={data.firstTitle}/>
        <ProjectFirstParagraph paragraph={data.firstParagraph}/>
        </div>


        <div className="width-margin sm:py-3 px-6 rounded-full bg-zinc-800">
        <div className="flex    ">
        <img className='product-img sm:mt-0 mt-3 sm:mr-5 mr-3 rounded-xl' src={`${data.productImage.url}`}/>
        <div className="mt-3">
            <ProductName prodname={data.productName}/>
            <ProductDesc prodesc={data.productDesc}/>    
        </div>
        </div>
        </div>


        <KnowMe whoami={data.knowMe}/>
        <KnowDesc descrip={data.description}/>
        <img className='product-img2 flex justify-center mx-auto mt-40 my-5 rounded-full' src={`${data.anotherImage.url}`}/>
        <UnderImage underimg={data.underImage}/>  


        <div className="navbar">
        <Footer2 />     
        </div>

        </>
    )
}


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/projects/643e9f853b29f58f71ed963a`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }