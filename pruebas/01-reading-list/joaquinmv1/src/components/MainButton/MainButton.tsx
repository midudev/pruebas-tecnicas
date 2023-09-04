import { Button } from "."

export const MainButton = ({ title, callback }: { title: string, callback: () => void }) => {
  return (
    <>
      <Button onClick={callback}>{title}</Button>
    </>
  )
}