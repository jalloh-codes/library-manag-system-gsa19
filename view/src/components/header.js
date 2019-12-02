import React, {Component} from 'react';

import  {Navbar, NavItem, NavLink, Nav, 
NavbarToggler, Collapse} from 'reactstrap';



export default class Header extends Component{

    constructor(props){
        super(props);
        this.state ={
            open: false
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    

    toggleNavbar = (e) =>{
        e.preventDefault();
        this.setState({
            open: !this.state.open
        })
    } 
    render(){
        return(
            <header className="header-div">
                <Navbar color="faded" light>
                    <NavbarToggler onClick={this.toggleNavbar} light/>
                   
                    <Collapse isOpen={this.state.open} navbar>
                    <Nav navbar>
                        <NavItem>
                        <NavLink href="/author" >Authors</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/">Books</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}


