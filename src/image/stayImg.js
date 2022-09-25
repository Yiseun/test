const STAY_IMG = [
  "https://www.anyang.go.kr/DATA/bbs/266/thumb/t_20210618095500347oCYjBp.jpg",
  "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2epN/image/pEhqO5nh9bdAkeYrtEVYLMupMOo.jpg",
  "https://www.kayak.co.kr/rimg/himg/80/dc/27/revato-13901-73917-882192.jpg?width=1366&height=768&crop=true",
  "https://www.hotelscombined.co.kr/rimg/himg/d2/24/94/expediav2-745298-c4f8a1-888740.jpg?width=1366&height=768&crop=true",
  "https://tour.gb.go.kr/file/thumbnail2.do?file_physical=2020101111156143_3275.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0IJHVvXcImlPmoeph2E6mw97mlavs88HfihSMMg7jAPhRQ4W1PIcLnoFI2_LkC9t0PQU&usqp=CAU",
  "http://www.outdoornews.co.kr/news/photo/201801/25050_79042_2748.jpg",
  "https://img.hani.co.kr/imgdb/resize/2012/1129/135409139345_20121129.JPG",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/357066308.jpg?k=910082e1cbff3e219841ac63ca989c1eea43b94e7dcd932227ab0752eeadf310&o=&hp=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpKCoLUSLcQIH5mPHzKS1xSCVhvwdAl2tx1w&usqp=CAU",
  "https://tour.jecheon.go.kr/DATA/clturCntnts/20210419104813599PgD.jpg",
  "http://www.newsworker.co.kr/news/photo/201910/44563_44769_4958.jpg",
  "http://www.dailycc.net/news/photo/202106/652642_531143_1932.jpg",
  "https://pix10.agoda.net/hotelImages/4913437/-1/d3bc474d2746f6417db5dc7b097847f6.jpg?ca=9&ce=1&s=1024x768",
  "https://www.oakhouse.jp/images/desuka/guesthouse/img_guesthouse_05.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTiGTWo_umzk3f5J52dg6OEqLG9TKek7ZEA&usqp=CAU",
  "https://www.kbiohealth.kr/cnv/img/sub/room04.jpg",
  "https://korean.visitseoul.net/comm/getImage?srvcId=SEOULSTAY&parentSn=1031&fileTy=ROOMIMG&fileNo=1&thumbTy=M",
  "https://yaimg.yanolja.com/v5/2022/08/09/17/640/62f295e5166e02.43105628.jpg",
  "https://mblogthumb-phinf.pstatic.net/MjAyMDAxMDlfMTg0/MDAxNTc4NTYzNzQyNjY4.llpvPhE-6kQm2qjvNl5AoPApo590BKY2qto1pPTqq_Ag.igY04bwdLgWdowhlC1P15GRXRhZjTGhcMApE5h9oVycg.JPEG.1127qaz/1578563742237.jpg?type=w800",
  "https://www.danyang.go.kr/stay/attach/stay/20180503133817_4.JPG",
  "https://static.wixstatic.com/media/4cf1af_82a5d4a812f04e5da99d4445f7edef74~mv2_d_6240_3504_s_4_2.jpg/v1/fill/w_2500,h_1403,al_c/4cf1af_82a5d4a812f04e5da99d4445f7edef74~mv2_d_6240_3504_s_4_2.jpg",
];

export const makeStayImg = () => {
  return STAY_IMG[Math.floor(Math.random() * STAY_IMG.length)];
};
