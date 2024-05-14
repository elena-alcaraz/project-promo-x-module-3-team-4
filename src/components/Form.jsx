import GetAvatar from "./GetAvatar";

const Form = (props) => {

  const handleForm = (ev) =>{
    const fieldName = ev.target.id;
    const inputValue = ev.target.value;
    props.function(fieldName, inputValue);
  }

  return (
    <form className="addForm" onChange={handleForm}>
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" />
        <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan"/>
        <div className="addForm__2col">
          <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" />
          <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" />
        </div>         
        <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" />
        <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" />
        <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" />
      </fieldset>

      <fieldset className="addForm__group--upload">
        
        <GetAvatar avatar={props.avatar} updateAvatar={props.updateAvatar} id={"image"} text="Subir foto de proyecto"/>

        <GetAvatar avatar={props.avatar} updateAvatar={props.updateAvatar} id={"photo"} text="Subir foto de la autora"/>

        <button className="button--large">Guardar proyecto</button>
      </fieldset>
      
    </form>
    
  );
};

export default Form;
