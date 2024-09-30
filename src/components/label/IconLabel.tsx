import { ReactNode } from "react";

//components
import { IconLabelWrapper } from "./IconLabel.styled";

// types
import { FontColor, FontType } from "@linenow-types/style";
import Icon, { IconProps } from "@components/icon/Icon";

export interface IconLabelProps {
  iconPosition?: "left" | "right";

  gap: string;
  icon: IconProps;

  children: ReactNode;
  font?: FontType;
  fontColor?: FontColor;
}

const IconLabel = ({
  iconPosition = "left",

  gap,
  icon,

  children,
  font = "b3",
  fontColor = "gray",
}: IconLabelProps) => {
  return (
    <IconLabelWrapper $gap={gap} $font={font} $fontColor={fontColor}>
      {iconPosition == "left" ? <Icon {...icon} /> : null}

      {children}

      {iconPosition == "right" ? <Icon {...icon} /> : null}
    </IconLabelWrapper>
  );
};

export default IconLabel;
