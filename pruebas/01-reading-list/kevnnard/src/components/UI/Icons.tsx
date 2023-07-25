import { IconsCatalog } from "@/Enums/Icons.enums";
import { IconInterface } from "@/interfaces/Icon.interface";

const IconsComponent = ({
  icon = IconsCatalog.MENU,
  icon2,
  isSolid = false,
  strokeWidth = 1.5,
  className,
  fill,
  onClick,
}: IconInterface) => {
  const clases = !isSolid ? `${className} fill-transparent` : className;
  return (
    <svg
      data-testid="Icon"
      className={clases}
      stroke={isSolid ? undefined : "currentColor"}
      color={fill}
      fill={isSolid ? "currentColor" : undefined}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      focusable="false"
      aria-hidden="true"
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      {icon2 && <path strokeLinecap="round" strokeLinejoin="round" d={icon2} />}
    </svg>
  );
};

export default IconsComponent;
