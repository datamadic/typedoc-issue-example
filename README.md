Produces a bit too much docs
````sh
typedoc  --out docs src --readme none  --mode modules 
````

This has the correct entry point but provides too little
````sh
typedoc  --out docs src  --entryPoint \"main\" --mode modules
````
