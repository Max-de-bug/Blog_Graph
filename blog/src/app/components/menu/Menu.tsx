import styles from "@/app/components/Menu/Menu.module.scss";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Most popular</h2>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}></div>
          <div className={styles.textContainer}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
