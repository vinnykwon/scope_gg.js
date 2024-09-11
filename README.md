# scope_gg.js
Mobile-API for [SCOPE.GG](https://play.google.com/store/apps/details?id=com.scopegg) CS2 Analytical service which helps you to improve your skill

## Example
```JavaScript
async function main() {
	const { ScopeGg } = require("./scope_gg.js")
	const scopeGg = new ScopeGg()
	const greandes = await scopeGg.getGrenades("mapName", "grenadeType", "tickrate")
	console.log(grenades)
}

main()
```
