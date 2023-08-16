// @ts-expect-error
import plugin from "tailwindcss/plugin"
// @ts-expect-error
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette"

interface TextStrokePluginOptions {
  theme: {
    textStrokeWidth: Record<string, string>
  }
}

module.exports = plugin.withOptions<TextStrokePluginOptions>(
  function () {
    return function ({ addComponents, matchUtilities, theme }: any) {
      addComponents({
        ".text-stroke": {
          "-webkit-text-fill-color": "var(--tst-text-stroke-fill-color, currentColor)",
          "-webkit-text-stroke-width": `var(--tst-text-stroke-width, thin)`,
          "-webkit-text-stroke-color": "var(--tst-text-stroke-color, black)",
        },
      })

      matchUtilities(
        {
          "text-stroke": (value: string) => {
            return {
              "-webkit-text-fill-color": "var(--tst-text-stroke-fill-color, currentColor)",
              "-webkit-text-stroke-width": `var(--tst-text-stroke-width, ${value})`,
              "-webkit-text-stroke-color": "var(--tst-text-stroke-color, black)",
            }
          },
        },
        {
          values: theme("textStrokeWidth"),
        }
      )

      matchUtilities(
        {
          "text-stroke": (value: string) => ({
            "--tst-text-stroke-color": value,
          }),
        },
        {
          values: flattenColorPalette(theme("colors")),
          type: "color",
        }
      )
      matchUtilities(
        {
          "text-stroke-fill": (value: string) => ({
            "--tst-text-stroke-fill-color": value,
          }),
        },
        {
          values: flattenColorPalette(theme("colors")),
          type: "color",
        }
      )
    }
  },
  function () {
    return {
      theme: {
        textStrokeWidth: {
          thin: "thin",
          medium: "medium",
          thick: "thick",
          none: "unset",
          0: "0",
          1: "1px",
          2: "2px",
          3: "3px",
        },
      },
    }
  }
)
