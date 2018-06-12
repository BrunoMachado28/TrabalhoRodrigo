agenda = [];
registro = [];


loadDataFromLocalStorage();
salvarAgenda();
loadDataFromLocalStorageReg();
salvarRegistro();


function salvarAgenda(){
    var salvarAgenda = document.getElementById('salvarAgenda');
    salvarAgenda.onclick = function(){
        gravarAgenda();
    };
}

function gravarAgenda(){
    var inputNome = document.getElementById('nome');
    var inputTelefone = document.getElementById('telefone');

    var agend = {
        nome: inputNome.value,
        telefone: inputTelefone.value
    };

    agenda.push(agend);
    clearTable();
    populateTable();
    saveLocalStorage();
}

function clearTable(){
    var table = document.getElementById('tabela-agenda');

    var tBody = table.tBodies[0];

    for (var i = tBody.children.length; i > 0; i--){
        var tr = tBody.children[i - 1];
        tBody.removeChild(tr);
    }
}

function populateTable(){
    var table = document.getElementById('tabela-agenda');

    for (var i = 0; i < agenda.length; i++){
        var agend = agenda[i];
        var tr = document.createElement('tr');
        var tdNome = document.createElement('td');
        var tdTelefone = document.createElement('td');

        tdNome.innerHTML = agend.nome;
        tdTelefone.innerHTML = agend.telefone;

        tr.appendChild(tdNome);
        tr.appendChild(tdTelefone);

        table.tBodies[0].appendChild(tr);

    }
}

function saveLocalStorage(){
    var data = JSON.stringify(agenda);
    localStorage.setItem("agenda-telefonica", data);
}

function loadDataFromLocalStorage(){
    var agendaSalva = localStorage.getItem("agenda-telefonica");
    if (agendaSalva) {
        agenda = JSON.parse(agendaSalva);
        populateTable();
    }
}









function salvarRegistro(){
    var salvarRegistro = document.getElementById('salvarRegistro');
    salvarRegistro.onclick = function(){
        gravarRegistro();
    };
}

function gravarRegistro(){
    var inputLocal = document.getElementById('local');
    var inputDescricao = document.getElementById('descricao');

    var reg = {
        local: inputLocal.value,
        descricao: inputDescricao.value
    };

    registro.push(reg);
    clearTableReg();
    populateTableReg();
    saveLocalStorageReg();
}

function clearTableReg(){
    var table = document.getElementById('tabela-problemas');

    var tBody = table.tBodies[0];

    for (var i = tBody.children.length; i > 0; i--){
        var tr = tBody.children[i - 1];
        tBody.removeChild(tr);
    }
}

function populateTableReg(){
    var table = document.getElementById('tabela-problemas');

    for (var i = 0; i < registro.length; i++){
        var reg = registro[i];
        var tr = document.createElement('tr');
        var tdLocal = document.createElement('td');
        var tdDescricao = document.createElement('td');

        tdLocal.innerHTML = reg.local;
        tdDescricao.innerHTML = reg.descricao;

        tr.appendChild(tdLocal);
        tr.appendChild(tdDescricao);

        table.tBodies[0].appendChild(tr);

    }
}

function saveLocalStorageReg(){
    var data = JSON.stringify(registro);
    localStorage.setItem("registro-problemas", data);
}

function loadDataFromLocalStorageReg(){
    var registroSalvo = localStorage.getItem("registro-problemas");
    if (registroSalvo) {
        registro= JSON.parse(registroSalvo);
        populateTableReg();
    }
}