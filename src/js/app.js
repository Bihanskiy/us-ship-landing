window['FLS'] = true;

import "../scss/style.scss";

import * as flsFunctions from "./files/functions.js";
flsFunctions.isWebp();
/* Бургер */
flsFunctions.menuInit();

import "./features/dynamic_adapt.js";
import "./files/script.js";