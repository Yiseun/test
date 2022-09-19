
const Profile = () => {
  return (
	<>
		<div class="profile-left">
			<div class="profile-img-wrap story-border"
				onclick="popup('.modal-image')">
				<form id="userProfileImageForm">
					<input type="file" name="profileImageFile" style="display: none;"
						id="userProfileImageInput" />
				</form>

				<img class="profile-image" src="#"
					onerror="this.src='/images/person.jpeg'" id="userProfileImage" />
			</div>
		</div>



		<div class="profile-right">
			<div class="name-group">
				<h2>TherePrograming</h2>

				<button class="cta" onclick="location.href='/image/upload'">사진등록</button>
				<button class="cta" onclick="toggleSubscribe(this)">구독하기</button>
				<button class="modi" onclick="popup('.modal-info')">
					<i class="fas fa-cog"></i>
				</button>
			</div>

			<div class="subscribe">
				<ul>
					<li><a href=""> 게시물<span>3</span>
					</a></li>
					<li><a href="javascript:subscribeInfoModalOpen();"> 구독정보<span>2</span>
					</a></li>
				</ul>
			</div>
			<div class="state">
				<h4>자기 소개입니다.</h4>
				<h4>https://github.com/codingspecialist</h4>
			</div>
		</div>
		</>
  )
}

export default Profile