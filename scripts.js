// Compte à rebours
function updateCountdown() {
  const end = new Date();
  end.setHours(end.getHours() + 48); // 48h timer

  const timer = setInterval(() => {
    const now = new Date();
    const diff = end - now;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = 
      `${hours}h ${mins}m ${secs}s`;
      
    if (diff <= 0) clearInterval(timer);
  }, 1000);
}
updateCountdown();

// Tracking des CTA
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', function() {
    const service = this.closest('.service-card') 
      ? this.closest('.service-card').querySelector('h3').textContent 
      : 'Générique';
      
    gtag('event', 'click', {
      'event_category': 'CTA',
      'event_label': service
    });
  });
});

// FAQ
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    question.classList.toggle('active');
    answer.style.maxHeight = answer.style.maxHeight 
      ? null 
      : answer.scrollHeight + 'px';
  });
});

// Formatage des numéros
document.querySelectorAll('a[href^="tel"]').forEach(link => {
  link.textContent = link.textContent.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4');
});