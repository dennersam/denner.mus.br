import Contato from "./Content/Contato";
import Fotos from "./Content/Fotos";
import Header from "./Content/Header";
import Musica from "./Content/Musica";
import Sobre from "./Content/Sobre";
import Footer from "./Footer/Footer";

export default function Layout() {
    return (
      <div className="w-full overflow-hidden">
        <Header />
        <Sobre />
        <Musica />
        <Fotos />
        <Contato />
        <Footer />
      </div>
    )
  }