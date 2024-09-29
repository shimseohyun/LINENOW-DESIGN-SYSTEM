import styled, { css } from "styled-components";

import { FontType } from "@linenow-types/style";

interface IconLabelWrapperProps {
  $gap: string;
  $font: FontType;
}
export const IconLabelWrapper = styled.span<IconLabelWrapperProps>`
  display: flex;
  align-items: center;

  ${({ $gap, $font }) => {
    return css`
      gap: ${$gap};

      ${({ theme }) => theme.fonts[$font]}
    `;
  }}
`;
