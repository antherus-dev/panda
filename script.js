// Seleciona os campos de senha e login
const passwordInput = document.querySelector('input[type="password"]');
const loginInput = document.querySelector('input[type="text"]');

// Função para fechar os olhos do panda
function closeEyes() {
    const eyes = document.querySelectorAll('.eye-l, .eye-r');
    const eyeballs = document.querySelectorAll('.eyeball-l, .eyeball-r');
    
    eyes.forEach(eye => eye.classList.add('closed-eyes'));
    eyeballs.forEach(eyeball => eyeball.style.display = 'none');
}

// Função para abrir os olhos do panda
function openEyes() {
    const eyes = document.querySelectorAll('.eye-l, .eye-r');
    const eyeballs = document.querySelectorAll('.eyeball-l, .eyeball-r');
    
    eyes.forEach(eye => eye.classList.remove('closed-eyes'));
    eyeballs.forEach(eyeball => eyeball.style.display = 'block');
}

// Função para mover os olhos do panda de acordo com a posição do cursor
function moveEyes(event) {
    const eyeballs = document.querySelectorAll('.eyeball-l, .eyeball-r');
    
    eyeballs.forEach((eyeball, index) => {
        const eye = index === 0 ? document.querySelector('.eye-l') : document.querySelector('.eye-r');
        const rect = eye.getBoundingClientRect();
        
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        
        const angle = Math.atan2(y, x);
        const distance = Math.min(8, Math.sqrt(x * x + y * y)); // Limita o movimento dos olhos
        eyeball.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    });
}

// Evento para detectar a digitação na senha
passwordInput.addEventListener('focus', closeEyes);
passwordInput.addEventListener('blur', openEyes);
passwordInput.addEventListener('input', function() {
    if (this.value.length > 0) {
        closeEyes();
    } else {
        openEyes();
    }
});

// Evento para mover os olhos
loginInput.addEventListener('mousemove', moveEyes);

// Evento para impedir o envio do formulário e redirecionar
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = loginInput.value; // Pegue o valor diretamente do campo de login
    const password = passwordInput.value; // Pegue o valor diretamente do campo de senha

    const validUsername = "café";  // Defina o login
    const validPassword = "amabile";  // Defina a senha

    if (username === validUsername && password === validPassword) {
        window.location.href = "roteiro.html";  // Redireciona se os dados estiverem corretos
    } else {
        alert("Usuário ou senha incorretos!");
    }
});
