'use client';
import React, { useState, useEffect } from 'react';
import { storeNewEmail } from '@/integrations/monday';
import Image from 'next/image';
import { validateOfferPromptEmail } from '@/utils/validationData';

const OfferPrompt = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const hasResponded = localStorage.getItem('offerPromptResponse');
        if (!hasResponded || hasResponded === 'declined') {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        const validationError = validateOfferPromptEmail(email); // Validate the email
        if (validationError) {
            setErrorMessage(validationError); // Set the error message
            return; // Exit the function if there is an error
        }

        // If no validation errors, proceed with email submission
        const boardId = "8002627993"; // Replace with your actual board ID
        const itemName = email;
        const columnValues = {
            'email__1': email, // Replace 'email' with your board's column ID
        };

        storeNewEmail(boardId, itemName, columnValues);

        // Save the response to localStorage
        localStorage.setItem('offerPromptResponse', 'accepted');
        // Hide the prompt
        setIsVisible(false);
        // Clear any previous errors
        setErrorMessage('');
        // Send email to your backend for processing
        console.log('Email submitted:', email);
    };

    const handleDecline = () => {
        // Save the response to localStorage
        localStorage.setItem('offerPromptResponse', 'declined');
        // Hide the prompt
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div style={styles.modal}>
                <div style={styles.content}>
                    <h3 className='mb-10'>Free Activity Guide</h3>
                    <Image
                        width={300}
                        height={400}
                        src="/images/activitykit.png"
                        alt="activitykit"
                        style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}
                    />
                    <p className='mt-10'>Enter your email to receive a free activity guide!</p>
                    <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setErrorMessage(''); // Clear error message on input change
                        }}
                        style={styles.input}
                    />
                    {errorMessage && (
                        <p style={styles.error}>{errorMessage}</p> // Display the error message
                    )}
                    <div style={styles.buttons}>
                        <button onClick={handleAccept} style={styles.accept}>
                            Submit
                        </button>
                        <button onClick={handleDecline} style={styles.decline}>
                            No, thanks
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

const styles = {
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    content: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        width: '300px',
        fontFamily: 'rubik',
        fontSize: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    error: {
        color: '#f44336',
        fontSize: '14px',
        marginTop: '-10px',
        marginBottom: '10px',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    accept: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    decline: {
        backgroundColor: '#f44336',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default OfferPrompt;
