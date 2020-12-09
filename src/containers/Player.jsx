import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import '../assets/styles/components/Player.scss'
import { getVideoSource } from '../actions'
import { Redirect } from 'react-router-dom'
import Header from '../components/Header'
//import NotFound from '../containers/NotFound'

const Player = (props) => {
    const { id } = props.match.params
    const [loading, setLoading] = useState(true)
    const hasPlaying = Object.keys(props.playing).length > 0
    
    useEffect(()=>{
        props.getVideoSource(id)  
        setLoading(false)      
    }, [])

    if(loading){
        return <h2>Loading...</h2>
    }

   
    return hasPlaying ? (
        
        <div >            
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button 
                    type="button" 
                    onClick={()=> props.history.goBack()}
                >
                Regresar!
                </button>
            </div>
        </div>
    ) : <Redirect to='/404/'/>
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)