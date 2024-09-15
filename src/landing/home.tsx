export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-end bg-cover bg-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/different-electrical-tools-wooden-background-flat-lay_169016-24821.jpg?w=1380&t=st=1726416121~exp=1726416721~hmac=7e1c9e1a36c836a783dd6ec59b7d7dc543fbcba8287d74d6c5fbbed7bacc5081')`,
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg">
        <h1 className="text-5xl font-extrabold text-white mb-4">Irmãos Mai</h1>
        <p className="text-xl text-gray-200">
          Maximizamos a eficiência das suas máquinas para que você foque no
          crescimento do seu negócio.
        </p>
      </div>
    </section>
  );
};
