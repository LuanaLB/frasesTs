import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrase = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O rio é a menor distância entre duas pessoas.',
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredire em milagres, mas não depende deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'Nesta manhã, te desejo apenas uma coisa: que você seja muito feliz. Um ótimo dia.',
        'Que o amor esteja presente do começo ao fim do seu dia.',
        'Agradeço pelo sol, pelos astros e por ter você ao meu lado! Bom dia.',
        'Tenha um bom dia, uma tarde produtiva e uma noite fantástica.',
        'Para hoje, escolha brilhar! Bom dia.',
        'Hoje será um dia lindo. Acorde e sorria.',
        'A vida é curta e o tempo passa rápido. Aproveite cada instante. Bom dia.'
      ]
    },
    {
      id: 3,
      nome: "Boa noite",
      frases: [
        'Boa noite durma bem',
        'Hora de apagar as luzes e de deixar que os anjos te conduzam para os melhores sonhos. Boa noite.',
        'Três ingredientes são fundamentais: fé, esperança e amor! Deus cuida do resto. Boa noite.',
        'Acalme esse coração e confie mais no lindo caminho que a vida preparou para você. Boa noite.',
        'Luz do luar parece ainda mais linda quando estamos apaixonados. Boa noite, meu amor.',
        'Boa noite! Que os sonhos te abracem e que acorde cheio de energia para um novo dia.',
        'Respira. Descansa. Amanhã é um novo dia. Boa noite.'
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    const numeroAleatorio = Math.floor(Math.random() * allFrase[categoriaSelecionada].frases.length)

    setTextoFrase(`"${allFrase[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className="container">
      <img 
        alt="Logo frases"
        src={logoImg}
        className="logo"
        />
      
      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allFrase.map( (item, index) => (
          <button
          key={item.id}
          className="category-button"
          style={{
            borderWidth: item.nome === allFrase[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#1fa4db"
          }}

          onClick={ () => handleSwitchCategory(index) }
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && <h2 className="textoFrase">{textoFrase}</h2>}
    </div>
  )
}

export default App
