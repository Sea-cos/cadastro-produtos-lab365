import React, { useState } from "react";
import axios from "axios";
import "./Cadastro.css";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const produto = {
        nome,
        preco: parseFloat(preco),
        descricao,
        imagem,
      };

      await axios.post("http://localhost:3001/produtos", produto);

      setMensagem("✅ Produto cadastrado com sucesso!");
      setNome("");
      setPreco("");
      setDescricao("");
      setImagem("");
    } catch (error) {
      console.error(error);
      setMensagem("❌ Erro ao cadastrar produto.");
    }
  };

  return (
    <div className="container">
      <h1>Cadastro de Produto</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>Nome do Produto:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label>Preço:</label>
        <input
          type="number"
          step="0.01"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />

        <label>Descrição:</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        ></textarea>

        <label>URL da Imagem:</label>
        <input
          type="url"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          required
        />

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
};

export default Cadastro;
