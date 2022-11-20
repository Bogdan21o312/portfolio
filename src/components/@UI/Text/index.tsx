import React, {FC, ReactNode} from 'react';
import {Link} from "react-router-dom";
import classes from "./Text.module.scss"

interface TextProps {
    children: ReactNode,
    to?: string,
    color?: string,
    size?: string
}

export const Text: FC<TextProps> = ({children, to, color, size}) => {
    const Color = `${color === 'pink' ? classes.Pink : classes.Pink}`
    const Size = `${size === 'big' ? classes.Big : ''}${size === 'medium' ? classes.Medium : ''}${size === 'small' ? classes.Small : ''}`
    return (
        to
            ?
            <Link to={to} className={`${classes.Base} ${Color} ${Size} ${classes.Link}`}>
                {children}
            </Link>
            :
            <div className={`${classes.Base} ${Size}`}>
                {children}
            </div>
    )
}
