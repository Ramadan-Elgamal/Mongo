db.inventory.insertMany([ 

  { 

    code: "xyz", 

    tags: [ 

      "school", 

      "book", 

      "bag", 

      "headphone", 

      "appliance" 

    ], 

    qty: [ 

      { 

        size: "S", 

        num: 10, 

        color: "blue" 

      }, 

      { 

        size: "M", 

        num: 45, 

        color: "blue" 

      }, 

      { 

        size: "L", 

        num: 100, 

        color: "green" 

      } 

    ] 

  }, 

  { 

    code: "abc", 

    tags: [ 

      "appliance", 

      "school", 

      "book" 

    ], 

    qty: [ 

      { 

        size: "6", 

        num: 100, 

        color: "green" 

      }, 

      { 

        size: "6", 

        num: 50, 

        color: "blue" 

      }, 

      { 

        size: "8", 

        num: 100, 

        color: "brown" 

      } 

    ] 

  }, 

  { 

    "_id": 111, 

    "item": "TBD", 

    "stock": 0, 

    "info": { 

      "publisher": "1111", 

      "pages": 430 

    }, 

    "tags": [ 

      "technology", 

      "computer" 

    ], 

    "ratings": [ 

      { 

        "by": "ijk", 

        "rating": 4 

      }, 

      { 

        "by": "lmn", 

        "rating": 5 

      } 

    ], 

    "reorder": false 

  }, 

  { 

    "_id": 3, 

    "item": "XYZ123", 

    "stock": 15, 

    "info": { 

      "publisher": "5555", 

      "pages": 150 

    }, 

    "tags": [ 

       

    ], 

    "ratings": [ 

      { 

        "by": "xyz", 

        "rating": 5 

      } 

    ], 

    "reorder": false 

  }, 

  { 

    "_id": 4, 

    "address": "2030 Martian Way", 

    "zipCode": "90698345" 

  }, 

  { 

    "_id": 5, 

    "address": "156 Lunar Place", 

    "zipCode": 43339374 

  }, 

  { 

    "_id": 6, 

    "address": "2324 Pluto Place", 

    "zipCode": "3921412" 

  }, 

  { 

    "_id": 7, 

    "address": "55 Saturn Ring", 

    "zipCode": "88602117" 

  }, 

  { 

    "_id": 8, 

    "address": "104 Venus Drive", 

    "zipCode": [ 

      "834847278", 

      "1893289032" 

    ] 

  }, 

  { 

    code: "efg", 

    tags: [ 

      "school", 

      "book" 

    ], 

    qty: [ 

      { 

        size: "S", 

        num: 10, 

        color: "blue" 

      }, 

      { 

        size: "M", 

        num: 100, 

        color: "blue" 

      }, 

      { 

        size: "L", 

        num: 100, 

        color: "green" 

      } 

    ] 

  }, 

  { 

    code: "ijk", 

    tags: [ 

      "electronics", 

      "school" 

    ], 

    qty: [ 

      { 

        size: "M", 

        num: 100, 

        color: "green" 

      } 

    ] 

  }, 

  { 

    code: "ijk", 

    tags: [ 

      "ssl", 

      "school" 

    ], 

    qty: [ 

      { 

        size: "M", 

        num: 100, 

        color: "green" 

      } 

    ] 

  }, 

  { 

    code: "ijk", 

    tags: [ 

      "security", 

      "school" 

    ], 

    qty: [ 

      { 

        size: "M", 

        num: 100, 

        color: "green" 

      } 

    ] 

  }, 

  { 

    code: "ijk", 

    tags: [ 

      "ssl", 

      "security" 

    ], 

    qty: [ 

      { 

        size: "M", 

        num: 100, 

        color: "green" 

      } 

    ] 

  }, 

  { 

    _id: 9, 

    item: { 

      name: "ab", 

      code: "123" 

    }, 

    qty: 15, 

    tags: [ 

      "A", 

      "B", 

      "C" 

    ] 

  }, 

  { 

    _id: 10, 

    item: { 

      name: "cd", 

      code: "123" 

    }, 

    qty: 20, 

    tags: [ 

      "B" 

    ] 

  }, 

  { 

    _id: 11, 

    item: { 

      name: "ij", 

      code: "456" 

    }, 

    qty: 25, 

    tags: [ 

      "A", 

      "B" 

    ] 

  }, 

  { 

    _id: 12, 

    item: { 

      name: "xy", 

      code: "456" 

    }, 

    qty: 30, 

    tags: [ 

      "B", 

      "A" 

    ] 

  }, 

  { 

    _id: 13, 

    item: { 

      name: "mn", 

      code: "000" 

    }, 

    qty: 20, 

    tags: [ 

      [ 

        "A", 

        "B" 

      ], 

      "C" 

    ] 

  }, 

  { 

    "item": "nuts", 

    "quantity": 30, 

    "carrier": { 

      "name": "Shipit", 

      "fee": 3 

    } 

  }, 

  { 

    "item": "bolts", 

    "quantity": 50, 

    "carrier": { 

      "name": "Shipit", 

      "fee": 4 

    } 

  }, 

  { 

    "item": "washers", 

    "quantity": 10, 

    "carrier": { 

      "name": "Shipit", 

      "fee": 1 

    } 

  }, 

  { 

    item: "canvas", 

    qty: 100, 

    size: { 

      h: 28, 

      w: 35.5, 

      uom: "cm" 

    }, 

    status: "A" 

  }, 

  { 

    item: "journal", 

    qty: 25, 

    size: { 

      h: 14, 

      w: 21, 

      uom: "cm" 

    }, 

    status: "A" 

  }, 

  { 

    item: "mat", 

    qty: 85, 

    size: { 

      h: 27.9, 

      w: 35.5, 

      uom: "cm" 

    }, 

    status: "A" 

  }, 

  { 

    item: "mousepad", 

    qty: 25, 

    size: { 

      h: 19, 

      w: 22.85, 

      uom: "cm" 

    }, 

    status: "P" 

  }, 

  { 

    item: "notebook", 

    qty: 50, 

    size: { 

      h: 8.5, 

      w: 11, 

      uom: "in" 

    }, 

    status: "P" 

  }, 

  { 

    item: "paper", 

    qty: 100, 

    size: { 

      h: 8.5, 

      w: 11, 

      uom: "in" 

    }, 

    status: "D" 

  }, 

  { 

    item: "planner", 

    qty: 75, 

    size: { 

      h: 22.85, 

      w: 30, 

      uom: "cm" 

    }, 

    status: "D" 

  }, 

  { 

    item: "postcard", 

    qty: 45, 

    size: { 

      h: 10, 

      w: 15.25, 

      uom: "cm" 

    }, 

    status: "A" 

  }, 

  { 

    item: "sketchbook", 

    qty: 80, 

    size: { 

      h: 14, 

      w: 21, 

      uom: "cm" 

    }, 

    status: "A" 

  }, 

  { 

    item: "sketch pad", 

    qty: 95, 

    size: { 

      h: 22.85, 

      w: 30.5, 

      uom: "cm" 

    }, 

    status: "A" 

  }, 

  { 

    item: "journal", 

    qty: 25, 

    tags: [ 

      "blank", 

      "red" 

    ], 

    dim_cm: [ 

      14, 

      21 

    ] 

  }, 

  { 

    item: "notebook", 

    qty: 50, 

    tags: [ 

      "red", 

      "blank" 

    ], 

    dim_cm: [ 

      14, 

      21 

    ] 

  }, 

  { 

    item: "paper", 

    qty: 100, 

    tags: [ 

      "red", 

      "blank", 

      "plain" 

    ], 

    dim_cm: [ 

      14, 

      21 

    ] 

  }, 

  { 

    item: "planner", 

    qty: 75, 

    tags: [ 

      "blank", 

      "red" 

    ], 

    dim_cm: [ 

      22.85, 

      30 

    ] 

  }, 

  { 

    item: "postcard", 

    qty: 45, 

    tags: [ 

      "blue" 

    ], 

    dim_cm: [ 

      10, 

      15.25 

    ] 

  }, 

  { 

    code: "xyz", 

    tags: [ 

      "school", 

      "book", 

      "bag", 

      "headphone", 

      "appliance" 

    ], 

    qty: [ 

      { 

        size: "S", 

        num: 10, 

        color: "blue" 

      }, 

      { 

        size: "M", 

        num: 45, 

        color: "blue" 

      }, 

      { 

        size: "L", 

        num: 100, 

        color: "green" 

      } 

    ] 

  }, 

  { 

    code: "abc", 

    tags: [ 

      "appliance", 

      "school", 

      "book" 

    ], 

    qty: [ 

      { 

        size: "6", 

        num: 100, 

        color: "green" 

      }, 

      { 

        size: "6", 

        num: 50, 

        color: "blue" 

      }, 

      { 

        size: "8", 

        num: 100, 

        color: "brown" 

      } 

    ] 

  }, 

  { 

    code: "efg", 

    tags: [ 

      "school", 

      "book" 

    ], 

    qty: [ 

      { 

        size: "S", 

        num: 10, 

        color: "blue" 

      }, 

      { 

        size: "M", 

        num: 100, 

        color: "blue" 

      }, 

      { 

        size: "L", 

        num: 100, 

        color: "green" 

      } 

    ] 

  }, 

  { 

    code: "ijk", 

    tags: [ 

      "electronics", 

      "school" 

    ], 

    qty: [ 

      { 

        size: "M", 

        num: 100, 

        color: "green" 

      } 

    ] 

  }, 

  { 

    _id: 14, 

    status: "a" 

  }, 

  { 

    _id: 15, 

    sku: "abc123", 

    quantity: 10, 

    metrics: { 

      orders: 2, 

      ratings: 3.5 

    } 

  }, 

  { 

    _id: 16, 

    highScore: 800, 

    lowScore: 200 

  }, 

  { 

    _id: 17, 

    highScore: 800, 

    lowScore: 200 

  }, 

  { 

    _id: 18, 

    item: "Scarf", 

    price: 10 

  }, 

  { 

    "_id": 19, 

    "alias": [ 

      "The American Cincinnatus", 

      "The American Fabius" 

    ], 

    "mobile": "555-555-5555", 

    "nmae": { 

      "first": "george", 

      "last": "washington" 

    } 

  }, 

  { 

    "_id": 20, 

    "alias": [ 

      "My dearest friend" 

    ], 

    "mobile": "222-222-2222", 

    "nmae": { 

      "first": "abigail", 

      "last": "adams" 

    } 

  }, 

  { 

    "_id": 21, 

    "alias": [ 

      "Amazing grace" 

    ], 

    "mobile": "111-111-1111", 

    "nmae": { 

      "first": "grace", 

      "last": "hopper" 

    } 

  }, 

  { 

    _id: 22, 

    quantity: 250, 

    instock: true, 

    reorder: false, 

    details: { 

      model: "14QQ", 

      make: "Clothes Corp" 

    }, 

    tags: [ 

      "apparel", 

      "clothing" 

    ], 

    ratings: [ 

      { 

        by: "Customer007", 

        rating: 4 

      } 

    ] 

  }, 

  { 

    "item": "chisel", 

    "sku": "C001", 

    "quantity": 4, 

    "instock": true 

  }, 

  { 

    "item": "hammer", 

    "sku": "unknown", 

    "quantity": 3, 

    "instock": true 

  }, 

  { 

    "item": "nails", 

    "sku": "unknown", 

    "quantity": 100, 

    "instock": true 

  }, 

  { 

    "_id": 23, 

    name: "Alice King", 

    classAverage: 87.333333333333333 

  }, 

  { 

    "_id": 24, 

    name: "Bob Jenkins", 

    classAverage: "83.52" 

  }, 

  { 

    "_id": 25, 

    name: "Cathy Hart", 

    classAverage: "94.06" 

  }, 

  { 

    "_id": 26, 

    name: "Drew Williams", 

    classAverage: 93 

  }, 

  { 

    "_id": 27, 

    "address": "2030 Martian Way", 

    "zipCode": "90698345" 

  }, 

  { 

    "_id": 28, 

    "address": "156 Lunar Place", 

    "zipCode": "43339374" 

  }, 

  { 

    "_id": 29, 

    "address": "2324 Pluto Place", 

    "zipCode": "3921412" 

  }, 

  { 

    "_id": 30, 

    "address": "55 Saturn Ring", 

    "zipCode": "88602117" 

  }, 

  { 

    "_id": 31, 

    "address": "104 Venus Drive", 

    "zipCode": [ 

      "834847278", 

      "1893289032" 

    ] 

  } 

]) 

