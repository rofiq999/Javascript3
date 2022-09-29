//memotong string dengan menggunakan method slice()

const potongElement = (potong, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tambah = 'ada maling dikejar polisi';
      if (!data) {
        resolve(tambah);
      } else {
        reject(new Error('Not Data'));
      }
    }, 2000);
  })

    .then((tambah) => {
      const baru = tambah.slice(potong);
      console.log(baru);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

potongElement(3, false);

// menambahkan array dengan menggunakan method push()

const tambahData = (tambah) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kondisi = false;
      const dota2 = ['Pudge', 'Shadow Fiend', 'Lina', 'Mars'];
      dota2.push(tambah);
      if (!kondisi) {
        resolve(dota2);
      } else {
        reject(new Error('Not found'));
      }
    }, 3000);
  });
};

tambahData(('Strom', 'Juggernaut'))
  .then((dota2) => {
    console.log(dota2);
  })
  .catch((error) => {
    console.log(error.message);
  });
