import foto01 from '../../assets/img/Denner.jpg';

export default function Fotos() {
      
    return (
        <div className="flex flex-col md:flex-col mx-auto bg-white py-30 pt-20 w-full overflow-hidden lg:px-10 text-black items-center justify-center" 
                id="Fotos">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Fotos </h1>
            <img src={foto01} />

        </div>
    )
}