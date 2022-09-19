import { Container, Card, CardActions, Button, CardContent, TextField, Grid } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import Reply from '../../components/reply/Reply';
import { useLocation } from 'react-router-dom';

const PostDetail = () => {

    // board 에서 보낸 postId 를 받아오기
    const postProps = useLocation()
    // console.log(postId.state.postId);

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
        axios.get(`http://localhost:8080/post/${postProps.state.postId}`)
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
        
    // 게시글 좋아요
    const [likeClick, setLikeClick] = useState(false);

    function handleLikeClick(){
        setLikeClick(!likeClick)
    }

  return (
    <Container maxWidth="lg">
        <Header/>
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTopContainer">
                    <div className="postBoard">
                        게시글  경주 같은 경로 표시
                    </div>
                    <div className="postTitle">
                        게시글 제목
                    </div>
                    <div className="postTitleFooter">
                        <div className="postTime">
                            게시글 작성시간
                        </div>
                        <div className="psotViewCount">
                            조회수 표시
                        </div>
                        <div className="postLikeCount">
                            <a onClick={handleLikeClick}>
                                {likeClick ? <FavoriteIcon/> : <FavoriteBorderIcon/> }
                            </a>
                        </div>
                    </div>
                </div>
                <div className="postDetailContainer">
                    게시글내용
                </div>
                <Grid>
                <br/>게시판: {postBoard}<br/>
                <br/>게시글 제목: {postTitle}
                <br/>게시글 내용: {postContents}
                <br/>게시글 좋아요 수: {postLikeCount}
                <br/>게시글 작성자: {postUser}
                <br/>게시글 숙소리스트: {postStayList}
                <br/>게시글 관광지리스트: {postAttractionList}
                <br/>게시글 렌트카리스트: {postRentCarList}
                <br/>게시글 기차리스트: {postTrainList}

                </Grid>
                <Reply postId={postProps.state.postId}/>
                <div className="recommendPostContainer">
                    추천게시글
                </div>
            </div>
        </div>
    </Container>
  )
}

export default PostDetail