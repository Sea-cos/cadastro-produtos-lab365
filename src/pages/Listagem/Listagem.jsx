import { useEffect, useState } from "react";
import "./Listagem.css";
import axios from "axios";

const Listagem = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const carregarProdutos = async () => {
    try {
      const resposta = await axios.get("http://localhost:3001/produtos");
      setProdutos(resposta.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setErro("Erro ao carregar produtos.");
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const deletarProduto = async (id) => {
    const confirmar = window.confirm("Tem certeza que deseja excluir esse produto?");
    if (!confirmar) return;
    try {
      await axios.delete(`http://localhost:3001/produtos/${id}`);
      setProdutos(produtos.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      alert("Erro ao deletar produto.");
    }
  };

  if (loading) return <p>Carregando..</p>;
  if (erro) return <p>{erro}..</p>;

  return (
    <div className="lista-produtos">
      {produtos.map((produto) => (
        <div key={produto.id} className="card-produto">
          <img src={produto.imagem} alt={produto.nome} />
          <h2>{produto.nome}</h2>
          <p>
            <strong>Preço:</strong> R$ {produto.preco.toFixed(2)}
          </p>
          <p>{produto.descricao}</p>
          <div className="acoes">
            <button onClick={() => alert("Editar ainda não implementado")}>
              Editar
            </button>
            <button onClick={() => deletarProduto(produto.id)}>Deletar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listagem;
