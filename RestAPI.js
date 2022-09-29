api = 'https://jsonplaceholder.typicode.com/users';
fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.map((param) => {
      console.log(param.name);
    });
  });
