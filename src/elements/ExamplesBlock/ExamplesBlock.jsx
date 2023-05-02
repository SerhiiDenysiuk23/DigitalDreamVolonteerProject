import styles from "./ExamplesBlock.module.scss";

export const ExamplesBlock = ({ children }) => {
  return (
    <div className={styles.block}>
      <div className={styles.overlay}></div>
      {children}
    </div>
  );
};
