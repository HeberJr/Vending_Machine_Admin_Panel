import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CategoryIcon from '@mui/icons-material/Category';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import TimelineIcon from '@mui/icons-material/Timeline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            < Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">
                    Excalibur ©
                </span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                < Link to="/" style={{textDecoration:"none"}}>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                </Link>
                <p className="title">LISTS</p>
                 <Link to="/machines" style={{textDecoration:"none"}}>
                    <li>
                        <SmartToyIcon className="icon"/>
                        <span>Machines</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                        <CategoryIcon className="icon"/>
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <CreditCardIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <TimelineIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className="icon"/>
                    <span>Notications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <FavoriteBorderIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AssignmentIndIcon className="icon"/>
                    <span>Profile</span>
                </li>
                < Link to="/login" style={{textDecoration:"none"}}>
                    <li>
                        <ExitToAppIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </Link>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>

    </div>
  )
}

export default Sidebar