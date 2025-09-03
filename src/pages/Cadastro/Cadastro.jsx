import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Cadastro.css";

const Cadastro = () => {
  const [form, setForm] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/produtos/${id}`)
        .then((res) => setForm(res.data))
        .catch((err) => console.error("Erro ao carregar produto: ", err));
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Edição
        await axios.put(`http://localhost:3001/produtos/${id}`, form);
      } else {
        // Novo cadastro
        await axios.post(`http://localhost:3001/produtos`, form);
      }
      navigate("/listagem");
    } catch (err) {
      console.error("Erro ao salvar produto:", err);
    }
  };

  return (
    <div className="container">
      <h1>Cadastro de Produto</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>Nome do Produto:</label>
        <input
          name="nome"
          type="text"
          value={form.nome}
          onChange={handleChange}
          required
        />

        <label>Preço:</label>
        <input
          name="preco"
          type="number"
          step="0.01"
          value={form.preco}
          onChange={handleChange}
          required
        />

        <label>Descrição:</label>
        <textarea
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
          required
        ></textarea>

        <label>URL da Imagem:</label>
        <input
          name="imagem"
          type="url"
          value={form.imagem}
          onChange={handleChange}
          required
        />

        <button type="submit">{id ? "Salvar alterações" : "Cadastrar"} </button>
      </form>
    </div>
  );
};

export default Cadastro;
