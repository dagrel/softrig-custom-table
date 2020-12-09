import React, { useState, useEffect, Fragment } from 'react';
import { Button } from "reactstrap";
import $ from 'jquery';
//import EditContactModal from "./EditContactModal"

const ContactsTable = () => {

    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(true)

    // tar token fra localstorage og legger i globalt objekt
    const ajaxObj = {
        token: window.localStorage.myToken
    }

    useEffect(() => {
        getContacts()
    }, [])

    const getContacts = () => {
        $.ajax({
            url: `http://localhost:5000/getContacts`,
            type: "POST",
            data: ajaxObj,
            success: (data) => {
                let response = JSON.parse(data)
                let contacts = []
                setApiData(response)
                // response.map((element) => {
                //     contacts.push(element)
                // })
                // setApiData(contacts)
                // setLoading(false)
            },
            error: () => {
                console.log("noe feilet?");
            }
        });
    }
    //console.log(apiData)

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = apiData.filter(person =>
            person.Info.Name.toLowerCase().includes(searchTerm),
        );
        setSearchResults(results);
    }, [searchTerm]);

    const renderPerson = (item, index) => {
        return (
            <tr key={index}>
                <td>{item.ID}</td>
                <td>{item.Info.Name}</td>
                <td>{item.InfoID}</td>
                <td>{item.Info.DefaultEmail.EmailAddress}</td>
                <td>{item.Info.DefaultPhone.Number}</td>
                <td>{item.Info.InvoiceAddress.AddressLine1}</td>
            </tr>
        )
    }

    return (
        <Fragment>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Søk.."></input>
            <table id="myTable">
                <thead>
                    <tr className="header">
                        <th>ID</th>
                        <th>Navn</th>
                        <th>Info Id</th>
                        <th>E-post</th>
                        <th>Telefon</th>
                        <th>Adresse</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map(renderPerson)}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ContactsTable

