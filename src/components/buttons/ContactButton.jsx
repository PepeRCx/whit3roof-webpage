
function ContactButton({text, message}) {

    const handleClick = () => {
        const defaultMessage = message
        window.open(`https://wa.me/7841391319?text=${defaultMessage}`, '_blank');
    }

    return (
        <>
            <button 
                style={{backgroundColor: 'white', color: 'black', border: 'none', padding: '10px', borderRadius: '35px', cursor: 'pointer', scale: '1', transition: 'scale 0.2 eas-in-out'}}
                onClick={handleClick}>{text}
            </button>
        </>
    );
}

export default ContactButton;