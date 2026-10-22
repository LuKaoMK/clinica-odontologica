const nomeLogado = sessionStorage.getItem("logado");
if (!nomeLogado) location.href = "login.html"; // protege a página

const ler = (k) => JSON.parse(localStorage.getItem(k) || "[]");
const salvar = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const $ = (id) => document.getElementById(id);

$("usuario").textContent = `Olá, ${nomeLogado}`;
$("sair").onclick = () => { sessionStorage.clear(); location.href = "index.html"; };

function render() {
  const pacientes = ler("pacientes");
  const consultas = ler("consultas");
  const hoje = new Date().toISOString().slice(0, 10);

  $("t-pacientes").textContent = pacientes.length;
  $("t-hoje").textContent = consultas.filter((c) => c.data === hoje).length;
  $("t-conf").textContent = consultas.filter((c) => c.status === "Confirmada").length;

  $("sel-paciente").innerHTML = pacientes.map((p) => `<option>${p.nome}</option>`).join("");

  $("agenda").innerHTML = consultas
    .map((c, i) => `<tr>
      <td>${c.paciente}</td><td>${c.data}</td><td>${c.hora}</td>
      <td>${c.procedimento}</td><td>${c.status}</td>
      <td>
        <button onclick="mudar(${i},'Confirmada')">✔</button>
        <button onclick="mudar(${i},'Cancelada')">✖</button>
      </td></tr>`)
    .join("");
}

function mudar(i, status) {
  const consultas = ler("consultas");
  consultas[i].status = status;
  salvar("consultas", consultas);
  render();
}

$("form-paciente").addEventListener("submit", (e) => {
  e.preventDefault();
  const pacientes = ler("pacientes");
  pacientes.push({ nome: e.target.nome.value, telefone: e.target.telefone.value });
  salvar("pacientes", pacientes);
  e.target.reset();
  render();
});

$("form-consulta").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const consultas = ler("consultas");
  consultas.push({
    paciente: f.paciente.value, data: f.data.value, hora: f.hora.value,
    procedimento: f.procedimento.value, status: "Agendada",
  });
  salvar("consultas", consultas);
  f.reset();
  render();
});

render();