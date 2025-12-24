
function openForm(type) {
  document.getElementById("form-container").style.display = "block";
}

function cancelForm() {
  document.getElementById("form-container").style.display = "none";
}

function updateStatusFields() {
  const status = document.getElementById("status").value;
  const container = document.getElementById("status-fields");
  container.innerHTML = "";

  if (status === "定金" || status === "尾款" || status === "已入柜") {
    const amountInput = document.createElement("input");
    amountInput.type = "number";
    amountInput.placeholder = "金额";
    container.appendChild(amountInput);

    if (status === "尾款") {
      const dateInput = document.createElement("input");
      dateInput.type = "date";
      dateInput.placeholder = "付款日期";
      container.appendChild(dateInput);
    }
  }
}

function saveItem() {
  const name = document.getElementById("name").value;
  const card = document.createElement("div");
  card.className = "card";
  card.innerText = `已添加：${name}`;
  document.getElementById("items-container").appendChild(card);
  cancelForm();
}
