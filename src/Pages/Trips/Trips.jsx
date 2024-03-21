import React from "react"
import { Link, useLoaderData, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"
import './Trips.css'

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
        <div key={van.id} className="featured-articles-container container d-grid container">
            <Link className="article featured-article featured-article-1 ff-sans-cond  text-white letter-spacing-2"
                to={van.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
            > 
                <img className="article-image" src={van.imageUrl} />
                <span className="article-category">{van.type}</span>
                <div className="article-data-container">
                    <div className="article-data">
                        <span>{van.name}</span>
                        <span class="article-data-spacer"></span>
                        <p>${van.price}<span> / Trip</span></p>
                    </div>

                </div>
            </Link>
        </div>
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
        <div className="container">
            <h1 className="title ff-sans-cond text-white letter-spacing-2">Explore our Travel options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "orbit")}
                    className={
                        `van-type simple ff-sans-cond uppercase text-white letter-spacing-2
                        ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Orbit</button>
                <button
                    onClick={() => handleFilterChange("type", "moon")}
                    className={
                        `van-type luxury ff-sans-cond uppercase text-white letter-spacing-2
                        ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Moon</button>
                <button
                    onClick={() => handleFilterChange("type", "mars")}
                    className={
                        `van-type rugged ff-sans-cond uppercase text-white letter-spacing-2
                        ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Mars</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters ff-sans-cond uppercase text-white letter-spacing-2"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="container">
                {vanElements}
            </div>
        </div>
    )
}