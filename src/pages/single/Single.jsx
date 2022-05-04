import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

export const Single = () => {
  return (
    <div className='single'>
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className="top">
              <div className="left">
                <div className="editButton">Edit</div>
                <h1 className="title">Information</h1>
                <div className="item">
                  <img
                    src="https://super.abril.com.br/wp-content/uploads/2018/08/site_2.jpg"
                    alt=""
                    className="itemImg"
                  />
                  <div className="details">
                    <h1 className="itemTitle">Box</h1>

                    <div className="detailItem">
                      <span className="itemKey">Responsible:</span>
                      <span className="itemValue">Jane</span>
                    </div>

                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">box@gmail.com</span>
                    </div>

                    <div className="detailItem">
                      <span className="itemKey">Localization:</span>
                      <span className="itemValue">Sinop, Shopping 1</span>
                    </div>

                    <div className="detailItem">
                      <span className="itemKey">Serial number:</span>
                      <span className="itemValue">12345-6</span>
                    </div>

                    <div className="detailItem">
                      <span className="itemKey">Country:</span>
                      <span className="itemValue">Brazil</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className="right">
                <Chart aspect={3/1} title="Machine Spending Last 6 Months (Revenue)"/>
              </div>
          </div>
          <div className="botton">
            <h1 className="title">Last Transactions</h1>
            <List />
          </div>
        </div>
    </div>
  )
}
 export default Single