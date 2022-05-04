import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <PublicIcon className="icon"/>
            English
          </div>
          <div className="item">
            <NightlightOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ModeCommentOutlinedIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQH5RpZLFaeIHw/profile-displayphoto-shrink_800_800/0/1651180269895?e=1656547200&v=beta&t=0Wla5_3sWZfgvmMluGwOQA_V5NRVk11EozBUYxl7_BU" 
              alt=""
              className="avatar"
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar