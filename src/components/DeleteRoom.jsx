"use client";

import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const DeleteRoom = ({ data }) => {


    const router = useRouter();

    const handleDelete = async () => {
        const {data:tokenData} = await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/room-details/${data._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const result = await res.json(); 
        console.log(result);
        if(res.ok){
           toast.success('Successfully deleted room!');
           router.refresh();
           router.push('/');
        }else{
            toast.error(result.message || 'Failed to delete room. Please try again.');
        }
        
    }

    return (
        <div>
            <AlertDialog>
                <Button className="btn text-danger" variant="outline">Delete Room</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete Room permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>{data.RoomName}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} slot="close" variant="danger">
                                    Delete Room
                                </Button>
                            </AlertDialog.Footer>
                            <Toaster></Toaster>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteRoom;