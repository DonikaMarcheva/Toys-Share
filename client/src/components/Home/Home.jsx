import homeImage from './home-image.webp';
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles["site-hero"]}>
            <div className={styles["site-hero-about"]}>
                <div className={styles["hero-content"]}>
                    <h2>Drowning in too many toys?</h2>
                    <h2>Your kids want the next one trendy toy?</h2>
                </div>
                <div className={styles.help}>
                    <h2>We have a decision for you without wasting money and excess space.</h2>
                </div>
            </div>
            <div className={styles["image-container"]}>
                <img src={homeImage}/>
            </div>
        </div>
    );
}