import type { PopupProps } from "../../../types/types.ts";

function Popup(props: PopupProps): React.JSX.Element {
    
    const { title, children, onClose, isOpen } = props;

    return (
        <>
        <div className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
            <div className={`popup__content ${
                !title ? 'popup__content_content_image' : ''
            }`}>
            <button
            aria-label='Close popup'
            className='popup__close'
            type='button'
            onClick={onClose}
            />
            {title && <h3 className='popup__title'>{title}</h3>}
            {children}
            </div>
        </div>
        </>
    )
}

export default Popup