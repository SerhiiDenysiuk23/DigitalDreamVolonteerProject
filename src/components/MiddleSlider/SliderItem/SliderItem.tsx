import style from './SliderItem.module.scss'


type Art = {
    image: string,
    description: string
}


const SliderItem = (props: Art) => {
    return (
        <div  className={style.test}>
            <div className={style.container}>
                <img className={style.art_image} src={props.image} alt="" />
                <p className={style.description}>{props.description}</p>

            </div>
        </div>

    )
}

export default SliderItem;