# 🦷 SorrisoCerto - Sistema para Clínica Odontológica

Sistema web para gerenciar pacientes e consultas de uma clínica odontológica.

## Problema que o sistema resolve
Clínicas pequenas costumam controlar agenda e pacientes em papel, WhatsApp ou planilhas. Isso causa conflito de horários, faltas sem aviso, perda de dados e tempo gasto em tarefas manuais. O SorrisoCerto centraliza o cadastro de pacientes e o agendamento de consultas em um só lugar.

## Quem utiliza o sistema
- **Recepcionista:** cadastra pacientes e marca consultas.
- **Dentista:** consulta a agenda do dia.
- **Administrador:** acompanha os indicadores da clínica.
- **Visitante/paciente:** vê as informações na tela inicial.

## Funcionalidades principais
1. Cadastro e login de usuários.
2. Cadastro de pacientes.
3. Agendamento de consultas (data, horário e procedimento).
4. Agenda com alteração de status (confirmar ou cancelar).
5. Painel com indicadores: total de pacientes, consultas do dia e consultas confirmadas.

## Telas
- `index.html`: tela inicial
- `login.html`: cadastro e login
- `painel.html`: tela principal do sistema

## Tecnologias
HTML5, CSS3, JavaScript, Git e GitHub.

## Como executar
1. Clone o repositório:
   `git clone https://github.com/LuKaoMK/clinica-odontologica.git`
2. Abra o arquivo `index.html` no navegador.

## Observação
Os dados ficam no `localStorage` do navegador e as senhas não são criptografadas. O projeto tem fins didáticos. Em um sistema real seriam necessários back-end, banco de dados e senhas com hash.

## Fluxo de branches
- `main`: versões estáveis
- `develop`: integração
- `feature/*`, `docs/*`: novas funcionalidades e documentação