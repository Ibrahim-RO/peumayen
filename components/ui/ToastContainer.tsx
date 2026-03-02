"use client";

import { Toaster } from 'react-hot-toast';

export const ToastContainer = () => {
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
    );
};