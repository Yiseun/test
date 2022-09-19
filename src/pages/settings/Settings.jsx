import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Container } from "@mui/material";
import Header from "../../components/header/Header";

export default function Settings() {

  // state 에 저장해야하나? 아무튼 그렇게 저장된 정보가
  // username, email. 에 들어가야함.
  // 그리고 현재 pw 란을 입력하게 해서 확인 한 번하고,
  // 새로운 pw 를 새로 만들어서 그걸로 pw 를 바꾸도록.

  return (
    <Container maxWidth="lg">
      <Header/>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            <span className="settingsTitleDelete">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="profileImg"
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle">edit</i>{" "}
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput"
              />
            </div>
            <label>이름</label>
            <input type="text" placeholder="Safak" name="name" />
            <label>이메일</label>
            <input type="email" placeholder="safak@gmail.com" name="email" />
            <label>현재 비밀번호</label>
            <input type="password" placeholder="현재 비밀번호" name="recentPassword" />
            <label>새로운 비밀번호</label>
            <input type="password" placeholder="새로운 비밀번호" name="newPassword" />
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
            
          </form>
        </div>
        <Sidebar />
      </div>
      <Footer/>
    </Container>
  );
}
