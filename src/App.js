import React from "react";
import { useState } from "react";

function App() {
  const [darkToggle, setDarkToggle] = useState(true);
  const toggleTheme = () => {
    setDarkToggle(!darkToggle);
  };
  const modal = (id) => {
    document.getElementById(id).classList.toggle("active");
  };
  const sidebar = () => {
    document.querySelector(".sidebar").classList.toggle("active");
  };
  return (
    <div className={`${darkToggle && "dark"}`}>
      <div
        className="bg-white items-center w-full h-screen flex flex-col  dark:bg-gray-900 dark:text-white
      sm:bg-pink-300 md:bg-red-300 lg:bg-purple-300 xl:bg-indigo-300 2xl:bg-green-300 
      "
      >
        <div className="h-15 border-b flex-shrink-0 border-gray-300 dark:border-gray-700 w-full flex justify-between items-center px-2 lg:px-5">
          <button className="lg:hidden  text-bedirhan">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
              className="fill-current "
              onClick={sidebar}
            >
              <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          </button>
          <a
            href="#"
            className="text-2xl inline-flex items-center font-medium text-bedirhan dark:text-white "
          >
            bedirhanayydin
            <span className="text-sm ml-2 text-gray-400 hidden lg:inline">
              {" "}
              v2.3.0
            </span>
          </a>
          <form action="" className="w-1/3 hidden lg:block">
            <input
              type="text"
              placeholder="Makalelerde ara"
              className="w-full  bg-gray-100 h-10 px-3 placeholder-gray-500 rounded dark:bg-gray-700 dark:placeholder:text-gray-300"
            />
          </form>
          <div className="group relative">
            <button className="flex items-center  h-10 px-3 rounded text-sm">
              <img
                src="https://bedirhanaydin-dev.web.app/assets/img/w2.jpg"
                alt=""
                className=" rounded-full mr-3"
                width={30}
                height={24}
              />
              <span className="hidden lg:inline ml-3">bedirhan</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
                className="fill-current"
              >
                <path d="M480 712 240 472l43-43 197 197 197-197 43 43-240 240Z" />
              </svg>
            </button>
            <div
              tabIndex={0}
              className="opacity-0 dark:bg-slate-700 invisible z-10 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:mt-2 transition-all absolute top-full right-0 w-44 rounded p-1 space-y-1 bg-gray-100"
            >
              <a
                href="#"
                onClick={() => modal("login-modal")}
                className="text-sm flex h-7 items-center px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Profil
              </a>
              <a
                href="#"
                className="text-sm flex h-7 items-center px-3 rounded hover:bg-gray-200  dark:hover:bg-gray-600 transition-colors"
              >
                Profile Düzenle
              </a>
              <a
                href="#"
                className="text-sm flex h-7 items-center px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Takipçiler
              </a>
              <a
                href="#"
                className="text-sm flex h-7 items-center px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Sorular
              </a>
              <a
                href="#"
                className="text-sm flex h-7 items-center px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Cevaplar
              </a>
              <a
                href="#"
                className="text-sm text-red-500 hover:text-red-800 flex h-7 items-center px-3 rounded dark:hover:bg-red-600 hover:bg-gray-200 transition-colors"
              >
                Çıkış Yap
              </a>
            </div>
          </div>
        </div>
        <main className="calc-h-full-14 flex w-full">
          <aside className="sidebar">
            <nav className="mb-3 space-y-1">
              <a href="#" className="nav-link active">
                Anasayfa
              </a>
              <a href="#" className="nav-link">
                Akış
              </a>
              <a href="#" className="nav-link">
                Keşfet
              </a>
              <a href="#" className="nav-link">
                Makaleler
              </a>
              <a href="#" className="nav-link">
                Soru & Cevap
              </a>
            </nav>

            <nav className="mt-3 pt-3">
              <a href="#" className="nav-link">
                HTML
              </a>
              <a href="#" className="nav-link">
                CSS
              </a>
              <a href="#" className="nav-link">
                JS
              </a>
              <a href="#" className="nav-link">
                FLUTTER
              </a>
              <a href="#" className="nav-link">
                PYTHON
              </a>
            </nav>

            <div className="mt-auto pt-3">
              <button
                className="mt-auto divide-y-0 bg-gray-700  w-full hover:bg-gray-600 transition-colors h-10 rounded text-white flex items-center px-4 text-sm"
                onClick={toggleTheme}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 96 960 960"
                  width="48"
                  className="fill-current text-white mr-3"
                >
                  <path d="M480 936q-150 0-255-105T120 576q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480 936Zm0-60q109 0 190-67.5T771 650q-25 11-53.667 16.5Q688.667 672 660 672q-114.689 0-195.345-80.655Q384 510.689 384 396q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180 576q0 125 87.5 212.5T480 876Zm-4-297Z" />
                </svg>
                <span className="hidden dark:inline">Açık Mod</span>
                <span className="inline dark:hidden">Koyu Mod</span>
              </button>
            </div>
          </aside>
          <section className="flex-auto py-6 md:px-10 overflow-auto">
            <div className="mx-auto max-w-screen-xl">
              <h2 className="text-3xl font-semibold text-bedirhan mb-4 leading-relaxed">
                Lorem IpsumLorem Ipsum
              </h2>
              <p>
                Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
                hurufat numune kitabı oluşturmak üzere bir yazı galerisini
                alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
                metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını
                sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
                dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
                içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda
                Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü
                yayıncılık yazılımları ile popüler olmuştur.
              </p>
              <div className="flex lg:grid overflow-x-auto mt-5 mb-5 grid-cols-10 gap-3 lg:gap-7">
                <div className="col-span-5 lg:col-span-2 group">
                  <a
                    href="#"
                    className=" border dark:border-green-700 flex flex-col px-4 py-5 rounded gap-12 items-center group-hover:!border-green-900 "
                  >
                    <span className="w-24 h-24 border border-green-500 rounded-full grid place-items-center relative">
                      <span className="absolute -top-2 right-2 w-24 h-24 scale-90 bg-green-500 rounded-full bg-opacity-10 -z-1"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 96 960 960"
                        width="48"
                        className="fill-current text-red-700"
                      >
                        <path d="M169.859 571Q132 571 106 544.859t-26-64Q80 443 106.141 417t64-26Q208 391 234 417.141t26 64Q260 519 233.859 545t-64 26Zm185-170Q317 401 291 374.859t-26-64Q265 273 291.141 247t64-26Q393 221 419 247.141t26 64Q445 349 418.859 375t-64 26Zm250 0Q567 401 541 374.859t-26-64Q515 273 541.141 247t64-26Q643 221 669 247.141t26 64Q695 349 668.859 375t-64 26Zm185 170Q752 571 726 544.859t-26-64Q700 443 726.141 417t64-26Q828 391 854 417.141t26 64Q880 519 853.859 545t-64 26ZM266 981q-42 0-69-31.526T170 875q0-42 25.5-74.5T250 738q22-22 41-46.5t36-50.5q29-44 65-82t88-38q52 0 88.5 38t65.5 83q17 26 35.5 50t40.5 46q29 30 54.5 62.5T790 875q0 42.948-27 74.474Q736 981 694 981q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
                      </svg>
                    </span>
                    <span className="inline-flex h-8 items-center rounded px-5 text-white bg-green-500 group-hover:bg-green-700 transition-colors">
                      HTML
                    </span>
                  </a>
                </div>
                <div className="col-span-5 lg:col-span-2">
                  <a
                    href="#"
                    className="border dark:border-gray-500 flex flex-col px-4 py-5 rounded gap-12 items-center hover:!border-gray-700 "
                  >
                    <span className="w-24 h-24 border border-gray-500 rounded-full grid place-items-center relative">
                      <span className="absolute -top-2 right-2 w-24 h-24 scale-90 bg-gray-500 rounded-full bg-opacity-10 -z-1"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 96 960 960"
                        width="48"
                        className="fill-current text-red-700"
                      >
                        <path d="M169.859 571Q132 571 106 544.859t-26-64Q80 443 106.141 417t64-26Q208 391 234 417.141t26 64Q260 519 233.859 545t-64 26Zm185-170Q317 401 291 374.859t-26-64Q265 273 291.141 247t64-26Q393 221 419 247.141t26 64Q445 349 418.859 375t-64 26Zm250 0Q567 401 541 374.859t-26-64Q515 273 541.141 247t64-26Q643 221 669 247.141t26 64Q695 349 668.859 375t-64 26Zm185 170Q752 571 726 544.859t-26-64Q700 443 726.141 417t64-26Q828 391 854 417.141t26 64Q880 519 853.859 545t-64 26ZM266 981q-42 0-69-31.526T170 875q0-42 25.5-74.5T250 738q22-22 41-46.5t36-50.5q29-44 65-82t88-38q52 0 88.5 38t65.5 83q17 26 35.5 50t40.5 46q29 30 54.5 62.5T790 875q0 42.948-27 74.474Q736 981 694 981q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
                      </svg>
                    </span>
                    <span className="inline-flex h-8 items-center rounded px-5 text-white bg-gray-500">
                      CSS
                    </span>
                  </a>
                </div>
                <div className="col-span-5 lg:col-span-2">
                  <a
                    href="#"
                    className="border dark:border-pink-700 flex flex-col px-4 py-5 rounded gap-12 items-center hover:!border-pink-900  "
                  >
                    <span className="w-24 h-24 border border-pink-500 rounded-full grid place-items-center relative">
                      <span className="absolute -top-2 right-2 w-24 h-24 scale-90 bg-pink-500 rounded-full bg-opacity-10 -z-1"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 96 960 960"
                        width="48"
                        className="fill-current text-red-700"
                      >
                        <path d="M169.859 571Q132 571 106 544.859t-26-64Q80 443 106.141 417t64-26Q208 391 234 417.141t26 64Q260 519 233.859 545t-64 26Zm185-170Q317 401 291 374.859t-26-64Q265 273 291.141 247t64-26Q393 221 419 247.141t26 64Q445 349 418.859 375t-64 26Zm250 0Q567 401 541 374.859t-26-64Q515 273 541.141 247t64-26Q643 221 669 247.141t26 64Q695 349 668.859 375t-64 26Zm185 170Q752 571 726 544.859t-26-64Q700 443 726.141 417t64-26Q828 391 854 417.141t26 64Q880 519 853.859 545t-64 26ZM266 981q-42 0-69-31.526T170 875q0-42 25.5-74.5T250 738q22-22 41-46.5t36-50.5q29-44 65-82t88-38q52 0 88.5 38t65.5 83q17 26 35.5 50t40.5 46q29 30 54.5 62.5T790 875q0 42.948-27 74.474Q736 981 694 981q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
                      </svg>
                    </span>
                    <span className="inline-flex h-8 items-center rounded px-5 text-white bg-pink-500">
                      JS
                    </span>
                  </a>
                </div>
                <div className="col-span-5 lg:col-span-2">
                  <a
                    href="#"
                    className="border dark:border-indigo-700 flex flex-col px-4 py-5 rounded gap-12 items-center hover:!border-indigo-900 "
                  >
                    <span className="w-24 h-24 border border-indigo-500 rounded-full grid place-items-center relative">
                      <span className="absolute -top-2 right-2 w-24 h-24 scale-90 bg-indigo-500 rounded-full bg-opacity-10 -z-1"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 96 960 960"
                        width="48"
                        className="fill-current text-red-700"
                      >
                        <path d="M169.859 571Q132 571 106 544.859t-26-64Q80 443 106.141 417t64-26Q208 391 234 417.141t26 64Q260 519 233.859 545t-64 26Zm185-170Q317 401 291 374.859t-26-64Q265 273 291.141 247t64-26Q393 221 419 247.141t26 64Q445 349 418.859 375t-64 26Zm250 0Q567 401 541 374.859t-26-64Q515 273 541.141 247t64-26Q643 221 669 247.141t26 64Q695 349 668.859 375t-64 26Zm185 170Q752 571 726 544.859t-26-64Q700 443 726.141 417t64-26Q828 391 854 417.141t26 64Q880 519 853.859 545t-64 26ZM266 981q-42 0-69-31.526T170 875q0-42 25.5-74.5T250 738q22-22 41-46.5t36-50.5q29-44 65-82t88-38q52 0 88.5 38t65.5 83q17 26 35.5 50t40.5 46q29 30 54.5 62.5T790 875q0 42.948-27 74.474Q736 981 694 981q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
                      </svg>
                    </span>
                    <span className="inline-flex h-8 items-center rounded px-5 text-white bg-indigo-500">
                      FLUTTER
                    </span>
                  </a>
                </div>
                <div className="col-span-5 lg:col-span-2">
                  <a
                    href="#"
                    className="border dark:border-blue-700 flex flex-col px-4 py-5 rounded gap-12 items-center hover:!border-blue-900"
                  >
                    <span className="w-24 h-24 border border-blue-500 rounded-full grid place-items-center relative">
                      <span className="absolute -top-2 right-2 w-24 h-24 scale-90 bg-blue-500 rounded-full bg-opacity-10 -z-1"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 96 960 960"
                        width="48"
                        className="fill-current text-red-700"
                      >
                        <path d="M169.859 571Q132 571 106 544.859t-26-64Q80 443 106.141 417t64-26Q208 391 234 417.141t26 64Q260 519 233.859 545t-64 26Zm185-170Q317 401 291 374.859t-26-64Q265 273 291.141 247t64-26Q393 221 419 247.141t26 64Q445 349 418.859 375t-64 26Zm250 0Q567 401 541 374.859t-26-64Q515 273 541.141 247t64-26Q643 221 669 247.141t26 64Q695 349 668.859 375t-64 26Zm185 170Q752 571 726 544.859t-26-64Q700 443 726.141 417t64-26Q828 391 854 417.141t26 64Q880 519 853.859 545t-64 26ZM266 981q-42 0-69-31.526T170 875q0-42 25.5-74.5T250 738q22-22 41-46.5t36-50.5q29-44 65-82t88-38q52 0 88.5 38t65.5 83q17 26 35.5 50t40.5 46q29 30 54.5 62.5T790 875q0 42.948-27 74.474Q736 981 694 981q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
                      </svg>
                    </span>
                    <span className="inline-flex h-8 items-center rounded px-5 text-white bg-blue-500">
                      PYTHON
                    </span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-twitter to-blue-600  p-7 rounded-md flex flex-col lg:flex-row text-white items-center">
                <div className="flex-shrink-0 w-20 pl-0 lg:pl-2 mb-4 lg:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="50"
                    viewBox="0 96 960 960"
                    width="50"
                    className="fill-current text-white"
                  >
                    <path d="m481 976-41-120H160q-35 0-57.5-22.5T80 776V256q0-35 22.5-57.5T160 176h240l35 119.4h365q35 0 57.5 22.387Q880 340.175 880 375v521q0 35-22.444 57.5T800.2 976H481ZM286.701 680Q356 680 400 635.222T444 519v-15.5q0-6.5-2.013-11.5H283v61h90q-8 28.949-30.5 44.975Q320 614 288 614q-39 0-67-28.289-28-28.288-28-69.711t28-69.711Q249 418 287.742 418q17.881 0 33.775 6.5 15.894 6.5 28.807 19.5L399 398q-20-22-50-34t-62-12q-68 0-115.5 48T124 516q0 68 47.706 116 47.705 48 114.995 48Zm267.704 19L577 678q-14-17-26-32.5T528 612l26.405 87Zm49.79-51q28.363-33 43.052-63 14.688-30 19.753-47H508l11 43h40q8 14.7 19 31.85Q589 630 604.195 648ZM521 936h279q17 0 28.5-11.521 11.5-11.52 11.5-28.55V375q0-17-11.5-28.5T800 335H448l46 163h79v-43h41v43h147v40h-52q-9 38-29 74.151-20 36.15-47 67.28l109 107.448L713 816 604 708l-36 36 33 112-80 80Z" />
                  </svg>
                </div>
                <div>
                  <h6 className="text-xl rounded-lg mb-1">
                    Twitter'da <strong>@bedirhanayydin </strong>hesabını takip
                    etmeyi unutma!
                  </h6>
                  <p>
                    Hazırladığımız son videolardan anında haberdar olmak için
                    twitter hesabımızı takip etmeyi unutma!
                  </p>
                  <a
                    href="#"
                    className="bg-white h-11 px-5 inline-flex items-center rounded text-black mt-4"
                  >
                    Takip et
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="modal" id="login-modal">
          <div className="modal-content">
            <h3 className="text-2xl mb-4">Giriş Yap</h3>
            <button
              onClick={() => modal("login-modal")}
              className="bg-bedirhan px-6 inline-flex items-center rounded h-10 text-white"
            >
              Kapat
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
//  <div className="flex justify-center items-center h-screen ">
//       <div className="flex justify-center  bg-gray-200  ">
//         <button className="btn bg-indigo-200  hover:bg-indigo-800  ">
//           BUTTON 1
//         </button>
//         <button className="btn bg-red-200   hover:bg-red-800  ">
//           BUTTON 1
//         </button>
//       </div>
//     </div>
