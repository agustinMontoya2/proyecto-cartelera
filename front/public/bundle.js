(() => {
  var e = {
      344: (e) => {
        e.exports = function (e) {
          const {
              title: n,
              year: t,
              director: c,
              duration: r,
              genre: o,
              rate: a,
              poster: i,
            } = e,
            d = document.createElement("img");
          (d.src = i),
            (d.onerror = () => {
              d.src =
                "./assets/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300 (1).jpg";
            });
          const u = document.createElement("h4");
          (u.innerHTML = n), (u.className = "tituloPelicula");
          const l = document.createElement("p");
          l.innerHTML = a + "⭐";
          const p = document.createElement("p");
          p.innerHTML = r;
          const s = document.createElement("div"),
            m = `${n} is a move created in the year ${t} of the genre ${o.join(
              ", "
            )}`,
            h = document.createElement("p");
          h.innerHTML = m;
          const v = document.createElement("h4");
          v.innerHTML = c;
          const E = document.createElement("div");
          E.appendChild(u), E.appendChild(d), E.appendChild(v);
          const C = document.createElement("div");
          return (
            C.appendChild(l),
            C.appendChild(p),
            (C.className = "puntuacionDuracion"),
            s.appendChild(C),
            s.appendChild(h),
            (s.className = "movieDate"),
            E.appendChild(s),
            (E.className = "movieCard"),
            E
          );
        };
      },
      958: (e) => {
        e.exports = function (e, n, t, c, r, o, a) {
          document.querySelector("#inputTitle").value,
            document.querySelector("#inputYear").value,
            document.querySelector("#inputDirector").value,
            document.querySelector("#inputDuration").value,
            document.querySelector("#inputGenres").value,
            document.querySelector("#inputRate").value,
            document.querySelector("#inputImg").value,
            console.log(e);
        };
      },
    },
    n = {};
  function t(c) {
    var r = n[c];
    if (void 0 !== r) return r.exports;
    var o = (n[c] = { exports: {} });
    return e[c](o, o.exports, t), o.exports;
  }
  const c = t(344);
  t(958),
    $.get("https://students-api.up.railway.app/movies", (e, n) => {
      e.forEach((e) => {
        const n = c(e);
        recomend.appendChild(n);
      }),
        e.forEach((e) => {
          if (e.genre.includes("Action")) {
            const n = c(e);
            accion.appendChild(n);
          }
        }),
        e.forEach((e) => {
          if (e.genre.includes("Adventure")) {
            const n = c(e);
            aventura.appendChild(n);
          }
        }),
        e.forEach((e) => {
          if (e.genre.includes("Comedy")) {
            const n = c(e);
            comedia.appendChild(n);
          }
        }),
        e.forEach((e) => {
          if (e.genre.includes("Sci-Fi")) {
            const n = c(e);
            SciFi.appendChild(n);
          }
        });
    });
})();
