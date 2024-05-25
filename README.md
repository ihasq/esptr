<div align=center>
	<i>
		<h1>>> esptr >></h1>
		Stupid Pointer For JavaScript.
	</i>
</div>

### Usage
```javascript
import { $ } from "https://esm.sh/esptr";

const counter = $(0); // create pointer

$[counter]; // 0

$[counter]++;
$[counter]; // 1

const reference = $(counter); // create pointer of pointer

$[reference]++;
$[counter] // 2

delete $[counter];

```