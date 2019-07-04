import React from 'react'
import classes from './button.css'

const Button = props => {
    const cls = [
        classes.Button,
        classes[props.type]
    ]

    return (
        <button
            onClick={props.onclick}
            className={cls.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )

}

export default Button