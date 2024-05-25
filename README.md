<div align=center>
	<h1><i>>> esptr >></i></h1>
Stupid Pointer For JavaScript.
</div>

### Usage
```javascript
import { $ } from "esptr";

using counter = $(0); // create pointer

$[counter]; // 0

$[counter]++;
$[counter]; // 1

using reference = $(counter); // create pointer of pointer

$[reference]++;
$[counter] // 2

```