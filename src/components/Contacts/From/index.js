import { useEffect, useState } from "react";
import PropTypes from "prop-types"

const initialFormValues = {fullname: "", phone_number: ""}



function Form({ addContacts, contacts, fullname, phone_number }) {
  const [form, setForm] = useState(initialFormValues);

  const buttonOpacity = () => {
    if (!form.fullname === "" || !form.phone_number === "") {
      this.style.opacity ="1"
    }
  }

  useEffect(()=>{
    setForm(initialFormValues)
  },[contacts])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }else{
      
    }
    addContacts([...contacts, form]);
    
    console.log(form);
    
  };

  

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.fullname}
        />
      </div>

      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phone_number}
        />
      </div>

      <div>
        <button  className="button">Add</button>
      </div>
    </form>
  );
}

Form.propTypes ={
  fullname: PropTypes.string.isRequired,

}

export default Form;
