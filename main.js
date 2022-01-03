var glow = document.getElementById('lightbulb');

glow.addEventListener('click', function(glow){
    glow.target.classList.toggle('bulb-on');
})