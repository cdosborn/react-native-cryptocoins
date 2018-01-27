# react-native-cryptocoins
This library exposes the fonts created at
https://github.com/allienworks/cryptocoins for consumption with React Native.
It bundles them using this library
https://github.com/oblador/react-native-vector-icons.

This library exposes `Icon` which is exactly https://github.com/oblador/react-native-vector-icons#icon-component.


## Install
```
yarn add react-native-cryptocoins

# This library doesn't include the fonts. Install them with:
yarn add cryptocoins-icons
```
You will need to then manually include the font in your project. After the
above install it can be found:
`node_modules/cryptocoins-icons/webfont/cryptocoins.ttf`.

## Usage

### Render an icon
```
import Icon from "react-native-cryptocoins/Cryptocoin";
...
<Icon name="BTC" />
```

### Get a list of all available icons
```
import { availableNames } from "react-native-cryptocoins/Cryptocoin";
// availableNames is a list of valid Icon names
```
