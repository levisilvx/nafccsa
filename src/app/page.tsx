import Image from "next/image";
import logo from '../../public/logo.svg'
import megaphone from "../../public/megaphone.svg"

import { Header } from "./components/Header";
import { FaWhatsapp } from "react-icons/fa";

import {
  SearchCheck,
  Handshake,
  UserRoundCheck,
  Store,
  FileText,
  CircleHelp,
  MapPin,
  Calendar,
  Mail,
  Instagram
} from 'lucide-react';
import { IoMdHeart } from "react-icons/io";

export default function Home() {
  return (
    <div>
      <Header/>
      <main className="px-10 md:px-20 xl:px-60 pt-10">
          <div className="flex flex-col md:flex-row lg:justify-around md:justify-center items-center">
            <h1 className="text-zinc-800 font-display font-semibold leading-tight text-5xl lg:text-6xl uppercase">
              Muito mais Facilidade  na emissão de impostos
            </h1>
            <Image className="py-6 flex justify-center items-center -ml-2 lg:m-0"
              src={megaphone}
              alt='Illustration of a megaphone'
            />
          </div>

        <div className="
          lg:my-16 p-4 font-display text-center lg:text-3xl
          flex justify-center items-center
           rounded-lg border border-zinc-300 lg:border-0">
          <p className=" font-medium text-zinc-800 leading-relaxed uppercase">
            Mais de 
            <span className="
              text-zinc-100 bg-naf-500 rounded-md 
              py-1 px-2 font-black mx-1.5"> 500 </span>
            pessoas físicas e jurídicas beneficiadas
          </p>
        </div>
        <div>
          <div id="services"
            className="py-10 lg:mb-12 pb-6 font-display font-black text-2xl lg:text-4xl text-center">
            NOSSOS SERVIÇOS
          </div>
          
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 lg:text-xl xl:grid-cols-3">
            <div className="
              mt-10 lg:px-8 border bg-zinc-100 border-zinc-300 rounded-md
              flex flex-col justify-center items-center
              ">
              <div className="
                flex justify-center items-center
                font-display font-black uppercase
                p-3 bg-naf-500 rounded-md -mt-8"
              >
                <SearchCheck className=" text-zinc-100 "
                size={40}/>
              </div>
              
              <div className="m-2 pb-4 flex flex-col justify-center items-center">
                <h1 className="pt-4 font-display font-black uppercase">consulta de situação fiscal</h1>
                <p className="text-zinc-500 text-xs text-center font-sans font-light p-3">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
              </div>          
            </div>

            <div className="
              mt-10 lg:px-8 border bg-zinc-100 border-zinc-300 rounded-md
              flex flex-col justify-center items-center
              ">
              <div className="
                flex justify-center items-center
                font-display font-black uppercase
                p-3 bg-naf-500 rounded-md -mt-8"
              >
                <CircleHelp className=" text-zinc-100 "
                size={40}/>
              </div>
              
              <div className="m-2 pb-4 flex flex-col justify-center items-center">
                <h1 className="pt-4 font-display font-black uppercase">auxílio no cadastro gov.br</h1>
                <p className="text-zinc-500 text-xs text-center font-sans font-light p-3">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
              </div>          
            </div>

            <div className="
              mt-10 lg:px-8  border bg-zinc-100 border-zinc-300 rounded-md
              flex flex-col justify-center items-center
              ">
              <div className="
                flex justify-center items-center
                font-display font-black uppercase
                p-3 bg-naf-500 rounded-md -mt-8"
              >
                <UserRoundCheck className=" text-zinc-100 "
                size={40}/>
              </div>
              
              <div className="m-2 pb-4 flex flex-col justify-center items-center">
                <h1 className="pt-4 px-4 font-display font-black uppercase text-wrap text-center">Inscrição e consulta cadastrais CPF e cnpj</h1>
                <p className="text-zinc-500 text-xs text-center font-sans font-light p-3">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
              </div>          
            </div>

            <div className="
              mt-10 lg:px-8  border bg-zinc-100 border-zinc-300 rounded-md
              flex flex-col justify-center items-center
              ">
              <div className="
                flex justify-center items-center
                font-display font-black uppercase
                p-3 bg-naf-500 rounded-md -mt-8"
              >
                <Store className=" text-zinc-100 "
                size={40}/>
              </div>
              
              <div className="m-2 pb-4 flex flex-col justify-center items-center">
                <h1 className="pt-4 px-4 font-display font-black uppercase text-wrap text-center">abertura e encerramento de cnpj</h1>
                <p className="text-zinc-500 text-xs text-center font-sans font-light p-3">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
              </div>          
            </div>

            <div className="
              mt-10 lg:px-8 border bg-zinc-100 border-zinc-300 rounded-md
              flex flex-col justify-center items-center
              ">
              <div className="
                flex justify-center items-center
                font-display font-black uppercase
                p-3 bg-naf-500 rounded-md -mt-8"
              >
                <FileText className=" text-zinc-100 "
                size={40}/>
              </div>
              
              <div className="m-2 pb-4 flex flex-col justify-center items-center">
                <h1 className="pt-4 px-4 font-display font-black uppercase text-wrap text-center">alteração de dados cadastrais</h1>
                <p className="text-zinc-500 text-xs text-center font-sans font-light p-3">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
              </div>          
            </div>

            <div className="
              mt-10 lg:px-8 border bg-zinc-100 border-zinc-300 rounded-md
              flex flex-col justify-center items-center
              ">
              <div className="
                flex justify-center items-center
                font-display font-black uppercase
                p-3 bg-naf-500 rounded-md -mt-8"
              >
                <Handshake className=" text-zinc-100 "
                size={40}/>
              </div>
              
              <div className="m-2 pb-4 flex flex-col justify-center items-center">
                <h1 className="pt-4 px-4 font-display font-black uppercase text-wrap text-center">negociação de dívidas - receita federal e dívida ativa</h1>
                <p className="text-zinc-500 text-xs text-center font-sans font-light p-3">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
              </div>          
            </div>

          </div>
        </div>
        <div>
          <h1 id="location" 
            className="py-10 lg:pt-20 lg:mb-12 pb-6 font-display font-black text-2xl lg:text-4xl text-center uppercase"
          >
            Localização
          </h1>
          <div className="
            p-8 lg:pt-10 lg:pb-4 lg:px-20 border bg-zinc-100 border-zinc-300
            rounded-md md:flex flex-row justify-around items-start"
          >
            <div>
              <div className="flex flex-row gap-1 justify-start items-center">
                <MapPin className="text-naf-500"/>
                <p className="pl-1 font-display font-black text-xl text-naf-500">SEDECI</p>
              </div>
                <p className=" font-display font-medium text-md text-zinc-500  px-2 py-3 mb-4">
                  R. Quinze de Novembro, 92, <br /> Bairro São Miguel, <br />Juazeiro do Norte - CE, <br />Cep - 63010-480
                </p>
            </div>
            <div>
              <div className="flex flex-row gap-1 justify-start items-center">
                <MapPin className="text-naf-500"/>
                <p className="pl-1 font-display font-black text-xl text-naf-500">RECEITA FEDERAL</p>
              </div>
                <p className=" font-display font-medium text-md text-zinc-500  px-2 py-3">
                R. José Andrade de Lavor, 2001, <br /> Bairro Santa Tereza, <br /> Juazeiro do Norte - CE,  <br />Cep - 63050-480
                </p>
            </div>
          </div>
        </div>
        
        <div>
          <h1 className="py-10 lg:py-20 pb-6 font-display font-black text-2xl lg:text-4xl text-center uppercase">
            nossos horários
          </h1>
          <div className="p-8 lg:pb-14 bg-zinc-100 border border-zinc-300 rounded-md">
            <div className="md:flex flex-row justify-around items-baseline">
              <div>
                <div className="flex flex-row gap-1 justify-start items-center">
                  <Calendar className="text-naf-500"/>
                  <p className="pl-1 font-display font-black text-xl text-naf-500">ATENDIMENTO ONLINE</p>
                </div>
                <p className=" font-display font-bold tracking-wider text-zinc-50 text-xs mt-1 p-1.5 px-2 w-fit bg-naf-500 uppercase rounded-md">
                  whatsapp e email
                </p>
                <p className=" font-display font-medium text-md text-zinc-500 py-3 uppercase">
                  <span className="text-lg text-zinc-700">SEG - SEX <br /></span>
                  Das 08:00 às 12:00 <br />
                  Das 14:00 às 17:00
                </p>
              </div>
              <div>
                <div className="flex flex-row gap-1 justify-start items-center mt-10">
                  <Calendar className="text-naf-500"/>
                  <p className="pl-1 font-display font-black text-xl text-naf-500">SEDECI</p>
                </div>
                <p className=" font-display font-medium text-md text-zinc-500 py-3 uppercase">
                  <span className="text-lg text-zinc-700">SEG - SEX <br /></span>
                  Das 14:00 às 17:00
                </p>
              </div>
              <div>
                <div className="flex flex-row gap-1 justify-start items-center mt-10">
                  <Calendar className="text-naf-500"/>
                  <p className="pl-1 font-display font-black text-xl text-naf-500">RECEITA FEDERAL</p>
                </div>
                <p className=" font-display font-medium text-md text-zinc-500 py-3 uppercase">
                  <span className="text-lg text-zinc-700"> SEG - SEX <br /></span>
                  Das 07:30 às 11:30
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 id="about-us"
            className="py-10 lg:py-20 pb-6 font-display font-black text-2xl lg:text-4xl text-center uppercase">
            SObre nós
          </h1>
          <div className="p-8 bg-zinc-100 border border-zinc-300 rounded-md">
            <p className="lg:px-20 lg:py-7 font-display font-medium text-md lg:text-lg text-zinc-500">
              O Núcleo de Apoio Contábil e Fiscal é programa que já está em funcionamento desde 01 de junho de 2019 e conta com aparticipação de 11 alunos do curso de Ciências Contábeis que atuam de forma voluntária no atendimento à população do Cariri. O presente projeto é desenvolvido em parceria com a RFB - Receita Federal do Brasil e com a Secretaria Estadual de Tributação (SEFAZ-CE), e Secretaria de Finanças do Município, cujo objetivo é oferecer serviços contábeis e fiscais gratuitos para pessoas físicas e jurídicas de menor poder aquisitivo. Em 2019 foi implantado o centro de atendimento NAF na sala 303 do Vapt Vupt e os alunos envolvidos no projeto passaram por treinamentos ministrados pela SEFAZ, RFB e pelo professor orientador.
            </p>
          </div>
        </div>
        <div>
          <div className="p-8 mt-20 bg-zinc-100 border border-zinc-300 rounded-md">
            <h1 id="contacts"
              className="py-5 lg:py-10 pb-6 font-display font-black text-2xl lg:text-4xl text-center text-naf-500 uppercase">
              contatos
            </h1>
            <div className="lg:flex flex-row justify-center items-center gap-20">
              <div className=" text-naf-500 text-md flex flex-col justify-center items-center md:items-start">
                <a href="https://www.instagram.com/naf_ccsa/"
                  className="flex flex-row items-center gap-2 py-2 px-3 font-display font-bold">
                  <Instagram size={20}/>
                  @naf_ccsa
                </a>
                <a href="https://api.whatsapp.com/send?phone=558888938025&text=Olá%21+Gostaria+de+tirar+uma+dúvida&fbclid=PAZXh0bgNhZW0CMTEAAaZut4aExfsWJ_SOpS9km9w7g1GBh8k2PySiujlcf8Dnc5HsnAHKYs7zzOc_aem_sYxp2ZOK77oagkozKDHixA"
                  className="flex flex-row items-center gap-2 py-2 px-3 font-display font-bold bg-zinc-100 rounded-md">
                  <FaWhatsapp size={22}/>
                  (88) 98893-8025
                </a>
                <a 
                  href="mailto:levisilva690@gmail.com"
                  className="
                    flex flex-row items-center gap-2 py-2 px-3
                    font-display font-bold bg-zinc-100 rounded-md"
                >
                  <Mail size={20}/>
                  naf.ccsa@ufca.edu.br
                </a>
              </div>
              <div>
              <div className="hidden lg:flex flex-col">
                <Image
                  src={logo}
                  alt='Logo Núcleo de Apoio Contábil e Fiscal'
                />
                <div className="flex flex-col items-start">
                  <div className=" text-naf-500 text-sm flex flex-row gap-1 items-center font-display font-bold mt-5">
                    <p>Made with</p>
                    <IoMdHeart size={16} />
                    <p>by</p>
                    <p>Levi Morais</p>
                  </div>
                  
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