/////////////////////////////////////////////////////////////////////////




//Find documents where the "tags" field exists. 
db.inventory.find({"tags":{"$exists":true}})

//Find documents where the "tags" field does not contain values "ssl" or "security." 
db.inventory.find({"tags":{"$nin":["ssl","security"]}})

//Find documents where the "qty" field is equal to 85. 
db.inventory.find({qty:{"$eq":85}})

//Find documents where the "tags" array contains all of the values [ssl, security] using the `$all` operator. 
db.inventory.find({"tags":{"$all":["ssl","security"]}})

//Find documents where the "tags" array has a size of 3.
db.inventory.find({"tags":{"$size":3}})

db.inventory.updateOne(
    {"item":"paper"},
    {"$set":{"size.uom":"m"},$currentDate:{lastModified:true}}
)

//Also, use the upsert option (within updateOne)and change filter condition item:”laptopDevice”. 
db.inventory.updateOne(
    {"item":"laptopDevice"},
    {"$set":{"size.uom":"m"}},
    {"upsert":true}
)

//Use the $setOnInsert operator to add new data if an insert occurs.
db.inventory.updateOne(
    {"item":"laptopDevice"},
    {
        "$set":{"size.uom":"m"},
        "$setOnInsert": {"todayRigester":new Date()}
    },
    {"upsert":true}
)

