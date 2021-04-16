const checkbox = document.getElementById('checkbox');
const logo = document.querySelectorAll('#logo path');

checkbox.addEventListener('change', () => {
  //change theme of website
  document.body.classList.toggle('dark');
  document.querySelector('#navbar').classList.toggle('dark');
  document.querySelector('#footer1').classList.toggle('dark');
});

for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
