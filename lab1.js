use ITI_Mongo

//Insert one document into the "Staff" collection: {_id, name, age, gender, department}. 
db.Staff.insertOne({"_id":1,"name":"eman","age":37,"gender":"female","department":"IS"})

//Insert many documents into the "Staff" collection:
db.Staff.insertMany([
    {
        "_id":5,"name":"ashraf","age":20,"gender":"male","department":"IS"
    },
    {
        "_id":6,"name":"hana","age":25,"gender":"female","managerName":"Ali","department":"IS"
    },
    {
        "_id":7,"name":"hala","age":37,"gender":"female","DOB":"IS"
    }
])


//Find all documents. 
db.Staff.find({})

//Find documents where gender is "male"
db.Staff.find({"gender":"male"})

//Find documents with age between 20 and 25.
db.Staff.find({"age":{
    "$gte":20,
    "$lte":25
}})

//Find documents where age is 25 and gender is "female".
db.Staff.find({"age":25, "gender": "female"})

//Find documents where age is 20 or gender is "female".
db.Staff.find({"$or": [
        {"age":20},
        {"gender":"female"}
    ]})

//Update one document in the "Staff" collection where age is 15, set the name to "your name".
db.Staff.updateOne({"age":15},{"$set":{"name":"ramadan"}})

//Update many documents in the "Staff" collection, update the department to "AI". 
db.Staff.updateMany({"gender": "female"},{"$set": {"department":"AI"}})

//Create a new collection called "test" and insert documents from Question 4. 
db.test.insertMany([
{
        "_id":5,"name":"ashraf","age":20,"gender":"male","department":"IS"
    },
    {
        "_id":6,"name":"hana","age":25,"gender":"female","managerName":"Ali","department":"IS"
    },
    {
        "_id":7,"name":"hala","age":37,"gender":"female","DOB":"IS"
    }
])


//Try to delete one document from the "test" collection where age is 15. 
db.test.insertOne({"name":"ramadan","age":15,"gender":"male","department":"AI"})
db.test.deleteOne({"age":15})

//With justification, explain which document will be deleted if more than one has age = 15. (Try it.) 
db.test.insertOne({"name":"rana","age":15,"gender":"female","department":"AI"})
db.test.deleteOne({"age":15})

//try to delete all male gender
db.test.deleteMany({"gender":"male"})

//try to delete all documents in test
db.test.deleteMany({})