//try updateMany
db.inventory.updateMany(
    {"item":"laptopDevice"},
    {
        "$set":{"size.uom":"m"},
        "$setOnInsert": {"todayRigester":new Date()}
    },
    {"upsert":true}
)

//try replace one
db.inventory.updateOne(
    {"item":"laptopDevice"},
    {
        "$set":{"size.uom":"m"},
        "$setOnInsert": {"todayRigester":new Date()}
    },
    {"upsert":true}
)

//Insert a document with incorrect field names "neme" and "ege," then rename them to "name" and "age." 
db.inventory.insertOne({
    "neme":"ali",
    "ege":21
})
db.inventory.updateOne({"neme":"ali"},{$rename:  {"neme":"name","ege":"age"}})


//Try to reset any document field using the `$unset` function. 
db.inventory.updateOne(
    {"name":"ali"},
    {"$unset":{age:""}}
)
db.inventory.find({})
//Try update operators like `$max` for price
db.inventory.updateOne({"_id":111},
    {
        "$max": { "salary": 75000 },
        "$min": { "overtime": 5 },
        "$inc": { "age": 1 },
        "$mul": { 
                  "quantity": 2,
                  "price": 0.9 
                }
    },
    {"upsert":true}
)




use Sales

db.sales.insertMany(  

[ 

  { 

    "product": "Widget", 

    "quantity": 10, 

    "price": 25.0, 

    "date": ISODate("2018-12-15T08:00:00Z") 

  }, 

  { 

    "product": "Gadget", 

    "quantity": 5, 

    "price": 50.0, 

    "date": ISODate("2019-03-20T14:30:00Z") 

  }, 

  { 

    "product": "Widget", 

    "quantity": 8, 

    "price": 25.0, 

    "date": ISODate("2020-05-01T10:15:00Z") 

  }, 

  { 

    "product": "Gadget", 

    "quantity": 3, 

    "price": 50.0, 

    "date": ISODate("2020-09-10T16:45:00Z") 

  }, 

  { 

    "product": "Accessory", 

    "quantity": 15, 

    "price": 10.0, 

    "date": ISODate("2021-02-20T09:30:00Z") 

  }, 

  { 

    "product": "Widget", 

    "quantity": 12, 

    "price": 30.0, 

    "date": ISODate("2022-04-05T11:45:00Z") 

  }, 

  { 

    "product": "Gadget", 

    "quantity": 7, 

    "price": 55.0, 

    "date": ISODate("2023-01-10T14:30:00Z") 

  }, 

  { 

    "product": "Accessory", 

    "quantity": 20, 

    "price": 12.0, 

    "date": ISODate("2023-04-15T09:30:00Z") 

  } 

]) 

