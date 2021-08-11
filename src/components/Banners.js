import React from 'react'
import {CardMedia} from '@material-ui/core'
import {Carousel} from 'react-bootstrap'
import '../styles/banners.css'

class Banners extends React.Component {

    state = {
        banners: [
            'http://ividanova.com.br/images/foto08.jpg',
            'http://ividanova.com.br/images/foto05.jpg'
        ]
    }

    render() {
        const {banners} = this.state
        return (
            <div id="banners">
                <Carousel id="carousel">
                    {
                        banners.map(((i, index) => (
                                <Carousel.Item key={index} interval={3000}>
                                    <CardMedia id="img-banner" image={i}/>
                                </Carousel.Item>
                            )
                        ))
                    }
                </Carousel>
            </div>
        )
    }
}

export default Banners