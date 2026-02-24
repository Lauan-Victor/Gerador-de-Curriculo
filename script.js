// updates the preview fields and shows the CV section
function updateCV() {
  const fields = ['n','c','e','h','s','f','p','i'];
  fields.forEach(id => {
    const input = document.getElementById(id);
    const out = document.getElementById('out-' + id);
    if (out) {
      // preserve newlines in textarea
      out.textContent = input.value;
    }
  });

  const cv = document.getElementById('cv');
  if (fields.some(id => document.getElementById(id).value.trim() !== '')) {
    cv.classList.remove('hidden');
  } else {
    cv.classList.add('hidden');
  }
}

// attach listeners
['n','c','e','h','s','f','p','i'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', updateCV);
});

// print button should update first
const printBtn = document.getElementById('printBtn');
if (printBtn) {
  printBtn.addEventListener('click', function () {
    updateCV();
    window.print();
  });
}

// initialize on load
window.addEventListener('DOMContentLoaded', updateCV);
