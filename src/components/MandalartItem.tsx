import {ReactNode} from "react";

export type MandalartItemProps = {
  children?: ReactNode
}

export const MandalartItem = (
  {
    children
  }: MandalartItemProps) => {
  return (
    <li className="ma-item" contentEditable={false}>
      {children}
    </li>
  )
}