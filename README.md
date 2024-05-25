<div align=center>
	<h1><i>>> esptr >></i></h1>
Stupid Pointer For JavaScript.
</div>

### Usage
```javascript
import { $ } from "esptr";

const counter = $(0); // create pointer

$[counter]; // 0

$[counter]++;
$[counter]; // 1

const reference = $(counter); // create pointer of pointer

$[reference]++;
$[counter] // 2

const notValidAddress = counter.toString();

$[notValidAddress]; // 2
$[notValidAddress]; // undefined

export { counter }

```