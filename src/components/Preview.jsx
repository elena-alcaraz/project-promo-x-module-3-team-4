import CardPreview from "./CardPreview";

const Preview = (props) => {
  return (
    <section className="preview">
      <div className="projectImage"></div>
      <CardPreview userData= {props.userData} />
    </section>
  )
}

export default Preview;