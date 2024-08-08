const rakamlar = (sayi) => {
  const rakamSayilari = {};
  const sayiStr = sayi.toString();

  for (let rakam of sayiStr) {
    if (rakamSayilari[rakam] === undefined) {
      rakamSayilari[rakam] = 1;
    } else {
      rakamSayilari[rakam]++;
    }
  }
  return rakamSayilari;
};
