function menu() {
    document.getElementById('menu').style.display = "block";
}
function closeMenu() {
    document.getElementById('menu').style.display = "none";

}
function vbr() {
    window.alert("✅ The ES6 consoles was successfully optimized.");
    console.info("✅ Console is optimzed. 😎");
}
document.addEventListener('mousemove', () => {

    document.getElementById('background1').style.filter = "blur(0px)";
    document.addEventListener('mouseout', () => {
        document.getElementById('background1').style.filter = "blur(8px)";

    })
})

function vbr1() {
    console.warn("💣 Making any changes in console is hazardous!!")

}
vbr1();