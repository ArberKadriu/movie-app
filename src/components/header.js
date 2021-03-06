import React from 'react';
import { Nav } from 'react-bootstrap'

class Header extends React.Component {
    render() {
        return(
            <div className='card-header border border-secondary bg-secondary'>
                <h1>{this.props.name}</h1>
                <div className='card-body border border-secondary bg-light'>
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home" className='text'>Home</Nav.Link>
                        </Nav.Item>
                       
                    </Nav>
                </div>
                <div className='bg-secondary'>
                <br></br>
                    <h2>Now Playing</h2>
                </div>
            </div>
        );
    }
}

export default Header