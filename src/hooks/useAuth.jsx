import { useEffect, useState } from "react"
import { Api } from "../utils/api";


export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)
            const res = await Api('GET', '/auth');
            //TODO Revisión respuesta
            setUser(res.result);
            setLoading(false)
        }

        fetchUser();
    }, []);

    return [user, loading];
}