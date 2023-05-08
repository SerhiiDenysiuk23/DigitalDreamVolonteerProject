import styles from "./InfoBlock.module.scss";

import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { data } from "./data";

interface InfoBlockProps {
  type: "author" | "musician" | "band";
}

let formatParagraph: (text: string) => string[];

formatParagraph = (text) => {
  const fragments = text.split(".").map((element, index, array) => {
    if (index % 2 === 0) {
      return `${element}.${array[index + 1] || ""}`;
    } else return "";
  });
  console.log(fragments);

  return fragments.filter((el) => el !== "" && el !== ".");
};

export const InfoBlock = ({ type }: InfoBlockProps) => {
  const { name, picture, description } = data;
  return (
    <div className={styles.block}>
      <div className={`${styles.pictureWrapper} ${styles[type]}`}>
        <img
          alt={`${name}`}
          src={picture}
          className={styles.picture}
          loading="lazy"
        />
      </div>
      <h4 className={`${styles.title} ${styles[type]}`}>{name}</h4>
      {/* {subtitle && <h5 className={styles.subtitle}>{subtitle}</h5>} */}
      {formatParagraph(description).map((fragment) => (
        <p className={`p-small ${styles.paragraph}`}>{fragment.slice(0, -1)}</p>
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
