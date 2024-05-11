import React, {useContext, useState} from "react";
import { ListContact } from "../component/ListContact";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Contacts = () => {
    const {store, actions} = useContext(Context);
    const [agendaCreated, setAgendaCreated] = useState(false);
    
    return (

        <div className="container mt-5 contactos">
            <ul className="list-group mb-5 ">
                <ListContact/>
            </ul>
        </div>

    )
}