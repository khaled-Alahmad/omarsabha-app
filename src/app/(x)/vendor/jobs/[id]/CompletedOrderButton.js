"use client"; // Enable client-side functionality
import { addData } from "@/context/apiHelper";
import styles from "./JobDetailsDetails.module.css";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CompletedOrderButton({ jobId }) {
    const router = useRouter();

    const handleStartOrder = async () => {
        const header = {
            "Content-Type": "application/json",
        }
        try {

            const response = await addData(`vendors/orders/${jobId}/status`, {
                status: "completed",
            }, header);

            if (response.success) {
                toast.success("Order completed successfully!");
                router.push("/vendor/jobs"); // Redirect if needed
            } else {
                toast.error("Failed to start the order. Please try again.");
            }
        } catch (error) {
            console.error("Error starting the order:", error);
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <Button onClick={handleStartOrder} className={styles.startOrderButton}>
            complete Order
        </Button>
    );
}
