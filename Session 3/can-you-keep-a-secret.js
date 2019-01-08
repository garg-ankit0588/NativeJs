function createSecretHolder(secret) {
  var result= {
    getSecret: function(){
      return secret;
    },
    
    setSecret: function(s){
      return secret = s;
    }
  }
  return result;
}