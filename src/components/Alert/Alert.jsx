import './Alert.css';
import { useEffect, useRef } from "react";


export const Alert = ({alert, removeAlert}) => {
    const alertRef = useRef(null);

    useEffect(() => {
        if(alert.type !== 'question'){
            quitAlert()
        }
    }, [])

    const quitAlert = (time = 2500) => {
        setTimeout(() => {
            alertRef.current.style.animation = 'disappear 2s ease 0s 1 normal forwards'

            setTimeout(() => {
                removeAlert(alert.id);
            }, 500)
        }, time);
    }

    const handleQuestion = (accept) =>  {
        if(accept) {
            alert.callback();
            quitAlert(100)
        }else{
            quitAlert(100)
        }
    }

    return(
        <div ref={alertRef} className={`alert-component ${alert.type}`}>
            <h5>{alert.type.toUpperCase()}</h5>
            <p>{alert.text}</p>
            {alert.type === "question" && 
            <div className="question-buttons">
                <button onClick={() => handleQuestion(true)} className="question-accept">Accept</button>
                <button onClick={() => handleQuestion(false)} className="question-decline">Decline</button>
            </div>
            }
        </div>
    )
}