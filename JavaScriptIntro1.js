let biodata = {
  name: "Fiqri Ramadhan Jupri",
  age: 23,
  hobbies: ["ngoding", "baca", "gaming", "musik"],
  IsMaried: false,
  schoolList: [
    {
      nama: "SD 80 Nagasari",
      tingkat: "SD",
      tahunMulai: 2004,
      tahunBerakhir: 2011,
      jurusan: null,
    },
    {
      nama: "SMP 28 Muaro Jambi",
      tingkat: "SMP",
      tahunMulai: 2011,
      tahunBerakhir: 2014,
      jurusan: null,
    },
    {
      nama: "SMA 3 Muaro Jambi",
      tingkat: "SMA",
      tahunMulai: 2014,
      tahunBerakhir: 2017,
      jurusan: "IPA",
    },
    {
      nama: "Universitas Dinamika Bangsa",
      tingkat: "Universitas",
      tahunMulai: 2017,
      tahunBerakhir: 2021,
      jurusan: "Tekhnik Informatika",
    },
  ],
  skills: [
    {
      skillName: "HTML",
      level: "Advanced",
    },
    {
      skillName: "CSS",
      level: "Beginner",
    },
    {
      skillName: "Javascript",
      level: "Beginner",
    },
    {
      skillName: "Bootstrap",
      level: "Beginner",
    },
    {
      skillName: "PHP",
      level: "Advanced",
    },
    {
      skillName: "Laravel",
      level: "Beginner",
    },
  ],
  interestInCoding: true,
};

let nilai = (bIndo, bInggris, mtk, ipa) => {
  if (
    typeof bIndo === "number" &&
    typeof bInggris === "number" &&
    typeof mtk === "number" &&
    typeof ipa === "number"
  ) {
    let total = bIndo + bInggris + mtk + ipa;
    let rataRata = total / 4;
    if (rataRata >= 90) {
      Grade = "A";
    } else if (rataRata >= 80) {
      Grade = "B";
    } else if (rataRata >= 70) {
      Grade = "C";
    } else if (rataRata >= 60) {
      Grade = "D";
    } else {
      Grade = "E";
    }
    return `Nilai rata-rata = ${rataRata} 
        Grade = ${Grade}`;
  } else {
    return "Anda memasukan bukan angka atau ada nilai yang masih kosong";
  }
};
console.log(nilai(0, 10, 10, 90));

function printSegitiga(nilai) {
  if (typeof nilai === "number") {
    let hasil = "";
    for (let i = 1; i <= nilai; i++) {
      for (let j = 1; j <= i; j++) {
        hasil += j + " ";
      }
      hasil += "\n";
    }
    return hasil;
  } else {
    return "Anda memasukan bukan angka";
  }
}
console.log(printSegitiga(10));

let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};
let newData = { ...data };
newData.name = "Fiqri Ramadhan";
newData.email = "fiqrirj13@gmail.com";
newData.hobby = ["ngoding,baca,gaming"];
const {
  address: { street },
  address: { city },
} = newData;
console.log(newData);
console.log(street, city);
