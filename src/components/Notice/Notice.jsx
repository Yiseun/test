import { Container } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Topbar from '../topbar/Topbar'

const Notice = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [notice, setNotice] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/post')
        .then((response)=>{
            setNotice(response.data)
            console.log(notice);
        });
    }, [])

  return (
    <Container maxWidth="lg">
        {notice.map((notice)=>(
                <div>
                    <div>{notice.title}</div>
                    <div>{notice.contents}</div>
                    <div>{notice.likecount}</div>
                    <div>{notice.user}</div>
                </div>
            )
        )}
    </Container>
  )
}

export default Notice