import { useState } from "react";
import Loading from "../components/Loading/Loading";

/**
 * 
 * @returns Loading state, handleTransition function, error, Loading component
 */
export default function useLoading(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAsync = async (callback) => {
        try {
            setLoading(true);
            await callback();
        } catch (error) {
            console.log(error);
            setError(error)
        } finally{
            setLoading(false)
        }

    }

    return [loading, handleAsync, error, Loading]
}