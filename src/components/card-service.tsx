interface CardServiceProps {
  name: string;
  description: string;
  icon: any;
}
export const CardService = ({ name, description, icon }: CardServiceProps) => {
  return (
    <div className="rounded-xl border flex flex-col p-4">
      <div className="text-4xl text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <span className="text-gray-600">{description}</span>
    </div>
  );
};
