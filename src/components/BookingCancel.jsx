"use client";


import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const BookingCancel = ({ bookingID }) => {

    // console.log(bookingID, "bookingID from booking cancel component");
    

    const handleCancelBooking = async () => {
        const {data:tokenData} = await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json();
        if (res.ok) {
            toast.success("Booking cancelled successfully");
        } else {
            toast.error("Failed to cancel booking");
        }
        // console.log(data, "cancel booking response");
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
                    <ToastContainer />
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default BookingCancel;