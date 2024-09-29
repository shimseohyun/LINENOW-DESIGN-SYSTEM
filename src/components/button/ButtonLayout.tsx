import styled, { css } from "styled-components";

interface ButtonLayoutProps {
  $col: number;
  $rowGap?: string;
  $colGap?: string;
  $colTemplate?: string;
}

const ButtonLayout = styled.section<ButtonLayoutProps>`
  display: grid;
  width: 100%;
  ${({ $col, $colTemplate }) => {
    if ($colTemplate != undefined) {
      return css`
        grid-template-columns: ${$colTemplate};
      `;
    } else {
      return css`
        grid-template-columns: repeat(${$col}, 1fr);
      `;
    }
  }}

  ${({ $rowGap = "0.5rem" }) => {
    return css`
      row-gap: ${$rowGap};
    `;
  }}

  ${({ $colGap = "0.5rem" }) => {
    return css`
      column-gap: ${$colGap};
    `;
  }}
`;

export default ButtonLayout;
