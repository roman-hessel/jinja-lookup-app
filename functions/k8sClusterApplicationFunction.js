exports = function(changeEvent) {
  const mongodb = context.services.get("mongodb-atlas");
  const db = mongodb.db("ccc");
  const historyCollection = db.collection("k8s cluster history");
  const collection = db.collection("k8s cluster");
  const { documentKey, fullDocument, fullDocumentBeforeChange, updateDescription } = changeEvent;
/*
  if (fullDocumentBeforeChange.revision === undefined) {
    fullDocumentBeforeChange.revision = 0;
    fullDocumentBeforeChange.originId = documentKey._id;
    fullDocumentBeforeChange.validFrom = new Date(0);
  }
  
  delete fullDocumentBeforeChange._id;
  fullDocumentBeforeChange.validUntil = new Date();
  fullDocumentBeforeChange.updateDescription = updateDescription;
  
  collection.updateOne({_id: documentKey._id},
      { 
        $set: {"validFrom": new Date(), "originId": documentKey._id},
        $inc: {"revision": 1}
      }
  )
  .then(result => {
    console.log(`Successfully updated document with _id: ${documentKey._id}`);
    historyCollection.insertOne(fullDocumentBeforeChange)
      .then(result => console.log(`Successfully created history document with _id: ${result.insertedId}`))
      .catch(err => console.error(err));
  })
  .catch(err => console.error(err));
  return true;
*/

  
};