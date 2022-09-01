import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className="fixed top-0 left-0 w-full h-full z-[20] bg-gray-300 opacity-50">

    </div>
};

const ModalOverlay = props => {
    <div className="fixed top-[20vh] left-[5%] w-[90%] bg-white p-4 rounded-md z-[30] ">
        <div>
            {props.children}
        </div>
    </div>
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
                portalElement)}
        </>
    )
};

export default Modal;