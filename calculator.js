$( ".lock" ).click(function() {
    console.log("Lock should have changed")

    $(this).toggleClass('unlocked');
  });


var vars = ["vk", "np", "mst", "ek", "m"]
function check() {
    var values = {}
    vars.forEach(element => {
        values[element] = document.getElementById(element).value;
    });
    console.log("VK: " + Boolean(values['vk']))
    console.log("mst: " + Boolean(values['mst']))
    console.log("ek: " + Boolean(values['ek']))
    if(Boolean(values['vk']) + Boolean(values['mst']) + Boolean(values['ek'])  >= 2){
        console.log('I have enough values')

    }
    console.log("new values");
    console.dir(values)
}
function toggleLock(id){
    console.log("clicked " + id)
    toggleClass(id)

    // document.getElementById("lock-vk").classList.
}

function toggleClass(id){
    lockObj = document.getElementById(id)
    currentClass = lockObj.classList[0]
    if (lockObj.classList.contains('unlocked')){
        lockObj.classList.remove('unlocked')
    }else{
        lockObj.classList.add('unlocked')   
    }
}