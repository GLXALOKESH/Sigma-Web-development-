use ('sigma-web-dev')

db.createCollection('video95');

db.video95.insertOne({ "name": "firstdocument", "number": "first", "date": new Date() });

for (let i = 0; i <= 10; i++) {
    db.video95.insertMany([
        { 'name': 'sample', 'number': i, 'date': new Date() },
        { 'name': 'sample', 'number': i + 10, 'date': new Date() }
    ]);
}

for (let i = 1; i <= 5; i++) {
    db.video95.deleteOne({ 'number': i * 2 });
}
