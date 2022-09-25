const CAR_IMG = [
  "https://www.hyundai.com/contents/repn-car/side-45/sonata-hybrid-23my-45side.png",
  "https://www.hyundai.com/contents/repn-car/side-45/avante-22my-45side.png",
  "https://file.mk.co.kr/meet/yonhap/2021/05/30/image_readtop_2021_518799_0_135812.jpg",
  "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202204/13/e06c5505-ebb9-43d0-b787-0fc8d462d496.jpg",
  "https://img.khan.co.kr/news/2021/12/06/l_2021120601000752000063231.jpg",
  "https://img.hankyung.com/photo/202110/ZA.27652040.1-1200x.jpg",
  "https://www.hyundaicard.com/docfiles/resources/mo/images/ben/img_bene_car.png",
  "https://www.kia.com/content/dam/kwcms/kr/ko/images/byo/car_sorento_hev_cr5.png",
  "https://www.hyundai.com/contents/repn-car/side-45/kona-22my-45side.png",
  "https://file.newswire.co.kr/data/datafile2/thumb_640/2021/07/3554238800_20210709103022_2517669736.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsENlxBQiX6W3FofBYLzSIGjfdeztBlMv2Ag&usqp=CAU",
  "https://mb.hansung.co.kr/hsimg/NewCarClass/NewCar637402838796363581_0.png",
  "https://benz-all.com/wp-content/uploads/2022/07/GLE%EC%BF%A0%ED%8E%98%ED%9D%B0%EC%83%89%EC%A0%84%EB%A9%B4-1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnvNDgHpsINQ417ar5OReFXj78TVzeIpQMRA&usqp=CAU",
  "https://t1.daumcdn.net/cfile/tistory/2134EE4856F5604C16",
];

export const makeCarImg = () => {
  return CAR_IMG[Math.floor(Math.random() * CAR_IMG.length)];
};

export const makeOrderCarImg = (i, n) => {
  return CAR_IMG[Math.floor(i % n)];
};
