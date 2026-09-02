type PopupProps = {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
}

function Popup(props: PopupProps): React.JSX.Element {
    
    const { title, children, isOpen } = props;

    return (
        <>
        <div className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
            <div className='popup__content'>
            <button
            aria-label='Close popup'
            className='popup__close'
            type='button'
            />
            <h3 className='popup__title'>{title}</h3>
            {children}
            </div>
        </div>
        </>
    )
}

export default Popup