import GetAvatar from "./GetAvatar";

const Form = (props) => {

  const handleForm = (ev) =>{
    const fieldName = ev.target.id;
    const inputValue = ev.target.value;
    props.function(fieldName, inputValue);
  }

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={handleForm} value={props.userData.name} />
        <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleForm} value={props.userData.slogan}/>
        <div className="addForm__2col">
          <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleForm} value={props.userData.repo} />
          <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleForm} value={props.userData.demo} />
        </div>         
        <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleForm} value={props.userData.technologies}/>
        <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleForm} value={props.userData.desc}></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleForm} value={props.userData.autor}/>
        <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo"onChange={handleForm}  value={props.userData.job}/>
      </fieldset>

      <fieldset className="addForm__group--upload">
        
        <GetAvatar  updateAvatar={props.updateAvatar} id="image" text="Subir foto de proyecto"/>

        <GetAvatar  updateAvatar={props.updateAvatar} id="photo" text="Subir foto de la autora"/>

        <button className="button--large" onClick={}>Guardar proyecto</button>

        <p>{url}</p>
      </fieldset>
      
    </form>
    
  );
};

export default Form;
