/* =========================================================
   SOUTHSIDE ENT — DATI DEL SITO
   Modifica solo questo file per aggiornare artisti, uscite,
   playlist ed eventi. Tutte le pagine si aggiornano da sole.
   ========================================================= */

const SITO = {
  emailDemo: "amministrazione@southsiderecords.it",
  // Incolla qui il link della playlist ufficiale (Spotify > Condividi > Copia link)
  playlistUrl: "https://open.spotify.com/playlist/5TN6EYTHXtWtYqMBVcEDX1",
  // ID della playlist (la parte dopo /playlist/ nel link). Serve per il player incorporato.
  playlistId: "5TN6EYTHXtWtYqMBVcEDX1",
  instagram: "https://www.instagram.com/southside__ent/",
  spotify: "https://open.spotify.com/playlist/5TN6EYTHXtWtYqMBVcEDX1",
  youtube: "",  // vuoto = nascosto
  tiktok: "https://www.tiktok.com/@southside__ent",
};

/* slug = nome breve senza spazi, usato nel link diretto (artisti.html#slug) */
/* foto: nome del file immagine caricato accanto alle pagine (lascia "" se non c'è) */
const ARTISTI = [
  {slug:"lafleche", nome:"La Flèche", genere:"Rap", quartiere:"Sperone · classe 2001",
   foto:"lafleche.jpg", galleria:["lafleche-2.jpg"],
   breve:"La voce dello Sperone. Racconta la periferia palermitana con testi crudi e autentici.",
   bio:[
     "La Flèche (Palermo, 2001) è un rapper nato e cresciuto allo Sperone, quartiere periferico di Palermo spesso al centro delle cronache. Nella sua musica racconta le difficoltà e le speranze della vita di quartiere, con un quadro autentico e senza forzature.",
     "È legato a Southside fin dagli inizi. Nonostante la giovane età si è fatto notare per la sua prolificità e per i live, che gli hanno permesso di consolidare la sua presenza sulla scena rap italiana ed essere oggi una delle voci emergenti più rappresentative del rap siciliano.",
     "I suoi testi affrontano le contraddizioni della società dal punto di vista di chi vive in contesti difficili. Il suo stile unisce narrazione e introspezione, con un legame forte con le radici palermitane, portate in un contesto nazionale."
   ],
   collab:["Achille G","Skugnizz","wherestheplug","Wave Off","3tr3","Real Talk","Ohdio"],
   servizi:["Records"],
   instagram:"https://www.instagram.com/lafleche.pa/",
   spotify:"https://open.spotify.com/artist/64FfdZrhEAVBq0fdEaoO7r",
   youtube:"#"},
  {slug:"ohdio", nome:"Ohdio", genere:"Rap", quartiere:"Sperone · classe 2001",
   foto:"ohdio.jpg", galleria:["ohdio-2.jpg"],
   breve:"Ohdio come l'odio che porta dentro. Rap dallo Sperone, ossessionato dal numero 27.",
   bio:[
     "Ohdio è un rapper palermitano, nato e cresciuto allo Sperone, quartiere popolare della città. Il suo nome viene dall'odio che porta dentro, segnato da un'infanzia difficile e da un carattere forte che lo spinge a battersi sempre contro gli ostacoli.",
     "Classe 2001, ha una passione per il cinema e la musica e ha collezionato diverse comparse in televisione.",
     "Ossessionato dal numero 27, si aspetta soltanto tre cose: il successo, un contatto con gli UFO e la morte."
   ],
   collab:["La Flèche"],
   servizi:["Records"],
   instagram:"https://www.instagram.com/ohdio27/",
   spotify:"https://open.spotify.com/artist/6QmezjlRTHVSNJwbEPooqU",
   youtube:"#"},
  {slug:"waveoff", nome:"Wave Off", genere:"Producer", quartiere:"Palermo · classe 2004",
   foto:"waveoff.jpg",
   breve:"Il beatmaker più giovane del roster. Suoni underground palermitani portati sulla scena nazionale.",
   bio:[
     "Wave Off (classe 2004) è un produttore palermitano, uno dei volti più giovani e promettenti della nuova scuola di beatmaker urban e trap in Italia.",
     "Membro chiave del roster di Southside Ent, ha saputo portare le sonorità underground della sua città in progetti di rilievo nazionale, firmando molti dei brani dell'etichetta."
   ],
   collab:["Real Talk","Neves17","8blevrai","Ohdio","La Flèche","Achille G","wherestheplug"],
   servizi:["Records"],
   instagram:"https://www.instagram.com/_waveoff/",
   spotify:"https://open.spotify.com/artist/41Q55j3xgGxmeb1CHnK8gY",
   youtube:"#"},
  {slug:"wherestheplug", nome:"wherestheplug", genere:"Producer", quartiere:"Palermo · classe '95",
   foto:"wherestheplug.jpg",
   breve:"Producer palermitano. Beat visionari, influenze diverse, l'anima di una terra di contaminazioni.",
   bio:[
     "wherestheplug è un producer palermitano classe '95 che fa della versatilità il suo tratto distintivo. Aperto a influenze musicali diverse, rispecchia pienamente la sua Sicilia, terra di contaminazioni dove gli opposti convivono in armonia.",
     "Il producer di Southside è piombato come una meteora nella nuova scena rap: prima locale, poi regionale, fino a quella nazionale. Le sue produzioni hanno suoni visionari, con beat che trasportano e sanno toccare le emozioni di chiunque ascolti.",
     "Il 2023 è stato il suo anno: ha collaborato al nuovo EP di Don Pero, «Mezza Parola», ed è partito in tour con il rapper siracusano toccando i club più importanti d'Italia. Ha lavorato anche con altri nomi di rilievo della scena nazionale, con una forte intesa artistica con 8blevrai e produzioni realizzate con Beba.",
     "Nel 2024 ha firmato la sua prima produzione internazionale con il rapper francese Blasko nel brano «Hakimi» ft. 8blevrai. Il suo ultimo lavoro è ancora con l'artista di Predore, «Vis à vis», prodotto insieme a 2nd Roof, uno dei duo di producer più importanti in Italia."
   ],
   collab:["Don Pero","8blevrai","Beba","Blasko","2nd Roof"],
   tappe:[
     {anno:"2023", testo:"EP «Mezza Parola» di Don Pero e tour nei club italiani"},
     {anno:"2024", testo:"Prima produzione internazionale: «Hakimi», Blasko ft. 8blevrai"},
     {anno:"Ultimo", testo:"«Vis à vis» con 8blevrai, co-prodotto con 2nd Roof"}
   ],
   servizi:["Records"],
   instagram:"https://www.instagram.com/wheres___theplug/",
   spotify:"https://open.spotify.com/artist/1GnHdsagr2KE4NG74AUI0K",
   youtube:"#"},
];

/* Catalogo: stesso ordine della playlist ufficiale.
   formato, data, durata, copertina sono facoltativi.
   sprite: posizione della copertina nell'immagine copertine.jpg (in ordine, a partire da 0).
   link: link Spotify del brano. Se è vuoto, "Ascolta" apre la ricerca Spotify del brano. */
const USCITE = [
  {sprite:0, titolo:"FAMIGLIA", artista:"La Flèche, KikkoVFP", formato:"Singolo", data:"2026-09", durata:"2:35",
   copertina:"https://i.scdn.co/image/ab67616d0000b2731be2bc829346233104239f2e",
   link:"https://open.spotify.com/track/7gA6ngwxWZCpYsEFBS1rOT"},
  {titolo:"Normale", artista:"8blevrai", formato:"Singolo", data:"2026-09",
   copertina:"https://i.scdn.co/image/ab67616d0000b273bc59ce49762d7d435320ebdc",
   link:"https://open.spotify.com/album/3Z2sukcWDfPwxvPUHbcgAW"},
  {sprite:1, titolo:"VITA NELLE BANLIEUE", artista:"La Flèche, KikkoVFP", formato:"Singolo", data:"2026-04", durata:"2:47",
   copertina:"https://i.scdn.co/image/ab67616d0000b273f6ebd7e783e2402a816b1825",
   link:"https://open.spotify.com/track/0vxq0Nc6NdBerCBdntbSFS"},
  {sprite:2, titolo:"Tutto il Southside", artista:"Ohdio, Aira, Wave Off", link:""},
  {sprite:3, titolo:"AFFILIATO", artista:"La Flèche, Skugnizz, wherestheplug", link:""},
  {sprite:4, titolo:"Nuovo Emiro", artista:"CANALE SAVAGE, Ohdio", link:""},
  {sprite:5, titolo:"Lovely Gangsta", artista:"CANALE SAVAGE, Ohdio", link:""},
  {sprite:6, titolo:"UOMINI D'ONORE", artista:"La Flèche, Wave Off, wherestheplug", link:""},
  {sprite:7, titolo:"FIXETTE", artista:"La Flèche, Wave Off", link:""},
  {sprite:8, titolo:"We Are", artista:"Ohdio, Wave Off", link:""},
  {sprite:9, titolo:"STAVAMO A ZERO", artista:"La Flèche, Wave Off, SABRI DERO", link:""},
  {sprite:10, titolo:"C'EST LA VIE (feat. 8blevrai, LJK, SPOOKYPBL)", artista:"Neves17, 8blevrai, LJK, SPOOKYPBL", link:""},
  {sprite:11, titolo:"Ragazzi tristi", artista:"8blevrai", link:""},
  {sprite:12, titolo:"Terra Santa", artista:"AlbeVFP, KikkoVFP", link:""},
  {sprite:13, titolo:"Star", artista:"8blevrai", link:""},
  {sprite:14, titolo:"Io sono freddo", artista:"8blevrai", link:""},
  {sprite:15, titolo:"MIA (feat. BOUZA)", artista:"Neves17, BOUZA", link:""},
  {sprite:16, titolo:"AK", artista:"8blevrai", link:""},
  {sprite:17, titolo:"GIUNGLA (feat. Kassimi)", artista:"Neves17, Kassimi", link:""},
  {sprite:18, titolo:"REAL (feat. Néza)", artista:"Neves17, Néza", link:""},
  {sprite:19, titolo:"GAMBINO", artista:"Neves17", link:""},
  {sprite:20, titolo:"SERPENTI", artista:"Neves17", link:""},
  {sprite:21, titolo:"Sicily Boy", artista:"Ohdio, Wave Off", link:""},
  {sprite:22, titolo:"PER SEMPRE", artista:"Neves17", link:""},
  {sprite:23, titolo:"Domenica (Piano Solo)", artista:"Argento Vivo", link:""},
  {sprite:24, titolo:"PREGIUDICAT (feat. El Chapo Junior)", artista:"Neves17, El Chapo Junior", link:""},
  {sprite:25, titolo:"Maranza", artista:"8blevrai", link:""},
  {sprite:26, titolo:"BALENCIAGA", artista:"Neves17", link:""},
  {sprite:27, titolo:"Mamma", artista:"8blevrai", link:""},
  {sprite:28, titolo:"POMIGLIANO REGNA", artista:"Neves17", link:""},
  {sprite:29, titolo:"Vis a Vis", artista:"8blevrai, 2nd Roof, wherestheplug", link:""},
  {sprite:30, titolo:"Money Money", artista:"8blevrai, wherestheplug", link:""},
  {sprite:31, titolo:"BANDO", artista:"Neves17", link:""},
  {sprite:32, titolo:"Boca Juniors", artista:"Ohdio, Wave Off", link:""},
  {sprite:33, titolo:"Occhi Lucidi", artista:"Argento Vivo", link:""},
  {sprite:34, titolo:"SOUTHSIDE", artista:"Don Pietro, Ohdio, La Flèche, Achille G e altri", link:""},
  {sprite:35, titolo:"Deadline", artista:"Ohdio, wherestheplug, HII Moto", link:""},
  {sprite:36, titolo:"BENVENUTO A NAPOLI", artista:"Neves17", link:""},
  {sprite:37, titolo:"Conta su di me (feat. wherestheplug)", artista:"8blevrai, wherestheplug", link:""},
  {sprite:38, titolo:"Hakimi", artista:"Blasko, 8blevrai", link:""},
  {sprite:39, titolo:"Tragedia e Violenza", artista:"Don Pero", link:""},
  {sprite:40, titolo:"Salam Alaykum", artista:"8blevrai", link:""},
  {sprite:41, titolo:"DESTINO", artista:"Neves17", link:""},
  {sprite:42, titolo:"LACRIMA NERA", artista:"Real Talk, La Flèche", link:""},
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
