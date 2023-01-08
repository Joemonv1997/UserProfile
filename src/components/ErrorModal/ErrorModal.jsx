import classes from "./ErrorModal.module.css";

import React from 'react'
import Card from "../../Helpers/Card";

function ErrorModal(props) {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
        <Card className={classes.modal}>
            <header className={classes.header}>
                {props.title}
            </header>
            <div className={classes.content}>
            <p>{props.content}</p>
            </div>
            
            <footer className={classes.actions}>
                <button type="submit" onClick={props.onConfirm} className={classes.button}>Ok</button>
            </footer>
            </Card>  
    </div>
  )
}

export default ErrorModal