import fotoDenner from '../../assets/img/Denner01.png';

export default function Sobre() {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-center mx-auto 
    py-20 md:px-10 lg:px-10 w-full overflow-hidden '
    id='Sobre'>
        <img src={fotoDenner} />
        <div className='flex flex-col items-center text-center md:p-8 mt-10'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-4'>Fazendo música a mais de <span className='underline underline-offset-4 decoration-1 under font-light'>20 anos</span> no Rio de Janeiro!</h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'> Cantor e compositor com repertório bem eclético, animando eventos e bares cariocas.</p>
            <p className='text-gray-500 max-w-80 text-center mb-8'> Propostas para aniversários, eventos coorporativos, casamentos, entre outros.</p>
            <p className='text-gray-500 max-w-80 text-center mb-8'> Sonorização e equipamentos para o evento de pequeno e médio porte já incluso.</p>
            <p className='text-gray-500 max-w-80 text-center mb-8'> Formado em 2005 na escola de música Villa-Lobos, com influências da MPB.</p>
        </div>
    </div>
  )
}