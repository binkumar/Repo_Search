const Realm = require("realm");
const mockData = {};
const Bookmark = {
    name: 'Bookmark',
    primaryKey: 'id',
    properties: {
        id: { type: 'int' },
        name: { type: 'string?' },
        full_name: { type: 'string' },
        avatar_url: { type: 'string?' },
        description: { type: 'int?' },
        forks: { type: 'string' },
        open_issues: { type: 'string?' },
        default_branch: { type: 'string?' }
    },
};

let databaseOptions = {
    path: "assignment",
    schema: [Bookmark],
    schemaVersion: 0,
    // encryptionKey: new Int8Array(64),
};


export const insertData = async () =>
    Realm.open(databaseOptions)
        .then(realm => {
            realm.write(() => {
                mockData.map(obj => realm.create(Bookmark.name, obj, Realm.UpdateMode.Modified))
            })
            return Promise.resolve("DB Inserted");
        })
        .catch(error => Promise.reject(error));


export const queryDB = async (query) =>
    Realm.open(databaseOptions)
        .then(realm => {
            let queryList = null;
            if (!query) {
                queryList = realm.objects(Bookmark.name).snapshot();
            } else {
                queryList = realm.objects(Bookmark.name).filtered(query).snapshot();
            }
            console.log("Fetched DB data", queryList);
            return Promise.resolve(queryResultsToArray(queryList));
        })
        .catch(error => Promise.reject(error));


const queryResultsToArray = (queryResults) => {
    let objectArr = [];
    for (let obj in queryResults) {
        objectArr.push(JSON.parse(JSON.stringify(queryResults[obj])));
    }
    return objectArr;
}
