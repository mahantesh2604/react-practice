import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function Usenavigate() {
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd',}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>usenavigate</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorThird(!showNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorThird} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
              <Link to="/home" style={{padding:"20px"}}>HOME</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link to="/signup" style={{padding:"20px"}}>Signup</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link to="/login" style={{padding:"20px"}}>Login</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link to="/about" style={{padding:"20px"}}>About</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}