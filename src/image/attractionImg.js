const ATTRACTION_IMG = [
  "https://www.lottehotel.com/content/dam/lotte-hotel/rf/g-0811.jpg.thumb.768.768.jpg",
  "https://file.mk.co.kr/meet/neds/2020/12/image_readtop_2020_1263248_16074725144464348.jpg",
  "https://cdn.beminor.com/news/photo/201807/12415_25775_3536.jpg",
  "https://img.khan.co.kr/news/2016/01/29/l_2016012901004112400332741.jpg",
  "http://tong.visitkorea.or.kr/cms/resource/49/1075249_image2_1.jpg",
  "https://blog.kakaocdn.net/dn/JPp6e/btqZ1JrQg73/kkN5I24jPhxSF0L7kKWUuk/img.jpg",
  "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/20/00/a2000479/img/basic/a2000479_main.jpg?20201224161228&q=80&rw=750&rh=536",
  "https://www.sjpost.co.kr/news/photo/202010/54700_51372_936.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXUFKi6livnEgdZvO-s3yLd-jsypbnwvGGul4R9Wxz0f_GAVTomHVtOsDR_kQyoCyW88&usqp=CAU",
  "http://image.newsis.com/2018/08/22/NISI20180822_0000190316_web.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7PZdmqNi9K3bH9cGo5GllN6kfnnPlnuWaUwfArtznGjTZSaRuVYVvTCTcn_3z5wWQfkA&usqp=CAU",
  "https://cdn.mhns.co.kr/news/photo/202206/529439_641018_656.jpg",
  "https://www.gptour.go.kr/multi/uploadFile/20210615142115.jpg",
  "https://www.hygn.go.kr/portal/sanglim/img/sub/03644_img02.jpg",
  "https://www.sjpost.co.kr/news/photo/202010/54700_51372_936.jpg",
  "http://www.dailycc.net/news/photo/202101/631964_512626_5532.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZhvkmX9V7W68aYwFr5fy5PJyF8oZo1Pkkzfi2VKolothmqjmr8cybCe-dqmLgYbySb0&usqp=CAU",
  "https://www.gokseong.go.kr/tour/images/tour_mobile/main/slider_taeansa.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cK7ZV9RnuNJq0zsbE3pft2ykNKABpSlGTXG_iIkU4I7yVEfld7qWosJMNJtHCNHcvA8&usqp=CAU",
];

export const makeAttractionImg = () => {
  return ATTRACTION_IMG[Math.floor(Math.random() * ATTRACTION_IMG.length)];
};

export const makeOrderAttractionImg = (i) => {
  return ATTRACTION_IMG[Math.floor(i % ATTRACTION_IMG.length)];
};
