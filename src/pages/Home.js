import React from 'react'
import Header from '../components/Header'
import Banners from '../components/Banners'

class Home extends React.Component {
    render() {
        return (
            <section>
                <Header/>
                <Banners/>
            </section>
        )
    }
}

export default Home