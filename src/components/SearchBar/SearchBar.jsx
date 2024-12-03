import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Obtener todos los elementos de la página
    const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li");

    elements.forEach((element) => {
      const originalText = element.textContent;
      
      // Limpiar resaltes previos
      element.innerHTML = originalText;

      if (value && originalText.toLowerCase().includes(value)) {
        // Resaltar la coincidencia dentro del texto
        const regex = new RegExp(`(${value})`, "gi"); // Buscar el término (case insensitive)
        element.innerHTML = originalText.replace(
          regex,
          `<span class="bg-blue-300">${"$1"}</span>` // Resaltar el término con un fondo amarillo
        );
      }
    });
  };

  return (
    <div className="flex flex-col items-center">
      {/* Input de búsqueda */}
      <div className="relative flex items-center justify-center md:flex ">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="md:w-auto w-full pl-10 pr-4 py-1 border-2 border-solid border-[#3f3f40] rounded bg-black icons focus:outline-none focus:border-white"
        />
        <IoIosSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
      </div>
    </div>
  );
}
