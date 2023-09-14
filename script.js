const res = fetch("https://jsonplaceholder.typicode.com/users");

res
  .then((data) => data.json())
  .then((data1) => {
    for (i = 0; i < data1.length; i++) {
      console.log(data1[i]);
      const div = document.createElement("div");
      div.innerHTML = `<div class="card">
        <p class="name">name : ${data1[i].name}</p>
        <p>Email : ${data1[i].email}</p>
        <p>Street : ${data1[i].address.street}</p>
        <p>City : ${data1[i].address.city}</p>
        <br>
        </div>
        `;
      document.body.append(div);
    }
  });