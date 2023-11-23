import styles from './Services.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
    return (
        <div className={styles.services}>
            <div className={styles.container}>

                <h2>How it works</h2>
      
                <div className={styles["services-cases"]}>
                    <article>
                        <p>
                            <FontAwesomeIcon icon={faBoxOpen} style={{ color: "#514d1f", }} />
                        </p>
                        <h4>You store a lot of unusefull toys and want to give it to someone.</h4>
                        <p>Share them with other kids for free.</p>
                        <p>Don't throw them at the container because someone need them and be kind to the environment! Use our platform to publish the unneccessary toy and send it to someone who needs it for a month.</p>
                    </article>
                    <article>
                        <p>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#d69f6b", }} />
                        </p>
                        <h4>You are not sure your child will play with a specific toy.</h4>
                        <p>Dont't waste money!</p>
                        <p>Search in our platform and find thousands of shared toys. After that just book it for a month and take care of it as yours. If your child like it you can extend the period or buy the same toy from the shop.</p>
                    </article>
                </div>
                <div className={styles["services-costs"]}>
                    <h2>Costs</h2>
                    <p>The price for joining out platform is <span>30 leva.</span> You need to pay <span>20 leva</span> quarantee deposit as well which is refundable.</p>
                    <p>If there is a demaged toy that you've booked the dispute will be resolved from our experts. If they decide that the person who share his kid's toy have the right we will pay a fair price for the toy according the initial condidion he send it. </p>
                    <p>We highly reccomend to take a picture of a toy when you send it and receive it no matter you share or you take the toy. This will be the evidence no demage was made.</p>
                    
                </div>
            </div>
        </div>
    );
}