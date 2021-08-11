import React from 'react'
import {FormLabel} from '@material-ui/core'
import Header from '../components/Header'
import '../styles/cultos.css'

class Cultos extends React.Component {
    render() {
        return (
            <div id="cultos">
                <Header/>
                <section id="section-cultos">
                    <div id="div-cultos-container">
                        <div id="div-cultos">
                            <FormLabel id="label-title-cultos">Domingo</FormLabel>
                            <FormLabel id="label-cultos">
                                Escola dominical 09:45h
                            </FormLabel>
                            <FormLabel id="label-cultos">
                                Culto evangelístico 19:00h
                            </FormLabel>
                        </div>
                        <div id="div-cultos">
                            <FormLabel id="label-title-cultos">Quarta-feira</FormLabel>
                            <FormLabel id="label-cultos">
                                Culto de oração 19:20h
                            </FormLabel>
                        </div>
                        <div id="div-cultos">
                            <FormLabel id="label-title-cultos">Sabádo</FormLabel>
                            <FormLabel id="label-cultos">
                                Culto dos jovens 19:00h
                            </FormLabel>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Cultos