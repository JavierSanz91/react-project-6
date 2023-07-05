import React from "react"
import icon from "../images/icon.png"

export default function Spot(props) {
    return (
        <div className="container">
            <div className="image-block">
                <img className="image" src={props.image} />
            </div>
        <div  className="right-block">   
            <div>
                <div className="location-block">
                    <img className="icon" src={icon}/>
                    <p className="country">{props.country}</p>
                    <p className="gmaps">{props.gmaps}</p>
            </div>
            <div className="title-block">
                <h2 className="title">{props.title}</h2>
            </div>
            <div className="dates-block">
                <p className="startDate">{props.startDate} -</p>
                <p className="endDate"> {props.endDate}</p>
            </div>
            <div className="description-block">
                <p className="description">{props.description}</p>
            </div>
        </div>

            </div>
        </div>

    )
}