import type { FC } from 'react';
// import { Component } from "react";


type ArrowComponentProps = {
    href: string;
    text: string;
}

export const ArrowComponent: FC<ArrowComponentProps> = (props) => {
    const { href, text } = props;
    return (
        <li>
            <a href={href}>
                <p>{text}</p>
            </a>
        </li>
    )
}

