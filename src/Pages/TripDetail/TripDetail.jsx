import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import "./TripDetail.css"

export default function TripDetail() {

    const params = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    const search = location.state?.search || ""


    return (
        <div className="van-detail-container container">
            <Link
                to={`..${search}`} 
                relative="path"
                className="back-button ff-sans-cond  text-white letter-spacing-2"
            >&larr; <span>Back to Destinations</span></Link>
            {van ? (
                <div className="van-detail ff-sans-cond text-white letter-spacing-2">
                    <img className='van-detail-img' src={van.imageUrl} />
                    <div className="text--container">
                        <i className={`van-type ff-sans-cond uppercase text-white letter-spacing-2 ${van.type} selected`}>{van.type}</i>
                        <div className="article-data">
                        <span>{van.name}</span>
                        <span class="article-data-spacer"></span>
                        <p>${van.price}<span> / Trip</span></p>
                     </div>
                        <p>{van.description}</p>
                        <button className="link-button ff-sans-cond uppercase text-white letter-spacing-2">Book a Ticket</button>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}
