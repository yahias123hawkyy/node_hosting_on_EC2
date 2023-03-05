



const myForm = document.getElementById('contactForm');

myForm.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent default form submission behavior

  // get form data as an object
  const formData = new FormData(myForm);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  response = fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
});




// const formData = new FormData();
// formData.append('username', 'john_doe');
// formData.append('email', 'john_doe@example.com');
// formData.append('password', 'secret');

// fetch('http://localhost:3000/', {
//   method: 'POST',
//   body: JSON.stringify({data:"heyy"}),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
// .then(response => {
//   if (response.ok) {
//     console.log(formData);
//     console.log(response.body);

//   }
//   // throw new Error('Network response was not ok');
// })
// .then(formData => {
//   console.log(formData);
// })
// // .catch(error => {
// //   console.error('Error:', error);
// // });



// fetch('http://localhost:3000/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({data: 'example'})
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


