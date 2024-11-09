
 

export default function Contact(){
 return(
   <>
   <main className="flex flex-col items-center p-5 bg-gradient-to-r from-blue-200 to-purple-300">
       <section  className="w-full max-w-lg text-center p-8 bg-gradient-to-r from-blue-200 to-purple-300 rounded-lg mb-10 shadow-md">
           <div className="contact-us w-full md:w-1/2 px-5 mt-12">
           <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
           <p className="text-lg font-cursive text-center">We are here to assist you!Please contact us with any question about our school,programs or admitions.</p>
           </div>

           <div  className="w-full md:w-1/2 px-5 mt-10">
               <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
               <p><strong>Phone:</strong>0297-841297</p>
               <p><strong>Email:</strong>NpS540@gmail.com</p>
               <p><strong>Address:</strong>Phulkara Road Matli</p>

           </div>
            
            <div className="w-full max-w-lg px-5 mt-10 bg-gradient-to-r from-blue-300 to-purple-400 rounded-lg shadow-lg p-8">
               <h2  className="text-2xl font-semibold mb-4 text-center">Send a message</h2>
               <form  className="space-y-4">
                   <label htmlFor="name" className="block text-gray-700">Name:</label>
                   <input type="text" name="name" id="name "  className="w-full p-3 border border-gray-300 rounded-md" required />

                   <label htmlFor="email" className="block text-gray-700">Email:</label>
                   <input type="email" name="email" id="email"  className="w-full p-3 border border-gray-300 rounded-md" required />

                   <label htmlFor="message" className="block text-gray-700">Message:</label>
                   <textarea name="message" id="message" className="w-full p-3 border border-gray-300 rounded-md h-40" required></textarea>

                   <button type="submit" className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white p-3 rounded-md hover:bg-purple-600 transition">Send Message</button>
               </form>
           </div>

            <div className="w-full max-w-lg px-5 mt-10 bg-gradient-to-r from-pink-300 to-purple-400 rounded-lg shadow-lg p-8">
               <h2  className="text-2xl font-semibold mb-4 text-center">School Hours</h2>
               <p  className="text-center">Monday - Friday :8AM - 1PM</p>
               <p  className="text-center">Saturday: Closed</p>
               <p  className="text-center">Sunday: Closed</p>
             </div>

           
           <div  className="w-full px-5 mt-10 text-center">
               <p className="text-2xl font-cursive">Your information is safe with us.We respect your privacy</p>
           </div> 


       </section>
   </main>
   
   </>
 )



}