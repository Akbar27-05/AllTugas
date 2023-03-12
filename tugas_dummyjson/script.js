let tabel = document.querySelector("#tabel");
let no = 1;

$(document).ready(function () {

  // ALL

  $("#all").click(function (e) {
    e.preventDefault();
    $.ajax({
      type: "get",
      url: "https://dummyjson.com/products",
      dataType: "json",
      success: function (response) {
        let out = "<tr><th>no</th><th>title</th><th>Description</th></tr>";
        $.each(response.products, function (key, val) {
          out += `<tr>
            <td>${no++}</td>
            <td>${val.title}</td>
            <td>${val.description}</td>
          </tr>`;
        });
        tabel.innerHTML = out;
      },
    });
  });


  // ADD

  $("#add").click(function (e) { 
    e.preventDefault();
    let id = $("#id").val();
    let data = {
      title: $("#title").val(),
      description: $("#description").val(),
    }

    $.ajax({
      type: "POST",
      url: "https://dummyjson.com/products/add",
      data: "data",
      success: function (response) {
        console.log(data);
      }
    });
  });


  // SINGEL

  $("#singel").click(function (e) {
    e.preventDefault();
    let id = $("#cariId").val();
    $.ajax({
      type: "get",
      url: "https://dummyjson.com/products/" + id,
      dataType: "json",
      success: function (response) {
        let out = "<tr><th>no</th><th>title</th><th>Description</th></tr>";

        out += `<tr>
            <td>${response.id}</td>
            <td>${response.title}</td>
            <td>${response.description}</td>
          </tr>`;

        tabel.innerHTML = out;
      },
    });
  });


  // KATEGORI

  $("#kategori").click(function (e) {
    e.preventDefault();
    let kategori = $("#cariKategori").val();
    $.ajax({
      type: "get",
      url: "https://dummyjson.com/products/category/" + kategori,
      dataType: "json",
      success: function (response) {
        let out = "<tr><th>no</th><th>title</th><th>Description</th></tr>";

        $.each(response.products, function (key, val) {
          if (kategori === "smartphones") {
            out += `<tr>
              <td>${val.id}</td>
              <td>${val.title}</td>
              <td>${val.description}</td>
          </tr>`;
          }
          if (kategori === "laptops") {
            out += `<tr>
              <td>${val.id}</td>
              <td>${val.title}</td>
              <td>${val.description}</td>
          </tr>`;
          }
          if (kategori === "fragrances") {
            out += `<tr>
              <td>${val.id}</td>
              <td>${val.title}</td>
              <td>${val.description}</td>
          </tr>`;
          }
          if (kategori === "skincare") {
            out += `<tr>
              <td>${val.id}</td>
              <td>${val.title}</td>
              <td>${val.description}</td>
          </tr>`;
          }
          if (kategori === "home-decoration") {
            out += `<tr>
              <td>${val.id}</td>
              <td>${val.title}</td>
              <td>${val.description}</td>
          </tr>`;
          }
          tabel.innerHTML = out;
        });
      },
    });
  });


  // DELETE

  $("#delete").click(function (e) {
    e.preventDefault();
    let hapus = $("#deleteId").val();
    let data = {
      title: $("#title").val(),
      description: $("#description").val(),
    };

    $.ajax({
      type: "delete",
      url: "https://dummyjson.com/products/" + hapus,
      data: data,
      success: function (response) {
        console.log(data);
      },
    });
  });


  // UPDATE

  $("#update").click(function (e) {
    e.preventDefault();
    let updateId = $("#updateId").val();
    $.ajax({
      type: "get",
      url: "https://dummyjson.com/products/" + updateId,
      dataType: "json",
      success: function (products) {
        if (updateId === '1') {
          $("#title").val(products.title);
          $("#description").val(products.description);

          $("#updateData").click(function (e) {
            e.preventDefault();
            let data = {
              title: $("#title").val(),
              description: $("#description").val(),
            };
            $.ajax({
              type: "patch",
              url: "https://dummyjson.com/products/" + updateId,
              body: data,
              success: function (response) {
                console.log(data);
              },
            });
          });
        }
        if (updateId === '2') {
          $("#title").val(products.title);
          $("#description").val(products.description);

          $("#updateData").click(function (e) {
            e.preventDefault();
            let data = {
              title: $("#title").val(),
              description: $("#description").val(),
            };
            $.ajax({
              type: "patch",
              url: "https://dummyjson.com/products/" + updateId,
              body: data,
              success: function (response) {
                console.log(data);
              },
            });
          });
        }
        if (updateId === '3') {
          $("#title").val(products.title);
          $("#description").val(products.description);

          $("#updateData").click(function (e) {
            e.preventDefault();
            let data = {
              title: $("#title").val(),
              description: $("#description").val(),
            };
            $.ajax({
              type: "patch",
              url: "https://dummyjson.com/products/" + updateId,
              body: data,
              success: function (response) {
                console.log(data);
              },
            });
          });
        }
        if (updateId === '4') {
          $("#title").val(products.title);
          $("#description").val(products.description);

          $("#updateData").click(function (e) {
            e.preventDefault();
            let data = {
              title: $("#title").val(),
              description: $("#description").val(),
            };
            $.ajax({
              type: "patch",
              url: "https://dummyjson.com/products/" + updateId,
              body: data,
              success: function (response) {
                console.log(data);
              },
            });
          });
        }
        if (updateId === '5') {
          $("#title").val(products.title);
          $("#description").val(products.description);

          $("#updateData").click(function (e) {
            e.preventDefault();
            let data = {
              title: $("#title").val(),
              description: $("#description").val(),
            };
            $.ajax({
              type: "patch",
              url: "https://dummyjson.com/products/" + updateId,
              body: data,
              success: function (response) {
                console.log(data);
              },
            });
          });
        }
      },
    });
  });
});
