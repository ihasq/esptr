import { $ } from "./mod.ts";

const counter = $(0);

console.log($[counter]);

$[counter]++;

console.log($[counter]);

const ref = $(counter);

$[ref]++

console.log($[counter])