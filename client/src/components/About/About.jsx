import Path from '../../path.js';
import styles from './About.module.css'
import { Link } from 'react-router-dom';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
// import {faBoxOpen, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.container}>

                <h2>Toys are important.</h2>
                <h2>Playing for children is not a break from learning, rather play is real learning.</h2>

                <p>As children get older they learn about sharing, taking turns, and working collaboratively with others. Toys often serve as emotional security objects for young children, acting as a bridge for the security of a loving caregiver during times of separation.</p>
                <p>Very offen to fulfill all of your child's need you spend a lot of money only to see that the toy became unnecessary just a few hours later.
                    And you regret your purchase, because in addition to the lost funds, you will now also lose space in your home to store the toy</p>
                <p>Now we have a decission for you!</p>
                <p>You can share your unusefull toys with other children and your kid can play with different toy each month for free.</p>

                <Link className= {styles.button}to={Path.Services}>How it works?</Link>
            </div>
        </div>
    );
}