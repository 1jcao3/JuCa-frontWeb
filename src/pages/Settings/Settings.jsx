import { useState } from "react";

export default function Settings() {


  const [formData,setFormData]=useState({

    
    email:'',
    password:''
  
  });



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://127.0.0.1:8000/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                
            },
            credentials: 'include',
            body: JSON.stringify(formData),
        });

       
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

      
        const data = await response.json();
        console.log('Success:', data);

    } catch (error) {
        // Manejar errores  console.log('error:', error);
    }
};

  const handleChange=(e)=>{

    const { name, value, type, checked } = e.target;

  setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  return (
    <main className="container  m-auto  px-10 my-0 flex items-center justify-center md:flex-row flex-col">
    

    <div className="flex items-start my-10  justify-center  p-0 max-h-screen m-auto   w-full ">
      <div className="w-full p-8 shadow-md rounded-lg md:w-[70%] h-[50vh] md:h-[70vh] flex flex-col items-center  justify-center bed-about">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium ">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-black focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium ">Contraseña</label>
            <input
              type="password"
              name="password"
              
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-black focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>

    
    </main>
  )
}
