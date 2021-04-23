const api = `https://randomuser.me/api`;

const addUser = document.getElementById("user-btn");
const mainApp = document.getElementById("app");
const userList = document.getElementById("user-list");
const searchInput = document.getElementById("search");
const sortAsc = document.getElementById("sort-asc");
const sortDesc = document.getElementById("sort-desc");
const appState = [];

addUser.addEventListener("click", async () => {
  const userData = await fetch(api, {
    method: "GET"
  });
  const userJson = await userData.json();
  const user = userJson.results[0];
  const classUser = new User(
    user.name.title,
    user.name.first,
    user.name.last,
    user.gender,
    user.email
  );
  appState.push(classUser);
  domRenderer(appState);
});

const domRenderer = (stateArr) => {
  userList.innerHTML = null;
  stateArr.forEach((userObj) => {
    userList.innerHTML += `<div>
    Name : ${userObj.title} ${userObj.name}
     <ol>
       <li>${userObj.gender}</li>
       <li>${userObj.email}</li>
     </ol>
     </div>`;
  });
};

searchInput.addEventListener("keyup", searchEventHandler);
sortAsc.addEventListener("click", ascSortHandler);
sortDesc.addEventListener("click", dscSortHandler);

function searchEventHandler(e) {
  console.log(e, searchInput.value);
  const filteredAppState = appState.filter(
    (user) =>
      user.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      user.gender.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  domRenderer(filteredAppState);
}

function dscSortHandler() {
  const appStateCopy = [...appState];
  appStateCopy.sort((a, b) => (a.name < b.name ? 1 : -1));
  domRenderer(appStateCopy);
}

function ascSortHandler() {
  const appStateCopy = [...appState];
  appStateCopy.sort((a, b) => (a.name < b.name ? -1 : 1));
  domRenderer(appStateCopy);
}
class User {
  constructor(title, firstname, lastname, gender, email) {
    this.title = `${title}`;
    this.name = ` ${firstname} ${lastname}`;
    this.gender = `${gender}`;
    this.email = `${email}`;
  }
}
