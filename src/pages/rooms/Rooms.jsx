import { Box, Button, Container, Modal, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import React from 'react'
import Footer from '../../components/footer/Footer';
import './rooms.css'
import Header from '../../components/header/Header';

const Rooms = () => {

  // 사진 모음
  const images = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKKhdBN9iwQOqHVgD3BS8Hg4eGls5IVxMuQ&usqp=CAU"
    },
    {
      src: "https://lh6.googleusercontent.com/proxy/Dc8MkFhK2ceZAoOTT2NDYtRL9zymTJLeVybstnWOw081TLgJaA96TUP3donOWdIMdz0tpb-3Mr6yxqqhQKXVzmMNQkrjlcc1Q-9ltKkN02VFXtPEui9oizm1_cshGc6nOWyzt4m0l469ksgd35beOPJ4B34a86w=w1080-k-no"
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/hotel/max700/269065983.jpg?k=ee2b3c7c26b063ab717344e1ed783aea011f529082c93e47df27c5bfa52c4f14&o="
    },
    {
      src: "https://www.gyeongju.go.kr/upload/content/thumb/20200427/47019530C1D04409BDFE29BD8A337C9A.jpg"
    },
    {
      src: "https://www.idaegu.co.kr/news/photo/201911/2019110801000242700014271.jpg"
    },
    {
      src: "https://pix10.agoda.net/hotelImages/523658/-1/768d52f766f09e1a8f2f33ec872ae50a.jpg?ca=23&ce=0&s=1024x768"
    },
  ];


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
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
      <div className="roomDetail">
        <div className='imageModal'>
          <Button onClick={handleOpen}>이미지 더보기</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Carousel indicators={true} animation="slide">
              {
                  images.map(
                      (image, i)=>
                      <div style={{width:'100%', justifyContent:'center'}}>
                          <img src={image.src} style={{justifyContent:'center',width:'100%',height:'30vw', minHeight:'200px' ,maxHeight:'400px'}} />
                      </div>
                  )
              }
              </Carousel>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                여기에 이미지 슬라이드를 이용한 이미지 넣기
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                왼쪽오른쪽으로 슥슥 움직이는 캐러셀~ 메인 슬라이드랑 같은 걸 쓰면 될듯
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className="roomImageContainer">
        호텔 슬라이드 이미지
          <img src="" alt="" className="roomImages" />
        </div>
        <div className="roomDetailContainer">
          <div className="roomDetailLeft">
            <h1 className="roomTitle">경주장</h1>
            <h3 className="roomSubtitle">밝고 쾌적한 환경의 객실 ROOM1</h3>
            <div className="roomAddress">
              위치아이콘
              <span className="roomAddressDetail">경북 경주시 태종로 801(황남동 801-1)</span>
            </div>
            <div className="roomDistance">경주역에서 300m</div>

            <div className="roomDesc">
            호텔 설명
            저희 경주장은 1985년 12월 25일 성탄절에 지어져 지금까지 우리 경주의 중심에서
            37년간 숙박업을 운영했습니다. 그간 쌓인 노하우로 고객님들께서 저희 경주장에서
            편안하게 쉬어갈 수 있도록 최선을 다하고 있습니다. 화이팅입니다!

            </div>
          </div>
          <div className="roomDetailRight">
            선택한 옵션(날짜와 인원 수 등 옵션)
            
            <h1 className="roomPrice">4,000,000,000 원 / 1박</h1>
          </div>
        오른쪽엔 달력과 선택했던 옵션 마지막에 총 가격
        밑으로 더 디테일한 설명과

        전체적으로 에어비앤비의 호텔설명란과 유사하면 괜찮을 것  같다
        </div>
      </div>
      <Footer/>
    </Container>
  )
}

export default Rooms