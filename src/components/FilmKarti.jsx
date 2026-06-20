// Tek bir filmi kart olarak gösteren component
// Listeleme sayfasında her film için bu component çağrılıyor

function FilmKarti({ film, durumDegistir, puanVer, filmSil }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">{film.baslik}</h3>

      <span
        className={`text-sm font-medium px-2 py-1 rounded-full w-fit ${
          film.durum === "izlendi"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {film.durum === "izlendi" ? "İzlendi" : "İzlenecek"}
      </span>

      {/* Sadece izlendiyse puan verme alanını gösteriyorum */}
      {film.durum === "izlendi" && (
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((sayi) => (
            <button
              key={sayi}
              onClick={() => puanVer(film.id, sayi)}
              className={`text-xl ${
                sayi <= film.puan ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </button>
          ))}
        </div>
      )}

      <div className="flex gap-2 mt-2">
        <button
          onClick={() => durumDegistir(film.id)}
          className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
        >
          {film.durum === "izlendi" ? "İzlenecek Yap" : "İzledim"}
        </button>
        <button
          onClick={() => filmSil(film.id)}
          className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600"
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default FilmKarti;