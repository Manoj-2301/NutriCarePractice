/** Main Export */
const CustomButton = ({
    text,
    style,
    icon,
    type,
    onClick,
    Subtext

}) => {

    const buttonText = text;

    return (
        <button
            type={type}
            className={`${style.tb_button}`}
            onClick={onClick}
        >
            <div className={`${style.displaybtn}`}>
                {icon && <span className={`${style.tb_icon}`}>{icon}</span>}
                <div className={`${style.btn_text}`} >
                    <p>
                        {buttonText}
                    </p>
                    <p className={`${style.subtext}`}>
                        {Subtext}
                    </p>
                </div>
            </div>
        </button>
    )
}

export default CustomButton;