import { AccordionWrapperProps } from '@typesFiles/props/accordionWrapper'
import { AccordionItem } from '@szhsin/react-accordion'
import ChevronDown from '@components/ChevronDown'

export default function AccordionItemWrapper({ children, title, ...rest }: AccordionWrapperProps) {
  return (
    <AccordionItem
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          {title}
          <ChevronDown
            className={`ml-auto transition-transform duration-200 ease-out ${
              isEnter && "rotate-180"
            }`}
          />
        </>
      )}
      className="border-b"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full p-4 text-left hover:bg-primary ${
            isEnter && "bg-secondary"
          }`
      }}
      contentProps={{
        className: "transition-height duration-200 ease-out"
      }}
      panelProps={{ className: "p-4" }}
    >
      {children}
    </AccordionItem>
  )


}
