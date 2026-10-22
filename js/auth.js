const ler = (k) => JSON.parse(localStorage.getItem(k) || "[]");
const salvar = (k, v) => localStorage.setItem(k, JSON.stringify(v));

document.getElementById("form-cadastro").addEventListener("submit", (e) => {
  e.preventDefault();
  const { nome, email, senha } = e.target;
  const usuarios = ler("usuarios");
  if (usuarios.some((u) => u.email === email.value)) {
    return alert("E-mail já cadastrado.");
  }
  usuarios.push({ nome: nome.value, email: email.value, senha: senha.value });
  salvar("usuarios", usuarios);
  alert("Cadastro realizado! Faça login.");
  e.target.reset();
});

document.getElementById("form-login").addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, senha } = e.target;
  const usuario = ler("usuarios").find(
    (u) => u.email === email.value && u.senha === senha.value
  );
  if (!usuario) return alert("E-mail ou senha incorretos.");
  sessionStorage.setItem("logado", usuario.nome);
  location.href = "painel.html";
});