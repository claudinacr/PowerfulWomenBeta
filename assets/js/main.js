//AUTENTICACION DE USUARIO
var usuarioAutent = '';
var buttonSend = document.getElementById('buttonSend');

function getUser() {
  var arrayUsers = [];
  for (let i = 0; i < users.length; i++) {
    arrayUsers.push(users[i].user);
  }
  return arrayUsers;
}

function getPassword() {
  var arrayPassword = [];
  for (let i = 0; i < users.length; i++) {
    arrayPassword.push(users[i].password);
  }
  return arrayPassword;
}


function takeInput() {
  var user = document.getElementById("inputUser").value;
  return user;
}

function takePassword() {
  var password = document.getElementById("inputPassword").value;
  return password;
}

buttonSend.onclick = function () {
  var user = takeInput();
  var pasword = takePassword();
  authentication(getUser(), getPassword(), user, pasword);
};
var projectType = document.querySelector('.projectType');
projectType.style.display = "none";
var rowImageButtons = document.querySelector('.rowImageButtons');
rowImageButtons.style.display = "none";
var info = document.querySelector('.info');
info.style.display = "none";

function authentication(arrayUser, arrayPassword, user, password) {
  var validarUser, validarPassword;
  for (let i = 0; i < arrayUser.length; i++) {
    if (user === arrayUser[i]) {
      validarUser = true;
      // console.log(validarUser);
    }
  }
  var positionJ;
  for (let j = 0; j < arrayPassword.length; j++) {
    if (password === arrayPassword[j]) {
      validarPassword = true;
      // console.log(validarPassword);
      positionJ = j;
    }
  }
  if (validarUser === true && validarPassword === true) {
    // window.open('redSocial.html', '_self');
    var firstWindow = document.querySelector('.firstWindow');
    firstWindow.style.display = "none";
    var rowImageButtons = document.querySelector('.rowImageButtons');
    rowImageButtons.style.display = "block";
    info.style.display = "block";
    var usser = document.querySelector('.usser');
    var image = document.createElement('img');
    image.className = ('image');
    image.setAttribute('src', users[positionJ].photo);
    usser.appendChild(image);
    projectTypes();

    // users[positionJ].photo

    usser.appendChild(document.createTextNode(user));
    usuarioAutent = user;

    var profile = document.querySelector('.profile');

    for (let m = 0; m < users.length; m++) {
      if ((users[m].user === usuarioAutent)) {
        var savePosition = m;
        console.log(savePosition);
      }
    }
    var nombrefirstName = document.createTextNode('Nombre: ');
    var firstName = document.createTextNode(users[savePosition].first_name);
    var espacio = document.createElement('p');
    espacio.appendChild(nombrefirstName);
    espacio.appendChild(firstName);
    profile.appendChild(espacio);

    espacio2 = document.createElement('p');
    var apellidoLast_name = document.createTextNode('Apellido: ');
    var last_name = document.createTextNode(users[savePosition].last_name);
    espacio2.appendChild(apellidoLast_name);
    espacio2.appendChild(last_name);
    profile.appendChild(espacio2);

    espacio3 = document.createElement('p');
    var nacimientobirth_date = document.createTextNode('Nacimiento: ');
    var birth_date = document.createTextNode(users[savePosition].birth_date);
    espacio3.appendChild(nacimientobirth_date);
    espacio3.appendChild(birth_date);
    profile.appendChild(espacio3);

    espacio4 = document.createElement('p');
    var Docupation = document.createTextNode('Ocupación: ');
    var ocupation = document.createTextNode(users[savePosition].ocupation);
    espacio4.appendChild(Docupation);
    espacio4.appendChild(ocupation);
    profile.appendChild(espacio4);



















  } else {
    alert('Usuario y contraseña no validos');
  }
}

function projectTypes() {
  var projectTypes = Object.keys(projects.project_type);
  //console.log(projectTypes);
  for (let i = 0; i < projectTypes.length; i++) {
    var projectType = document.querySelector('.projectType');
    var buttonProjectType = document.createElement('button');
    buttonProjectType.setAttribute('type', 'button');
    buttonProjectType.className = 'buttonProjectType';
    // var boxProject = document.createElement('div');
    // boxProject.className = ('boxProject');
    buttonProjectType.setAttribute('value', projectTypes[i]);
    buttonProjectType.appendChild(document.createTextNode(projectTypes[i]));
    projectType.appendChild(buttonProjectType);
    projectType.style.display = "block";
  }
}

