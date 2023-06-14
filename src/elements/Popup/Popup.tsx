import React, { useEffect } from "react";
import style from "./Popup.module.scss";

interface PopupProps {
  data: {
    id?: string;
    picture?: string;
    name?: string;
    description?: string;
    link?: string;
  };
  handleModal: () => void;
  isModalOpen?: boolean;
}

const Popup: React.FC<PopupProps> = ({
  data: { name, description, link, picture },
  handleModal,
  isModalOpen,
}) => {
  // To use this element you will need:
  // 1. state, example -
  //   const [showModal, setShowModal] = useState<boolean>(true);
  // 2. function that changes this state
  //  const handleModal = () => setShowModal(!showModal);
  // 3. also this component needs props as data (contains id, picture, name, description, link), handleModal function and boolean state of madal isModalOpen
  // {showModal && <Popup data={q.data?.artist} handleModal={handleModal} isModalOpen={showModal}/>}

  // it prevents scroll when popup is opened
  useEffect(() => {
    const body = document.body;

    if (isModalOpen) {
      body.classList.add("lock");
    } else {
      body.classList.remove("lock");
    }

    return () => {
      // Clean up the body class when the component unmounts
      body.classList.remove("lock");
    };
  }, [isModalOpen]);

  return (
    <div>
      <div className={`main-block ${style.popup}`}>
        <div className={style.popup__content}>
          <div className={style.popupInfo}>
            <div
              className={`${style.popupImg} ${
                description ? "" : style.fullImg
              }`}
            >
              <img
                src={picture}
                alt={name}
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
      <div onClick={handleModal} className={style.background}></div>
    </div>
  );
};

export default Popup;
