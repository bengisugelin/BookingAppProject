import React from "react";
import "./header.css"
import Navbar from "../navbar/Navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook, faBed, faCab, faCalendar, faCalendarDays, faCar, faLocation, faMap, faPerson, faPlaceOfWorship, faPlane} from "@fortawesome/free-solid-svg-icons";

const Header = ()=> {
    return(
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faLocation} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                      <FontAwesomeIcon icon={faCab} />
                      <span>Airport taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">Find your next stay</h1>
                <p className="headerDesc">Search low prices on hotels, homes and much more...</p>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input 
                        type="text" 
                        placeholder="Where are you going?"
                        className="headerSearchInput"  />
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span className="headerSearchText">date to date</span>
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className="headerSearchText">2 adults 2 children 1 room</span>
                    </div>

                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>
            </div>
        </div>
      
    )
}
export default Header;