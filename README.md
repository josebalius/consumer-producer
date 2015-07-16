# consumer-producer

## Spawn a consumer (only one can be running at a time, unless consumer port is changed)
```
node consumer.js
```

It will run on port 3000

## Spawn a producer (multiple producers can run at the same time)
```
node producer.js
```

A producer will generate a new expression every 0.5 seconds. You can adjust this setting by modifying the `CONSUMER_GENERATION_INTERVAL` variable.

## Tests
```
npm test
```

If assertions pass, you should see the output of the expression parser without errors. If it fails you will see an error being thrown in the console.
