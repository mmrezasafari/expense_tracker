//Requiring the package
import PouchDB from "pouchdb";

//Creating the database object
const db = new PouchDB('my_database');

const user1 = {_id: '001', name: 'Ali', age: 22, Designation: 'programmer'}
const user2 = {_id: '002', name: 'zahra', age: 19, Designation: 'arthitect'}
const user3 = {_id: '003', name: 'mamad', age: 24, Designation: 'paiter'}
let docs = [user1, user2, user3]

db.bulkDocs(docs, (err, response) => {
    if(err) {
        console.error('err', err)
    } else {
        console.log('res', response);
    }
})

db.allDocs({include_docs: true}, (err, doc) => {
    if(err) {
        console.error('err', err);
    } else {
        console.log('doc', doc.rows);
    }
})