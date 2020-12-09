import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/components/CarouselItem.scss'
import icoPlay from '../assets/img/play-icon.png'
import icoPlus from '../assets/img/plus-icon.png'
import icoRemove from '../assets/img/remove-icon.png'
import { Link } from 'react-router-dom'

const Item = (props)=> {
    const {id, cover, title, year, contentRating, duration, isList } = props;
    const handleSetFavorite = ()=>{
        props.setFavorite({
                id, cover, title, year, contentRating, duration
            })
    }

    const handleDeleteFavorite =(itemId)=>{
        props.deleteFavorite(itemId)
    }
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt="title"/>
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img 
                            className="carousel-item__details--img" 
                            src={icoPlay} 
                            alt="Play Icon"
                        />
                    </Link>
                     
                    
                    {isList ?
                    <img className="carousel-item__details--img" src={icoRemove} alt="remove Icon" onClick={()=>handleDeleteFavorite(id)}/> 
                    :
                    <img className="carousel-item__details--img" src={icoPlus} alt="Plus Icon" onClick={handleSetFavorite}/> 
                    }

                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    { `${year} ${contentRating} ${duration}` }
                </p>
            </div>
        </div>
    )
}

Item.propTypes ={
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}

const mapDispathToProps = {
    setFavorite, 
    deleteFavorite,
}
export default connect(null, mapDispathToProps)(Item)