import React from 'react';

export default function Page() {
  const servicos = [
    { nome: "Box Braids", preco: 'R$ 300,00' },
    { nome: "Box Braids Chanel", preco: 'R$ 320,00' },
    { nome: "Gypsy Braids", preco: 'R$ 380,00' },
    { nome: "Nagô Femnina", preco: 'R$ 180,00' },
    { nome: "Ghana Braids", preco: 'R$ 280,00' },
    { nome: "Boho Braids (com orgânico)", preco: 'R$ 400,00' },




  ];

  return (
    <div className='text-amber-950 text-3xl'>
      RICH HAIR
      <p>Tabela de Preços</p>
      <div className='listTable'>
        <ul>
          {/* Você pode mapear os serviços para criar a lista dinamicamente */}
          {servicos.map((servico, index) => (
            <li key={index}>
              {servico.nome}: {servico.preco}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
