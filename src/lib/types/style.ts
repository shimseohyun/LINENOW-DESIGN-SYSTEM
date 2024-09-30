import theme from "@styles/theme";

// 색상 구조 type
export type SchemeType = keyof typeof theme.colors.scheme;

// 폰트 type
export type FontType = keyof typeof theme.fonts;
export type FontColor = keyof typeof theme.colors.font;

// 버튼의 형태 type
export type ShapeType = "fill" | "outline";
