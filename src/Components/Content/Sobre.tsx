import fotoDenner from '../../assets/img/Denner01.png';

export default function Sobre() {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-center mx-auto 
    py-20 md:px-10 lg:px-10 w-full overflow-hidden '
    id='Sobre'>
        <img src={fotoDenner} />
        <div className='flex flex-col items-center md:p-20 md:items-start mt-15'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Sobre <span className='underline underline-offset-4 decoration-1 under font-light'> mim e a música!</span> </h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'> Cantor e compositor brasileiro sul matogrossense, dispertou sua música nos eventos e bares cariocas.</p>
            <p className='text-gray-500 max-w-80 text-center mb-8'> Formado na escola de música Villa-Lobos, com influências da MPB.</p>
        </div>
    </div>
  )
}