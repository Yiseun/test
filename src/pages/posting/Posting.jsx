import { PhotoCamera } from '@mui/icons-material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Button, Container, IconButton, TextField, Modal, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header'
import './posting.css'

const Posting = () => {
    
    const navigate = useNavigate()

    // 게시글 data
    const [postTitle, setPostTitle] = useState("");
    const [postArticle, setPostArticle] = useState("");

    // 게시글 작성 후 게시판으로 이동. 후에 prop 를 넣어 전체 게시판이 아닌 해당 게시판으로 이동하도록.
    const handleAfterPosting = ()=>{
        navigate("/board")
    }

    // 게시글 data 보내기
    function postSubmit(){
        axios.post('http://localhost:8080/post', {
            title:postTitle,
            contents:postArticle,
            likeCount:0,
            boardId:1,
            userId:1
            }
        )
        .then(()=>{
            handleAfterPosting();
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
    }

    // Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

  return (
    <Container maxWidth="lg">
        <Header/>
        <div className="postingContainer">
            <div className="postingWrapper">
                <div className="postingItem">
                    <div className="postingTitle">게시글 등록</div>
                </div>
                <div className="postingItem">
                    <TextField
                        label="게시글 제목"
                        size="small"
                        onChange={(e)=>{setPostTitle(e.target.value);}}
                    />
                </div>
                <div className="postingItem">
                    {/* 사진 파일 추가 버튼 */}
                    <IconButton color="default" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>
                    {/* 코스 추가용 Modal */}
                    <Button onClick={handleOpen}>
                        <AddCircleOutlineIcon />
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalStyle}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                카테고리바, 검색창, 검색버튼, 검색결과  가 나올 곳
                            </Typography>
                        </Box>
                    </Modal>
                </div>
                <div className="postingItem">
                    <TextField
                        label="내용"
                        multiline
                        rows={10}
                        onChange={(e)=>{setPostArticle(e.target.value);}}
                    />  
                </div>
                <div className="postingItem">
                    <Button variant="contained" color="action" className="postingButton" onClick={postSubmit}>
                        게시글 등록
                    </Button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Posting