import { User } from 'lucide-react';
import Image from 'next/image';
import logo from '../../../public/logo.svg'

export function Header() {
  return (
    <div className='px-10 md:px-20 xl:px-60  py-8 w-auto sticky top-0 bg-zinc-100 lg:px-24 shadow-sm'>
      <div className="flex sm:flex-row justify-between items-center">
        <div>
          <Image
            src={logo}
            alt='Logo Núcleo de Apoio Contábil e Fiscal'
          />
        </div>
        <div className='flex flex-row gap-10'>
          <div className='hidden lg:flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center gap-10
              text-naf-500 text-md lg:text-lg font-display font-semibold 
            '>
              <a href="#services" className='hover:brightness-150 transition-all'>Serviços</a>
              <a href="#location" className='hover:brightness-150 transition-all'>Localização</a>
              <a href="#about-us" className='hover:brightness-150 transition-all'>Sobre Nós</a>
              <a href="#contacts" className='hover:brightness-150 transition-all'>Contatos</a>
            </div>  
          </div>        
          <a href="https://google.com">
            <button className='
              flex flex-row gap-2 items-center
              bg-naf-500 text-zinc-100 
              text-sm lg:text-sm
              px-4 lg:px-8 py-3 lg:py-4 rounded-md
              font-display font-semibold hover:brightness-125 transition-all'
            >
              <User className='hidden lg:text-wrap'/>
              Área do Voluntário
            </button>
          </a>
        </div>
        

      </div>
    </div>
  )
}