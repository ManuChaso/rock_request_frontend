import { Alert } from '../../components/Alert/Alert';
import './AlertContext.css'
import { useContext, useEffect, useState, createContext } from "react";


const AlertContext = createContext(null);


export default function AlertProvider({children}){
    const [alert, setAlert] = useState([]);

    const addAlert = ({text, type, callback}) => {
        const newAlert = {
            id: alert.length ? alert[alert.length - 1].id + 1: 1,
            text,
            type,
            callback
        }
        setAlert([...alert, newAlert])
    }

    const removeAlert = (id) => {
        setAlert(prev => prev.filter(alert => alert.id !== id))
    }

    useEffect(() => {
        console.log(alert)
    }, [alert])

    return(
        <AlertContext.Provider value={{addAlert}}>
        {children}
        
        <ul className="alert-container">
            {alert.map(alert => 
                <Alert key={alert.id} alert={alert} removeAlert={removeAlert}/>
            )}
        </ul>
        </AlertContext.Provider>

    )
}


export const useAlert = () => useContext(AlertContext)