import React, { Component } from 'react'

export default function NewsCard(props) {
   
        return (
            <>
                <div className="card" style={{width : "18rem", margin : "20px"}}>
                    <img src={props.newsimagesrc} className="card-img-top" alt="..." />
                    <div className="card-body position-relative gap-3">
                        <h5 className="card-title">{props.newstitle}</h5>
                        <p className="card-text mb-4 ">{props.newstext && props.newstext.split(/[ ]+/g).length>30 ? props.newstext.split(/[ ]+/g).slice(20).join(" ")+ "..." : props.newstext }</p>
                        <a href={props.tonewsurl} target='_blank' className="btn btn-primary position-absolute bottom-0 mb-3">Go to page</a>
                    </div>
                </div>
            </>
        )
    
}
