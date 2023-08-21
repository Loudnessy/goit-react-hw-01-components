export const Transactions = ({items}) => {
    const {type, amount, currency} = items
    return <tr>
        <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
}