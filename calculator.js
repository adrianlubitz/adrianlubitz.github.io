var vars = ["vk", "mst", "ek", "m"]
var solveFor = 'ek'
function check() {
    // get all values
    var values = {}
    vars.forEach(element => {
        domObj = document.getElementById(element)
        values[element] = domObj.value;
        // get value which needs to be calculated
        if (domObj.readOnly) {
            solveFor = element
        }

    });
    if (solveFor == "ek" && values["vk"] && values["mst"] && values["m"]) {
        let ek = (values["vk"] / (1 + (values["mst"] / 100))) * (1 - (values["m"] / 100))
        ek = Math.round((ek + Number.EPSILON) * 100) / 100
        domObj = document.getElementById(solveFor)
        domObj.value = ek
    } else if (solveFor == "vk" && values["ek"] && values["mst"] && values["m"]) {
        console.log("Want to solve for vk")
        let vk = (values["ek"] * (1 + (values["mst"] / 100))) / (1 - (values["m"] / 100))
        vk = Math.round((vk + Number.EPSILON) * 100) / 100
        domObj = document.getElementById(solveFor)
        domObj.value = vk
    } else if (solveFor == "m" && values["vk"] && values["mst"] && values["ek"]) {
        console.log("Want to solve for m")
        let m =  (1-(values['ek'] / (values['vk'] / (1+(values["mst"] / 100))))) * 100
        m = Math.round((m + Number.EPSILON) * 100) / 100
        domObj = document.getElementById(solveFor)
        domObj.value = m
    } else if (solveFor == "mst" && values["vk"] && values["ek"] && values["m"]) { // Does not make too much sense
        console.log("Want to solve for mst")
        let mst = (((values["vk"] * (1 - (values["m"] / 100)))/ values['ek']) -1 ) * 100
        mst = Math.round((mst + Number.EPSILON) * 100) / 100
        domObj = document.getElementById(solveFor)
        domObj.value = mst
    }

}
function toggleLock(id) {
    openLocks()
    closeLock(id)

    console.log("clicked " + id)
    // toggleClass(id)
    check()
    // document.getElementById("lock-vk").classList.
}

function openLocks() {
    var locks = document.getElementsByClassName('lock')
    for (let lock of locks) {
        lock.classList.add('unlocked')
    }
    vars.forEach(element => {
        document.getElementById(element).readOnly = false
    });
}

function closeLock(id) {
    lockObj = document.getElementById(id)
    lockObj.classList.remove('unlocked')

    input_id = id.replace('lock-', '')
    input_obj = document.getElementById(input_id)
    input_obj.readOnly = true
    solveFor = input_id
}
