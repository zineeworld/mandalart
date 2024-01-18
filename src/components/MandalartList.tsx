import {MandalartItem} from "./MandalartItem.tsx";

export type MandalartListProps = {
  data?: any[]
}
export const MandalartList = (
  {
    data = [],
  }: MandalartListProps) => {
  return (
    <ul className="ma-list">
      { data?.map ((it) => (
        <MandalartItem>{it}</MandalartItem>
      ))}
    </ul>
  )
}