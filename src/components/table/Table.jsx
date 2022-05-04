import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
        { id: 1, product: 'Coke', customer: 'Jon', date: "1 March", amount: '$22', method: 'Card', status: 'Pending', img: "https://araujo.vteximg.com.br/arquivos/ids/4143343-1000-1000/07894900010015.jpg", },
        { id: 2, product: 'Chocolate', customer: 'Cersei', date: "1 March", amount: '$33', method: 'Card', status: 'Approved', img: "https://www.clubeextra.com.br/img/uploads/1/905/19804905.jpg", },
        { id: 3, product: 'Bullet', customer: 'Jaime', date: "1 March", amount: '$2', method: 'Card', status: 'Approved', img: "https://docemalu.vtexassets.com/arquivos/ids/187430/7078-3.jpg?v=637390574579070000", },
        { id: 4, product: 'Chocolate', customer: 'Arya', date: "1 March", amount: '$33', method: 'Card', status: 'Approved', img: "https://www.clubeextra.com.br/img/uploads/1/905/19804905.jpg", },
      ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image"/>
                        {row.product}
                  </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List