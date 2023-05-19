import React from 'react';
import style from './Popup.module.scss';

interface PopupProps {
  data: {
    id?: string;
    picture?: string;
    name?: string;
    description?: string;
    link?: string;
  };
  handleModal: () => void;
}

const Popup: React.FC<PopupProps> = ({ data: { name, description, link }, handleModal }) => {
  // To use this element you will need:
  // 1. state, example -
  //   const [showModal, setShowModal] = useState<boolean>(true);
  // 2. function that changes this state
  //  const handleModal = () => setShowModal(!showModal);
  // 3. also this component needs props as data (contains id, picture, name, description, link) and handleModal function
  // {showModal && <Popup data={q.data?.artist} handleModal={handleModal} />}
  return (
    <div>
      <div className={`main-block ${style.popup}`}>
        <div className={style.popup__content}>
          <div className={style.popupInfo}>
            <div className={`${style.popupImg} ${description ? '' : style.fullImg}`}>
              <img
                src="https://images.pexels.com/photos/14713776/pexels-photo-14713776.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
            </div>
            <div className={style.popupAuthor}>
              <h3>{name}</h3>
              <ul>
                <li>
                  <a href={link}>link</a>
                </li>
              </ul>
            </div>
          </div>
          {description && (
            <div className={style.popupText}>
              <p className="p-large">{description}</p>
            </div>
          )}
        </div>
        <div className={style.cross} onClick={handleModal}>
          <span></span>
        </div>
      </div>
      <div className={style.background}></div>
    </div>
  );
};

export default Popup;
