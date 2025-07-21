import React, { useState, useLayoutEffect, useRef, useEffect } from "react";


export default function LayoutEffectExample () {
    const boxRef = useRef<HTMLDivElement | null>(null);


    // useEffect (() => {
    //     if (boxRef.current) {
    //         boxRef.current.style.background = 'yellow';
    //         boxRef.current.style.width = '500px';
    //         boxRef.current.style.height = '100px';
    //     }
    // }, []);


    useLayoutEffect (() => {
        if (boxRef.current) {
            boxRef.current.style.background = 'orange';
            boxRef.current.style.width = '500px';
            boxRef.current.style.height = '100px';
        }
    }, []);


    return (
        <div ref={boxRef}>
            useLayoutEffect로 스타일 적용
        </div>
    );
}