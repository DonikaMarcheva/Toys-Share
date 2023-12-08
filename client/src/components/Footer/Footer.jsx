import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

import styles from './Footer.module.css'
import Path from '../../path.js';

export default function Footer() {
    return (
        <div className={styles["site-footer"]}>
            {/* <div className={styles.container}> */}
            <div className={styles["footer-content"]}>
                <Link to= {Path.Terms}>Terms and condition</Link>
                <p><FontAwesomeIcon icon={faSquareFacebook}
                    style={{ color: "#cc804d", padding: '0.2em 0.5em', marginRight: '0.5em' }} />
                <FontAwesomeIcon icon={faSquareInstagram}
                    style={{ color: "#cc804d", padding: '0.2em 0.5em', marginRight: '0.5em' }} />
                <FontAwesomeIcon icon={faLinkedin}
                    style={{ color: "#cc804d", padding: '0.2em 0.5em', marginRight: '0.5em' }} />
                <FontAwesomeIcon icon={faYoutube}
                    style={{ color: "#cc804d", padding: '0.2em 0.5em', marginRight: '0.5em' }} />
                    
                    </p>
            </div>
            <div className={styles["copyrights-wrapper"]}>
                <p className={styles.copyrights}>Copyright © 2023 Donika®</p>
            </div>
            {/* </div> */}
        </div>
    );

}