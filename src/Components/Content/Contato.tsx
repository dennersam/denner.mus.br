import WhatsAppButton from "../Component/WhatsAppButton";

export default function Contato() {
    return (
      <div className="mx-auto bg-black py-20 pt-20 w-full overflow-hidden text-white" id="Musica">
        
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center ">Contato</h1>
        <p className="text-center text-gray-300 mb-8 max-w-80 mx-auto">dennermpb@hotmail.com</p>
        <p className="text-center text-gray-300 mb-8 max-w-80 mx-auto"><WhatsAppButton /></p>
      </div>
    )
  }