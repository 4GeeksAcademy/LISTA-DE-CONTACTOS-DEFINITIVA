import React, {useContext, useEffect,}  from "react";
import { object } from "prop-types";
import { Context } from "../store/appContext";
import { Link,  } from "react-router-dom";

export const ListContact =()=>{

  const {store, actions} = useContext(Context);
 
  const handleEliminate = (id) => {
    actions.DeleteContact(id)
    .then(() => actions.Contacts());
  };
  
  useEffect ( ()=> {
    actions.Contacts()
    console.log(store)
  }, [])

    return(
<>
{store.contactos && store.contactos.map((contact, index) => (
      <li key={index} className="list-group-item ">
        <div className="row align-items-center">
          <div className="col-3">
            <Link to={`/Profile/${contact.id}`}>
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" className="img-fluid rounded-circle"/>
            </Link>
          </div>
          <div className="col-6 overflow-hidden">
            <h5>{contact.name}</h5>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.address}</p>
          </div>
          <div className="col-3 text-right">
            <button onClick={() => handleEliminate(contact.id)} 
              type="button" 
              className="btn btn-danger float-end">
              <i className="fas fa-trash-alt"></i>
            </button>
            <Link to={`/EditContact/${contact.id}`}>
              <button className="btn btn-primary float-end">
                  <i className="fas fa-pencil-alt"></i>
              </button>   
            </Link>
          </div>
        </div>
      </li>        
    ))}
</>
       
        
    )
}