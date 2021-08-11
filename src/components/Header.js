import React from 'react'
import {withRouter} from 'react-router-dom'
import {CardMedia, FormLabel, Hidden, Drawer, Button} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles'
import logo from '../images/logo.png'
import '../styles/header.css'

const classes = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 240,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: 240,
    }
}))

class Header extends React.Component {

    state = {
        drawer: false
    }

    onClickMenu = () => this.setState({drawer: !this.state.drawer})

    onClickPage = page => this.props.history.push(page)

    render() {
        const {drawer} = this.state
        return (
            <section id="header">
                <div id="container-header">
                    <div id="div-img-header">
                        <CardMedia id="img-header" image={logo}/>
                    </div>
                    <div id="div-menu-header">
                        <div id="div-item-menu-header" onClick={() => this.onClickPage('/')}>
                            <FormLabel id="label-item-menu-header">HOME</FormLabel>
                            <div id="div-selector-item-menu"/>
                        </div>
                        <div id="div-item-menu-header" onClick={() => this.onClickPage('/vidanova')}>
                            <FormLabel id="label-item-menu-header">VIDA NOVA</FormLabel>
                            <div id="div-selector-item-menu"/>
                        </div>
                        <div id="div-item-menu-header" onClick={() => this.onClickPage('/juventude')}>
                            <FormLabel id="label-item-menu-header">JUVENTUDE</FormLabel>
                            <div id="div-selector-item-menu"/>
                        </div>
                        <div id="div-item-menu-header" onClick={() => this.onClickPage('/mensagens')}>
                            <FormLabel id="label-item-menu-header">MENSAGENS</FormLabel>
                            <div id="div-selector-item-menu"/>
                        </div>
                        <div id="div-item-menu-header" onClick={() => this.onClickPage('/plano')}>
                            <FormLabel id="label-item-menu-header">PLANO PEDAGÓGICO</FormLabel>
                            <div id="div-selector-item-menu"/>
                        </div>
                        <div id="div-item-menu-header" onClick={() => this.onClickPage('/cultos')}>
                            <FormLabel id="label-item-menu-header">CULTOS</FormLabel>
                            <div id="div-selector-item-menu"/>
                        </div>
                    </div>
                    <div id="div-drawer-menu-header">
                        <Menu id="icon-drawer-menu-header" onClick={this.onClickMenu}/>
                    </div>
                </div>
                <div>
                    <nav className={classes.drawer} aria-label="mailbox folders">
                        <Hidden smUp implementation="css">
                            <Drawer variant="temporary" anchor='top' open={drawer}
                                    onClose={() => this.setState({drawer: false})}
                                    classes={{paper: classes.drawerPaper}}
                                    ModalProps={{keepMounted: true}}>
                                <div>
                                    <div className={classes.toolbar}/>
                                    <div id="div-drawer" style={{width: window.innerWidth}}>
                                        <div id="div-item-drawer-header" onClick={() => this.onClickPage('/')}>
                                            <FormLabel id="label-item-drawer-header">HOME</FormLabel>
                                        </div>
                                        <div id="div-item-drawer-header" onClick={() => this.onClickPage('/vidanova')}>
                                            <FormLabel id="label-item-drawer-header">VIDA NOVA</FormLabel>
                                        </div>
                                        <div id="div-item-drawer-header" onClick={() => this.onClickPage('/juventude')}>
                                            <FormLabel id="label-item-drawer-header">JUVENTUDE</FormLabel>
                                        </div>
                                        <div id="div-item-drawer-header" onClick={() => this.onClickPage('/mensagens')}>
                                            <FormLabel id="label-item-drawer-header">MENSAGENS</FormLabel>
                                        </div>
                                        <div id="div-item-drawer-header" onClick={() => this.onClickPage('/plano')}>
                                            <FormLabel id="label-item-drawer-header">PLANO PEDAGÓGICO</FormLabel>
                                        </div>
                                        <div id="div-item-drawer-header" onClick={() => this.onClickPage('/cultos')}>
                                            <FormLabel id="label-item-drawer-header">CULTOS</FormLabel>
                                        </div>
                                        <div id="div-item-drawer-header">
                                            <Button id="button-close-drawer" variant="outlined"
                                                    onClick={() => this.setState({drawer: false})}>FECHAR</Button>
                                        </div>
                                    </div>
                                </div>
                            </Drawer>
                        </Hidden>
                    </nav>
                </div>
            </section>
        )
    }
}

export default withRouter(Header)