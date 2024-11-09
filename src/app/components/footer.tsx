


import { FaUserGraduate } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { BsPersonStandingDress } from "react-icons/bs";

const Footer = ()=>{
 return(
    <footer className="w-full bg-purple-900 text-black py-6">
        <div className=" flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 gap-6">
            <div className="flex-1 p-5 bg-pink-200 rounded-lg shadow-md text-center lg:text-left">
            <FaUserGraduate  className="text-3xl mb-4 mx-auto lg:mx-0"/>
                <h1 className="text-lg font-semibold mb-3">Expert Instructions</h1>
                <p className="text-sm leading-relaxed">Expert guidance provided for efficient and effective execution of task.</p>
              </div>  

               <div className="flex-1 p-5 bg-pink-200 rounded-lg shadow-md text-center lg:text-left">
                <CiEdit className="text-3xl mb-4 mx-auto lg:mx-0"/>
                <h1 className="text-lg font-semibold mb-3">Examinations</h1>
                <p className="text-sm leading-relaxed">Comprehensive examination guidelines ensure accurate assessment and student success.</p>
            </div>

            <div className="flex-1 p-5 bg-pink-200 rounded-lg shadow-md text-center lg:text-left">
              <BsPersonStandingDress className="text-3xl mb-4 mx-auto lg:mx-0" />
                <h1 className="text-lg font-semibold mb-3">Faculty & Staff</h1>
                <p className="text-sm leading-relaxed">Qualified and dedicated staff foster for a supportive learning environment. </p>
            </div>
        </div>
    </footer>
 )
}

export default Footer