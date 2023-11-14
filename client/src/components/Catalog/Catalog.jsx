import styles from './Catalog.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Catalog() {
    return (
        // <h1>Catalog</h1>
        <div className={styles.services}>
            <div className={styles.container}>
                aaaaaaaa
                <div className={styles["services-cases"]}>
                    <article>
                        <p>
                            <FontAwesomeIcon icon={faBoxOpen} style={{ color: "#514d1f", }} />
                        </p>
                        <h4>You store a lot of unusefull toys</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maiores adipisci consectetur molestiae repellendus illo, eum libero porro praesentium voluptates similique perferendis veritatis suscipit expedita modi ex accusantium amet. Aliquam!</p>
                    </article>
                    <article>
                        <p>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#d69f6b", }} />
                        </p>
                        <h4>You are not sure your child will play with a specific toy.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias aliquid quos, voluptates itaque consequuntur esse voluptatum exercitationem autem similique obcaecati sunt libero, recusandae magni nulla laborum officiis non. Officia.</p>
                    </article>
                </div>
                <div className={styles["services-costs"]}>
                    <h2>Costs</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque consequuntur voluptate, repellendus dolorum amet labore maxime veritatis ullam rem consequatur quisquam quis quos ipsam, nobis sequi? Quo, alias amet.</p>
                </div>
            </div>
        </div>
    );
}