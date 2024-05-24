const fetchData = (userData) => {
   return fetch("https://dev.adalab.es/api/projectCard", {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'content-type': 'application/json'
        }})
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData)
          return responseData
            //La url la debemos guardar en la variable de estado 
      });
  };

  export default fetchData
 
//   const handleCreateCard = (event)=>{
//     event.preventDefault();
//     fetch(‘https://dev.adalab.es/api/card/’, {
//         method: ‘POST’,
//         headers: {‘Content-Type’: ‘application/json’},
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(dataResponse => {
//         console.log(dataResponse);
//         if(dataResponse.success){
//             btnShare.classList.remove(‘hidden’);
//             url.innerHTML = dataResponse.cardURL;
//             url.href = dataResponse.cardURL;
//             const tweetText = encodeURIComponent(‘¡Mira mi tarjeta creada con esta increíble aplicación!’);
//             const twitterShareURL = `https://twitter.com/intent/tweet?text=${tweetText}&url=${dataResponse.cardURL}`;
//             shareTwitter.href = twitterShareURL;
//          }
//          else {
//             shareErrorContainer.classList.remove(‘hidden’);
//             shareErrorContainer.innerHTML = dataResponse.error;
//          }
//     })
// };

// unction dataError(error) {
//   shareErrorContainer.innerHTML = "";
//   shareErrorContainer.classList.remove('hidden');
//   if (error.includes("name")) {
//     shareErrorContainer.innerHTML += "El campo Nombre Completo es obligatorio. <br>";
//   }
//   if (error.includes("job")) {
//     shareErrorContainer.innerHTML += "El campo Puesto es obligatorio. <br>";
//   }
//   if (error.includes("photo")) {
//     shareErrorContainer.innerHTML += "El campo Imagen de Perfil es obligatorio. <br>";
//   }
//   if (error.includes("email")) {
//     shareErrorContainer.innerHTML += "El campo Email es obligatorio. <br>";
//   }
//   if (error.includes("github")) {
//     shareErrorContainer.innerHTML += "El campo GitHub es obligatorio. <br>";
//   }
//   if (error.includes("linkedin")) {
//     shareErrorContainer.innerHTML += "El campo LinkedIn es obligatorio. <br>";
//   }
//   if (error.includes("ER_DATA_TOO_LONG")) {
//     shareErrorContainer.innerHTML += "La imagen no debe exceder los 250x250px"
//   }
// }








