import style from './SliderItem.module.scss'
import React from 'react';
import Popup from '../../../elements/Popup/Popup';
import { getExampleInfo } from "../../../queries/artistQueries";
import { useQuery } from '@apollo/client';
type Art = {
   
    image: string,
    description: string
}



const SliderItem = (props: Art) => {

    const q = useQuery(getExampleInfo)
    // console.warn(q.data?.artist)


    const [showModal, setShowModal] = React.useState<boolean>(false);
    const handleModal = () => setShowModal(prev => !prev);
    const art = {
        id: '1',
        picture:props.image,
        name: props.description,
        description: '',
        link: ''

    }
    return (
        <div  className={style.test}>
            <div className={style.container}>
                <img className={style.art_image} src={props.image} alt="" />
                <p className={style.description}>{props.description}</p>

            </div>
            {showModal && <Popup data={art} handleModal={handleModal} />}
        </div>

    )
}

export default SliderItem;