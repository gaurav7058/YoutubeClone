import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/history">WatchHistry</Nav.Link>
            <Nav.Link href="/like_video">Like Video</Nav.Link>
            {/* <Nav.Link href="/video_upload">upload Video</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    
    </>
  )
}
