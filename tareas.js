function agregar() {
      let texto = document.getElementById("nueva").value;
      if (texto === "") return;

      let li = document.createElement("li");
      let check = document.createElement("input");
      check.type = "checkbox";
      check.onchange = contar;

      li.appendChild(check);
      li.appendChild(document.createTextNode(" " + texto));
      document.getElementById("lista").appendChild(li);

      document.getElementById("nueva").value = "";
      contar();
    }

    function contar() {
      let total = document.querySelectorAll("#lista input").length;
      let hechas = document.querySelectorAll("#lista input:checked").length;

      document.getElementById("completadas").textContent = hechas;
      document.getElementById("pendientes").textContent = total - hechas;
    }