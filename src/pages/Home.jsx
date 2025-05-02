
import { useNavigate } from "react-router-dom";
import { BadgeCheckIcon } from '@heroicons/react/solid';  

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex flex-col justify-between">
      <div className="flex flex-col justify-center items-center py-12">
        <h1 className="text-5xl font-bold mb-6">Bem-vindo ao Controle de Transações</h1>
        <p className="mb-10 text-lg">Gerencie suas finanças de forma simples e segura.</p>
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Acessar Login
        </button>
      </div>

      <footer className="bg-transparent text-center text-lg py-4 text-gray-200">
        <p>By Bruno Maia</p>
  
        <div className="flex justify-center items-center mt-2">
          <BadgeCheckIcon className="h-8 w-8 text-yellow-500" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
