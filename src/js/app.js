import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name ? variables.name : "Name"} ${
    variables.lastname ? variables.lastname : "Last Name"
  }</h1>
          <h2>${variables.role ? variables.role : "Role"}</h2>
          <h3>${variables.city ? variables.city : "City"} ${
    variables.country ? variables.country : "Country"
  }</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${
              variables.twitter
            }" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github
            }" target="_blank"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${
              variables.linkedin
            }" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${
              variables.instagram
            }"target="_blank"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: "",
    github: "",
    linkedin: "",
    instagram: "",
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        /*   this.value == "" || this.value == "null"
          ? null 
          :*/ this
          .value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};

document.querySelector("#city").addEventListener("change", function(e) {
  const value = this.value;
  const key = document.querySelector("#country").getAttribute("for");
  let values = {};
  const usa = "USA";
  const germany = "Germany";
  const canada = "Canada";
  const venezuela = "Venezuela";
  switch (value) {
    case "Miami":
      document.querySelector("#country").value = usa; //se cambia el valor del combobox de paises
      values[key] = usa; //se le asigna un valor al obj que contiene el pais (obj.key)
      render(Object.assign(window.variables, values)); //con esta linea se hace un render que actualiza DOM con los valores del obj
      break;
    case "Munich":
      document.querySelector("#country").value = germany; //se cambia el valor del combobox de paises
      values[key] = germany; //se le asigna un valor al obj que contiene el pais (obj.key)
      render(Object.assign(window.variables, values)); //con esta linea se hace un render que actualiza DOM con los valores del obj
      break;
    case "Caracas":
      document.querySelector("#country").value = venezuela; //se cambia el valor del combobox de paises
      values[key] = venezuela; //se le asigna un valor al obj que contiene el pais (obj.key)
      render(Object.assign(window.variables, values)); //con esta linea se hace un render que actualiza DOM con los valores del obj
      break;
    case "Toronto":
      document.querySelector("#country").value = canada; //se cambia el valor del combobox de paises
      values[key] = canada; //se le asigna un valor al obj que contiene el pais (obj.key)
      render(Object.assign(window.variables, values)); //con esta linea se hace un render que actualiza DOM con los valores del obj
      break;
    default:
      document.querySelector("#country").value = "Country"; //se cambia el valor del combobox de paises
      values[key] = "Country"; //se le asigna un valor al obj que contiene el pais (obj.key)
      render(Object.assign(window.variables, values)); //con esta linea se hace un render que actualiza DOM con los valores del obj
      break;
  }
});
