import { useState } from "react";
import { Link } from "react-router-dom";
import"./style.css"

export default function ToDo() {
    const[personagem, setPersongem] = useState("")
    const[idade, setIdade] = useState()
    const[recompensa, setRecompensa] = useState("")
    const[local, setLocal] = useState("")
    const[listas, setListas] = useState([])
    const[identidade, setIdentidade] = useState(1)

    const salvar = (e) => {
        e.preventDefault()
        setListas([...listas, {
            personagem:personagem, idade:idade, recompensa:recompensa, local:local, identidade:identidade,
        }])
        setIdentidade(identidade + 1)
        console.log(listas)
    }
   
    const remover  = (identidade) => {
        const auxLista = [];
        listas.map((lista) => {
            if (lista.identidade !== identidade){
                auxLista.push(lista);
            }
        })
        setListas(auxLista)
    }

    return (
        <div class="container">
            <Link to="/">Home</Link>
            <h1>Informe o Foragido </h1>

            <form onSubmit={salvar}>
                <h3>Nome?</h3>
                <input class="form" type="text" value={personagem} onChange={(e) => {setPersongem(e.target.value)}}></input>

                <h3>Idade?</h3>
                <input class="form" type="number" value={idade} onChange={(e) => {setIdade(e.target.value)}}></input>

                <h3>Recompensa?</h3>
                <input class="form" type="text" value={recompensa} onChange={(e) => {setRecompensa(e.target.value)}}></input>

                <h3>Visto em?</h3>
                <input class="form" type="text" value={local} onChange={(e) => {setLocal(e.target.value)}}></input>

                <br/>
                <br/>

                <button class="buttonRegister">Registrar</button>
            </form>

            {listas.map((atv) => 
                <div key = {atv.identidade}>
                    <p class="info">Suejeito Procurado: {atv.personagem}</p>
                    <p class="info">Idade: {atv.idade}</p>
                    <p class="info">Recompensa: {atv.recompensa}</p>
                    <p class="info">Visto em: {atv.local}</p>
                    <button class="buttonRemove" onClick={() => remover(atv.identidade)}>Remover</button>                           
                </div>
            )}
        </div>

    );
}