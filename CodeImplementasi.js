function maxHuruf(huruf) {
  if (typeof huruf === "string") {
    lowerCaseHuruf = huruf.toLowerCase();
    splitHuruf = lowerCaseHuruf.split("");
    sortHuruf = splitHuruf.sort();
  } else {
    return "ini bukan string";
  }
}

function PijarFood(harga, voucher, jarak, pajak) {
  //cek apakah voucher di pakek dan voucher apa yang digunakan
  if (voucher == "PIJARFOOD5") {
    if (harga >= 50000) {
      potongan = harga / 2;
      if (potongan >= 50000) {
        potongan = harga - 50000;
      }
    } else {
      voucher = "voucher tidak valid karena harga kurang";
    }
  } else if (voucher == "DITRAKTIRPIJAR") {
    if (harga >= 25000) {
      potongan = (60 / 100) * harga;
      if (potongan >= 30000) {
        potongan = harga - 30000;
      }
    } else {
      voucher = "voucher tidak valid karena harga kurang";
    }
  } else {
    return false;
  }
  //cek jarak
  if (jarak > 2) {
    biayaAntar = jarak * 3000 - 1000;
  } else {
    biayaAntar = 5000;
  }
  //cek pajak
  if (pajak == true) {
    pajak = (5 / 100) * harga;
  } else if (pajak == false) {
    pajak = 0;
  }

  subTotal = potongan + biayaAntar + pajak;

  return `Output :
    Harga : ${harga}
    Potongan = ${potongan}
    Biaya antar = ${biayaAntar}
    Pajak = ${pajak}
    Subtotal = ${subTotal}`;
}
console.log(PijarFood(120000, "", 1, false));

function divideAndShort(num) {
  replaceNum = num.replace("0", " ");
  splitNum = num.split();
}
console.log(divideAndShort(4445321023457760321567));

function maxCount(input) {
  const { max, ...counts } = (input || "").split("").reduce(
    (a, c) => {
      a[c] = a[c] ? a[c] + 1 : 1;
      a.max = a.max < a[c] ? a[c] : a.max;
      return a;
    },
    { max: 0 }
  );

  return Object.entries(counts).filter(([k, v]) => v === max);
}
console.log(maxCount("ayam goreng enak sekali").join(" | ").replace(/,/g, ":"));
