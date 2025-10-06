import Navbar from "../Navbar/Navbar";
import backgroundImage from '../../assets/img/Denner_conversinha_1024x768.jpg';
import WhatsAppButton from "../Component/WhatsAppButton";

export default function Header() {
    return (
      <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }} id="#Header">
        
        <Navbar />
        
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px32 text-white">
          <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20" >A melhor experiência de música ao vivo para seu evento!</h2>
          <div className="flex justify-center items-center mt-20">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/l9WYXsxv-Ug?si=oLByUUE22672nzrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="space-x-6 mt-20 mb-20">
            <WhatsAppButton />
          </div>
        </div>
      
      </div>
    )
  }