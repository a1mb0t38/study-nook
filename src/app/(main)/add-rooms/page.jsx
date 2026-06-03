"use client";

import { authClient } from '@/lib/auth-client';
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Description, Checkbox, CheckboxGroup } from '@heroui/react';
import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddRoomPage = () => {

    const [Discription, setDiscription] = useState("");
    const [resetcheck, setResetCheck] = useState([]);
    const formRef = useRef(null);

    const isDiscriptionInvalid = Discription.length > 0 && Discription.length < 20;

    const handleCheckBox = (value, checked) => {
        setResetCheck((prev) =>
            checked ? [...prev, value] : prev.filter((item) => item !== value)
        )
    }
    

    const onSubmit =async (e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);
        const {data:tokenData} = await authClient.token();
       const res = await fetch('http://localhost:5000/create-room', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(data)
        })
        const result = await res.json();
        // console.log(result);
        if(res.ok){
            toast.success('Successfully Room added!')
        }else{
            toast.error(result.message || 'Failed to add room. Please try again.');
        }
    }

    const handleReset = () => {
        setDiscription("");
        formRef.current.reset();
        setResetCheck([]);
    };


    return (
        <div className='max-w-7xl mx-auto bg-white  shadow-sm my-3 p-2 rounded-sm'>
            <div className='flex items-center justify-between mb-5'>
                <h1 className='text-5xl font-bold'>Add Room</h1>
                
            </div>
            <div>
                <form
                onSubmit={onSubmit}
                    className="p-10 space-y-8"
                    ref={formRef}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Destination Name */}
                        <div className="md:col-span-2">
                            <TextField name="RoomName" isRequired>
                                <Label>Room Name</Label>
                                <Input placeholder="Enter room name" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}

                        <TextField isRequired isInvalid={isDiscriptionInvalid} name="Description" value={Discription} onChange={setDiscription}>
                            <Label>Description</Label>
                            <TextArea placeholder="Enter room description" />
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
                                placeholder="3.66"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* floor */}
                        <TextField name="floor" isRequired>
                            <Label>Floor</Label>
                            <Input
                                placeholder="e.g., 1st Floor, 2nd Floor"
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

                    <div className='flex items-center gap-3'>
                        <Button
                        type="submit"
                        variant="outline"

                        className=" rounded-sm w-full bg-white text-amber-800"
                    >
                        Add Room
                    </Button>

                    <Button
                        type="button"
                        onPress={handleReset}
                        variant="outline"

                        className=" rounded-sm w-full bg-white text-amber-800"
                    >
                        Reset
                    </Button>
                    </div>
                </form>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default AddRoomPage;