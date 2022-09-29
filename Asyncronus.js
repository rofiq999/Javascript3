//Buatlah sambungan program menggunakan then catch dan juga try catch untuk mengecek hari kerja dari kode Asynchronous
//dibawah dan jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya:

const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    //calback resolve, callback reject
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek); // callback resolve ini akan dijalankan ke then jika kondisi tersebut terpenuhi (true)
      } else {
        reject(new Error('Hari ini bukan hari kerja')); //callback ini akan dijalankan ke catch jika kondisi tidak terpenuhi(false)
      }
    }, 3000); // waktu ketika akan di cetak selama 3 detik
  });
  // .then((cek) => {        //aksi then akan dijalankan setelah kondisi dari resolve terpenuhi (true) maka then akan mengeksekusi statement
  //   console.log(`${cek} adalah hari kerja`);
  // })
  // .catch((error) => {      //aksi catch akan dijalankan ketika kondisi tidak terpenuhi (false) maka catch akan menjalankan pesan error
  //   console.log(error.message);
  // });
};

// cekHariKerja('senin');

const hasil = async (day, cek) => {
  try {
    // statment try dimana suatu kondisi yang akan di eksekusi jika kondisi terpenuhi (true)
    if (typeof day !== 'string') return 'data harus string'; //validasi
    const response = await cek(day); //await → menunda eksekusi hingga proses selesai.
    const result = `${response} adalah hari kerja `;
    return result;
  } catch (error) {
    // aksi catch akan dijalankan ketika kondisi tidak terpenuhi (false) maka catch akan menjalankan pesan error
    return error.message;
  }
};

const doAsync = async () => {
  // variabel doAsync digunakan untuk menjalankan asyncronus await
  console.log(await hasil('minggu', cekHariKerja));
};
doAsync();
