import React from "react"
import { Link, useLoaderData, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"
import './Trips.css'
import {motion} from "framer-motion"

export function loader() {
    return (
        getVans()
    )
}


export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const vans = useLoaderData()

    const typeFilter = searchParams.get("type")



    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <motion.div
        initial={{y: "-2rem" , opacity: 0}}
               animate={{y: 0, opacity: 1}}
               transition={{
                 duration: 3,
                 type:"spring"
               }}
        key={van.id} className="Trips--container width--size">
            <Link className="  ff-sans-cond width--size text-white letter-spacing-2"
                to={van.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
            > 
                <img className="trips--image" src={van.imageUrl} />
                <span className="type--class">{van.type}</span>
                <div className="type--detail">
                    <div className="type--text">
                        <p className="trips--name">{van.name}</p>
                        <p className="trips--price">${van.price}<span> / Trip</span></p>
                    </div>

                </div>
            </Link>
        </motion.div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }


    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="tips--type width--size">
            <motion.h1
               initial={{y: "2rem" , opacity: 0}}
               animate={{y: 0, opacity: 1}}
               transition={{
                 duration: 3,
                 type:"spring"
               }}
            className=" title ff-sans-cond text-white letter-spacing-2">Explore our Travel options</motion.h1>
            <motion.div
            initial={{y: "2rem" , opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              duration: 3,
              type:"spring"
            }}
            className="type">
                <button
                    onClick={() => handleFilterChange("type", "orbit")}
                    className={
                        `button ff-sans-cond uppercase text-white letter-spacing-2
                        ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Orbit</button>
                <button
                    onClick={() => handleFilterChange("type", "moon")}
                    className={
                        `button luxury ff-sans-cond uppercase text-white letter-spacing-2
                        ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Moon</button>
                <button
                    onClick={() => handleFilterChange("type", "mars")}
                    className={
                        `button ff-sans-cond uppercase text-white letter-spacing-2
                        ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Mars</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="button clear-filters ff-sans-cond uppercase text-white letter-spacing-2"
                    >Clear filter</button>
                ) : null}

            </motion.div>
            <div className="elements--container">
                {vanElements}
            </div>
        </div>
    )
}