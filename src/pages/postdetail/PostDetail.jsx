import { Container, Card, CardActions, Button, CardContent, TextField, Grid, Divider, createTheme, ThemeProvider, Typography, Box } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import Reply from '../../components/reply/Reply';
import { useLocation, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { BASE_URL } from '../../baseUrl';

const PostDetail = () => {

    const theme = createTheme({
        palette: {
            primary: {
            // Purple and green play nicely together.
            main: '#52057B',
            },
            secondary: {
            // This is green.A700 as hex.
            main: '#BC6FF1',
            },
            info:{
                main: '#892CDC',
            },
        },
        
    });

    // board 에서 보낸 postId 를 받아오기
    const postProps = useLocation()
    // console.log(postId.state.postId);
    const postId = postProps.state.postId

    const navigate = useNavigate()

    // 게시글 삭제 후 이동
    function handleRoute(props){
        navigate(`/${props}`)
    }

    // 게시글 데이터 가져오기
    const [postBoard, setPostBoard] = useState("")
    const [postTitle, setPostTitle] = useState("")
    const [postContents, setPostContents] = useState("")
    const [postLikeCount, setPostLikeCount] = useState(0)
    const [postUser, setPostUser] = useState("")
    const [postStayList, setPostStayList] = useState([])
    const [postAttractionList, setPostAttractionList] = useState([])
    const [postRentCarList, setPostRentCarList] = useState([])
    const [postTrainList, setPostTrainList] = useState([])

    useEffect(()=>{
        axios.get(`${BASE_URL}/api/auth/v1/post/${postProps.state.postId}`)
        .then((response)=>{
            console.log(response.data);
            setPostBoard(response.data.boardId);
            setPostTitle(response.data.title);
            setPostContents(response.data.contents);
            setPostLikeCount(response.data.likeCount);
            setPostUser(response.data.userId);
            setPostRentCarList(response.data.postRentCarList);
            setPostTrainList(response.data.postTrainList);
            setPostStayList(response.data.postStayList);
            setPostAttractionList(response.data.postAttractionList);
        })
        .catch(function(error){
            if (error.response) {
                // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                console.log("첫번째 에러");
                console.log(error.response.data);
            }
            else if (error.request) {
                // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                // Node.js의 http.ClientRequest 인스턴스입니다.
                console.log("두번째 에러");
                console.log(error.request);
            }
            else {
                // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                console.log("세번째 에러");
            console.log('Error', error.message);
            }
            console.log(error.config);
        })
    }, [])

    console.log(postLikeCount);

    // 게시글 삭제
    function deletePost(){
        axios.delete(`${BASE_URL}/api/auth/v1/post/${postProps.state.postId}`)
        .then((response)=>{
            console.log("삭제 했습니다.");
            console.log(response);
            handleRoute('board');
            console.log(postId);
        })
        .catch(function(error){
            if (error.response) {
              // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
              console.log("첫번째 에러");
            }
            else if (error.request) {
                // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                // Node.js의 http.ClientRequest 인스턴스입니다.
                console.log("두번째 에러");
                console.log(error.request);
            }
            else {
                // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                console.log("세번째 에러");
              console.log('Error', error.message);
            }
            console.log(error.config);
        })
    }

    const userData = jwt_decode(localStorage.getItem('token'));
        
    // 게시글 좋아요
    const [likeClick, setLikeClick] = useState(false);

    function handleLikeClick(){
        axios.get(BASE_URL+'/api/auth/v1/like/click/post',{
            params:{
                user:userData.id,
                post:postId,
            },
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        })
        .then(()=>{
            setLikeClick(!likeClick)
        })
    }

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <Header/>
            <div className="postContainer">
                <Box className="postWrapper" flexGrow={1}>
                    <Grid container columns={{xs:12}}>
                        <Grid item xs={12} sm={8} >
                            <div className="postTopContainer">
                                <Box className="postBoard" display='flex'>
                                    게시판 › <Typography color='info' fontWeight='bold' onClick={()=>{handleRoute(`board/${postBoard}`)}} >{postBoard}</Typography>
                                </Box>
                                <div className="postTitle">
                                    <Typography variant='h5' fontWeight='bold' >{postTitle}</Typography>
                                </div>
                                <div className="postTitleFooter">
                                    <div className="postTime">
                                        게시글 작성시간
                                    </div>
                                    <div className="postViewCount">
                                        조회수 표시
                                    </div>
                                    <Box className="postLikeCount" display='flex'>
                                        <span onClick={handleLikeClick}>
                                            {likeClick ? <FavoriteIcon color='info' onClick={()=>{setPostLikeCount(postLikeCount - 1)}} /> : <FavoriteBorderIcon color='info' onClick={()=>{setPostLikeCount(postLikeCount + 1)}} /> }
                                        </span>
                                        <Typography>{postLikeCount}</Typography>
                                    </Box>
                                    <Button className="postDeleteButton" onClick={deletePost} color='error'>
                                        삭제
                                    </Button>
                                </div>
                            </div>
                            <Divider/>
                            <Box>
                                <br/>게시판: {postBoard}
                                <br/>게시글 제목: {postTitle}
                                <br/>게시글 내용: {postContents}
                                <br/>게시글 좋아요 수: {postLikeCount}
                                <br/>게시글 작성자: {postUser}
                                <br/>게시글 숙소리스트: {postStayList}
                                <br/>게시글 관광지리스트: {postAttractionList}
                                <br/>게시글 렌트카리스트: {postRentCarList}
                                <br/>게시글 기차리스트: {postTrainList}
                                <br/>
                            </Box>
                            <Divider/>
                            <Reply postId={postProps.state.postId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className="recommendPostContainer">
                                추천게시글
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Container>
    </ThemeProvider>
  )
}

export default PostDetail