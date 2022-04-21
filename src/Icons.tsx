import { FunctionComponent } from "react";

interface IconProps {
  className?: string;
  onClick?: () => void;
}

export const CloseIcon: FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    <svg viewBox="0 0 370 370" fill="black" className={props.className} onClick={props.onClick}>
      <polygon points="370,21 350,0 185,164 21,0 0,21 164,185 0,350 21,370 185,206 350,370 370,350 206,185 "/>
    </svg>
  );
};
