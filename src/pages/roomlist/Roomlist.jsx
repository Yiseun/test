import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import './roomlist.css'
import { DateRange } from 'react-date-range'
import { format, setDate} from 'date-fns'
import RoomItem from '../../components/roomitem/RoomItem'
import { Bed, CalendarMonth, Hail } from '@mui/icons-material'
import { Container } from '@mui/material'
import Header from '../../components/header/Header'


const Roomlist = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] =useState(false)
    const [options, setOptions] =useState(location.state.options)

    //navigate
    const navigate = useNavigate()

    // handleSearch 검색
    const handleSearch = () => {
        navigate("/rooms",{state:{destination,date,options}});
        console.log({state:{destination,date,options}})
    } 

    // 인원 선택
    const [openOptions, setOpenOptions] = useState(false)

    // 증가 감소 함수
    const handleOption = (name, operation) =>{
        setOptions(prev=>{return{
            ...prev, [name]: operation === "i" ? options[name] +1 : options[name] -1,
        }})
    }

    // open 하면 다른 건 닫히게
    const handleDate = () => {
        setOpenDate(!openDate)
        openOptions ? setOpenOptions(!openOptions) : setOpenOptions(openOptions)
    }

    const handleOptions = () => {
        setOpenOptions(!openOptions)
        openDate ? setOpenDate(!openDate) : setOpenDate(openDate)
    }

    
  return (
    <Container maxWidth="lg">
        <Header/>
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listRooms">
                    <h1 className="listRoomsTitle">지금 가장 인기있는 숙소</h1>
                    <div className="listRoomsItemContainer">
                        <RoomItem />
                        <RoomItem />
                        <RoomItem />
                    </div>
                </div>
                {/* 검색바 */}
                <div className="listSearch">
                    <div className="listHeaderSearch">
                        {/* 지역 */}
                        <div className="listHeaderSearchItem">
                            <Bed className="listHeaderIcon"/>
                            <input
                                type="text"
                                placeholder={destination}
                                className='listHeaderSearchInput'
                                onChange={e=>setDestination(e.target.value)}
                            />
                        </div>

                        {/* 달력 */}
                        <div className="listHeaderSearchItem">
                            <CalendarMonth className="listHeaderIcon"/>
                            <span onClick={()=>handleDate()} className="listHeaderSearchText">{`${format(date[0].startDate, "yy.MM.dd")} ~ ${format(date[0].endDate, "yy.MM.dd")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="listDate"
                                minDate={new Date()}
                            />}
                        </div>

                        {/* 인원 */}
                        <div className="listHeaderSearchItem">
                            <Hail className="listHeaderIcon"/>
                            <span onClick={()=>handleOptions()} className="listHeaderSearchText">여행 인원</span>
                            {openOptions && <div className="listOptions">
                                <div className="optionItem">
                                    <span className="optionText">성인</span>
                                    <div className="optioncounter">
                                        <button disabled={options.adult <= 1} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                                        <span className="optioncounterNumber">{options.adult}</span>
                                        <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">유아</span>
                                    <div className="optioncounter">
                                        <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                                        <span className="optioncounterNumber">{options.children}</span>
                                        <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">방 갯수</span>
                                    <div className="optioncounter">
                                        <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                                        <span className="optioncounterNumber">{options.room}</span>
                                        <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>

                        {/* 검색 버튼 */}
                        <div className="listHeaderSearchItem">
                            <button className="listHeaderButton" onClick={handleSearch}>검색</button>
                        </div>
                    </div>
                </div>{/* 검색 바 끝 */}

                <div className="listRooms">
                    <h1 className="listRoomsTitle">객실</h1>
                    <div className="listRoomsItemContainer">
                        <RoomItem />
                        <RoomItem />
                        <RoomItem />
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Roomlist