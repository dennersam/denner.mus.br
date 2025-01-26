import Navbar from "../Navbar/Navbar";
import backgroundImage from '../../assets/img/Denner_conversinha_1024x768.jpg';

export default function Header() {
    return (
      <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }} id="#Header">
        <Navbar />
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px32 text-white">
          <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20" >O melhor da MPB para seu evento!</h2>
          <div className="space-x-6 mt-16">
            <a href="" className="bg-red-900 border-white border-2 px-8 py-3 rounded">Contato</a>
          </div>

        </div>
      </div>
    )
  }