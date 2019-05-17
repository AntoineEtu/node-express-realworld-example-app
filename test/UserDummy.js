class UserDummy{
    constructor(username){
        this.username = username;
    }

    findOne(username){
        var userReturned = new UserDummy(username);
        return userReturned;
    }
}