import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import "./TripDetail.css"
import {motion} from 'framer-motion'

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
        <div className="width--size tripdetail--container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button ff-sans-cond  text-white letter-spacing-2"
            >&larr; <span>Back to Destinations</span></Link>
            {van ? (
                <div className="detail--container ff-sans-cond text-white letter-spacing-2">
                    <motion.img 
                     initial={{y: "2rem" , opacity: 0}}
                     animate={{y: 0, opacity: 1}}
                     transition={{
                       duration: 3,
                       type:"spring"
                     }}
                    className='detail--image' src={van.imageUrl} />
                    <motion.div
                     initial={{y: "-2rem" , opacity: 0}}
                     animate={{y: 0, opacity: 1}}
                     transition={{
                       duration: 3,
                       type:"spring"
                     }}
                    className="detail--text">
                        <i className={`types ff-sans-cond uppercase text-white letter-spacing-2 ${van.type} selected`}>{van.type}</i>
                        <div className="text--container">
                            <span>{van.name}</span>

                            <p>${van.price}<span> / Trip</span></p>
                        </div>
                        <p>{van.description}</p>
                        <button className="buttons ff-sans-cond uppercase text-white letter-spacing-2">Book a Ticket</button>
                    </motion.div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}
