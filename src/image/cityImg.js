const CITY_IMG = [
  "https://images.mypetlife.co.kr/content/uploads/2018/12/09154907/cotton-tulear-2422612_1280.jpg",
  "https://w.namu.la/s/06bee9805286154ad08b48e3073da5fc55cd12ee4cd87bdc65424258af6675f3bb063aadf568278eeb63b883710ab0de64c63070cd64b17a95e87d986bb3770d48e327bb53e581ffde5ee5cf9f25dfe8063c584cf6f5d1c5541a70a2d50f00fc1d4b4e3d1f1965a9c15c52de85c515e5",
  "https://cdn.gjdream.com/news/photo/202202/613182_213090_365.jpg",
  "https://cdn.namdonews.com/news/photo/202107/652171_302173_2116.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7d/KBC_summit2019.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkt1aJGwSgp0_vkC-c7Li0cckpWGwYmTyAQw&usqp=CAU",
  "https://www.lottehotelmagazine.com/resources/d434c17f-5ac2-4b98-8021-f3bdd5cc26f4_img_TRAVEL_busan_detail01.jpg",
  "https://res.klook.com/image/upload/Mobile/City/g9ynzkjz1nsrvhrjml4j.jpg",
  "https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel",
  "https://dimg.donga.com/wps/NEWS/IMAGE/2020/10/29/103702715.3.jpg",
  "https://youimg1.tripcdn.com/target/1A07170000011rv1964E6_C_640_320_R5_Q70.jpg_.webp?proc=source%2Ftrip",
  "https://t1.daumcdn.net/cfile/tistory/99D87B445D1C33E802",
  "http://www.hotelrestaurant.co.kr/data/photos/20211040/art_16335745814893_2cb411.jpg",
  "https://jmagazine.joins.com/_data/photo/2019/08/1966370937_De6vMmbQ_EC9DB4EBAFB8ECA780_2.jpg",
  "https://t1.daumcdn.net/cfile/tistory/25348847554567DC15",
  "https://t1.daumcdn.net/cfile/tistory/1742D7514DA6FEF44C",
  "https://img.hankyung.com/photo/202203/01.28917230.1.jpg",
  "https://a.cdn-hotels.com/gdcs/production102/d1023/e3c18663-14e2-49e3-b9f0-bd7a029a661f.jpg",
  "https://youimg1.tripcdn.com/target/0106j1200093s90ih82FB_C_640_320_R5_Q70.jpg_.webp?proc=source%2Ftrip",
  "https://a.cdn-hotels.com/gdcs/production116/d556/c3543285-e473-4196-b8f7-c7ca9d3c9457.jpg?impolicy=fcrop&w=800&h=533&q=medium",
  "https://www.gyeongju.go.kr/upload/content/thumb/20200629/69BC5CC18DF4455C8B4B9F14A3BB9009.jpg",
  "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202105/12/7794c38c-5365-4e38-8e67-d2142cac453e.jpg",
  "https://www.anyang.go.kr/DATA/bbs/266/thumb/t_20210618095500347oCYjBp.jpg",
];

export const makeCityImg = () => {
  return CITY_IMG[Math.floor(Math.random() * CITY_IMG.length)];
};
