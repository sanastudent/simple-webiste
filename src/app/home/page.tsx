
import Image from "next/image";
import Footer from "../components/footer";


export default function Home() {



    return (
     
      <>
      <main className="flex flex-col min-h-screen bg-gradient-to-r from-blue-300 to-purple-500 pb-24">
        <section  className="flex lg:flex-row items-center lg:justify-between w-full px-20 py-20">
  
            {/* left section */}
         <div className="heading-info text-center lg:text-left mt-10 lg:mt-20 lg:ml-20 lg:pb-48">
          <h6 className="top text-green-950 font-light">Join Us</h6>
          <h1 className="heading text-2xl mt-6 md:text-3xl lg:text-4xl font-extrabold text-gray-800">25K+ STUDENTS TRUST US</h1>
          <p className="heading-line font-mono mt-6 text-sm md:text-base ">
            Everyday brings with it a fresh set of learning possibilities.</p>
  
        
         
         </div>
  
          {/* right section */}
          <div className="container flex justify-center lg:justify-end mt-8 lg:mt-0 lg:mr-24 mb-12">
            <div className="content ">
            <Image  src="/father.jpg" width={500} height={500}  alt="father" 
            className="w-48 h-48 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]"/>
            </div>
          </div>
  
        
  
        </section>
      </main>
      </>
    );
  
  }