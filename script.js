function selectLocation(btn) {
      document.querySelectorAll('.location-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }