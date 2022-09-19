import './App.css';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Rooms from './pages/rooms/Rooms';
import Roomlist from './pages/roomlist/Roomlist'
import UserProfile from './pages/userprofile/UserProfile.jsx'
import UserSetting from './pages/usersetting/UserSetting.jsx'
import Board from './pages/board/Board';
import Posting from './pages/posting/Posting';
import PostDetail from './pages/postdetail/PostDetail';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/> }/>
            {/* 로그인 페이지 */}
            <Route path="/login" element={<Login /> }/>
            {/* 유저 등록 페이지 */}
            <Route path="/user/regist" element={<Register /> }/>
            {/* 유저 프로필 보기*/}
            <Route path="/user/profile" element={<UserProfile /> }/>
            {/* 유저 프로필 수정*/}
            <Route path="/user/update" element={<UserSetting /> }/>
            {/* 객실 검색시 리스트 출력 */}
            <Route path='/rooms' element={<Roomlist/> }/>
            {/* 객실 클릭시 해당 객실 페이지로 */}
            <Route path="/rooms/:id" element={<Rooms />}/>
            {/* Community 클릭 시 게시판으로 */}
            <Route path='/board' element={<Board/>}/>
            {/* 게시판 이름 클릭 시 해당 게시판으로 */}
            <Route path='/board/:id' element={<Board/>}/>
            {/* 게시글 detail */}
            <Route path='/post/:id' element={<PostDetail />}  />
            {/* 게시글 등록 버튼 클릭 시 게시판 등록화면으로 */}
            <Route path='/posting' element={<Posting/>}/>


            {/* 주소를 잘못입력하면 경로가 잘못되었다는 NoMatch 라는 페이지도 만들자. */}

          </Routes>
        </BrowserRouter>
  );
}

export default App;