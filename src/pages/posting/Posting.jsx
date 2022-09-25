import { PhotoCamera } from '@mui/icons-material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Button, Container, IconButton, TextField, Modal, Typography, Snackbar, ThemeProvider, createTheme, Stack } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CategoryBar from '../../components/CategoryBar';
import Header from '../../components/header/Header'
import './posting.css'
import jwt_decode from 'jwt-decode';
import { BASE_URL } from '../../baseUrl';

const Posting = () => {

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
    
    const navigate = useNavigate()

    // 게시글 data
    const [postTitle, setPostTitle] = useState("");
    const [postArticle, setPostArticle] = useState("");

    // 게시글 작성 후 게시판으로 이동. 후에 prop 를 넣어 전체 게시판이 아닌 해당 게시판으로 이동하도록.
    function handleAfterPosting(){
        handleSnackbar()
    }

    const userData = jwt_decode(localStorage.getItem('token'));

    // 게시글 data 보내기
    function postSubmit(props){
        axios.post(`${BASE_URL}/api/auth/v1/board/${props}/post/register`, {
            title:postTitle,
            contents:postArticle,
            like_count:0,
            read_count:0,
            board_id:props,
            user_id:userData.id,
            address:"1",
            detailAddress:"1",
            },{
                headers: {
                    'Authorization': `${localStorage.getItem('token')}`,
                    "Content-Type": "application/json; charset=UTF-8",
                }
            }
        )
        .then(()=>{
            handleAfterPosting();
        })
        .then(()=>{
            setTimeout(() => {
                navigate('/board')
            }, 2000);
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
    const [openModal, setOpenModal] = React.useState(false);
    const handleModal = () => setOpenModal(!openModal);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const [stateSnackbar, setStateSnackbar] = React.useState({
        openSnackbar: false,
        vertical: 'top',
        horizontal: 'center',
        });

    const { vertical, horizontal, openSnackbar } = stateSnackbar;
    const handleSnackbar = () => {
        setStateSnackbar({ ...stateSnackbar, openSnackbar: !openSnackbar });
    };

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <Snackbar
                color='info'
                anchorOrigin={{ vertical, horizontal }}
                open={openSnackbar}
                onClose={handleSnackbar}
                message="게시글 등록에 성공했습니다!"
                key={vertical + horizontal}
            />
            <Header/>
            <Box className="postingContainer" >
                <div className="postingWrapper">
                    <Stack className="postingItem">
                        <Typography className="postingTitle" variant='h6' fontWeight='bold' margin='5px'>게시글 등록</Typography>
                    </Stack>
                    <Stack className="postingItem" padding='5px' >
                        <TextField
                            variant='standard'
                            label="게시글 제목"
                            size="small"
                            onChange={(e)=>{setPostTitle(e.target.value);}}
                        />
                    </Stack>
                    <Box className="postingItem" display='flex' padding='5px'>
                        {/* 사진 파일 추가 버튼 */}
                        <IconButton color="default" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera color='secondary'/>
                        </IconButton>
                        {/* 코스 추가용 Modal */}
                        <IconButton onClick={handleModal}>
                            <AddCircleOutlineIcon color='secondary'/>
                        </IconButton>
                        <Modal
                            open={openModal}
                            onClose={handleModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={modalStyle}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" justifyContent='center' display='flex' fontWeight='bold' >
                                    새로운 항목 추가하기
                                </Typography>
                                <CategoryBar/>
                            </Box>
                        </Modal>
                    </Box>
                    <Stack className="postingItem" padding='5px'>
                        <TextField
                            label="내용"
                            multiline
                            rows={10}
                            onChange={(e)=>{setPostArticle(e.target.value);}}
                        />  
                    </Stack>
                    <Stack className="postingItem" padding='5px' >
                        <Button
                            variant="contained"
                            color="info"
                            className="postingButton"
                            onClick={()=>{postSubmit('1')}}
                        >
                            게시글 등록
                        </Button>
                    </Stack>
                </div>
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default Posting