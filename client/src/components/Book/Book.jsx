import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../contexts/authContext.jsx";

import * as bookService from '../../services/bookedService.js';
import styles from '../toyDetails/ToyDetails.module.css';

export const Book = () => {
    const { userId } = useContext(AuthContext);
    const { toyId } = useParams();

    const [book, setBooks] = useState([]);
    const [isBooked, setIsBooked] = useState(false);


    useEffect(() => {
        bookService.getBookedCount(toyId)
            .then((booksResult) => {
                setBooks(booksResult);
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
                    setIsBooked(true);
                });
        };
    };

    return (
        <div className={styles.buttons}>
            {isBooked && <button onClick={onBookClick}>Booked</button>}
            {!isBooked &&
            <button  onClick={onBookClick}>Book</button>}
        </div>
);};