
let skirts = [];

function toggleForm() {
  const form = document.getElementById("form");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

function toggleStatusFields() {
  const container = document.getElementById("amountFields");
  const status = document.getElementById("status").value;
  let html = '';
  if (status === "定金" || status === "已入柜") {
    html = '<input placeholder="金额" id="amount" />';
  } else if (status === "尾款") {
    html = '<input placeholder="金额" id="amount" /><input type="date" id="payDate" />';
  }
  container.innerHTML = html;
}

function filterStatus(status) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (status === "全部" || card.dataset.status === status) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function sortCards() {
  const mode = document.getElementById("sortMode").value;
  const container = document.getElementById("cards");
  const cards = Array.from(container.children);
  cards.sort((a, b) => {
    const dateA = new Date(a.dataset.date);
    const dateB = new Date(b.dataset.date);
    return mode === "asc" ? dateA - dateB : dateB - dateA;
  });
  cards.forEach(c => container.appendChild(c));
}

function submitCard() {
  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;
  const buyDate = document.getElementById("buyDate").value;
  const size = document.getElementById("size").value;
  const shoulder = document.getElementById("shoulder").value;
  const bust = document.getElementById("bust").value;
  const waist = document.getElementById("waist").value;
  const length = document.getElementById("length").value;
  const accessories = document.getElementById("accessories").value;
  const category = document.getElementById("category").value;
  const notes = document.getElementById("notes").value;
  const amount = document.getElementById("amount")?.value || "0";

  let totalAmount = parseFloat(amount) || 0;

  const card = document.createElement("div");
  card.className = "card";
  card.dataset.status = status;
  card.dataset.date = buyDate;
  card.innerHTML = \`
    <h3>\${name}</h3>
    <p>状态：\${status}</p>
    <p>金额：¥\${amount}</p>
    <p>购买日期：\${buyDate}</p>
    <p>尺码：\${size} / 肩宽：\${shoulder} / 胸围：\${bust} / 腰围：\${waist} / 裙长：\${length}</p>
    <p>小物：\${accessories}</p>
    <p>类别：\${category}</p>
    <p>备注：\${notes}</p>
  \`;
  document.getElementById("cards").appendChild(card);

  skirts.push(totalAmount);
  updateSummary();
}

function updateSummary() {
  const count = skirts.length;
  const sum = skirts.reduce((a, b) => a + b, 0);
  document.getElementById("summary").textContent = \`总件数: \${count} | 总金额: ¥\${sum.toFixed(2)}\`;
}
