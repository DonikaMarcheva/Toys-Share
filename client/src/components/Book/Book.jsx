import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../contexts/authContext.jsx";

import * as bookService from '../../services/bookedService.js';
import styles from '../ToyDetails/ToyDetails.module.css';

export const Book = () => {
    const { userId } = useContext(AuthContext);
    const { toyId } = useParams();

    const [book, setBooks] = useState([]);
    const [isBooked, setIsBooked] = useState(false);
    const [cantBook, setCantBook] = useState(false);

    useEffect(() => {
        bookService.getBookedCount(toyId)
            .then((booksResult) => {
                setBooks(booksResult);
                if (booksResult.length > 0) {
                    setIsBooked(true);
                    if (booksResult.find((x) => x._ownerId !== userId)) {
                        setCantBook(true);
                    }
                }
            });
    }, [toyId]);


    const onBookClick = () => {
        const currentBook = book.find((x) => x._ownerId === userId);

        if (currentBook) {
            setBooks((state) => state.filter((x) => x._id !== currentBook._id));
            setIsBooked(false);
            bookService.unbook(currentBook._id, userId);

        } else {
            bookService.addBook(toyId, userId)
                .then((result) => {
                    setBooks((state) => [...state, result]);
                });
            setIsBooked(true);
        };
    };

    return (
        <div className={styles.buttons}>
            {cantBook && <button disabled>Booked</button>}
            {!cantBook && isBooked && <button onClick={onBookClick}>Booked</button>}
            {!isBooked &&
                <button onClick={onBookClick}>Book</button>}
        </div>
    );
};