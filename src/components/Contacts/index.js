import { useState, useEffect } from "react";
import  "./styles.css"
import List from "./List";
import Form from "./From";

function Contacts() {
  const [contacts, setContact] = useState([
    { fullname: "Mehmet", phone_number: "0536 666 55 44" },
    { fullname: "Ayşe", phone_number: "0537 777 66 55" },
    { fullname: "Aylin", phone_number: "0538 888 77 66" }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContacts={setContact} contacts={contacts} />
    </div>
  );
}

export default Contacts;
