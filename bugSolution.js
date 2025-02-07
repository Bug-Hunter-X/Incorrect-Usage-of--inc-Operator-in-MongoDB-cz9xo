```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{"$inc":{"field":value},"$setOnInsert":{"field":0}});
```