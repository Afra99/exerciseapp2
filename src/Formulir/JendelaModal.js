import InputForm from "./InputForm";
import React from "react";
import Card from "./Card";


function JendelaModal(props) {


    console.log(props.data)
    return (
        <div id="previewCard">

            {props.list.map(list => (
                <div className="card-data" >
                    <Card onClose={list.closeHandler} key={list.length} name={list.name} phone={list.phone} domisili={list.domisili} email={list.email} position={list.position} file={list.file} />
                </div>
            ))

            }



        </div>




    )
}

export default JendelaModal;



/*function JendelaModal() {



    return (

        <div>
            <h2>Card</h2>

            <div class="card">
                <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
                <div class ="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
                </div>
            </div>
        </div>


    );
}

export default JendelaModal;*/