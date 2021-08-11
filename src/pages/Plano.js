import React from 'react'
import {Card, CardMedia, Divider, FormLabel} from '@material-ui/core'
import Header from '../components/Header'
import play from '../images/play.png'
import '../styles/plano.css'

class Plano extends React.Component {

    state = {
        plano: {
            capa: '',
            titulo: '',
            temas: []
        }
    }

    buscaPlano = async () => {
        let json = {
            capa: 'https://firebasestorage.googleapis.com/v0/b/igreja-vida-nova.appspot.com/o/imagens%2Fcapa.jpg?alt=media&token=a7f1dc07-6fe6-4ddc-b306-9d3ae292a571',
            titulo: 'Igreja Ser e Pertencer',
            temas: [
                {
                    dia: '01',
                    tema: 'A arca de Noé',
                    base: 'Gênesis 6, 7 e 8',
                    audio: "https://firebasestorage.googleapis.com/v0/b/jvn-insert.appspot.com/o/audio%2F1599150280561-ET%2006.mp3?alt=media&token=f548f9bf-f0e7-4c13-b979-396b38cf0535",
                    data: "01 de Agosto de 2021",
                    duracao: "1 Hora 13 Minutos",
                    imagem: 'https://firebasestorage.googleapis.com/v0/b/igreja-vida-nova.appspot.com/o/imagens%2Fcapa.jpg?alt=media&token=a7f1dc07-6fe6-4ddc-b306-9d3ae292a571'
                },
                {
                    dia: '08',
                    tema: 'A ressureição do filho da sunamita',
                    base: 'II Reis 4 : 8 - 36',
                    pregacao: ''
                }
            ]
        }

        this.setState({plano: json})
    }

    onClickPlayer = objeto => {
        let search = btoa(JSON.stringify(objeto))
        this.props.history.push({pathname: '/player', search: `?play=${search}`})
    }

    componentDidMount() {
        this.buscaPlano()
    }

    render() {
        const {plano: {capa, titulo, temas}} = this.state
        return (
            <div id="plano">
                <Header/>
                <section id="section-plano">
                    <div id="div-container-plano">
                        <div id="div-plano">
                            <img id="image-plano-capa" src={capa}/>
                            <FormLabel id="label-plano-titulo">{titulo}</FormLabel>
                            {
                                temas.map((t, i) => (
                                    <Card key={i} id="card-plano">
                                        {
                                            t.audio &&
                                            <div>
                                                <CardMedia id="media-capa-plano" image={play}/>
                                            </div>
                                        }
                                        <div id="div-detalhes-plano">
                                            <div id="div-detalhes-plano-1">
                                                <FormLabel id="label-tema-plano">{`Tema: ${t.tema}`}</FormLabel>
                                                <FormLabel id="label-base-plano">{`Base bíblica: ${t.base}`}</FormLabel>
                                                {
                                                    t.audio &&
                                                    <FormLabel id="label-audio-plano">
                                                        Áudio da pregação disponível
                                                    </FormLabel>
                                                }
                                            </div>
                                            <Divider/>
                                            <div id="div-detalhes-plano-2">
                                                <FormLabel id="label-dia-tema">{`Dia: ${t.dia}`}</FormLabel>
                                                {
                                                    t.audio &&
                                                    <div id="div-botao-player">
                                                        <FormLabel id="label-botao-player"
                                                                   onClick={() => this.onClickPlayer(t)}>
                                                            Clique aqui para ouvir
                                                        </FormLabel>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </Card>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Plano