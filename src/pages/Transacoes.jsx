import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Transacoes = () => {
  const navigate = useNavigate();
  const [valorTotal, setValorTotal] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");
  const [transacoes, setTransacoes] = useState([]);

  // Adicionar transação
  const handleAdicionarTransacao = () => {
    if (!descricao || !valor) return;
    const novaTransacao = {
      id: Date.now(),
      tipo,
      descricao,
      valor: tipo === "gasto" ? -parseFloat(valor) : parseFloat(valor),
    };
    setTransacoes([...transacoes, novaTransacao]);
    setDescricao("");
    setValor("");
  };

  // Excluir transação
  const handleExcluirTransacao = (id) => {
    setTransacoes(transacoes.filter((t) => t.id !== id));
  };

  // Resetar todas as transações
  const handleResetarTransacoes = () => {
    setTransacoes([]);
  };

  // Calcular saldo
  const saldoTotal = transacoes.reduce((acc, t) => acc + t.valor, parseFloat(valorTotal) || 0);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-indigo-700">Controle de Transações</h1>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
            Sair
          </button>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Valor Total Inicial</label>
          <input type="number" value={valorTotal} onChange={(e) => setValorTotal(e.target.value)}
            className="w-full p-2 border rounded-lg" placeholder="Informe o saldo inicial"/>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Descrição da Transação</label>
          <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)}
            className="w-full p-2 border rounded-lg" placeholder="Ex: Salário, Compra de materiais"/>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Tipo de Transação</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="w-full p-2 border rounded-lg">
            <option value="receita">Receita</option>
            <option value="gasto">Gasto</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Valor</label>
          <input type="number" value={valor} onChange={(e) => setValor(e.target.value)}
            className="w-full p-2 border rounded-lg" placeholder="Ex: 150.00"/>
        </div>

        <button onClick={handleAdicionarTransacao} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg">
          Adicionar Transação
        </button>

        {transacoes.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-4">Transações</h2>
            <ul>
  {transacoes.map((t) => (
    <li key={t.id} className={`mb-2 p-2 rounded flex justify-between ${t.valor < 0 ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
      <strong>{t.tipo === "gasto" ? "[Gasto]" : "[Receita]"}</strong> {t.descricao}: R$ {t.valor.toFixed(2)}
      <button onClick={() => handleExcluirTransacao(t.id)} className="ml-2 text-red-500 hover:text-red-700 font-semibold">Excluir</button>
    </li>
  ))}
</ul>
          </div>
        )}

        <div className="mt-4 p-4 bg-gray-200 rounded-lg font-bold text-lg">
          Saldo Atual: R$ {saldoTotal.toFixed(2)}
        </div>

        <button onClick={handleResetarTransacoes} className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
          Resetar Transações
        </button>
      </div>
    </div>
  );
};

export default Transacoes;