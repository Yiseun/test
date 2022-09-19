import "./topbar.css";
import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, Menu, MenuItem, SvgIcon } from "@mui/material";
import { DirectionsCar, Train } from "@mui/icons-material";

export default function Topbar() {
  const user = true;

  //navigatge
  const navigate = useNavigate()

  // 버튼 누르면 해당 주소로 route
  const handleHome =()=>{
    navigate("/");
  }

  const handleUserProfile =()=>{
    navigate("/user/profile");
  }

  const handleCommunity =()=>{
    navigate("/board");
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="top">
      <div className="topLeft">
        <GitHubIcon className="topLeftItem" color="disabled" onClick={()=>window.open('https://github.com/Manidle')}/>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem" onClick={handleHome}><HomeIcon />  </li>
          <li className="topListItem" onClick={handleCommunity}><ForumIcon /></li>
          <li className="topListItem" >
            <SvgIcon >
                <path fill="currentColor" d="M16,6H6L1,12V15H3A3,3 0 0,0 6,18A3,3 0 0,0 9,15H15A3,3 0 0,0 18,18A3,3 0 0,0 21,15H23V12C23,10.89 22.11,10 21,10H19L16,6M6.5,7.5H10.5V10H4.5L6.5,7.5M12,7.5H15.5L17.46,10H12V7.5M6,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z" />
            </SvgIcon>
          </li>
          <li className="topListItem" ><Train /></li>

        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <ul className="topList">
            <div className="topListItem">
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <img
                  className="topImg"
                  src="https://avatars.githubusercontent.com/u/102516088?v=4"
                  alt=""
                />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleUserProfile}>내 정보</MenuItem>
                <MenuItem onClick={handleClose}>내가 쓴 글</MenuItem>
                <MenuItem onClick={handleClose}>로그아웃</MenuItem>
              </Menu>
            </div>
          </ul>
        ) : (
          <ul className="topList">
            <li className="topListItem">
                LOGIN
            </li>
            <li className="topListItem">
                REGISTER
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
