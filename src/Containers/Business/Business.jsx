import React from "react"
import {Container} from './Business.styles.jsx'


const Business = () => {
return(
    <Container>
        <h3>BUSINESS ACCOUNTS</h3>
        <hr />
        <img src={require(`../../assets/Lexus.jpeg`)} />
        <h3>WORK WITH US</h3>
        <hr />
        <img src={require(`../../assets/GalaxySunset.jpg`)} />
        <h3>OUR SERVICES</h3>
        <hr />
        <img src={require(`../../assets/Galaxy.jpeg`)} />


    </Container>

)

}

export default Business;