//Calculate the total revenue for product from sales collection documents within the date range '01-01-2020' to '01-01-2023' and then sort them in descending order by total revenue. 
//Total Revenue=  Sum (Quantity * Price) 
db.sales.aggregate([
  {
    $match: {
      date: {
        $gte: ISODate("2020-01-01T00:00:00Z"),
        $lt: ISODate("2023-01-01T00:00:00Z")
      }
    }
  },

  {
    $group: {
      _id: "$product",
      totalRevenue: { 
        $sum: { $multiply: ["$quantity", "$price"] } 
      }
    }
  },
  

  {
    $sort: { totalRevenue: -1 }
  }
])


//Calculate the average salary for employees for each department from the employee’s collection.
use employees

db.employees.insertMany(  

[ 

  { 

    "name": "John Doe", 

    "department": "Sales", 

    "salary": 60000, 

    "hireDate": ISODate("2022-03-15T08:00:00Z") 

  }, 

  { 

    "name": "Alice Smith", 

    "department": "Sales", 

    "salary": 55000, 

    "hireDate": ISODate("2022-05-20T09:30:00Z") 

  }, 

  { 

    "name": "Bob Johnson", 

    "department": "Engineering", 

    "salary": 70000, 

    "hireDate": ISODate("2021-10-10T14:15:00Z") 

  }, 

  { 

    "name": "Sarah Brown", 

    "department": "Sales", 

    "salary": 58000, 

    "hireDate": ISODate("2022-08-05T11:45:00Z") 

  }, 

  { 

    "name": "David Lee", 

    "department": "Engineering", 

    "salary": 72000, 

    "hireDate": ISODate("2022-01-25T16:30:00Z") 

  }, 

  { 

    "name": "Emily Taylor", 

    "department": "Engineering", 

    "salary": 68000, 

    "hireDate": ISODate("2021-12-10T08:30:00Z") 

  }, 

  { 

    "name": "Olivia Wilson", 

    "department": "Sales", 

    "salary": 59000, 

    "hireDate": ISODate("2022-09-15T10:00:00Z") 

  } 

] 

) 


