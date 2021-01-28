import React from "react"

const CustumerReview = (props) => {
    return (
    <div className="box">
        <div className="review-text">{props.review}</div>
        <div className="review-client-name">{props.client}</div>
    </div>
    )
}

export default CustumerReview