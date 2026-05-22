"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Description, FieldError, Input, Label, Modal, Surface, TextField, TimeField } from "@heroui/react";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { toast, ToastContainer } from "react-toastify";

export function Booking({ data }) {

    const {price, _id:roomID} = data;
    // console.log(price);

    const [bookingDate, setBookingDate] = useState("");
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    // const [totalPrice, setTotalPrice] = useState(0);

    let totalPrice = 0;

    // to restric the date to current date and future dates only
    const todaystr = new Date().toISOString().split('T')[0];


    if (startTime && endTime) {
        const duration = endTime.hour - startTime.hour;
        if (duration > 0) {
            totalPrice = duration * Number(data.price);
        }
    }


    const handleBooking = async (e) => {
        e.preventDefault();
        const bookingData = {
            roomID,
            bookingDate,
            startTime: `${startTime?.hour}:${startTime?.minute}`,
            endTime: `${endTime?.hour}:${endTime?.minute}`,
            totalPrice
        };
        // console.log(bookingData);
        const res = await fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        })
        const result = await res.json();
        console.log(result);
        if (res.ok) {
            toast.success('Room booked successfully!');
        }else{
            toast.error(result.message || 'Failed to book room. Please try again.');
        }
    }

    return (
        <Modal>
            <Button className="btn bg-white text-amber-700">Book Room</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Book a Room</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4">
                                    {/* date field */}
                                    <TextField name="BookingDate" type="date" isRequired>
                                        <Label>Booking Date</Label>
                                        <Input type="date" min={todaystr} value={bookingDate} onChange={(e) => setBookingDate(e.target.value)}  className="rounded-2xl" />
                                        <FieldError />
                                    </TextField>
                                    {/* time fields */}
                                    <TimeField value={startTime} onChange={setStartTime} className="w-[256px]" name="time">
                                        <Label>Start time</Label>
                                        <TimeField.Group>
                                            <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
                                        </TimeField.Group>
                                        <Description>Enter the start time</Description>
                                    </TimeField>
                                    <TimeField value={endTime} onChange={setEndTime} className="w-[256px]" name="end-time">
                                        <Label>End time</Label>
                                        <TimeField.Group>
                                            <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
                                        </TimeField.Group>
                                        <Description>Enter the end time</Description>
                                    </TimeField>
                                    <p>Total Price: ${totalPrice}</p>
                                    <button type="submit" onClick={handleBooking} className="btn bg-amber-700 text-white">Confirm Booking</button>
                                </form>
                            </Surface>
                        </Modal.Body>
                        <ToastContainer></ToastContainer>
                        {/* <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button slot="close">Send Message</Button>
                        </Modal.Footer> */}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}