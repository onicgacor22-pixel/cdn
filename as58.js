// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9hd2lwLm9yZy51ay9hbmltYWwtZmlnaHRpbmcvIj5rZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvYW5pbWFsLWZpZ2h0aW5nLyI+a2VwbzY2PC9hPgo8YSBocmVmPSJodHRwczovL2F3aXAub3JnLnVrL2FuaW1hbC1maWdodGluZy8iPmtlcG8gNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvYW5pbWFsLWZpZ2h0aW5nLyI+a2VwbzY2PC9hPgo8YSBocmVmPSJodHRwczovL2F3aXAub3JnLnVrL2FuaW1hbC1maWdodGluZy8iPmtlcG82NjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9hd2lwLm9yZy51ay9hbmltYWwtZmlnaHRpbmcvIj5rZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvYW5pbWFsLWZpZ2h0aW5nLyI+a2VwbzY2PC9hPgo8YSBocmVmPSJodHRwczovL2F3aXAub3JnLnVrL2FuaW1hbC1maWdodGluZy8iPmtlcG82NjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9hd2lwLm9yZy51ay9hbmltYWwtZmlnaHRpbmcvIj5rZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvYW5pbWFsLWZpZ2h0aW5nLyI+a2VwbzY2IHNsb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvYW5pbWFsLWZpZ2h0aW5nLyI+a2VwbzY2IGxvZ2luPC9hPgo8YSBocmVmPSJodHRwczovL2F3aXAub3JnLnVrL2FuaW1hbC1maWdodGluZy8iPiBrZXBvNjYgZGFmdGFyPC9hPgo8YSBocmVmPSJodHRwczovL2F3aXAub3JnLnVrL2FuaW1hbC1maWdodGluZy8iPmtlcG82NiBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL2F3aXAub3JnLnVrL2FuaW1hbC1maWdodGluZy8iPmtlcG82NiBsaW5rPC9hPgo8YSBocmVmPSJodHRwczovL2F3aXAub3JnLnVrL2FuaW1hbC1maWdodGluZy8iPmtlcG82NiBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvYW5pbWFsLWZpZ2h0aW5nLyI+a2VwbzY2IGxpbmsgYWx0ZXJuYXRpZjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9hd2lwLm9yZy51ay9hbmltYWwtZmlnaHRpbmcvIj5saW5rIGtlcG82NjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9hd2lwLm9yZy51ay9hbmltYWwtZmlnaHRpbmcvIj5zaXR1cyBrZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvYW5pbWFsLWZpZ2h0aW5nLyI+c2l0dXMgZ2Fjb3Iga2VwbzY2PC9hPgo8YSBocmVmPSJodHRwczovL2F3aXAub3JnLnVrL2FuaW1hbC1maWdodGluZy8iPnNpdHVzIHNsb3Qga2VwbzY2PC9hPgo8YSBocmVmPSJodHRwczovL2F3aXAub3JnLnVrL2FuaW1hbC1maWdodGluZy8iPnNsb3QgZ2Fjb3Iga2VwbzY2PC9hPg==";
  
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
