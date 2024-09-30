import styled, { css } from "styled-components";

import { FontColor, FontType } from "@linenow-types/style";

interface IconLabelWrapperProps {
  $gap: string;
  $font: FontType;
  $fontColor: FontColor;
}
export const IconLabelWrapper = styled.span<IconLabelWrapperProps>`
  display: flex;
  align-items: center;

  ${({ $gap, $font, $fontColor }) => {
    return css`
      gap: ${$gap};

      ${({ theme }) => theme.fonts[$font]}
      color: ${({ theme }) => theme.colors.font[$fontColor]};
    `;
  }}
`;
