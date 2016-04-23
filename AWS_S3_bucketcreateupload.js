var AWS = require('aws-sdk'); 
AWS.config.region = 'eu-west-1';

var rds = new AWS.RDS({params: {Bucket: 'deryatest7'}}); 

s3bucket.createBucket(function() {

    var params = {Key: 'myKey', Body: 'Hello!'};
    
    s3bucket.upload(params, function(err, data) {
        
        if (err) {
            console.log("Error uploding", err);
        }
        else {
            console.log("uploaded!:)");
        }
    });
});
