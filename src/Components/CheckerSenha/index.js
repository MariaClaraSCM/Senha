import React, { useState, useEffect } from 'react';

const CheckerSenha = () => {
    const [senha, setSenha] = useState('');
    const [forcaSenha, setForcaSenha] = useState('');
  
    useEffect(() => {
      if (senha.length === 0) {
        setForcaSenha('');
      } else if (senha.length < 6) {
        setForcaSenha('Fraca');
      } else if (senha.length < 10) {
        setForcaSenha('Média');
      } else {
        setForcaSenha('Forte');
      }
    }, [senha]);

    const corDasForcas = (strength) => {
        switch (strength) {
          case 'Fraca':
            return 'red';
          case 'Média':
            return 'orange';
          case 'Forte':
            return 'green';
          default:
            return 'black';
        }
      };
  
    return (
        <div className='back'>
            <div className='estilização'>
                <div className='ajuste'>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Digite sua senha"
                    />
                    <p>Força da senha: <p style={{ color: corDasForcas(forcaSenha) }}
                    >{forcaSenha}</p></p>
                </div>
            </div>
        </div>
    );
  };
  
  export default CheckerSenha;
  
