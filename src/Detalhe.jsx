import { useParams } from "react-router-dom"
import Card from "../Componente/Card"
export default function Detalhe(){
    const {id} = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"))

    const atividade = lista.filter( (objeto) => {
        if(objeto.identidade == identidade){
            return objeto
        }
        return null
    })
    
    return(
        <Card personagem={personagem[0]}/>
    )
}