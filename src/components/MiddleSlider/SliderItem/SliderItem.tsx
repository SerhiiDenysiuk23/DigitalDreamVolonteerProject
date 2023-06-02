import style from './SliderItem.module.scss'
import React from 'react';
import Popup from '../../../elements/Popup/Popup';
import { getExampleInfo } from "../../../queries/artistQueries";
import { useQuery } from '@apollo/client';
type Art = {
    handleClick(): void
    image: string,
    description: string
}



const SliderItem: React.FC<Art> = ({handleClick: onClick, image, description}) => {

    const q = useQuery(getExampleInfo)
    // console.warn(q.data?.artist)


    // const [showModal, setShowModal] = React.useState<boolean>(false);
    // const handleModal = () => setShowModal(prev => !prev);
    // const art = {
    //     id: ' ',
    //     picture:props.image,
    //     name: '',
    //     description: '',
    //     link: ''

    // }
    return (
        <div className={style.test}>
            <div className={style.container} onClick={onClick} >
                {/* <div  > */}
                    <img className={style.art_image} src={image} alt="" />
                    <p className={style.description}>{description}</p>
                {/* </div> */}


            </div>
            {/* {showModal && <Popup data={art} handleModal={handleModal} />} */}
        </div>

    )
}

export default SliderItem;