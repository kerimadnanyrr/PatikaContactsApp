import { useState } from "react";

function Form({contact,setContact}) {
  const [form, setForm] = useState({ fullname: "", phone: "" });

  const onChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitValues = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone === "") {
      return false;
    }

    setContact([...contact,form]);
    setForm({fullname:"",phone:""})
   
  };
  return (
    <div>
      <form onSubmit={submitValues}>
        <div>
          <input
            placeholder="Fullname"
            name="fullname"
            onChange={onChangeValue}
            value={form.fullname}
          />
        </div>
        <div>
          <input placeholder="Phone" name="phone" onChange={onChangeValue}
            value={form.phone}
            />
        </div>
        <div className="btn">
        <button >Ekle</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
