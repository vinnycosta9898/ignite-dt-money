import { PriceHightLight, TransactionContainer, TransactionTable } from './styles'
import { Header } from "../../components/Header/index";
import { Summary } from "../../components/Summary/index";
import { SearchForm } from './components/SearchForm/index';

export function Transactions(){
    return(
        <div>
            <Header/>
            <Summary/>
            <TransactionContainer>
                <SearchForm/>
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHightLight variant="income">
                                    R$ 12.000,00
                                </PriceHightLight>
                            </td>
                            <td>Venda</td>
                            <td>12/04/2023</td>
                        </tr>

                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceHightLight variant="outcome">
                                    R$ 12.000,00
                                </PriceHightLight>
                            </td>
                            <td>Alimentacao</td>
                            <td>12/04/2023</td>
                        </tr>
                        
                    </tbody>
                </TransactionTable>
            </TransactionContainer>

        </div>
    )
}