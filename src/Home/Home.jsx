import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return(
        <div>
            <h1>Informe o Suejeito no Link abaixo</h1>
            <Link to="/todo">Informe</Link>
        </div>
    )
}