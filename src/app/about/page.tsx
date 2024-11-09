


import Image from "next/image";


export default function About(){
return (

    <>
    <body className="bg-gradient-to-r from-blue-200 to-purple-400 p-5 text-gray-800">
    <main className="max-w-6xl mx-auto p-5">
        <section className="flex flex-col p-5 mb-15 text-center">
         <div className="flex flex-col items-center text-center p-5 mb-8">   
            <Image src="/playing area.jpg" width={300} height={500} alt="progress" className="rounded-lg transform transition-transform duration-500 hover:scale-110" />
            <h1 className="text-2xl text-gray-700 mt-5 font-cursive animate-fadeIn">INTRODUCTION</h1>
            <p  className="text-lg text-gray-600 mt-3 animate-fadeIn"> Welcome to NPS, where education meets excellence. 
                Located in Matli, our school has been shaping young minds for over [X] years.</p>
                
           </div>

           <div className="flex flex-col items-center text-center p-5 mb-8">
           <Image src="/building.jpg" height={400} width={300} alt="school"  className="rounded-lg transform transition-transform duration-500 hover:scale-110"/>
            <h1  className="text-2xl text-gray-700 mt-5 font-cursive animate-fadeIn">HISTORY</h1>
            <p  className="text-lg text-gray-600 mt-3 animate-fadeIn">Founded in 2008, Network of public School has a long-standing tradition of fostering academic excellence and personal growth.</p>
            </div>

             <div className="flex flex-col items-center text-center p-5 mb-8">   
             <Image src="/teach.jpg" width={300} height={200} alt="teaching"  className="rounded-lg transform transition-transform duration-500 hover:scale-110"/>
              <h1   className="text-2xl text-gray-700 mt-5 font-cursive animate-fadeIn">Mission and Vision</h1>
              <p  className="text-lg text-gray-600 mt-3 animate-fadeIn">Our mission is to provide quality education while nurturing creativity, responsibility, and respect in every student. Our vision is
             to create lifelong learners who contribute positively to society.</p>
              </div>

             <div className="flex flex-col items-center text-center p-5 mb-8">
                <Image src="/lab.jpg" width={300} height={200} alt="library"  className="rounded-lg transform transition-transform duration-500 hover:scale-110"/>
                <h1  className="text-2xl text-gray-700 mt-5 font-cursive animate-fadeIn">FACILITIES</h1>
                <p  className="text-lg text-gray-600 mt-3 animate-fadeIn">Our campus is equipped with state-of-the-art facilities, including science labs, computer centers, a well-stocked 
                library, and a vast sports complex.</p>
             </div>


             <div className="flex flex-col items-center text-center p-5 mb-8">
             <Image src="/school.jpg" width={500} height={300} alt="School"  className="rounded-lg transform transition-transform duration-500 hover:scale-110"/>
                <h1  className="text-2xl text-gray-700 mt-5 font-cursive animate-fadeIn">ACHIEVEMENTS & ACCOLADES</h1>
                    <p  className="text-lg text-gray-600 mt-3 animate-fadeIn">We take pride in our academic success, with <span>NPS</span> consistently ranking among the top schools in the region
                     and receiving accolades for [specific achievements].</p>
             </div>
             </section>
    </main>

    </body>
    </>
   




)

};