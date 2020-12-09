import React, { useState, useEffect, Fragment } from 'react'
import { Button } from "reactstrap";

const Home = () => {

    // funksjon som kjøres på knappetrykk for å sette i gang henting av authcode på backend
    const connectToApi = () => {
        window.location = "http://localhost:5000/getAuthCode"
    }

    return (
        <Fragment>
            <Button color="primary" style={{ marginTop: "15px", marginLeft: "15px" }} onClick={connectToApi}>Logg på</Button>
        </Fragment>
    )


}
export default Home