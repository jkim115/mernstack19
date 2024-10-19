/*
	import keywords are used to import properties, functions, classes from another module

	To import from a node library, we simply specify the module name to import, e.g.,
		import("react"), import("react/hoooks")
	
	To import from the modules on the local machine, we need to pass the absolute or relative path, e.g.,
		let { animalSoundsES6 } = import from "./shorthand"; //file extension is optional
*/

// import default - no curly brackets are needed {}
import printAnything from "./export";
console.log(printAnything("Print this"));

// // import by names - {} are needed
// import { dateToday, pie } from "./export";

// // import default and by names together
// import printAnything, {dateToday, pie} from "./export";

// // import by setting alias name - another module, let's say pie.js
// import { pie as dataPie } from "./pie";

// // import all named exports
// import * as imports from "./export";

