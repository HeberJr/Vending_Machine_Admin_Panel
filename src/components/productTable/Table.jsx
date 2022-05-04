import "./table.scss"
import { DataGrid } from '@mui/x-data-grid';
import { productColumns, productRows } from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = () => {

    const actionColumn = [
        {
            field:"action",
            headerName:"Action",
            width: 200,
            renderCell:() => {
                return (
                    <div className="cellAction">
                        < Link to="/products/test" style={{textDecoration:"none"}}>
                          <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
  return (
    <div className="datatable">
        <div className="datatableTitle">
          Add New Product
          < Link to="/products/new" className="link">
            Add New
          </Link>
        </div>
        <DataGrid
        rows={productRows}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable