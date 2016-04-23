var AWS = require('aws-sdk'); 
AWS.config.region = 'eu-west-1';
var rds = new AWS.RDS();

var params = {
DBSecurityGroupName: 'eb-prodautoscale', /* required */
CIDRIP: '2.2.2.2/32'
}

    exports.handler = function(event, context) {
    console.log(event);
    
    rds.revokeDBSecurityGroupIngress(params, function(err, data) {
        if (err){ 
            context.succeed("Status: Failed", err.stack);// an error occurred
        }else{     
            context.succeed("Status: Success",data); // successful response
        }
    });

    }