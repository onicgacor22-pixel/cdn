// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly90YWNpdGlidi5ubC9zaG9wLyI+Q1U4ODg8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGFjaXRpYnYubmwvc2hvcC8iPkNVIDg4ODwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90YWNpdGlidi5ubC9zaG9wLyI+Y3U4ODggc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90YWNpdGlidi5ubC9zaG9wLyI+Y3U4ODggbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGFjaXRpYnYubmwvc2hvcC8iPiBjdTg4OCBkYWZ0YXI8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGFjaXRpYnYubmwvc2hvcC8iPmN1ODg4IGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGFjaXRpYnYubmwvc2hvcC8iPmN1ODg4IGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGFjaXRpYnYubmwvc2hvcC8iPmN1ODg4IHJ0cDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90YWNpdGlidi5ubC9zaG9wLyI+Y3U4ODggbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3RhY2l0aWJ2Lm5sL3Nob3AvIj5saW5rIGN1ODg4PC9hPgo8YSBocmVmPSJodHRwczovL3RhY2l0aWJ2Lm5sL3Nob3AvIj5zaXR1cyBjdTg4ODwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90YWNpdGlidi5ubC9zaG9wLyI+c2l0dXMgZ2Fjb3IgY3U4ODg8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGFjaXRpYnYubmwvc2hvcC8iPnNpdHVzIHNsb3QgY3U4ODg8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGFjaXRpYnYubmwvc2hvcC8iPnNsb3QgZ2Fjb3IgY3U4ODg8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGFjaXRpYnYubmwvc2hvcC8iPnNsb3QgZ2Fjb3I8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGFjaXRpYnYubmwvc2hvcC8iPnNsb3QgamFja3BvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly90YWNpdGlidi5ubC9zaG9wLyI+c2xvdCBvbmxpbmU8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdGFjaXRpYnYubmwvc2hvcC8iPnNsb3QgZGVtbzwvYT4=";
  
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
