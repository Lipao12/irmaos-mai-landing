export const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-start mb-12">Fale Conosco</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nome
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Seu nome"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Seu e-mail"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Mensagem
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={5}
                placeholder="Escreva sua mensagem"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </form>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Nossas Informações</h3>
            <p className="text-gray-700 mb-2">Telefone: (99) 9999-9999</p>
            <p className="text-gray-700 mb-2">E-mail: contato@irmaosmai.com</p>
            <p className="text-gray-700 mb-4">
              Endereço: Rua Graciosa Garcia Durao, 256 - Araca, Linhares - ES
            </p>
            <div className="map-embed">
              {/* Coloque aqui um embed do Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5158957042024!2d-40.2986506!3d-20.2917397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzMwLjIiUyA0MMKwMTcnNTcuOCJX!5e0!3m2!1sen!2sbr!4v1694770547212!5m2!1sen!2sbr"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
