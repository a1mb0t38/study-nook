"use client";


import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const BookingCancel = ({ roomID }) => {

    console.log(roomID, "roomID from booking cancel component");

    const handleCancelBooking = async () => {
        const res = await fetch(`http://localhost:5000/booking/${roomID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        console.log(data, "cancel booking response");
    }

    return (
        <AlertDialog>
            <Button className="text-amber-700 bg-white" variant="outlined">Cancel Booking</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>Room booking</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                           
                            <Button onClick={handleCancelBooking} variant="danger">
                                Cancel Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default BookingCancel;