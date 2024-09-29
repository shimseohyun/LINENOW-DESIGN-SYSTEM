import { ReactNode } from "react";

//components
import { IconLabelWrapper } from "./IconLabel.styled";

// types
import { FontType } from "@linenow-types/style";
import Icon, { IconProps } from "@components/icon/Icon";

export interface IconLabelProps {
  iconPosition?: "left" | "right";
  font: FontType;
  gap: string;
  icon: IconProps;

  children: ReactNode;
}

const IconLabel = ({
  iconPosition = "left",
  font,
  gap,
  icon,
  children,
}: IconLabelProps) => {
  return (
    <IconLabelWrapper $gap={gap} $font={font}>
      {iconPosition == "left" ? <Icon {...icon} /> : null}

      {children}

      {iconPosition == "right" ? <Icon {...icon} /> : null}
    </IconLabelWrapper>
  );
};

export default IconLabel;
