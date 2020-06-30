import React from "react"
import {Container} from './Business.styles.jsx'


const Business = () => {
return(
    <Container>
        <h3>BUSINESS ACCOUNTS</h3>
        <hr />
        <img src={require(`../../assets/bmw.jpg`)} />
        <h3>WORK WITH US</h3>
        <hr />
        <img src={require(`../../assets/lexus.jpg`)} />
        <h3>OUR SERVICES</h3>
        <hr />
        <img src={require(`../../assets/bmw.jpg`)} />


    </Container>

)

}

export default Business;