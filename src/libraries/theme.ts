import gwindScheme from "./scheme";
import gwindFontSizes from "./font-sizes";
import gwindColors from "./colors";


const gwindTheme = {
    container: gwindScheme.CONTAINER,
    fontSize: gwindFontSizes.SIZES,
    fontWeight: gwindFontSizes.WEIGHTS,
    colors: {
        ...gwindColors,
        ...gwindScheme.COLORS,
    },
    extend: gwindScheme.METRICS,
}

export default gwindTheme