export const Header = () => {
  return (
    <nav className="bg-black opacity-90 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between md:flex hidden">
        <div className="text-2xl font-bold cursor-pointer">
          <a
            href="#home"
            className="text-gray-400 hover:text-blue-400 transform transition-colors duration-200"
          >
            Irmãos Mai
          </a>
        </div>
        <div className="flex space-x-4">
          <a
            href="#about"
            className="text-gray-400 hover:text-blue-400 transform transition-colors duration-200"
          >
            Sobre Nós
          </a>
          <a
            href="#services"
            className="text-gray-400 hover:text-blue-400 transform transition-colors duration-200"
          >
            Serviços
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-blue-400 transform transition-colors duration-200"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};
