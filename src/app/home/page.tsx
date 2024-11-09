
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

        <footer className="bg-gradient-to-r from-purple-500 to-blue-300 text-white py-12 mt-auto">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
            {/* Left Footer Content (About Us Section) */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-2xl font-semibold">About Our School</h2>
                <p className="mt-4 text-sm md:text-base">
                    Our school has been nurturing young minds for over 25 years. With state-of-the-art facilities, we offer a curriculum that prepares students for the future.
                </p>
            </div>

            {/* Center Footer Content (Social Media Links) */}
            <div className="mt-8 lg:mt-0 flex justify-center space-x-6">
                <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-white hover:text-gray-200"><i className="fab fa-instagram"></i></a>
            </div>

            {/* Right Footer Content (Contact Information) */}
            <div className="mt-8 lg:mt-0 text-center lg:text-right">
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <p className="mt-2 text-sm md:text-base">Email: NPS@school.edu</p>
                <p className="mt-2 text-sm md:text-base">Phone: 0297- 840029</p>
                <p className="mt-2 text-sm md:text-base">Address: Phulkara Road , Matli Distt:Badin</p>
            </div>
        </div>
    </footer>

      

      </main>
      </>
    );
  
  }