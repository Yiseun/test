import { Button, Card, CardActions, CardContent, Container, Typography, Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardMyInfo from '../../components/dashboardmyinfo/DashboardMyInfo'
import Header from '../../components/header/Header'

const UserProfile = () => {

    // 해당주소로 보내기
    const navigate = useNavigate()
    function handleRoute(props){
        navigate(`/${props}`)
    }

  return (
    <Container maxWidth="lg">
        <Header/>
        <Box display="flex">
            <DashboardMyInfo />
            <Container className='DetailContainer'>
                <Container className='DetailInfo'>
                    <Typography component="h2" gutterBottom>
                        내 정보
                    </Typography>
                    <Card elevation="5">
                        <CardContent>
                            <Typography variant='body1' component="p">
                                이미지 내 정보가 간략하게 나타날 겁니다. 아이디, 이메일 비밀번호 닉네임
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={()=>{handleRoute('user/update')}}>전체 보기</Button>
                        </CardActions>
                    </Card>
                </Container>
                <Container className='DetailPosts'>
                    <Typography component="h2" gutterBottom>
                        내 게시글
                    </Typography>
                    <Card elevation="5">
                        <CardContent>
                            <Typography variant='body1' component="p">
                                내가 쓴 게시글들이 나타날 겁니다.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={()=>{handleRoute('user/myposts')}}>전체 보기</Button>
                        </CardActions>
                    </Card>
                </Container>
                <Container className='DetailLikes'>
                    <Typography component="h2" gutterBottom>
                        내가 쓴 댓글
                    </Typography>
                    <Card elevation="5">
                        <CardContent>
                            <Typography variant='body1' component="p">
                                내가 쓴 댓글들이 나타날 겁니다
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={()=>{handleRoute('user/myreply')}}>전체 보기</Button>
                        </CardActions>
                    </Card>
                </Container>
                <Container className='DetailLikes'>
                    <Typography component="h2" gutterBottom>
                        Liked Posts
                    </Typography>
                    <Card elevation="5">
                        <CardContent>
                            <Typography variant='body1' component="p">
                                내가 좋아요 누른 게시글들이 나타날 겁니다
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={()=>{handleRoute('user/mylikes')}}>전체 보기</Button>
                        </CardActions>
                    </Card>
                </Container>
            </Container>
        </Box>
    </Container>
  )
}

export default UserProfile