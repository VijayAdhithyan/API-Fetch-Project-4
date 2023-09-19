const res = fetch("https://jsonplaceholder.typicode.com/users");

res
  .then((data) => data.json())
  .then((data1) => {
    for (i = 0; i < data1.length; i++) {
      const div = document.createElement("div");
      div.innerHTML = `<div class="card">
        <p class="name"> <b>Name :</b> ${data1[i].name}</p>
        <p><b>Email :</b> ${data1[i].email}</p>
        <p><b>Street :</b> ${data1[i].address.street}</p>
        <p><b>City :</b> ${data1[i].address.city}</p>
        <br>
        </div>
        `;
      document.body.append(div);
    }
  });