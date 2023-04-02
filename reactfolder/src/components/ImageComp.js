const ImageComp = (props) => {

    const {array} = props;

    return (
        <div className="image-list">
            {array.map((array) => (
              <li key={array.id}>
                <img lazy="true" src={array.src} alt={array.alt}/>
                <h4>{array.title}</h4>
                <p>Fotograf: {array.owner}</p>
              </li>  
            ))}
        </div>
    );
};
 
export default ImageComp;