import React from 'react'
import styled from 'styled-components'

export const RightSide = () => {
    return (
        <Container>
            <Nav>
                <h1>Icon</h1>
                <h1>Text</h1>
            </Nav>
            <section>
                <Img src="https://i.dlpng.com/static/png/6929354_preview.png" alt="computer" />
            </section>
            <Footer>
                <h1>Text reference</h1>
            </Footer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;

`
const Nav = styled.nav`
    display: flex;
 justify-content: space-between;
    & h1 {
        font-weight: 600;
        font-size: 24px;
    }
`
const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    & h1 {
        font: 600;
        font-size: 24px;
    }
    
`
const Img = styled.img`
    width: 100%;
    height: auto;
`