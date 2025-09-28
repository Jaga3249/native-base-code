// theme.ts

import { Platform } from "react-native";

/**
 * ---------------- COLORS ----------------
 * Colors used throughout the app for light and dark mode.
 * Modify these to match your branding.
 */
const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

/**
 * ---------------- FONTS ----------------
 * Centralized font family definitions using Montserrat.
 * Supports Thin → Black including SemiBold.
 * Use FONTFAMILY object to reference fonts in components.
 */
export interface FontFamily {
  thin: string;
  extraLight: string;
  light: string;
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
  extraBold: string;
  black: string;
}

export const FONTFAMILY: FontFamily = {
  thin: "Montserrat-Thin",
  extraLight: "Montserrat-ExtraLight",
  light: "Montserrat-Light",
  regular: "Montserrat-Regular",
  medium: "Montserrat-Medium",
  semiBold: "Montserrat-SemiBold",
  bold: "Montserrat-Bold",
  extraBold: "Montserrat-ExtraBold",
  black: "Montserrat-Black",
};

/**
 * System fallback fonts for iOS, Android, and Web.
 */
export const SystemFonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

/**
 * ---------------- FONT SIZES ----------------
 * Standardized font sizes for headings, body, captions, etc.
 */
export interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_28: number;
  size_30: number;
  size_32: number;
}

export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_28: 28,
  size_30: 30,
  size_32: 32,
};

/**
 * ---------------- SPACING ----------------
 * Standard spacing values for consistent padding/margin.
 */
export interface Spacing {
  space_2: number;
  space_4: number;
  space_6: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_15: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_22: number;
  space_24: number;
  space_28: number;
  space_30: number;
  space_32: number;
  space_36: number;
}

export const SPACING: Spacing = {
  space_2: 2,
  space_4: 4,
  space_6: 6,
  space_8: 8,
  space_10: 10,
  space_12: 12,
  space_15: 15,
  space_16: 16,
  space_18: 18,
  space_20: 20,
  space_22: 22,
  space_24: 24,
  space_28: 28,
  space_30: 30,
  space_32: 32,
  space_36: 36,
};

/**
 * ---------------- BORDER RADIUS ----------------
 * Standardized border radius values for rounded corners.
 */
export interface BorderRadius {
  radius_1: number;
  radius_4: number;
  radius_5: number;
  radius_6: number;
  radius_7: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
}

export const BORDERRADIUS: BorderRadius = {
  radius_1: 1,
  radius_4: 4,
  radius_5: 5,
  radius_6: 6,
  radius_7: 7,
  radius_8: 8,
  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
  radius_25: 25,
};

/**
 * ---------------- BORDER WIDTH ----------------
 * Standardized border widths for consistent strokes.
 */
export interface BorderWidth {
  border_1: number;
  border_2: number;
  border_4: number;
}

export const BORDERWIDTH: BorderWidth = {
  border_1: 1,
  border_2: 2,
  border_4: 4,
};
