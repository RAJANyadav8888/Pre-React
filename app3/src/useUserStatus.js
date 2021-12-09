export default (userId) => {
    let status="Online";
    
    if(userId%2===0){
        status="online";
    }else{
        status="offline";
    }
    return status;
};