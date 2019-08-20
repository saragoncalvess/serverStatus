let STATUS = 'ok';

function newStatus(){
    const r = Math.random();

    if(r <= 0.25){
        STATUS = 'ok';
    }else if(r <= 0.5){
        STATUS = 'error';
    }else{
        STATUS = 'no-response';
    }
    console.log(STATUS);
}
newStatus();
setInterval(newStatus, 2500);

module.exports = function() {
    return STATUS;
}
