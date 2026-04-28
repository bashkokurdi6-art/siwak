function showPage(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Prayer Times API
fetch("https://api.aladhan.com/v1/timingsByCity?city=Erbil&country=IQ")
.then(res=>res.json())
.then(data=>{
  let t = data.data.timings;
  document.getElementById("prayerTimes").innerHTML = `
    Fajr: ${t.Fajr}<br>
    Dhuhr: ${t.Dhuhr}<br>
    Asr: ${t.Asr}<br>
    Maghrib: ${t.Maghrib}<br>
    Isha: ${t.Isha}
  `;
});

// Quran API
function loadAyah(){
  fetch("https://api.alquran.cloud/v1/ayah/random/en.asad")
  .then(res=>res.json())
  .then(data=>{
    document.getElementById("ayah").innerText = data.data.text;
  });
}

// Simple Login
function login(){
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if(u === "admin" && p === "1234"){
    document.getElementById("msg").innerText = "Login success ✅";
  } else {
    document.getElementById("msg").innerText = "Wrong ❌";
  }
}
