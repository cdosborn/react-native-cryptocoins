/**
 * Entypo icon set component.
 * Usage: <Entypo name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from "react-native-vector-icons";
import glyphMap from "./glyphmaps/Cryptocoin.json";

const iconSet = createIconSet(glyphMap, "cryptocoins", "Cryptocoin.ttf");

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;
export const availableNames = Object.keys(glyphMap);
