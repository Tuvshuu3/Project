let redB = document.getElementsByClassName("red")[0]
    let blueB = document.getElementsByClassName("blue")[0]
    let redscore = document.getElementById("redscore")
    let bluescore = document.getElementById("bluescore")
    let redtext = document.getElementById("redtext")
    let bluetext = document.getElementById("bluetext")

    let redPoint = 50;
    let bluePoint = 50;
    

    redscore.innerHTML = redPoint
    bluescore.innerHTML = bluePoint

    function reset() {
        redPoint = 50;
        bluePoint = 50;

        redscore.innerHTML = redPoint
        bluescore.innerHTML = bluePoint

        redB.style.width = '50vw'
        blueB.style.width = '50vw'

        redtext.style.opacity = '0';
        redtext.style.opacity = '0';
    }


    function red() {
        redPoint++;
        redscore.innerHTML = redPoint;
        redB.style.width = `${redPoint}vw`

        bluePoint--;
        bluescore.innerHTML = bluePoint
        blueB.style.width = `${bluePoint}vw`

        if(redPoint == 100) {
            redtext.style.opacity = '1';
        }
    }

    function blue() {
        bluePoint++;
        bluescore.innerHTML = bluePoint
        blueB.style.width = `${bluePoint}vw`

        redPoint--;
        redscore.innerHTML = redPoint;
        redB.style.width = `${redPoint}vw`

        if(bluePoint == 100) {
            bluetext.style.opacity = '1';
        }

}