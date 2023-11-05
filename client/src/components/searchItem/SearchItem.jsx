import "./searchItem.css"

const SearchItem = () =>{
    return (
        <div className="searchItem">
            <img 
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1"
            alt=""
            className="siImg" 
            />
             <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport Taxi</span>
                <span className="siSubtitle">
                    Studio apartment with Air conditioning
                </span>
                <span className="siFeatures"> Entire studio - 1 bathroom - 1 full bed </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today</span>
             </div>
             <div className="siDetails"> 
                 <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                 </div>

                 <div className="siDetailTexts">
                        <span className="siPrice">$123</span>
                        <span className="siTaxOp">Includes taxes and fees</span>
                        <button className="siCheckButton" >See availability</button>
                    </div>
             </div>
        </div>
       
    )
}

export default SearchItem