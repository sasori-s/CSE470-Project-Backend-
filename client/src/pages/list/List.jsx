import './list.css'
import Header from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
// import Navbar from "src\components\navbar\Navbar"
// import Header from "src\components\header\Header"
import {format} from "date-fns"
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
// import { DateRange } from "react-date-range";
// import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch"


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [dates, setDates] = useState(location.state.dates)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)
  // console.log(location)

  const {data, loading, error, reFetch} = useFetch(`/hotels?city=${destination}&min=${min|| 0}&max=${max || 999}`)
  
  const handleCLick = () =>{
    reFetch()
  }

  return (
    // <div>List</div>
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input placeholder={destination} type="text" />
            </div>

            <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
              {/* <input type="text" /> */}
              <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")} `}</span>
              {openDate &&(
              <DateRange onChange={(item) => setDates([item.selection])}
              minDate={new Date()}
              ranges={dates}
              />
              )}
            </div>  
                <div className="lsItem">
                  <label htmlFor="">Options</label>
                  <div className="lsOptions">

                  <div className="lsOptionItem">
                    <span className="lsOptionText">Min price <small>per night</small>
                    </span>
                    <input type="number"
                    onChange={e=>setMin(e.target.value)}
                    className="lsOptionInput" />
                  </div>

                  <div className="lsOptionItem">
                    <span className="lsOptionText">Max price <small>per night</small>
                    </span>
                    <input type="number" 
                    onChange={e=>setMax(e.target.value)}
                    className="lsOptionInput" />
                  </div>
                  
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult 
                    </span>
                    <input type="number" className="lsOptionInput"
                    placeholder={options.adult} 
                    min={1}/>
                  </div>

                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children
                    </span>
                    <input type="number" className="lsOptionInput" 
                    placeholder={options.children}
                    min={0}/>
                  </div>

                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room
                    </span>
                    <input type="number" className="lsOptionInput"
                    placeholder={options.adult}
                    min={1} />
                    </div>
                  </div>                  
                </div>
                <button onClick={handleCLick}>Search</button>

          </div>
          <div className="listResult">
            {loading ? "loading" : <>
            {data.map(item =>(

              <SearchItem item={item} key={item._id}/>
              ))
          }
            </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default List