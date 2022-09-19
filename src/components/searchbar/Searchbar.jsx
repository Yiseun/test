import React, { useState } from 'react'
import "./searchbar.css"
import { format } from "date-fns"
import { DateRange } from 'react-date-range'
import { useNavigate } from 'react-router-dom'
// 달력 css
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css filenbp
import { Bed, CalendarMonth, Hail } from '@mui/icons-material'



const Searchbar = () => {

    // 지역
    const [destination, setDestination] = useState("");
    
    // 달력
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);
    // 인원 선택
    const [openOptions, setOpenOptions] = useState(false)
    const [options,setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    // navigate
    const navigate = useNavigate()

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
    
    // handleSearch
    const handleSearch = () => {
        navigate("/rooms",{state:{destination,date,options}});
        console.log({state:{destination,date,options}})
    }

  return (
    <div className='header'>
        <div className="headerContainer">
            <div className="headerSearch">
                {/* 지역 */}
                <div className="headerSearchItem">
                    <Bed className="headerIcon"/>
                    <input
                        type="text"
                        placeholder='어디로 가볼까요?'
                        className='headerSearchInput'
                        onChange={e=>setDestination(e.target.value)}
                    />
                </div>

                {/* 달력 */}
                <div className="headerSearchItem">
                    <CalendarMonth className="headerIcon"/>
                    <span onClick={()=>handleDate()} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} ~ ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                    />}
                </div>

                {/* 인원 */}
                <div className="headerSearchItem">
                    <Hail className="headerIcon"/>
                    <span onClick={()=>handleOptions()} className="headerSearchText">성인 {`${options.adult} 명, 유아 ${options.children} 명, 방 ${options.room} 개`}</span>
                    {openOptions && <div className="options">
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
                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>검색</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchbar