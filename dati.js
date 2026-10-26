/* =========================================================
   SOUTHSIDE ENT — DATI DEL SITO
   Modifica solo questo file per aggiornare artisti, uscite,
   playlist ed eventi. Tutte le pagine si aggiornano da sole.
   ========================================================= */

const SITO = {
  emailDemo: "amministrazione@southsiderecords.it",
  // Incolla qui il link della playlist ufficiale (Spotify > Condividi > Copia link)
  playlistUrl: "https://open.spotify.com/",
  // ID della playlist (la parte dopo /playlist/ nel link). Serve per il player incorporato.
  playlistId: "",
  instagram: "https://www.instagram.com/",
  spotify: "https://open.spotify.com/",
  youtube: "https://www.youtube.com/",
  tiktok: "https://www.tiktok.com/",
};

/* slug = nome breve senza spazi, usato nel link diretto (artisti.html#slug) */
const ARTISTI = [
  {slug:"artista-1", nome:"Nome Artista", genere:"Rap", quartiere:"Ballarò",
   bio:"Sostituisci con la bio dell'artista: da dove viene, cosa racconta, le uscite più importanti.",
   servizi:["Records","Management","Edizioni"], instagram:"#", spotify:"#", youtube:"#"},
  {slug:"artista-2", nome:"Nome Artista", genere:"Urban / R&B", quartiere:"Kalsa",
   bio:"Sostituisci con la bio dell'artista: da dove viene, cosa racconta, le uscite più importanti.",
   servizi:["Records","Edizioni"], instagram:"#", spotify:"#", youtube:"#"},
  {slug:"artista-3", nome:"Nome Artista", genere:"Pop", quartiere:"Mondello",
   bio:"Sostituisci con la bio dell'artista: da dove viene, cosa racconta, le uscite più importanti.",
   servizi:["Management"], instagram:"#", spotify:"#", youtube:"#"},
  {slug:"artista-4", nome:"Nome Artista", genere:"Elettronica", quartiere:"Zisa",
   bio:"Sostituisci con la bio dell'artista: da dove viene, cosa racconta, le uscite più importanti.",
   servizi:["Records"], instagram:"#", spotify:"#", youtube:"#"},
];

/* formato: "Singolo" | "EP" | "Album"   data: "AAAA-MM" */
const USCITE = [
  {cat:"SSE-006", titolo:"Titolo uscita", artista:"Nome Artista", formato:"Singolo", data:"2026-10", link:"#"},
  {cat:"SSE-005", titolo:"Titolo uscita", artista:"Nome Artista", formato:"EP", data:"2026-07", link:"#"},
  {cat:"SSE-004", titolo:"Titolo uscita", artista:"Nome Artista", formato:"Singolo", data:"2026-05", link:"#"},
  {cat:"SSE-003", titolo:"Titolo uscita", artista:"Nome Artista", formato:"Album", data:"2026-02", link:"#"},
  {cat:"SSE-002", titolo:"Titolo uscita", artista:"Nome Artista", formato:"Singolo", data:"2025-11", link:"#"},
  {cat:"SSE-001", titolo:"Titolo uscita", artista:"Nome Artista", formato:"Singolo", data:"2025-09", link:"#"},
];

/* Brani mostrati nella pagina Playlist (anteprima testuale) */
const PLAYLIST_BRANI = [
  {titolo:"Titolo brano", artista:"Nome Artista", durata:"2:48"},
  {titolo:"Titolo brano", artista:"Nome Artista", durata:"3:12"},
  {titolo:"Titolo brano", artista:"Nome Artista", durata:"2:55"},
  {titolo:"Titolo brano", artista:"Nome Artista", durata:"3:31"},
  {titolo:"Titolo brano", artista:"Nome Artista", durata:"2:39"},
  {titolo:"Titolo brano", artista:"Nome Artista", durata:"3:04"},
];

/* data: "AAAA-MM-GG"  stato: "biglietti" | "gratis" | "soldout" */
const EVENTI = [
  {data:"2026-11-21", artista:"Nome Artista", luogo:"Nome locale", citta:"Palermo", stato:"biglietti", link:"#"},
  {data:"2026-12-05", artista:"Nome Artista", luogo:"Nome locale", citta:"Catania", stato:"biglietti", link:"#"},
  {data:"2026-12-19", artista:"Southside Night", luogo:"Nome locale", citta:"Palermo", stato:"gratis", link:"#"},
  {data:"2027-01-16", artista:"Nome Artista", luogo:"Nome locale", citta:"Roma", stato:"soldout", link:"#"},
];
