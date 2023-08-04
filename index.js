const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = plugin(
  ({ addComponents, matchUtilities, theme }) => {
    addComponents({
      ".text-stroke": {
        "-webkit-text-fill-color":
          "var(--text-stroke-fill-color, currentColor)",
        "-webkit-text-stroke-width": `var(--text-stroke-width, 1px)`,
        "-webkit-text-stroke-color": "var(--text-stroke-color, black)",
      },
    });

    matchUtilities(
      {
        "text-stroke": (value) => {
          return {
            "-webkit-text-fill-color":
              "var(--text-stroke-fill-color, currentColor)",
            "-webkit-text-stroke-width": `var(--text-stroke-width, ${value})`,
            "-webkit-text-stroke-color": "var(--text-stroke-color, black)",
          };
        },
      },
      {
        values: theme("textStrokeWidth"),
      }
    );

    matchUtilities(
      {
        "text-stroke": (value) => ({
          "--text-stroke-color": value,
        }),
      },
      {
        values: flattenColorPalette(theme("colors")),
        type: "color",
      }
    );
    matchUtilities(
      {
        "text-stroke-fill": (value) => ({
          "--text-stroke-fill-color": value,
        }),
      },
      {
        values: flattenColorPalette(theme("colors")),
        type: "color",
      }
    );
  },
  {
    theme: {
      textStrokeWidth: {
        0: "0",
        1: "1px",
        2: "2px",
        3: "3px",
      },
    },
  }
);
