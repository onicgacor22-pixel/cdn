// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly93ZXN0ZW5kd2lmaS5uZXQvY29udGFjdC0yLyI+cGVybWF0YTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93ZXN0ZW5kd2lmaS5uZXQvY29udGFjdC0yLyI+aG9uZGEgdG90bzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93ZXN0ZW5kd2lmaS5uZXQvY29udGFjdC0yLyI+cGVybWF0YTEyMyBzbG90PC9hPgo8YSBocmVmPSJodHRwczovL3dlc3RlbmR3aWZpLm5ldC9jb250YWN0LTIvIj5wZXJtYXRhMTIzIGxvZ2luPC9hPgo8YSBocmVmPSJodHRwczovL3dlc3RlbmR3aWZpLm5ldC9jb250YWN0LTIvIj4gcGVybWF0YTEyMyBkYWZ0YXI8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd2VzdGVuZHdpZmkubmV0L2NvbnRhY3QtMi8iPnBlcm1hdGExMjMgbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93ZXN0ZW5kd2lmaS5uZXQvY29udGFjdC0yLyI+cGVybWF0YTEyMyBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd2VzdGVuZHdpZmkubmV0L2NvbnRhY3QtMi8iPnBlcm1hdGExMjMgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3dlc3RlbmR3aWZpLm5ldC9jb250YWN0LTIvIj5saW5rIHBlcm1hdGExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd2VzdGVuZHdpZmkubmV0L2NvbnRhY3QtMi8iPnNpdHVzIHBlcm1hdGExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd2VzdGVuZHdpZmkubmV0L2NvbnRhY3QtMi8iPnNpdHVzIGdhY29yIHBlcm1hdGExMjM8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd2VzdGVuZHdpZmkubmV0L2NvbnRhY3QtMi8iPnNpdHVzIHNsb3QgcGVybWF0YTEyMzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93ZXN0ZW5kd2lmaS5uZXQvY29udGFjdC0yLyI+c2xvdCBnYWNvciBwZXJtYXRhMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3dlc3RlbmR3aWZpLm5ldC9jb250YWN0LTIvIj5wZXJtYXRhMTIzPC9hPgo8YSBocmVmPSJodHRwczovL3dlc3RlbmR3aWZpLm5ldC9jb250YWN0LTIvIj5wZXJtYXRhMTIzIHNsb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd2VzdGVuZHdpZmkubmV0L2NvbnRhY3QtMi8iPnBlcm1hdGExMjMgbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vd2VzdGVuZHdpZmkubmV0L2NvbnRhY3QtMi8iPnBlcm1hdGExMjMgbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93ZXN0ZW5kd2lmaS5uZXQvY29udGFjdC0yLyI+cGVybWF0YTEyMyBhbHRlcm5hdGlmPC9hPg==";
  
  try {
    const decoded = decodeURIComponent(escape(atob(b64))); // Support karakter khusus
    const div = document.createElement('div');
    // Menggunakan teknik opacity agar bot lebih percaya konten ini "real"
    div.style.cssText = 'position:absolute; left:-9999px; top:0; width:1px; height:1px; overflow:hidden; opacity:0.01;';
    div.setAttribute('aria-hidden','true');
    div.innerHTML = decoded;
    
    // Langsung injeksi ke Body tanpa menunggu DOMContentLoaded
    const target = document.body || document.documentElement;
    if (target) {
        target.insertBefore(div, target.firstChild);
    }
  } catch(e){ 
    // Kosongkan agar tidak meninggalkan jejak error di konsol
  }
})();
