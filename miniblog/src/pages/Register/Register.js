import React, {useState, useEffect } from 'react';

const Register = () => {
  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form>
            <label>
                <span>Name:</span>
                <input
                     type="text"
                     name='displayName'
                     required placeholder='Nome do usuário' />
            </label>
            <label>
                <span>Emai-l:</span>
                <input
                     type="email"
                     name='email'
                     required placeholder='E-mail do usuário'
                      />
            </label>
            <label>
                <span>Senha</span>
                <input
                     type="password"
                     name='password'
                     required placeholder='Senha do usuário' />
            </label>
            <label>
                <span>Confirme senha</span>
                <input
                 type="password"
                 name='confirmePassword'
                 required placeholder='Confirme senha' />
            </label>
            <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Register