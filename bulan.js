const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ['January', 'Febuary', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error('Sorry Data Not Found'), []);
    }
  }, 4000);
};

const showMonth = (nothing, month) => {
  if (nothing == null) {
    month.map((param) => {
      console.log(param);
    });
  } else {
    console.log(nothing.message, month);
  }
};

getMonth(showMonth);
