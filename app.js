var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var dbUrl = 'mongodb://127.0.0.1:27017/sampledb';
getAllContacts();
function getAllContacts()
{
	mongoClient.connect(dbUrl, function(err, db){
		if(err)
		{
			console.log("Error connecting database : " + (err || "error message is null"));
		}
		else
		{
			var contacts = db.collection("contacts");
			contacts.find().toArray(function(err, result){
				if(err)
					console.log("Error fetching contacts : " + (err || 'error message is null'));
				else if(result.length)
				{
					for(var index = 0; index < result.length; index++)
					{
						console.log(result[index]);
					}
				}
				else
					console.log("No documents found for selected criteria");
			});
			db.close();
		}
	})
}