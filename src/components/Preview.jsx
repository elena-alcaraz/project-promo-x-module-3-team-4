import CardPreview from "./CardPreview";

const Preview = (props) => {
  return (
    <section className="preview">
      <div className="projectImage"
      style={{ backgroundImage: `url(${props.userData.image})` }} ></div>
      <CardPreview userData= {props.userData} />
    </section>
  )
}

export default Preview;