import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import './hotPost.css'

const HotPost = () => {

    const hotPosts = [
        {
            src:"https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=4dbc2549dfba179004f2acdacceb65c7fb501f88823274ceb8397bde485209b7&o=",
            title:"Card1",
            article:"즐거운카드"
        },
        {
            src:"https://pix10.agoda.net/hotelImages/66178/0/a6814d8a47dd5b7870c568bd159033d1.jpg?ca=0&ce=1&s=1024x768",
            title:"Card2",
            article:"즐거운카드"
        },
        {
            src:"https://digital.ihg.com/is/image/ihg/intercontinental-phu-quoc-5630347934-2x1",
            title:"Card3",
            article:"즐거운카드"
        },
        {
            src:"https://images.prismic.io/villaplus/b94890cc-53d4-4003-880b-e511a1bcacb7_tiareII-1121_5143_villa1_3600.jpg",
            title:"Card4",
            article:"즐거운카드"
        },
        {
            src:"https://q-xx.bstatic.com/xdata/images/hotel/840x460/106918034.jpg?k=1425621819f3bb896ad090eaed5b65a838dc0fbac3bcdd38c7ee8de26038a4d9&o=",
            title:"Card5",
            article:"즐거운카드"
        }
    ];

  return (
    <div className="pList">
        {hotPosts.map(
            (post, i)=>
            <Card sx={{ width:"200px", display:"flex", margin:"10px"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="170px"
                        image={post.src}
                        alt="Hot Posts"
                        width="140px"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {post.article}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )}
    </div>
  )
}

export default HotPost