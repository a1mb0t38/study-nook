"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Description, FieldError, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export function EditModal({ data }) {

    const [Discription, setDiscription] = useState("");


    const isDiscriptionInvalid = Discription.length > 0 && Discription.length < 20;



    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const formdata = Object.fromEntries(formData.entries());
        // console.log(formdata);

        const {data:tokenData} = await authClient.token();
        const res = await fetch(`http://localhost:5000/room-details/${data._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(formdata)
        })
        const result = await res.json();
        // console.log(result);
        if (res.ok) {
            toast.success('Successfully Room updated!')
        } else {
            toast.error(result.message || 'Failed to update room. Please try again.');
        }
    }



    return (
        <Modal>
            <Button className="text-amber-700 font-bold bg-white btn">Edit</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-lg">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Room</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">

                                <form
                                    onSubmit={onSubmit}
                                    className="p-10 space-y-8"

                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Destination Name */}
                                        <div className="md:col-span-2">
                                            <TextField name="RoomName" isRequired>
                                                <Label>Room Name</Label>
                                                <Input placeholder={data.RoomName} className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Description */}

                                        <TextField isRequired isInvalid={isDiscriptionInvalid} name="Description" value={Discription} onChange={setDiscription}>
                                            <Label>Description</Label>
                                            <TextArea placeholder={data.Description} />
                                            {isDiscriptionInvalid ? (
                                                <FieldError>Description must contain at least 20 characters.</FieldError>
                                            ) : (
                                                <Description>Minimum 20 characters ({Discription.length}/20).</Description>
                                            )}
                                        </TextField>

                                        {/* Price */}
                                        <TextField name="price" type="number" isRequired>
                                            <Label>Hourly Rate (USD)</Label>
                                            <Input
                                                type="number"
                                                placeholder={data.price}
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* floor */}
                                        <TextField name="floor" isRequired>
                                            <Label>Floor</Label>
                                            <Input
                                                placeholder={data.floor || "e.g., 1st Floor, 2nd Floor"}
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>


                                        <div className="md:col-span-2">
                                            <TextField name="BookingDate" type="date" isRequired>
                                                <Label>Booking Date</Label>
                                                <Input type="date" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Image URL - Removed preview */}
                                        <div className="md:col-span-2">
                                            <TextField name="imageUrl" isRequired>
                                                <Label>Image URL</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="Enter image URL"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <TextField name="capacity" type="number">
                                            <Label>Capacity</Label>
                                            <Input max="150" min="0" placeholder="2,3 etc" />
                                        </TextField>
                                    </div>

                                    <Modal.Footer>
                                        <Button type="submit" bg-white text-amber-700 font-bold>
                                            Edit Room
                                        </Button>
                                    </Modal.Footer>

                                </form>
                                <Toaster></Toaster>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}