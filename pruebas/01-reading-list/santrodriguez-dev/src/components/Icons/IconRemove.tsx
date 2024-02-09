export const IconRemove = ({ handleClickIcon }: { classes?: string, handleClickIcon: () => void }) => {
  return (
    <svg
      onClick={handleClickIcon}
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      width="24" height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M10 10l4 4m0 -4l-4 4"></path>
    </svg>
  )
}
