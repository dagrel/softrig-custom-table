import React, { useState, useEffect, Fragment } from 'react'
import $ from 'jquery';
import ContactsTable from "./ContactsTable"
import NewContactModal from "./NewContactModal"


const Contacts = () => {
    useEffect(() => {
        CheckForCode()
        //console.log(window.localStorage)
    }, [])
    // funksjon som sjekker for kode i url, om den finnes kjøres bytte av kode mot tokens på backend
    const CheckForCode = () => {

        // finner kode i url params
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let code = params.get('code');

        // om kode finnes kjører funksjonen
        if (code) {
            $.ajax({
                url: `http://localhost:5000/postToken?code=${code}`,
                type: "POST",
                success: (data) => {
                    // setter token i localstorage og fjerner "" rundt token
                    data = data.replace(/^"|"$/g, '')
                    window.localStorage.setItem("myToken", data)

                    // fjerner params og spesifikt "code" fra url, slik at funksjon ikke kjøres igjen.
                    window.history.pushState({}, document.title, "/" + "contacts");
                },
                error: function () {
                    console.log("noe feilet?");
                }
            });
        } else {
            return
        }
    }


    return (
        <Fragment>
            <NewContactModal />
            <h1>Kontakter</h1>
            <ContactsTable />
        </Fragment>

    )
}
export default Contacts