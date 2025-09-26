// import "./CharacterCard.css"; // si querés darle estilos
import Boton from "./Boton.jsx"
import "./CardDragon.css"

/**
 * Componente que recibe un personaje y lo muestra en forma de tarjeta
 */
function CharacterCard({ 
  id,
  image, 
  name, 
  race, 
  description 
}) {
  // ID único para cada collapse
  const collapseId = `info-${id}`;

  return (
    <div className="producto">
        <img src={image} alt={name}/>
    
        <div className="position-relative">
          <div className="card-body">
            <h4>{name}</h4>
            <span>
              <Boton
                texto="Detalle:"
                className="boton"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded="false"
                aria-controls={collapseId}
              />  
            </span>
          </div>
          <div id={collapseId} className="collapse up-collapse">
            <div className="card-detalle">
              <br />
              <p><strong>Raza:</strong> {race}</p>
              <span>DESCRIPCION:</span>
              <p>{description} </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CharacterCard;
