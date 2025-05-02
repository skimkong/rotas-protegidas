import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/transacoes");
    }
  }, [navigate]);

  const handleLogin = () => {
    localStorage.setItem("token", "token-falso");
    navigate("/transacoes");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Entrar</h2>
        <p className="mb-6 text-gray-600">Acesse sua conta para ver as transações</p>
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Entrar com token simulado
        </button>
      </div>
    </div>
  );
};

export default Login;
