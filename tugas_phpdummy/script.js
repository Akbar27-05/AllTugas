let tabel = document.querySelector("#tabel");
let no = 1;

function readData() {
  $.ajax({
    type: "get",
    url: "pelanggan/select.php",
    dataType: "json",
    success: function (response) {
      let tmpl =
        "<tr><th>pelanggan</th><th>alamat</th><th>telp</th><th>Update</th><th>Delete</th></tr>";
      $.each(response, function (key, val) {
        tmpl += `<tr>
              <td>${val.pelanggan}</td>
              <td>${val.alamat}</td>
              <td>${val.telp}</td>
              
              <td>
              <button type="button" onclick="selectP(${val.idpelanggan})" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModalr">
                Update
              </button>
              
              <!-- Modal -->
              <div class="modal fade" id="exampleModalr" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Update Data</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <table>
                      <tr>
                        <td><label class="float-end" for="idpelanggan"></label></td>
                        <td><input type="number" name="idpelanggan" hidden /></td>
                      </tr>
                      <tr>
                        <td><label for="pelanggan">Pelanggan : </label></td>
                        <td><input type="text" id="pelanggan" name="pelanggan" /></td>
                      </tr>
                      <tr>
                        <td><label for="alamat">Alamat : </label></td>
                        <td><input type="text" id="alamat" name="alamat" /></td>
                      </tr>
                      <tr>
                        <td><label for="telp">Telp : </label></td>
                        <td><input type="text" id="telpp" name="telp" /></td>
                      </tr>
                    </table>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button onclick="ubahP()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                    </div>
                  </div>
                </div>
              </div></td>
              <td><button onclick="hapusP(${val.idpelanggan})" class="btn btn-danger">delete</button></td>
            </tr>`;
      });
      tabel.innerHTML = tmpl;
    },
  });
}

function selectP(id) {
  let idpelanggan = id;
  $.ajax({
    type: "POST",
    url: "pelanggan/cariData.php",
    data: "idpelanggan=" + idpelanggan,
    success: function (response) {
      let objResponse = JSON.parse(response);
      $("[name='idpelanggan']").val(objResponse.idpelanggan);
      $("[name='pelanggan']").val(objResponse.pelanggan);
      $("[name='alamat']").val(objResponse.alamat);
      $("[name='telp']").val(objResponse.telp);
      $("#tambahP").hide();
    },
  });
}

function ubahP() {
  let data = {
    idpelanggan: $("[name='idpelanggan']").val(),
    pelanggan: $("#pelanggan").val(),
    alamat: $("#alamat").val(),
    telp: $("#telpp").val(),
  };
  $.ajax({
    type: "POST",
    url: "pelanggan/update.php",
    data: data,
    success: function (result) {
      var objResult = JSON.parse(result);
      $("#pesan").html(objResult.pesan);
      readData();
    },
  });
}

function hapusP(idpelanggan) {
  let tanya = confirm("Apakah Anda Yakin Menghapus Data Ini?");
  if (tanya) {
    $.ajax({
      type: "POST",
      url: "pelanggan/delete.php",
      data: "idpelanggan=" + idpelanggan,
      success: function (response) {
        readData();
      },
    });
  }
}

$(document).ready(function () {


  $("#tambahP").click(function (e) {
    e.preventDefault();
    let data = {
      pelanggan: $("[name='pelanggan']").val(),
      alamat: $("[name='alamat']").val(),
      telp: $("[name='telp']").val(),
    };
    $.ajax({
      type: "POST",
      url: "pelanggan/insert.php",
      data: data,
      success: function (result) {
        var objResult = JSON.parse(result);
        $("#pesan").html(objResult.pesan);
        readData();
      },
    });
  });

  

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
    };

    $.ajax({
      type: "POST",
      url: "https://dummyjson.com/products/add",
      data: data,
      success: function (response) {
        console.log(data);
      },
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
        if (updateId === "1") {
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
        if (updateId === "2") {
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
        if (updateId === "3") {
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
        if (updateId === "4") {
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
        if (updateId === "5") {
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
