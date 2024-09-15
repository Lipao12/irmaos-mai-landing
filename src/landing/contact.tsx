import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export const Contact = () => {
  const address = "Av. José Armani, 256 - Res. Gaivotas";
  const phone = "(27) 99999-9999";
  const email = "contato@irmaosmai.com";
  const year = new Date().getFullYear();

  const handleOpenMaps = () => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Fale Conosco
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center">
            <FiPhone className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold">Telefone</h3>
            <p className="text-gray-600">{phone}</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FiMail className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold">E-mail</h3>
            <p className="text-gray-600">{email}</p>
          </div>

          <div
            onClick={handleOpenMaps}
            className="flex flex-col items-center text-center cursor-pointer"
          >
            <FiMapPin className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold">Endereço</h3>
            <p className="text-gray-600">{address}</p>
            <span className="text-blue-500 underline">Abrir no mapa</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="#about"
              className="text-gray-400 hover:text-gray-800 transform transition-colors duration-200"
            >
              Sobre Nós
            </a>
            <a
              href="#services"
              className="text-gray-400 hover:text-gray-800 transform transition-colors duration-200"
            >
              Serviços
            </a>
            <a
              href="#faq"
              className="text-gray-400 hover:text-gray-800 transform transition-colors duration-200"
            >
              Perguntas frequentes
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-gray-400">
            © {year} Irmãos Mai. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};
