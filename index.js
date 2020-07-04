window.scrollTo(top);
var downloaded = false;

async function generateDownloadLink(type) {
  return new Promise(async (resolve, reject) => {
    //Append the download function here
    fetch("https://battlr.in/api/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type,
      }),
    })
      .then((response) => response.json())
      .then((res) => resolve(res.message));
  });
}

//Download Button
document.querySelectorAll(".download_button").forEach((element) => {
  element.addEventListener("click", async (event) => {
    var a = document.createElement("a");
    a.download = "Battlr.apk";
    a.href = "https://bit.ly/battlrarm64-v8a";
    a.click();
    // await generateDownloadLink("click");
    console.log("download");
    URL.revokeObjectURL(a.href);
    downloaded = true;
  });
});

//Download Button
document.querySelectorAll("th a").forEach((element) => {
  element.addEventListener("click", async (event) => {
    await generateDownloadLink("click");
    downloaded = true;
  });
});

//Auto Scroll Download
// var scrollposition = document
//   .getElementById("download")
//   .getBoundingClientRect();
// window.addEventListener("scroll", async (event) => {
//   if (
//     parseInt(scrollposition.top) <= parseInt(window.scrollY) &&
//     parseInt(scrollposition.bottom) - 50 >= parseInt(window.scrollY)
//   ) {
//     if (!downloaded) {
//       console.log("auto");
//       var a = document.createElement("a");
//       downloaded = true;
//       a.href =
//         "https://res.cloudinary.com/battlr/image/upload/fl_attachment/v1593348684/ZqqJV4OTN496.jpg";
//       a.click();
//       await generateDownloadLink("auto");
//       URL.revokeObjectURL(a.href);
//     }
//   }
// });

//Suggestions
async function send() {
  var suggestion = document.getElementById("suggestions").value;
  var email = document.getElementById("email").value;
  // console.log(suggestion, email);
}

document.getElementById("submit").addEventListener("click", (event) => {
  send();
});
