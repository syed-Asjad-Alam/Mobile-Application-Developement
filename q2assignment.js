

const emailValidation=(array)=>{
    var acceptedFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmailAddress = array.map(email =>{
        if(email.match(acceptedFormat)){
            return email;
        }
    })
    var filtered = validEmailAddress.filter(x => x !== undefined);
    return filtered;
}
console.log(emailValidation(["john@gmail.com", "david.doe@md.com.uk", "nathali@@gmail.com", "mans@com."]))