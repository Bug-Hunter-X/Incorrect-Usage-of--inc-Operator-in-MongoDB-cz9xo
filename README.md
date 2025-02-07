# Incorrect Usage of $inc Operator in MongoDB
This repository demonstrates an example of an uncommon bug related to the $inc operator in MongoDB.
The $inc operator is used to increment or decrement a numerical field in a document. However, if the field does not exist, the $inc operation will not create the field; instead, it will simply do nothing. This behaviour can lead to unexpected results if you're not aware of it. 

## Bug Description:
The example code incorrectly uses the $inc operator. The field `field` may not exist in the document with `_id: ObjectId("someId")`. If it doesn't, the update operation will have no effect. 
## Bug Solution:
The solution involves using the $setOnInsert operator to create the field if it doesn't exist. If the field exists, it will increment. This ensures that the field is always present and the increment operation works as expected.