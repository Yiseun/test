import { CalendarMonth } from '@mui/icons-material';
import { format } from "date-fns"
import { Box, Button, Container, createTheme, ListItem, Stack, TextField, ThemeProvider, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import CategoryBar from '../../components/CategoryBar';
import Header from '../../components/header/Header';
import { BASE_URL } from '../../baseUrl';


const SearchTrain = () => {
    const theme = createTheme({
        palette: {
            primary: {
                // 가장 어두운 보라
            main: '#52057B',
            },
            secondary: {
                // 가장 밝은 보라
            main: '#BC6FF1',
            },
            info:{
                // 중간 보라
                main: '#892CDC',
            },
        },
    });

    // 기차 리스트
    const [trainLists, setTrainList] = useState([])

    function searchAllTrain(){
        axios.get(BASE_URL+'/api/auth/v1/list/train',{
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                "Content-Type": "application/json; charset=UTF-8",
            }
        })
        .then((response)=>{
            setTrainList(response.data);
            console.log(trainLists);
        })
    }

    useEffect(()=>{
        searchAllTrain();
    },[])

    // 전체 조회에서 사용될 검색어
    const [searchTrain, setSearchTrain] = useState("")

    // 출발지 도착지 검색어
    const [searchStartPoint, setSearchStartPoint] = useState('')
    const [searchEndPoint, setSearchEndPoint] = useState('')


    function searchFilterTrainStartEnd(){
        axios.get(BASE_URL+'/api/auth/v1/filter/list/train/dep/arr',{
            endPoint:{searchEndPoint},
            startPoint:{searchStartPoint},
        })
        .then((response)=>{
            setTrainList(response.data);
            console.log(trainLists);
        })
        .catch((error)=>{
            console.log(error.response);
            console.log(searchStartPoint);
            console.log(searchEndPoint);
        })
    }

    // 달력
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleDate = () => {
        setOpenDate(!openDate)
    }

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth='lg'>
            <Header/>
            <CategoryBar category='train'/>
            <Stack display='flex'>
                <TextField onChange={(e)=>{setSearchTrain(e.target.value)}}/>
                <TextField placeholder='출발지' onChange={(e)=>{setSearchStartPoint(e.target.value)}}/>
                <TextField placeholder='도착지' onChange={(e)=>{setSearchEndPoint(e.target.value)}}/>
                {/* 달력 */}
                <div className="trainSearchItem">
                    <CalendarMonth className="trainIcon"/>
                    <Stack
                        onClick={()=>handleDate()}
                        className="trainSearchText"
                    >
                        {`${format(date[0].startDate, "MM/dd/yyyy")} ~ ${format(date[0].endDate, "MM/dd/yyyy")}`}
                    </Stack>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                    />}
                </div>
                <Button onClick={()=>{searchFilterTrainStartEnd()}}>검색</Button>
            </Stack>
            <Box>
                {trainLists.legth === 0 ?
                    <Box>기차가 없습니다.</Box> :
                    trainLists.map((trainList)=>(
                        <ListItem display='flex' justifyContent='space-between' key={trainList.trainId}>
                            <Typography>기차 출발지: {trainList.startPoint}</Typography>
                            <Typography>기차 지역: {trainList.endPoint}</Typography>
                            <Typography>출발시간: {trainList.departureTime}</Typography>
                            <Typography>도착시간: {trainList.arriveTime}</Typography>
                            <Typography>가격: {trainList.trainPrice}</Typography>
                            <Typography>좋아요 수: {trainList.likeCount} </Typography>
                        </ListItem>
                    ))
                }
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default SearchTrain