db.employees.aggregate([
  {
    $group: {
      _id: "$department", 
      averageSalary: { $avg: "$salary" },
      employeeCount: { $sum: 1 }
    }
  },
  {
    $sort: { averageSalary: -1 }
  }
])


//Use likes Collection to calculate max and min likes per title 
use likes
db.likes.insertMany([ 

{ 

   _id: 10, 

   title: 'MongoDB Overview',  

   description: 'MongoDB is no sql database', 

   by_user: 'tutorials point', 

   url: 'http://www.tutorialspoint.com', 

   tags: ['mongodb', 'database', 'NoSQL'], 

   likes: 100 

}, 

{ 

   _id:15, 

   title: 'MongoDB Overview',  

   description: 'MongoDB is no sql database', 

   by_user: 'tutorials point', 

   url: 'http://www.tutorialspoint.com', 

   tags: ['mongodb', 'database', 'NoSQL'], 

   likes: 150 

}, 

{ 

   _id: 20, 

   title: 'MongoDB Overview',  

   description: 'MongoDB is no sql database', 

   by_user: 'tutorials point', 

   url: 'http://www.tutorialspoint.com', 

   tags: ['mongodb', 'database', 'NoSQL'], 

   likes: 250 

}, 

 

{ 

   _id: 25, 

   title: 'NoSQL Overview',  

   description: 'No sql database is very fast', 

   by_user: 'tutorials point', 

   url: 'http://www.tutorialspoint.com', 

   tags: ['mongodb', 'database', 'NoSQL'], 

   likes: 15 

}, 

{ 

   _id: 30, 

   title: 'NoSQL Overview',  

   description: 'No sql database is very fast', 

   by_user: 'tutorials point', 

   url: 'http://www.tutorialspoint.com', 

   tags: ['mongodb', 'database', 'NoSQL'], 

   likes: 25 

}, 

{ 

   _id: 35, 

   title: 'NoSQL Overview',  

   description: 'No sql database is very fast', 

   by_user: 'tutorials point', 

   url: 'http://www.tutorialspoint.com', 

   tags: ['mongodb', 'database', 'NoSQL'], 

   likes: 10 

}, 

 

{ 

   _id: 40, 

   title: 'Neo4j Overview',  

   description: 'Neo4j is no sql database', 

   by_user: 'Neo4j', 

   url: 'http://www.neo4j.com', 

   tags: ['neo4j', 'database', 'NoSQL'], 

   likes: 750 

}, 

 

{ 

   _id: 45, 

   title: 'Neo4j Overview',  

   description: 'Neo4j is no sql database', 

   by_user: 'Neo4j', 

   url: 'http://www.neo4j.com', 

   tags: ['neo4j', 'database', 'NoSQL'], 

   likes: 250 

}, 

 

{ 

   _id: 50, 

   title: 'Neo4j Overview',  

   description: 'Neo4j is no sql database', 

   by_user: 'Neo4j', 

   url: 'http://www.neo4j.com', 

   tags: ['neo4j', 'database', 'NoSQL'], 

   likes: 300 

} 

]) 

db.likes.aggregate([
  {
    $group: {
      _id: "$title",
      maxLikes: { $max: "$likes" },
      minLikes: { $min: "$likes" }
    }
  },
  {
    $sort: { _id: 1 }
  }
])



