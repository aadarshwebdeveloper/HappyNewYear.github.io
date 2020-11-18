
    let d = new Date("Dec 31, 2020 12:00:00").getTime();

    console.log(d);
    setInterval(function() {
      let d1 = new Date().getTime();


      let diff = d - d1;


      let days = Math.floor(diff/ (1000
        *60 *60 *24));

      let hrs = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

      var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      var seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("day").innerHTML = `${days}`;

      document.getElementById("hour").innerHTML = `${hrs}`;

      document.getElementById("mins").innerHTML = `${minutes}`;

      document.getElementById("sec").innerHTML = `${seconds}`;
    }, 1000);



window.addEventListener("load", function(e) {
      //alert("ready");
      let wish_arr = ["Each year I spend with you is the best one yet! Here’s to making more memories in 2021.", "Here’s to another year full of joy, laughter, and unforgettable memories with an unforgettable friend!", "A new year is like starting a new chapter in your life. It’s your chance to write an incredible story for yourself.", "I can’t wait to see where the next year brings us! Wishing you nothing but happiness in the new year."];


      let i = Math.floor(Math.random()*wish_arr.length);

      console.log(i);

      let wishes = document.getElementById('wishes');

      wishes.innerText = wish_arr[i];
    });



    let btn = document.getElementById("btn");

    btn.addEventListener("click", function(e) {
      let val = document.getElementById("input").value;

      let user = document.getElementById("user");

      user.innerText = val;
    });


