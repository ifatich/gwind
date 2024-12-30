import GWIND_COLORS from "./src/lib/colors";
import GWIND_FONT_SIZE from "./src/lib/font-sizes";
import GWIND_THEME from "./src/lib/theme";

const config = {
  content: ['./src/**/*.{html,js,vue,ts}', './public/index.html'],
  darkMode: "class",
  theme: {
    container: {
      ...GWIND_THEME.CONTAINER,
    },
    fontSize: {
      ...GWIND_FONT_SIZE.SIZES,
    },
    fontWeight: {
      ...GWIND_FONT_SIZE.WEIGHTS,
    },
    colors: {
      ...GWIND_COLORS,
      ...GWIND_THEME.COLORS,
    },
    extend: {
      ...GWIND_THEME.DEFAULT_EXTEND,
    },
  },
  plugins: [],
};

export default config;