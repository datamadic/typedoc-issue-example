Produces a bit too much docs
````sh
typedoc  --out docs-all src --readme none  --mode modules 
````

This has the correct entry point but provides too little
````sh
typedoc  --out docs-entry src  --entryPoint \"main\" --mode modules
````
