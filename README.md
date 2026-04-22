# MongoDB Learning Showcase

This repository captures my MongoDB hands-on practice across three labs. It demonstrates practical experience with CRUD, schema validation, indexing, advanced updates, and aggregation pipelines.

## What I Learned

- Designed and manipulated collections across multiple databases.
- Wrote CRUD operations using `insertOne`, `insertMany`, `find`, `updateOne`, `updateMany`, `deleteOne`, and `deleteMany`.
- Built complex query filters with operators like `$or`, `$gte`, `$lte`, `$exists`, `$nin`, `$all`, `$size`, and `$eq`.
- Worked with nested documents and arrays (including arrays of objects).
- Applied advanced update operators: `$set`, `$setOnInsert`, `$unset`, `$rename`, `$inc`, `$mul`, `$max`, `$min`, and `$currentDate`.
- Used `upsert` behavior to insert on non-matching update filters.
- Implemented JSON Schema validation for collection-level data quality rules.
- Created indexes (single field and compound) and compared execution plans with `explain()`.
- Built aggregation pipelines with `$match`, `$group`, `$multiply`, `$sum`, `$avg`, `$max`, `$min`, and `$sort`.

## Lab Highlights

### Lab 1: Core CRUD and Filtering

Main focus:

- Inserting one and many documents in `Staff`.
- Querying by conditions and logical operators.
- Updating one vs many documents.
- Deleting one vs many documents and observing delete behavior.

Sample concepts practiced:

```javascript
// Find age range
db.Staff.find({ age: { $gte: 20, $lte: 25 } });

// Logical OR
db.Staff.find({ $or: [{ age: 20 }, { gender: "female" }] });

// Bulk update
db.Staff.updateMany({ gender: "female" }, { $set: { department: "AI" } });
```

### Lab 2: Advanced Documents, Updates, and Aggregation

Main focus:

- Querying arrays and nested fields in `inventory`.
- Updating with `upsert` and conditional insert behavior.
- Cleaning/changing schema using `$rename` and `$unset`.
- Running aggregations on `sales`, `employees`, and `likes`.

Sample concepts practiced:

```javascript
// Array conditions
db.inventory.find({ tags: { $all: ["ssl", "security"] } });

// Upsert with insert-only defaults
db.inventory.updateOne(
  { item: "laptopDevice" },
  { $set: { "size.uom": "m" }, $setOnInsert: { todayRigester: new Date() } },
  { upsert: true },
);

// Revenue aggregation
db.sales.aggregate([
  {
    $match: {
      date: {
        $gte: ISODate("2020-01-01T00:00:00Z"),
        $lt: ISODate("2023-01-01T00:00:00Z"),
      },
    },
  },
  {
    $group: {
      _id: "$product",
      totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
    },
  },
  { $sort: { totalRevenue: -1 } },
]);
```

### Lab 3: Validation and Performance Basics

Main focus:

- Creating a collection with JSON schema validation (`employees`).
- Enforcing required fields, type checks, minimum value rules, and enum constraints.
- Creating named indexes and validating index usage with `explain()`.
- Building and testing compound index strategy on nested name fields.

Sample concepts practiced:

```javascript
// Schema validation
db.createCollection("employees", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "department"],
      properties: {
        age: { bsonType: "int", minimum: 18 },
        department: { enum: ["HR", "Engineering", "Finance"] },
      },
    },
  },
});

// Index creation
db.trainingCenter1.createIndex({ age: 1 }, { name: "IX_age" });
db.trainingCenter1.createIndex(
  { "name.firstName": 1, "name.lastName": 1 },
  { name: "compound" },
);
```

## Skills Gained

- Translating business questions into MongoDB query logic.
- Choosing the right operator for filtering, updates, and data correction.
- Designing safer write operations with validation and upserts.
- Using indexing and query plans to reason about performance.
- Producing analytics with aggregation pipelines.

## Repository Contents

- `lab1.js`: CRUD fundamentals and filtering.
- `lab2.js`: advanced querying, updates, and aggregations.
- `lab3.js`: schema validation and indexing with explain plans.

## Final Takeaway

These labs gave me practical MongoDB experience from foundational CRUD to performance-aware querying and real aggregation workflows. The result is a stronger ability to build, validate, optimize, and analyze document-based data models.
