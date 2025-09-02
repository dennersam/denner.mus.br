

export default function Musica() {
    return (
      <div className="mx-auto bg-black py-30 pt-20 w-full overflow-hidden text-white" id="Musica">
        
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center ">Música</h1>
        <p className="text-center text-gray-300 mb-8 max-w-80 mx-auto">Algumas apesentações!</p>

        <div className="flex flex-col items-center">

          <p className="text-2xl font-bold my-4 text-center ">Dias de Lua - Emilio Santiago</p>
          <iframe className="aspect-video" width="560" height="315" src="https://www.youtube.com/embed/UPBsSZGWUgs?si=UfHpPKzY7-vdpR7q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className="text-2xl font-bold mt-10 mb-4 text-center ">Manhãs de Setembro (Mário Campanha)</p>
          <iframe className="aspect-video" width="560" height="315" src="https://www.youtube.com/embed/lCIVLAkmkPI?si=Ka-_AzE7tgHvMJvi" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    )
  }