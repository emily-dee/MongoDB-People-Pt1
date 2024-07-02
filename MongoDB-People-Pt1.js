// 1. List all people. (200)
db.people.find();


// 2. Count all people. (200)
db.people.find().count();


// 3. List all people in Arizona. (6)
db.people.find({state: 'Arizona'});


// 4. List all males in Arizona. (2)
db.people.find({state: 'Arizona', gender: 'Male'});


// 5. List all people in Arizona plus New Mexico. (8)
db.people.find({$or: [{state: 'Arizona'}, {state: 'New Mexico'}]});


// 6. List all people under age 40. (90)
db.people.find({age: {$lt: 40}});


// 7. List all females in Florida between the ages of 40 and 45 (inclusive). (4)
db.people.find({state: 'Florida', gender: 'Female', age: {$gt: 40}, age: {$lt: 45}});


// 8. List people whose first name starts with "H". (2)
db.people.find({first_name: /^H/});


// 9. List all people in Michigan, sorted by first name. (6)
db.people.find({state: 'Michigan'}).sort({first_name: 1});


// 10. List all people who live in Virginia or are named Virginia.
db.people.find({state: 'Virginia', first_name: 'Virginia'});


// 11. List the names of people under age 30. Only display their first and last name. (38)
db.people.find({age: {$lt: 30}}, {_id: false, first_name: true, last_name: true});


// 12. List all people in Montana. Display all information except age. (2)
db.people.find({state: 'Montana'}, {age: false});


// 13. List the email addresses of people with a ".edu" email. Only display the email. (12)
db.people.find({email: /.edu$/}, {_id: false, email: true});



// Extended Challenges:

// 14. Count all people with at least one child under age four. (69)
db.people.find({children: {$elemMatch: {age: {$lt: 4}}}}).count();


// 15. List people who have no children. (43)
db.people.find({children: {$size: 0}});


// 16. List people who have at least one child. (157)
db.people.find({children: {$not: {$size: 0}}});