// $('.contacto').click(function () {
//       //console.log();
//       var nombre = $(this).find('.nombre').text();
//     }

// var projType = document.querySelector('.buttonProjectType');
// projType.addEventListener('click', function () {
//   var pT = this.find(projectTypes[i]).text;
//   console.log(pT);
// });

var Red = document.querySelector('.Red');
Red.style.display = "none";
document.addEventListener('click', function (event) {


  var objetivo = event.target;
  var projectss = projects.project_type;
  var projectClick = '';
  if (objetivo.className.match("buttonProjectType")) {
    var objet = objetivo.value;
    projectClick = objetivo.value;
    var cProject = projectss[objet];
    var cP = Object.keys(cProject);
    var projectType = document.querySelector('.projectType');
    projectType.innerHTML = "";
    projectType.style.display = "block";
    var typeP = document.createElement('p');
    typeP.appendChild(document.createTextNode(projectClick));
    typeP.style.color = 'white';
    projectType.appendChild(typeP);
    projectType.style.display = 'block';
    var titleH2 = document.createElement('h2');
    var titlecP = document.createTextNode('¿Qué proyecto desea desarrollar?');
    titleH2.appendChild(titlecP);
    projectType.appendChild(titleH2);
    for (let i = 0; i < cP.length; i++) {

      var projectButton = document.createElement('button');
      projectButton.setAttribute('type', 'button');
      projectButton.className = 'projectButton';
      projectButton.setAttribute('value', cP[i]);
      projectButton.appendChild(document.createTextNode(cP[i]));
      projectType.appendChild(projectButton);
    }

  }


  var pT = document.querySelector('.projectType');
  var typePP = pT.firstChild.firstChild;
  if (objetivo.className.match("projectButton")) {
    var parrafo = document.createElement('p');
    var titleProject = document.createTextNode('Proyectos');
    parrafo.appendChild(titleProject);
    titleProject.className = 'titleProject';
    var text = document.createTextNode(objetivo.value);

    text.className = 'text';
    var projectTypeThis = document.querySelector('.projectTypeThis');
    projectTypeThis.style.display = 'none';
    var Red = document.querySelector('.Red');
    Red.style.display = "block";
    var Work = document.querySelector('.Work');
    Work.appendChild(parrafo);
    Work.appendChild(text);
    var teachers = document.querySelector('.listTeachers');
    var typePPP = typePP.textContent;
    var proj = text.textContent;
    console.log(proj);
    var imageTeacher = document.createElement('img');
    imageTeacher.className = 'imageTeacher';
    imageTeacher.setAttribute('src', projects.project_type[typePPP][proj].teacher[0].photo);
    var nameTeacher = projects.project_type[typePPP][proj].teacher[0].name;
    teachers.appendChild(imageTeacher);
    teachers.appendChild(document.createTextNode(nameTeacher));
    var listContactsSuggest = document.querySelector('.listContactsSuggest');

    var articles = document.querySelector('.articles');
    var articleBox = document.createElement('div');
    var paragraph = document.createElement('p');
    var paragraph2 = document.createElement('p');
    var paragraph3 = document.createElement('p');
    articleBox.className = 'articleBox';
    paragraph.appendChild(document.createTextNode(projects.project_type[typePPP][proj].article[0].title));
    paragraph2.appendChild(document.createTextNode(projects.project_type[typePPP][proj].article[0].content));
    paragraph3.appendChild(document.createTextNode(projects.project_type[typePPP][proj].article[0].author));
    articleBox.appendChild(paragraph);
    articleBox.appendChild(paragraph2);
    articleBox.appendChild(paragraph3);

    articles.appendChild(articleBox);

    var description = document.querySelector('.description');
    description.appendChild(document.createTextNode(projects.project_type[typePPP][proj].description[0].information));

    var time = document.querySelector('.time');
    time.appendChild(document.createTextNode(projects.project_type[typePPP][proj].description[0].time));


    for (let j = 0; j < projects.project_type[typePPP][proj].students.length; j++) {
      var imageStudent = document.createElement('img');
      imageStudent.setAttribute('src', projects.project_type[typePPP][proj].students[j].photoSt);
      imageStudent.className = 'imageStudent';
      var buttonStudent = document.createElement('button');
      buttonStudent.setAttribute('type', 'button');
      buttonStudent.className = 'buttonStudent';

      buttonStudent.appendChild(imageStudent);
      buttonStudent.appendChild(document.createTextNode(projects.project_type[typePPP][proj].students[j].name));
      listContactsSuggest.appendChild(buttonStudent);
    }
  }

  if (objetivo.className.match("buttonStudent")) {
    var objetive = objetivo.cloneNode(true);
    objetivo.style.display = 'none';
    var listContactsAdd = document.querySelector('.listContactsAdd');

    listContactsAdd.appendChild(objetive);
    // listContactsAdd.appendChild(boxB);

    var newFeed = document.querySelector('.newFeed');
    var pa = document.createElement('p');
    var type = typePP.textContent;
    var work = document.querySelector('.Work');
    var proJ = work.lastChild.textContent;
    for (let l = 0; l < projects.project_type[type][proJ].students.length; l++) {
      if (objetive.lastChild.textContent === projects.project_type[type][proJ].students[l].name) {
        var saveP = l;

        pa.appendChild(document.createTextNode(projects.project_type[type][proJ].students[l].newFeed));
        newFeed.appendChild(pa);
      }

    }
    // console.log(projects.project_type[type][proj].students.length);


  }



});

























