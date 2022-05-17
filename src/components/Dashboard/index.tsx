import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionTable";
import { Container } from "./styles";

export function Dashbord () {
    return (
        <Container>
            <Summary/>
            <TransactionsTable />
        </Container>
    );
}