# Broken App Issues

Changed app.listen(3000); 
to 
app.listen(3000, function () {
  console.log("Server starting on port 3000")
}) at line 18
 

changed return res.send(JSON.stringify(out)); to return res.json(out); at line 12

changed var and let to const at line 2 and 3

added app.use(express.json()); at line 5

refactor code to use one map with promise.all instead of two different maps

added app.use function for the error handling in the catch block. 