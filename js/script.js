
function rupiah(value) {
  return "Rp " + value.toLocaleString("id-ID");
}

function loadEVMChart() {
  const canvas = document.getElementById("evmChart");
  if (!canvas) return;

  new Chart(canvas, {
    type: "bar",
    data: {
      labels: ["PV", "EV", "AC"],
      datasets: [{
        label: "Nilai EVM",
        data: [150000000, 140000000, 160000000]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

function loadBudgetChart() {
  const canvas = document.getElementById("budgetChart");
  if (!canvas) return;

  new Chart(canvas, {
    type: "bar",
    data: {
      labels: ["Rencana", "Aktual", "EAC"],
      datasets: [{
        label: "Status Anggaran",
        data: [200000000, 160000000, 228000000]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

function loadProgressChart() {
  const canvas = document.getElementById("progressChart");
  if (!canvas) return;

  new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: ["Selesai", "Belum Selesai"],
      datasets: [{
        data: [68, 32]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

loadEVMChart();
loadBudgetChart();
loadProgressChart();
