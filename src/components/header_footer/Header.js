import React, { Component } from 'react';
//import Menu from '@material-ui/core/Menu';
//import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
// import MenuIcon from '@material-ui/core/MenuIcon';
//import IconButton from '@material-ui/core/IconButton';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';

class Header extends Component {

    state={
        drawerOpen:false
    }

    toggleDrawer=(value)=>{
        this.setState({
            drawerOpen:value
        })
    }
    render() {
        return (
           
                <AppBar
                    position="fixed"
                    style={{
                        backgroundColor:'#2f2f2f',
                        boxShadow:'none',
                        padding:'10px 0'
                    }}
                >
                <Toolbar>
                    <div className='header_logo'>
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">Musical Events   </div>
                    </div>
                    <IconButton
                    aria-label="Menu"
                    color="inherit"
                    onClick={()=>this.toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <SideDrawer
                    open={this.state.drawerOpen}
                    onClose={(value)=>this.toggleDrawer(value)}
                    />
                </Toolbar>
                </AppBar>
          
        );
    }
}

export default Header;