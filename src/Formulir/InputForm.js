
import { Component } from "react";
import { useState } from "react";
import ReactModal from "react-modal";
import JendelaModal from "./JendelaModal";
import "./Card.css";



function InputForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domisili, setDomisili] = useState("");
  const [position, setPosition] = useState("");
  const [list, setList] = useState([]);
  const [modalOpen, setModalOpen] = useState("");
  const [file, setState] = useState("");



  const onChange = e => setState(URL.createObjectURL(e.target.files[0]));

  const handlingSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, file);
    const date = { name, email, phone, domisili, position };
    const open = "false";

    if (name && email && phone && domisili && position) {
      setList((ls) => [...ls, date])
      setName("")
      setEmail("")
      setPhone("")
      setDomisili("")
      setPosition("")
      setState("")


    }

  }













  const HandleReset = e => {
    e.preventDefault();
    setList([])
  }

  return (
    <div className="bg">
      <h2>Forms</h2>
      <form onSubmit={handlingSubmit} className="form">
        <p>Silakan isi data diri Anda dengan benar</p>
        <div className="formatisi">
          <label>Nama</label>
          <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="formatisi">
          <label>Email</label>
          <input type="email" email="mail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="formatisi">
          <label>No HP</label>
          <input type="tel" phone="phone" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="formatisi">
          <label>Domisili</label>
          <input type="text" domisili="domisili" placeholder="Domisili" value={domisili} onChange={(e) => setDomisili(e.target.value)} required />
        </div>
        <label>Posisi</label>
        <div class="col-75">
          <select id="position" name="position" onChange={(e) => setPosition(e.target.value)} required>
            <option selected>Silakan Pilih</option>
            <option value="Back End" >Back End</option>
            <option value="Front End">Front End</option>
            <option value="Full Stack">Full Stack</option>
          </select>
        </div>
        <div className="formatisi">
          <label>Foto</label>
          <input type="file" onChange={onChange} required></input>
          <img src={file} />

        </div>
        <button className="button">Add Data</button>
        <p></p>
        <button className="button" onClick={(e) => setModalOpen(e.target.value)} value="true" >Preview</button>
      </form>


      <ReactModal isOpen={modalOpen} className="modalPos" value="true">
        <div className="modal fade" id="previewCard" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <JendelaModal list={list} name={name} phone={phone} email={email} domisili={domisili} position={position} file={file} />
          </div>
        </div>
        <button className="button" onClick={(e) => setModalOpen(false)} value="false" >Close</button>
        <button className="button" onClick={HandleReset}  >Reset</button>
      </ReactModal>




    </div>
  );
}

export default InputForm;