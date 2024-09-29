import { ReactNode } from "react";

// type
import { SchemeType, ShapeType } from "@linenow-types/style";

//component
import { ChipWrapper } from "./Chip.styled";

export interface ChipProps {
  scheme?: SchemeType;
  shape?: ShapeType;
  children?: ReactNode;
  disable?: boolean;
}

const Chip = ({
  scheme = "blue",
  shape = "fill",
  children,
  disable = false,
}: ChipProps) => {
  return (
    <ChipWrapper $scheme={disable ? "grayLight" : scheme} $shape={shape}>
      {children}
    </ChipWrapper>
  );
};

export default Chip;
