import PropTypes from "prop-types";
import {
  Table,
  Thead,
  TD,
  TBody,
  TR,
  Items,
} from "./TransactionHistory.styled";

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Thead>
        <tr>
          <TD>Type</TD>
          <TD>Amount</TD>
          <TD>Currency</TD>
        </tr>
      </Thead>

      <TBody>
        {items.map(({ id, type, amount, currency }) => (
          <TR key={id}>
            <Items>{type}</Items>
            <Items>{amount}</Items>
            <Items>{currency}</Items>
          </TR>
        ))}
      </TBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
