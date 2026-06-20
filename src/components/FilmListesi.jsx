// Tüm filmleri kart kart ekrana döken component
// Boş liste durumunu da burada kontrol ediyorum

import FilmKarti from "./FilmKarti";

function FilmListesi({ filmler, durumDegistir, puanVer, filmSil }) {
  if (filmler.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-10">
        Henüz listene bir şey eklemedin.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filmler.map((film) => (
        <FilmKarti
          key={film.id}
          film={film}
          durumDegistir={durumDegistir}
          puanVer={puanVer}
          filmSil={filmSil}
        />
      ))}
    </div>
  );
}

export default FilmListesi;