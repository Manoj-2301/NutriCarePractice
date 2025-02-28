import React from 'react'
import CustomButton from "../Button/index"
import Image from 'next/image'
const index = (
    { title, description, imageSrc, buttonText, aosDirection,style }
) => {
    return (
        <div className={`${style.choose_card} `} data-aos={`${aosDirection}`}>
            <div>
                <p className={`${style.choose_card_para}`}>{title}</p>
                <p className={`${style.choose_card_para_two}`}>{description}</p>
                {buttonText && <CustomButton text={buttonText} style={{ tb_button: 'btn' }} />}
            </div>
            <div className={`${style.choose_card_img}`}>
                <Image className={`${style.img}`}
                    src={imageSrc}
                    alt={title}
                    sizes="100vw"
                    fill
                />
            </div>
        </div>
    )
}

export default index