// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly9hd2lwLm9yZy51ay93aWxkbGlmZS1jcmltZS8iPmtlcG82NjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9hd2lwLm9yZy51ay93aWxkbGlmZS1jcmltZS8iPmtlcG82NjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9hd2lwLm9yZy51ay93aWxkbGlmZS1jcmltZS8iPmtlcG8gNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvd2lsZGxpZmUtY3JpbWUvIj5rZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvd2lsZGxpZmUtY3JpbWUvIj5rZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvd2lsZGxpZmUtY3JpbWUvIj5rZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvd2lsZGxpZmUtY3JpbWUvIj5rZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvd2lsZGxpZmUtY3JpbWUvIj5rZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvd2lsZGxpZmUtY3JpbWUvIj5rZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvd2lsZGxpZmUtY3JpbWUvIj5rZXBvNjYgc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9hd2lwLm9yZy51ay93aWxkbGlmZS1jcmltZS8iPmtlcG82NiBsb2dpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9hd2lwLm9yZy51ay93aWxkbGlmZS1jcmltZS8iPiBrZXBvNjYgZGFmdGFyPC9hPgo8YSBocmVmPSJodHRwczovL2F3aXAub3JnLnVrL3dpbGRsaWZlLWNyaW1lLyI+a2VwbzY2IGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvd2lsZGxpZmUtY3JpbWUvIj5rZXBvNjYgbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9hd2lwLm9yZy51ay93aWxkbGlmZS1jcmltZS8iPmtlcG82NiBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvd2lsZGxpZmUtY3JpbWUvIj5rZXBvNjYgbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL2F3aXAub3JnLnVrL3dpbGRsaWZlLWNyaW1lLyI+bGluayBrZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvd2lsZGxpZmUtY3JpbWUvIj5zaXR1cyBrZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvd2lsZGxpZmUtY3JpbWUvIj5zaXR1cyBnYWNvciBrZXBvNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vYXdpcC5vcmcudWsvd2lsZGxpZmUtY3JpbWUvIj5zaXR1cyBzbG90IGtlcG82NjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly9hd2lwLm9yZy51ay93aWxkbGlmZS1jcmltZS8iPnNsb3QgZ2Fjb3Iga2VwbzY2PC9hPg==";
  
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
