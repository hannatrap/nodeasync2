let favNum = 17;
let baseURL = "http://numbersapi.com";


//Part 1:

//1:

// async function numData() {
//     let data = await $.getJSON(`${baseURL}/${favNum}?json`);
//     console.log(data);
//     }
// numData();

//2:
// const nums = [2, 4, 6, 8];

// async function numsData2() {
//     let data = await $.getJSON(`${baseURL}/${nums}?json`);
//     console.log(data);
//     }

// numsData2();


//3:


async function numsData3() {
  let info = await Promise.all( Array.from({ length:4 }, () => $.getJSON(`${baseURL}/${favNum}?json`))
  );
  info.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
    

numsData3();


