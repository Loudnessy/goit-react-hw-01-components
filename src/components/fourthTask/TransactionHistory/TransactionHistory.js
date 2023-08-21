import { Transactions } from "../Transaction/Transactions"
import { TableTransactionsStyled, TableStyled } from "./TransactionHistory.styled"

export const TransactionHistory = ({items}) => {
  return <TableStyled>
        <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <TableTransactionsStyled>
{items.map(transaction => <Transactions key={transaction.id} items={transaction}></Transactions>)}
  </TableTransactionsStyled>
    </TableStyled>
}