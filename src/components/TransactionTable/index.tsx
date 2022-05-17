import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect (() => {
        api.get('transactions')       
        .then(response => console.log(response.data))
    },[]);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Dev</td>
                        <td className="deposit" >R$1.200</td>
                        <td>Desenvolvimento</td>
                        <td>12/05/2022</td>                    
                    </tr>
                    <tr>
                        <td>Alugel</td>
                        <td className="withdraw" >- R$1.100</td>
                        <td>Casa</td>
                        <td>12/05/2022</td>                    
                    </tr>                  
                </tbody>
            </table>
        </Container>
    );
}