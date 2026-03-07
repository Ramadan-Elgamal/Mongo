
//Provide the MongoDB code for enforcing JSON schema validation when creating a collection named "employees" with required fields "name," "age" (min. 18), and "department" (limited to ["HR," "Engineering," "Finance"]). 
db.createCollection("employees", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["name", "age", "department"],
         properties: {
            name: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            age: {
               bsonType: "int",
               minimum: 18,
               description: "must be an integer greater than or equal to 18 and is required"
            },
            department: {
               enum: ["HR", "Engineering", "Finance"],
               description: "can only be one of the allowed values and is required"
            }
         }
      }
   }
})

//Create new Database named Demo 
use Demo

//Insert documents into trainningCenter1 collection contains (Use Variable named data as Array) 
var data = [
    {"_id":1,"name":{"firstName":"ali","lastName":"ramadan"},"age":21,"status":"active","address":[{"Egypt":"Cairo"}]},
    {"_id":2,"name":{"firstName":"ahmed","lastName":"ramadan"},"age":25,"status":"active","address":[{"Egypt":"Ales"}]},
    {"_id":3,"name":{"firstName":"mohamed","lastName":"ahmed"},"age":28,"status":"inactive","address":[{"Egypt":"mansoura"}]},
];

db.trainingCenter1.insertMany(data)

//using insertOne from data variable
db.trainingCenter1.insertOne(data)

db.trainingcenter2.insertMany(data)


//Use find. explain function (find by age field) and mention scanning type 
db.trainingCenter1.find({"age":28}).explain()

//Create index on created collection named it “IX_age” on age field  
db.trainingCenter1.createIndex({"age":1},{name:"IX_age"})

//Use find. explain view winning plan for index created (find by age field) and mention scanning type 
db.trainingCenter1.find({"age":28}).explain()

//Create index on created collection named it “compound” on firstNsme and lastName 
db.trainingCenter1.find({"name":{$exists:true}}).explain()

db.trainingCenter1.createIndex({"name.firstName":1,"name.lastName":1},{name:"compound"})

db.trainingCenter1.find({"name.firstName":{$exists:true}}).explain()











