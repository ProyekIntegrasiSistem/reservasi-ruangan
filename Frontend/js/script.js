function navigateTo(page) {
  if (page === 'dashboard') {
    window.location.href = 'dashboard.html';
  } else if (page === 'ruangan') {
    window.location.href = 'ruangan.html';
  } else if (page === 'pinjaman') {
    window.location.href = 'pinjaman.html';
  }
}

function logout() {
  window.location.href = 'login.html';
}