// console.log(Object.keys(projects.project_type['Páginas Web']));

var botonSend = document.getElementById('botonSend');
var cajaTweet = document.querySelector('.sent_messages');

botonSend.disabled = true;
//Al iniciar la pagina el textarea está vacio por lo que
//el boton Tweet está deshabilitado

function sendTweet() {
  var mensaje = document.getElementById('mensaje').value;

  if (mensaje.length < 1) {
    alert('Mensaje vacio. No se puede enviar mensaje');
  } else {
    var tweet = document.createElement('div');
    tweet.className = 'tweet';
    var tweetText = document.createTextNode(mensaje);

    var fecha = document.createTextNode(moment().format('MMMM Do YYYY, h:mm:ss a') + ":");
    var imageUpload = document.querySelector('#output');
    var image = imageUpload;
    tweet.appendChild(fecha);
    tweet.appendChild(tweetText);
    tweet.appendChild(image);

    cajaTweet.appendChild(tweet);





  }

}

botonSend.onclick = sendTweet;
//Otra forma de llamar a la funcion en el evento click del boton
//botonSend.addEventListener("click",sendTweet);

//Funcionalidad de Contador y Textarea

var textArea = document.getElementById('mensaje');
var contador = document.getElementById('contador');
var hr = document.querySelector('hr');

function aumentoHeight() {
  textArea.style.height = 'auto';
  textArea.style.height = (textArea.scrollHeight) + 'px';
}

function contadorCambio() {

  aumentoHeight();
  var cuenta = 140 - textArea.value.length;

  if (cuenta < 0) {
    contador.style.color = 'red'
  } else if (cuenta > 20) {
    contador.style.color = '#0759A5'
  } else if (cuenta <= 20 && cuenta > 10) {
    contador.style.color = '#26A535';
  } else if (cuenta <= 10) {
    contador.style.color = '#E5317D';
  }

  contador.innerHTML = cuenta;

  if (textArea.value.length == 0 || textArea.value.length > 140) {
    botonSend.disabled = true;

  } else {
    botonSend.disabled = false;
    // hr.style.borderColor = '#6AD2F3';
  }
}
textArea.onfocus = contadorCambio;
textArea.oninput = contadorCambio;

textArea.onkeyup = function (evt) {
  evt = evt || window.event;

  if (evt.keyCode == 13) {
    var rows = parseInt(textArea.getAttribute("rows"));

    rows += 1;

    textArea.setAttribute("rows", toString(rows));
    aumentoHeight();
  }
};