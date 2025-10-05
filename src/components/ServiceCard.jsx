export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
