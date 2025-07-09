import { SyntheticEvent } from "react";

export default function EventBubbling() {
    const onDivClick = (e: SyntheticEvent) => {
        const { isTrusted, target, bubbles, currentTarget } = e;
        console.log(`click event bubbles on <div>`, isTrusted, target, bubbles, currentTarget);
    }


    const onButtonClick = (e: SyntheticEvent) => {
        const { isTrusted, target, bubbles, currentTarget } = e;
        console.log(`click event starts at <button>`, isTrusted, target, bubbles, currentTarget);
        e.stopPropagation();
    }


    return (
        <div>
            <p>EventBubbling</p>
            <button onClick={onButtonClick}>Click Button</button>
        </div>
    )
}


