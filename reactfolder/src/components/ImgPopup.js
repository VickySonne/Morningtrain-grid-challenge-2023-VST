import {IoCloseSharp} from 'react-icons/io5'

const ImgPopup = (props) => {
    console.log(props.imgsrc);

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-content">
                <div className="close-icon" onClick={() => props.setTrigger(false)}>
                    <IoCloseSharp />
                </div>
                <img src={props.imgsrc} alt="" loading="lazy" />
            </div>
        </div>
    ): "";
}
 
export default ImgPopup;