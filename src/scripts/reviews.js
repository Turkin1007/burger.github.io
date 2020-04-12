const details = document.querySelectorAll('.review__view');
const fullreview = document.querySelector('#full-review');

for (let i = 0; i < details.length; i++) {
  details[i].addEventListener('click', function() {
    fullreview.style.display = 'flex';
  });
}

const closes = fullreview.querySelector('#closes');
  closes.addEventListener('click', function(e) {
    e.preventDefault();
    fullreview.style.display = 'none'
});

fullreview.addEventListener("click", function(e) {
  if (e.target === fullreview) {
    closes.click();
  }
});
