<a href="#installation" width="100%">
<img src="banner.svg" alt="Title banner"/>
</a>

## Tailwind CSS Text Stroke Plugin

[![npm version](https://badge.fury.io/js/@designbycode%2Ftailwindcss-text-stroke.svg)](https://badge.fury.io/js/@designbycode%2Ftailwindcss-text-stroke)
![npm](https://img.shields.io/npm/dt/%40designbycode/tailwindcss-text-stroke)
![NPM](https://img.shields.io/npm/l/%40designbycode%2Ftailwindcss-text-stroke)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40designbycode%2Ftailwindcss-text-stroke)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![GitHub stars](https://img.shields.io/github/stars/DesignByCode/tailwindcss-text-stroke?style=social)](https://github.com/DesignByCode/tailwindcss-text-stroke/stargazers)

Add custom text stroke utilities to your Tailwind CSS project using this plugin. It allows you to apply an outline-like stroke around text using CSS properties supported by WebKit-based browsers.

## 📇 Table of Contents

* [Installation](#installation)
    * [Using pnpm](#using-pnpm)
    * [Using npm](#using-npm)
    * [Using yarn](#using-yarn)
* [Setup](#setup)
* [Use](#use)
    * [Example](#example)
    * [With modifiers](#with-modifiers)
* [Contributing](#contributing)
* [License](#license)
* [Author](#author)
* [Acknowledgments](#acknowledgments)

## Installation

To use this plugin, you need to install it via pnpm, npm or yarn.

#### Using pnpm

```bash
pnpm add @designbycode/tailwindcss-text-stroke
```

#### Using npm

```bash
npm install @designbycode/tailwindcss-text-stroke
```

#### Using yarn

```bash
yarn add @designbycode/tailwindcss-text-stroke
```

First, ensure you have Tailwind CSS installed in your project. If not, install it by following the official documentation.

Next, require the plugin in your Tailwind CSS configuration file (usually named tailwind.config.js).

## Setup

1. First, ensure you have Tailwind CSS installed in your project. If not, install it by following the official documentation.

2. Next, require the plugin in your Tailwind CSS configuration file (usually named tailwind.config.js).

```javascript
module.exports = {
    // ...other configurations
    plugins: [
        // ...other plugins
        require("@designbycode/tailwindcss-text-stroke"),
    ],
};
```

Once you've required the plugin and added it to the plugins array, you can use the new text stroke utilities in your HTML templates.

## Use

The Text Stroke plugin provides the following utility classes for styling text with stroke effects:

* ```.text-stroke```: Base component that sets the default text stroke styles. You can override these styles using CSS variables.
* ```.text-stroke-{value}```: Sets the stroke width to the specified {value}. The available options are defined in the textStrokeWidth theme configuration.
* ```.text-stroke-{color}```: Applies a custom color to the text stroke. The {color} should match a color in your Tailwind CSS color palette.
* ```.text-stroke-fill-{color}```: Applies a custom fill color to the text stroke. The {color} should match a color in your Tailwind CSS color palette.

### Example

Here's an example of how you can use the utility classes to apply image masks:

```html
<h1 class="text-7xl font-black text-stroke ">
    Hello, TailwindCSS
</h1>
```

### With modifiers

```html
<h1 class="text-7xl font-black text-stroke text-stroke-indigo-200 text-stroke-fill-indigo-600">
    Hello, TailwindCSS
</h1>
```

## Contributing

Contributions to this plugin are welcome! If you encounter any issues, have feature requests, or want to improve the plugin, feel free to create a pull request or submit an issue on the GitHub repository.

## License

This project is licensed under the [MIT](LICENCE) License - see the [LICENSE](LICENCE) file for details.

## Author

<div>
<img  align="left" style="box-shadow:3px 3px 3px rgba(0,0,0,75);border-radius:1rem;border:solid 2px rgba(255,225,225,.25)" src="https://github.com/designbycode.png?size=130" alt="Claude Myburgh">
</div>
<h2 style="margin-top:0">Claude Myburgh</h2><ul style="padding-left:0;margin-top:-.63rem;list-style:none"><li>Github:<a href="https://github.com/designbycode"> @designbycode</a></li><li>Npm:<a href="https://www.npmjs.
com/~designbycode_"> @designbycode_</a></li></ul>

## Acknowledgments

- This plugin is inspired by the needs of web developers using Tailwind CSS.
- Special thanks to the Tailwind CSS team for creating such an amazing framework.











