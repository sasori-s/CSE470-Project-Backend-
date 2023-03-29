import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import useFetch from "../../hooks/useFetch"
import "./reserve.css"
import {SearchContext} from "../../context/SearchContext"

const Reserve = ({setOpen, hotelId}) => {
    
    var link = `http://localhost:8800/api/hotels/room/${hotelId}`
    const [selectedRooms, setSelectedRooms] = useState([])
    const{ data, loading, error} = useFetch(link)
    console.log(data)
    const {dates} = useContext(SearchContext)

    const getDatesInRange = (startDate, endDate) =>{
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime());

        // let list = []
        const dates = []

        while(date <= end){
            dates.push(new Date(date).getTime())
            date.setDate(date.getDate()+1)
        }
        return dates
    }

    console.log(getDatesInRange(dates[0].startDate, dates[0].endDate))

    const handleSelect = (e) =>{
        const checked = e.target.checked
        const value = e.target.value
        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter(item=> item !== value))
    }

    console.log(selectedRooms)

    const handleClick = () =>{

    }
  return (
    <div className="reserve">
        <div className="rContainer">
            <FontAwesomeIcon 
            icon={faCircleXmark}
            className="rClose"
            onClick={() => setOpen(false)}
            />
            <span>Select your rooms:</span>
            {data.map((item) =>(
                <div className="rItem">
                    <div className="rItemInfo">
                        <div className="rTitle">{item.title}</div>
                        <div className="rDesc">{item.desc}</div>
                        <div className="rMax">
                            Max people: <b>{item.maxPeople}</b>
                        </div>
                        <div className="rPrice">{item.price}</div>
                    </div>
                        {item.roomNumbers.map(roomNumbers=>(
                        <div className="room">
                            <label htmlFor="">{roomNumbers.number}</label>
                            <input type="checkbox"
                            value={roomNumbers._id}
                            onChange={handleSelect}
                            />

                    </div>
                        ))}
                </div>
            ))} 
            <button 
            onClick={handleClick}
            className="rButton">Reserve Now!</button>
        </div>
    </div>
  )
}

export default Reserve