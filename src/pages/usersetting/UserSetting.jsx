import React from 'react'
import './userSetting.css'
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import Header from '../../components/header/Header'
import DashboardMyInfo from '../../components/dashboardmyinfo/DashboardMyInfo'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {

  const navigate = useNavigate()
  function handler(props){
    navigate(`${props}`)
  }

  // user
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userImg, setUserImg] = useState("")
  const [email, setEmail] = useState("");

  // 정보변경 axios.patch
  // 정보변경 후 my info 페이지로 이동

  // 회원 정보 변경
  function updateUserProfile(id){
    axios.put(`http://localhost:8080/user/${id}`,{
      loginId:userId,
      password:password,
      nickname:userNickname,
      userInfoDTO:{
          profileImg:userImg,
          email:email,
      }
    })
    .then(()=>{
      handler("/user/profile")
    })
    .catch(function(error){
      console.log(error);
      console.log(id);
    })
  }

  // 회원 정보 삭제(탈퇴)
  function deleteUser(id){
    axios.delete(`http://localhost:8080/user/${id}`)
    .then(()=>{
      handler("")
    })
    .catch(function(error){
      console.log(error);
      console.log(id);
    })

  }

  return (
    <Container maxWidth="lg">
      <Header/>
      <Box display='flex' >
        <DashboardMyInfo />
        <Container sx={{ display:{ xs:'inline', sm:'flex'}, justifyContent:'center', alignItems:'center'}}>
          <Box>
          </Box>
          <Box>
            <Box sx={{
              display:{xs:'block', sm:'flex'},
              justifyContent:'center',
              alignItems:'center',
              backgroundColor:'lightgray'
            }}>
              <Stack sx={{
                      display:'flex', 
                      flexDirection:'column', 
                      justifyContent:'center', 
                      alignItems:'center',
                      margin:'10px'
                    }}>
                <Typography>닉네임</Typography>
                <div className="img">이미지</div>
                <Button>프로필 사진 업데이트</Button>
                <Button>프로필 사진 삭제</Button>
              </Stack>
              <Stack sx={{
                      margin:'10px'
                    }}>
                  <TextField id="standard-basic" label="아이디"
                              variant="standard"
                              onChange={(e)=>{setUserId(e.target.value);}}
                              margin="normal"
                              size="small"
                              type='text' />
                  <TextField id="standard-basic" label="비밀번호"
                              variant="standard"
                              onChange={(e)=>{setPassword(e.target.value);}}
                              margin="normal"
                              size="small"
                              type='password' />
                  <TextField id="standard-basic" label="닉네임"
                              variant="standard"
                              onChange={(e)=>{setUserNickname(e.target.value);}}
                              margin="normal"
                              size="small"
                              type='text' />
                  <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <TextField id="standard-basic" label="이메일"
                                variant="standard"
                                onChange={(e)=>{setEmail(e.target.value);}}
                                margin="normal"
                                size="small"
                                type='email' />
                    <Button >이메일 변경</Button>
                  </Box>
                  <Button onClick={()=>updateUserProfile(5)}>정보 변경</Button>
                  <Button onClick={()=>deleteUser(4)}>회원 탈퇴</Button>
              </Stack>
            </Box>
          </Box>
        </Container>
       </Box>
    </Container>
  )
}

export default UserProfile