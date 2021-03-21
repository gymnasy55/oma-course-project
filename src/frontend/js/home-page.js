async function loaded() {
  var developers = await fetch('http://localhost:8080/').then(function(response){
    return response.json();
  });

  console.log(developers);

  var container = document.getElementsByClassName('container')[0];
  container.innerHTML = '';
  for(var i = 0; i < developers.length; i++) {
    var string = 
    `
    <div class="card">
      <div class="card__img">
        <img src="/img/${developers[i].avatar_url}" alt="">
      </div>
      <div class="card__info">
        <label class="first_name">First Name: <b>${developers[i].first_name}</b></label><br>
        <label class="last_name">Last Name: <b>${developers[i].last_name}</b></label><br>
        <label class="age">Age: <b>${developers[i].age}</b></label><br>
        <label class="height">Height: <b>${developers[i].height}</b></label><br>
        <label class="weight">Weight: <b>${developers[i].weight}</b></label><br>
        <label class="position">Position: <b>${developers[i].position}</b></label><br>
        <label class="sex">Sex: <b>${developers[i].sex}</b></label><br>
        <label class="hobby">Hobby: <b>${developers[i].hobby}</b></label><br>
      </div>
    </div>
    `;
    container.innerHTML += string;
  }
}

document.addEventListener('DOMContentLoaded', loaded)