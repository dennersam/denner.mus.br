import dennerLogo from '../../assets/img/logo.svg';

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col justify-center md:flex-row text-white bg-black items-center">
      <img src={dennerLogo} className='w-10 m-4'/>
      <h1 className=''>Denner - </h1>
      <p>Todos os direitos reservados @{year}</p>
    </div>
  )
}