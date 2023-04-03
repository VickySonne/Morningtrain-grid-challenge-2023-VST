const ImageComp = (props) => {

    const {array} = props;

    return (
        <ul className="image-list">
            {array.map((array) => (
              <li className={array.masonsize} key={array.id}>
                <img lazy="true" src={array.src} alt={array.alt}/>
                <div className="image-text">
                  <h4 className="image-title">{array.title}</h4>
                  <p className="image-owner">Fotograf: {array.owner}</p>
                </div>
              </li>  
            ))}
        </ul>
    );
};
 
export default ImageComp;