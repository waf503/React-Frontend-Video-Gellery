import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import '../assets/styles/App.scss'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Item from '../components/Item'
import Header from '../components/Header'
//import useInitialState from '../hooks/useInitialState'

const portada1="https://i.pinimg.com/originals/b4/cc/bf/b4ccbf5d4bb8f3ef4d2242bd11e67a52.jpg"
const portada2="https://k60.kn3.net/7/2/A/B/8/4/198.jpg"
const portada3="https://pbs.twimg.com/media/C57RpX5WYAAg7_j.jpg"
const portada4="http://3.bp.blogspot.com/_ZqVfKB3H0x4/TLlCiYuiJVI/AAAAAAAAAS8/JofqWlB_1IY/s1600/EXORCISTA-PORTADA.jpg"

const Home = ({ myList, trends, originals }) => {
    //const videos = useInitialState()
    return(    
        <>
            <Header/>
            <Search/>
                {myList.length > 0 &&
                    <Categories title="Mi lista">
                        <Carousel>
                            {
                            myList.map(item =>
                                <Item 
                                key={item.id} 
                                {...item}
                                isList
                                />   
                            )}                    
                                        
                        </Carousel>
                    </Categories>
                }
                <Categories title="Tendencias">
                    <Carousel>
                        {trends.map(item =>
                            <Item key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
                <Categories title="Originales">
                    <Carousel>
                        {originals.map(item =>
                            <Item key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
                      

        </>
    )
}
const mapStateToProps = state => {
    return{
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}
//export default Home
export default connect(mapStateToProps, null)(Home)