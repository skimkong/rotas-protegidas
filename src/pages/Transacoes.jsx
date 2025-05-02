import { useNavigate } from "react-router-dom";

const Transacoes = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const dadosFicticios = [
    { id: 1, descricao: "Salário", valor: 3000 },
    { id: 2, descricao: "Supermercado", valor: -400 },
    { id: 3, descricao: "Aluguel", valor: -1200 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white">
      <div className="max-w-2xl mx-auto bg-white text-indigo-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Suas Transações</h2>
          <button
            onClick={handleLogout}
            className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Sair
          </button>
        </div>
        <ul className="space-y-2">
          {dadosFicticios.map((item) => (
            <li
              key={item.id}
              className={`flex justify-between p-4 rounded-lg shadow ${
                item.valor < 0 ? "bg-red-100" : "bg-green-100"
              }`}
            >
              <span>{item.descricao}</span>
              <span className="font-semibold">
                {item.valor < 0 ? "-" : "+"}R$ {Math.abs(item.valor)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transacoes;

