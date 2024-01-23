import styles from "./RectangleComponent.module.css";

const RectangleComponent = () => {
  return (
    <div className={styles.nestedContainerParent}>
      <div className={styles.nestedContainer} />
    </div>
  );
};

export default RectangleComponent;
