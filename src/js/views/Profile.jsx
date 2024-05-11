import React, {useContext, useState, useEffect}from "react";
import { Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
    const { id} = useParams();
    const {store, actions} = useContext(Context);
    const [userInputTwo, setUserInputTwo] = useState({
        nombredos: "",
        correodos: "",
        telefonodos: "",
        direcciondos: ""
    });
    useEffect(() => {
        const contact = store.contactos.find(contact => contact.id === parseInt(id));  
            if (contact) { 
                setUserInputTwo({ 
                    nombredos: contact.name,
                    correodos: contact.email,
                    telefonodos: contact.phone,
                    direcciondos: contact.address
                });
            }
        }, [id, store.contactos]);
    return (
        <>
        <div className="d-flex justify-content-center profile">
            <div className="card" style={{width : 250}}>
                <img src="https://randomuser.me/api/portraits/men/1.jpg" className="card-img-top" style={{objectFit: "cover"}}/>
                <div className="card-body">
                    <h5 className="card-title">Full Address</h5>
                    <p className="card-text">{userInputTwo.direcciondos}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{userInputTwo.nombredos}</li>
                    <li className="list-group-item">{userInputTwo.correodos}</li>
                    <li className="list-group-item">{userInputTwo.telefonodos}</li>
                </ul>
            </div>
        </div>
        <div className="mt-3 d-flex justify-content-center">
            <Link to="/">
                <button className="btn btn-info">back home</button>
            </Link>
            </div>
        </>
    )
}