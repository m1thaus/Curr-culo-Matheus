function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

// Exemplo de interatividade com JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um efeito de hover nos links de contato
    const links = document.querySelectorAll('#contato a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#0056b3';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#007BFF';
        });
    });
});