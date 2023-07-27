export enum IconCatalog {
  searchIcon = "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  chevronLeft = "M15.75 19.5L8.25 12l7.5-7.5",
  chevronRight = "M8.25 4.5l7.5 7.5-7.5 7.5",
  rightIcon = "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  star = "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
  closeIcon = "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
  plusCircle = "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
}

export interface IconProps {
  icon: IconCatalog;
  isSolid?: boolean;
  strokeWidth?: number;
  className: string;
  fill?: string;
  /**
   * The calllback to get notified when the icon was clicked
   */
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export const Icon = ({
  icon = IconCatalog.searchIcon,
  isSolid = false,
  strokeWidth = 1.5,
  className,
  onClick,
}: IconProps) => {
  const classes = !isSolid ? `${className} fill-transparent` : className;

  return (
    <svg
      data-testid="Icon"
      className={classes}
      stroke={isSolid ? undefined : "currentColor"}
      fill={isSolid ? "currentColor" : undefined}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      focusable={false}
      aria-hidden="true"
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );
};
