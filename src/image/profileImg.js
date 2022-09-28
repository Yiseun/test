const PROFILE_IMG = [
  "https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419",
  "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
  "https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg",
  "https://play-lh.googleusercontent.com/-u-oG-Ni_pco9h7zc3CQl-lFkKJjztO3RGZMjnbaDiznnbXoMQZYUjITHN0BVxYHBg=w240-h480-rw",
  "https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg",
  "https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg",
  "https://img8.yna.co.kr/mpic/YH/2021/09/03/MYH20210903021800038_P4.jpg",
  "https://file.mk.co.kr/meet/neds/2021/03/image_readtop_2021_226630_16153348334567415.jpg",
  "http://res.heraldm.com/content/image/2021/03/09/20210309000865_0.jpg",
  "https://w.namu.la/s/31fb9821aa091d99e55e0850c52315513964b2ce35151b9447f917332a3306804071a0bb70b13f0c2b0917cded87685ee82ef256ba377316e8f4254b5831f1bd09e3465a067cf9e0d1edcc513565bbd1a0c80d89d071a4c14ea30b8d796998f5",
  "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202206/30/c1cbae2b-1449-4227-a17f-78507c9b9bd4.jpg",
  "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202206/21/ea0a7525-6224-4956-b39e-7ab1f66673e1.jpg",
  "https://w.namu.la/s/c451911a005bf6c635b23780af015c08c96a3203a60c8a5daed247daba8b61c3ab5d107adc3b653f6725f0967990f7b439381a6b3f3542805a7fac3b61445e0cad18f2905a760f4f57256e399dba112e3a713a0063568c18a54b3568925b47a3ca49857ac3a2fd2e6af31f17304e13ed",
  "http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg",
  "https://product.cdn.cevaws.com/var/storage/images/_aliases/reference/media/feliway-2017/images/kor-kr/1_gnetb-7sfmbx49emluey4a/6341829-1-kor-KR/1_gNETb-7SfMBX49EMLUeY4A.jpg",
  "http://dimg.donga.com/ugc/CDB/WEEKLY/Article/5b/b3/22/85/5bb32285000ed2738de6.jpg",
  "https://img.seoul.co.kr/img/upload/2022/03/19/SSI_20220319133828_O2.jpg",
  "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
  "https://images.mypetlife.co.kr/content/uploads/2021/10/19151330/corgi-g1a1774f95_1280-1024x682.jpg",
  "https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_262/%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg",
  "https://images.mypetlife.co.kr/content/uploads/2018/12/09154907/cotton-tulear-2422612_1280.jpg",
];

export const makeProfileImg = () => {
  return PROFILE_IMG[Math.floor(Math.random() * PROFILE_IMG.length)];
};
export const makeOrderProfileImg = (i) => {
  return PROFILE_IMG[Math.floor(i % PROFILE_IMG.length)];
};
