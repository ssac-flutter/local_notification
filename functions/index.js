const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendFcm = functions.https.onRequest(async (req, res) => {

  // functions.logger.info("Hello logs!", {structuredData: true});
  const message = {
    topic: "test",
    // token:
      // "fWHISORtQUOWPSR7aIkx6z:APA91bEjF0qbHbbNEOZPuMRbmZKY_QD0A24r-nCCNneWmAAulyPCQKAxV0pQ5b8XnQzOlxSYjXZyR2Zogn3yZt9mcWVQiyGZisyopJY-x1KM9Mzx2-dLTaK16ZST5yn-iG1gPX7kyjCd",
    data: {
      title: req.body.title,
      body: req.body.body,
    },
    apns: {
      headers: {
        "apns-priority": "5",
        "apns-push-type": "background",
      },
      payload: {
        aps: {
          "content-available": 1,
        },
      },
    },
  };

  admin
    .messaging()
    .send(message)
    .then((response) => {
      console.log("Successful send message : ", response);
    })
    .catch((error) => {
      console.log("Error send message : ", error);
    });

  res.status(200).send();

});
