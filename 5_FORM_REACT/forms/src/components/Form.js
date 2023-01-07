import React from 'react'
import './Form.css'
import { useState } from 'react';

const Form = ({user}) => {

    const [email, setEmail] = useState(user ? user.email : '')
    const [nome, setNome] = useState(user ? user.nome: '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleNome = (e) => {
        setNome(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulário...")
        console.log(nome, email, role);

        setNome("");
        setEmail("");
        setRole("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome:</label>
            <input type="text"  onChange={handleNome} placeholder='Digite seu nome' value={nome} />
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Digite seu e-mail' />
            </label>
            <select name="role" onChange={(e) => {setRole(e.target.value)}} value={role}>
                <option value="admin">Administrador</option>
                <option value="user">Usuário</option>
                <option value="author">Autor</option>
            </select>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Form