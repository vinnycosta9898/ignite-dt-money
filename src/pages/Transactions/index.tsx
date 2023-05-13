import { useContext } from 'react'
import {
  PriceHightLight,
  TransactionContainer,
  TransactionTable,
} from './styles'
import { Header } from '../../components/Header/index'
import { Summary } from '../../components/Summary/index'
import { SearchForm } from './components/SearchForm/index'
import { TransActionsContext } from '../../context/TransActionsContext'
import { dateFormatter, priceFormatter } from '../../utils/Formatters'

export function Transactions() {
  const { transactions } = useContext(TransActionsContext)
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <>
                  <tr>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHightLight variant={transaction.type}>
                        {transaction.type === 'outcome' && '-'}
                        {priceFormatter.format(transaction.price)}
                      </PriceHightLight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
