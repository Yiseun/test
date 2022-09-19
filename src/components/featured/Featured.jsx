import React from 'react'
import './featured.css'
import Carousel from 'react-material-ui-carousel'

const Featured = () => {

    // 캐러셀 이미지 모음
    const images = [
        {
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqU6rv4qlhK_Pc9CpjMK24y8S87LMEQDxo4ks8f_LqFQZdvG5w-TpUgXklr8MYrjgPdQ&usqp=CAU"
        },
        {
            src:"https://mblogthumb-phinf.pstatic.net/MjAyMTA3MDhfODAg/MDAxNjI1NzM3NTkyNjg1.b75ocyQA5lF-IT-SDnq7Q8a-H2L6KtEfXrP0plBDpAYg.h7QOZIYIdf5bJkOFRK45PKLACzuNa4DJSTwE0AOi_Wcg.JPEG.s_eeeul/IMB_ZhOcBT.jpg?type=w800"
        },
        {
            src:"https://content.skyscnr.com/m/65ef14bd5e130dca/original/1_0610_NaverPost-4days.png?resize=1800px:1800px&quality=100"
        },
        {
            src:"http://img4.tmon.kr/cdn3/deals/2019/10/31/2630872546/review_4ed77.jpg"
        },
    ]

  return (
    <>
        <div className="carouselContainer">
            <div className="carouselWrapper">
                <Carousel indicators={true} animation="slide">
                    {
                        images.map(
                            (image, i)=>
                            <div style={{width:'80%', height:"30vw", maxHeight:"400px" , marginLeft:'10%', marginRight:'10%'}}>
                                <img src={image.src} style={{width:'100%', objectFit:"cover", minHeight:'200px' ,maxHeight:'400px'}} />
                            </div>
                        )
                    }
                </Carousel>
            </div>
        </div>
    </>
  )
}

export default Featured