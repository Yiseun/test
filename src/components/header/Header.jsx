import { Button, Grid, Menu, MenuItem, SvgIcon } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const Header = () => {

    const user = true;
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate()
    const handleHome =()=>{
        navigate("/")
    }

    const handleCommunity =()=>{
        navigate("/board");
    }

    const handleUserProfile =()=>{
        navigate("/user/profile");
    }

    const [isToggled, setIsToggled] = useState(false);
    const [userToggled, setUserToggled] = useState(false);

  return (
    <Grid container>
        <Grid item lg={1} xs={4} >
            {/* 로고 */}
            <Button
                id="basic-button"
                sx={{ display:{ xs:'none', sm:'block'}}}
            >
                <img src="image/logo.png" alt="logo" className="logo" height="50px" width="50px" onClick={handleHome} />        
            </Button>
            {/* 햄버거메뉴 */}
            <Button sx={{ display:{ xs:'block', sm:'none'}}}>
                <MenuIcon/>
            </Button>
        </Grid>
        <Grid item lg={10} xs={4} >
            <QuestionAnswerIcon fontSize='large' onClick={handleCommunity} sx={{ display:{ xs:'none', sm:'block'}}}/>
            <Button
                id="basic-button"
                sx={{ display:{ xs:'block', sm:'none'}}}
            >
                <img src="image/logo.png" alt="logo" className="logo" height="50px" width="50px" onClick={handleHome} />        
            </Button>
        </Grid>
        <Grid item lg={1} xs={4} >
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
        </Grid>
    </Grid>
  )
}

export default Header