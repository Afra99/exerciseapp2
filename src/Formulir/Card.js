import './Card.css';


function Card(props){

return(
<div>
<h2></h2>

<div class="card">
  <div class="container">
    <div className="foto">
 <img src={props.file} alt="Foto Tidak Terlihat" />
 </div>
    <h2><b>{props.name}</b></h2> 
    <p>{props.phone}</p> 
    <p>{props.email}</p> 
    <p>{props.domisili}</p> 
    <p>{props.position}</p>
    
  </div>
</div>
</div>
)
}

export default Card;