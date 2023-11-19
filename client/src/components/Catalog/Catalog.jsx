import styles from './Catalog.module.css'

export default function Catalog() {
    return (
        <div className={styles.catalog}>
            <div className={styles.container}>
                <div className={styles.cards}>
                    <div className={styles["card-item"]}>
                        <div className={styles["card-image"]}>
                            <img src="../../../public/images/login-bear.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h2 className={styles["card-title"]}>Exploring around</h2>
                            <p className={styles["card-intro"]}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={styles["card-item"]}>
                        <div className={styles["card-image"]}>
                        <img src="../../../public/images/register-bear.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h2 className="card-title">A new trail you can't miss</h2>
                            <p className="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={styles["card-item"]}>
                        <div className={styles["card-image"]}>
                        <img src="../../../public/images/login-bear.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h2 className="card-title">Inside the Outdoors</h2>
                            <p className="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={styles["card-item"]}>
                        <div className={styles["card-image"]}>
                        <img src="../../../public/images/register-bear.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h2 className="card-title">Essential hiking hacks</h2>
                            <p className="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={styles["card-item"]}>
                        <div className={styles["card-image"]}>
                        <img src="../../../public/images/login-bear.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h2 className="card-title">Discovering this hidden gem</h2>
                            <p className="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={styles["card-item"]}>
                        <div className={styles["card-image"]}>
                        <img src="../../../public/images/register-bear.jpg" alt="" />
                        </div>
                        <div className={styles["card-info"]}>
                            <h2 className="card-title">1 Day routes for this weekend</h2>
                            <p className="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}