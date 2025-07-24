import type { FC } from "react";
import { useRef } from "react";
import type { DivProps } from "./Div";
import { useDrag, useDrop } from "react-dnd";
import type { Identifier } from "react-dnd";


export type MoveFunc = (dragIndex: number, hoverIndex: number) => void

