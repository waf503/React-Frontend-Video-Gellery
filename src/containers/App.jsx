import React, {useState, useEffect} from 'react'
import '../assets/styles/App.scss'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Item from '../components/Item'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'

const portada1="https://i.pinimg.com/originals/b4/cc/bf/b4ccbf5d4bb8f3ef4d2242bd11e67a52.jpg"
const portada2="https://k60.kn3.net/7/2/A/B/8/4/198.jpg"
const portada3="https://pbs.twimg.com/media/C57RpX5WYAAg7_j.jpg"
const portada4="http://3.bp.blogspot.com/_ZqVfKB3H0x4/TLlCiYuiJVI/AAAAAAAAAS8/JofqWlB_1IY/s1600/EXORCISTA-PORTADA.jpg"

const App = () => {
    const videos = useInitialState()
    return(    
        <div className="App">
            <Header/>
            <Search/>
            
                <Categories>
                    <Carousel>
                        {videos.trends.length > 0 &&
                        videos.trends.map(item =>
                            <Item key={item.id} {...item}/>   
                        )
                        } 
                        <Item cover={portada2} title={'Sinsajo'} duration={125} contentRating={'18+'} year={2010}/>
                        <Item cover={portada1} title={'300'} duration={128} contentRating={'20+'} year={2013}/>
                        <Item cover={portada3} title={'OUIJA'} duration={140} contentRating={'16+'} year={2014}/>
                        <Item cover={portada4} title={'El Exorcista'} duration={126} contentRating={'18+'} year={2011}/>

                        
                        
                        
                                                    
                    </Carousel>
                </Categories>
                      

            <Footer/>
        </div>
    )
}
export default App