import styles from "./index.module.scss";

import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

interface InfoBlockProps {
  data: {
    title: string;
    picture: string;
    description: string;
  };
}

let formatParagraph: (text: string) => string[];

formatParagraph = (text) => {
  const fragments = text.split(".").map((element, index, array) => {
    if (index % 2 === 0) {
      return `${element + "."}${array[index + 1]}`;
    } else return "";
  });

  return fragments.filter((el) => el !== "");
};

export const InfoBlock = ({ data }: InfoBlockProps) => {
  const { title, picture, description } = data;
  return (
    <div className={styles.block}>
      <div className={styles.pictureWrapper}>
        <img
          alt={`${title}`}
          src={picture}
          className={styles.picture}
          loading="lazy"
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      {formatParagraph(description).map((fragment) => (
        <p className={`p-small ${styles.paragraph}`}>{fragment}</p>
      ))}
      <ul className={styles.socialLinks}>
        <li>
          <FaTelegramPlane size="100%" />
        </li>
        <li>
          <IoLogoWhatsapp size="100%" />
        </li>
      </ul>
    </div>
  );
};
