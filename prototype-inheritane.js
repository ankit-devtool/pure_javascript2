var software = function(pays) {
  this.pay = pays;
};

software.prototype.print = function() {
  console.log(this.pay, "false");
  if (this.pay === true) {
    console.log("thanks for job", this.pay);
  }
};

var client = function(pays, title) {
  software.call(this);
  this.pay = title;
  this.title = pays;
};


client.prototype = Object.create(software.prototype);
client.prototype.constructor = client;
var newClient = new client("java", false);
newClient.print();
