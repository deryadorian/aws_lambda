var AWS = require('aws-sdk'); 
AWS.config.region = 'eu-west-1';

var rds = new AWS.RDS();

var params = {
  DBSecurityGroupName: 'eb-prodautoscale', /* required */
  CIDRIP: '1.1.1.1/32'
};
rds.revokeDBSecurityGroupIngress(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});