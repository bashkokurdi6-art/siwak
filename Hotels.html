<!DOCTYPE html>
<html lang="ckb" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#07150f" />
  <title>ڕوناکی مەدینە | سیستەمی دابەشکردنی ژوور</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

  <style>
    :root{
      --glass: rgba(10, 28, 20, .62);
      --glass-light: rgba(255,255,255,.10);
      --border: rgba(255,255,255,.18);
      --gold: #f3c969;
      --green: #28c76f;
      --red: #ff4d5f;
      --yellow: #ffca3a;
      --text: #fff;
      --muted: rgba(255,255,255,.72);
      --shadow: 0 20px 60px rgba(0,0,0,.38);
    }

    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      min-height:100vh;
      color:var(--text);
      font-family:"Noto Sans Arabic",Tahoma,Arial,sans-serif;
      background:
        linear-gradient(180deg,rgba(3,12,8,.55),rgba(3,12,8,.92)),
        url("https://commons.wikimedia.org/wiki/Special:Redirect/file/Kaaba%20at%20night.jpg")
        center/cover fixed no-repeat;
      overflow-x:hidden;
    }

    body::before{
      content:"";
      position:fixed;
      inset:0;
      pointer-events:none;
      background:
        radial-gradient(circle at 12% 12%,rgba(243,201,105,.18),transparent 30%),
        radial-gradient(circle at 88% 28%,rgba(40,199,111,.14),transparent 30%);
      z-index:-1;
    }

    button,input,select{font:inherit}
    button{cursor:pointer}

    .page{
      width:min(1180px,calc(100% - 24px));
      margin:auto;
      padding:22px 0 50px;
    }

    .glass{
      background:var(--glass);
      border:1px solid var(--border);
      box-shadow:var(--shadow);
      backdrop-filter:blur(18px);
      -webkit-backdrop-filter:blur(18px);
    }

    .header{
      border-radius:28px;
      padding:24px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:18px;
      margin-bottom:18px;
      overflow:hidden;
      position:relative;
    }

    .header::after{
      content:"";
      position:absolute;
      width:180px;height:180px;
      border-radius:50%;
      background:rgba(243,201,105,.10);
      left:-45px;top:-80px;
      filter:blur(2px);
    }

    .brand h1{
      margin:0;
      font-size:clamp(25px,5vw,44px);
      color:var(--gold);
      text-shadow:0 5px 25px rgba(0,0,0,.45);
    }

    .brand p{margin:6px 0 0;color:var(--muted);font-weight:700}
    .logo{
      width:74px;height:74px;
      display:grid;place-items:center;
      border-radius:22px;
      font-size:38px;
      background:linear-gradient(145deg,rgba(243,201,105,.28),rgba(255,255,255,.05));
      border:1px solid rgba(243,201,105,.40);
      box-shadow:0 12px 34px rgba(0,0,0,.25);
      flex:0 0 auto;
    }

    .toolbar{
      border-radius:24px;
      padding:16px;
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:12px;
      margin-bottom:18px;
    }

    .stat{
      border-radius:18px;
      padding:15px;
      text-align:center;
      background:rgba(255,255,255,.07);
      border:1px solid rgba(255,255,255,.10);
    }
    .stat span{display:block;font-size:25px;font-weight:900;color:var(--gold)}
    .stat small{color:var(--muted);font-weight:700}

    .actions{
      border-radius:24px;
      padding:16px;
      margin-bottom:18px;
      display:flex;
      gap:10px;
      flex-wrap:wrap;
      align-items:center;
    }

    .btn{
      border:0;
      border-radius:15px;
      padding:12px 17px;
      color:#fff;
      font-weight:900;
      box-shadow:0 10px 25px rgba(0,0,0,.24);
      transition:.2s ease;
    }
    .btn:hover{transform:translateY(-2px)}
    .btn:active{transform:scale(.98)}
    .btn-green{background:linear-gradient(135deg,#0e9f52,#34d980)}
    .btn-red{background:linear-gradient(135deg,#db2741,#ff6071)}
    .btn-yellow{background:linear-gradient(135deg,#d89d00,#ffcc43);color:#201700}
    .btn-dark{background:rgba(0,0,0,.38);border:1px solid var(--border)}
    .btn-sm{padding:8px 12px;border-radius:11px;font-size:13px}

    .filters{
      margin-right:auto;
      display:flex;
      gap:8px;
      flex-wrap:wrap;
    }

    select,input{
      color:#fff;
      outline:none;
      border:1px solid var(--border);
      background:rgba(0,0,0,.30);
      border-radius:14px;
      padding:11px 13px;
    }
    select option{color:#111}
    input::placeholder{color:rgba(255,255,255,.58)}

    .rooms{
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:16px;
    }

    .room{
      border-radius:24px;
      padding:17px;
      position:relative;
      overflow:hidden;
    }

    .room.full{border-color:rgba(255,77,95,.55)}
    .room.available{border-color:rgba(40,199,111,.50)}

    .room-head{
      display:flex;
      justify-content:space-between;
      gap:12px;
      align-items:flex-start;
      margin-bottom:14px;
    }

    .room-title h3{margin:0;font-size:21px;color:var(--gold)}
    .room-title p{margin:4px 0 0;color:var(--muted);font-weight:700}
    .badge{
      border-radius:999px;
      padding:7px 11px;
      font-weight:900;
      font-size:13px;
      white-space:nowrap;
      background:rgba(255,255,255,.10);
      border:1px solid var(--border);
    }

    .beds{
      display:grid;
      gap:9px;
    }

    .bed{
      min-height:58px;
      display:flex;
      align-items:center;
      gap:10px;
      padding:9px 11px;
      border-radius:15px;
      border:1px solid rgba(255,255,255,.10);
      background:rgba(255,255,255,.065);
    }

    .bed-number{
      width:37px;height:37px;
      display:grid;place-items:center;
      border-radius:12px;
      flex:0 0 auto;
      font-weight:900;
      color:#211900;
      background:linear-gradient(145deg,#ffe08c,#d8a825);
    }

    .guest-info{flex:1;min-width:0}
    .guest-name{font-weight:900;overflow-wrap:anywhere}
    .empty-text{color:rgba(255,255,255,.52);font-weight:700}

    .bed-actions{display:flex;gap:6px;flex:0 0 auto}
    .icon-btn{
      border:0;
      width:35px;height:35px;
      border-radius:11px;
      display:grid;place-items:center;
      color:white;
      font-size:16px;
    }
    .add-guest{background:var(--green)}
    .remove-guest{background:var(--red)}

    .room-footer{
      margin-top:13px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:9px;
      flex-wrap:wrap;
    }

    .occupancy{color:var(--muted);font-size:13px;font-weight:800}

    .empty-state{
      grid-column:1/-1;
      border-radius:24px;
      padding:48px 18px;
      text-align:center;
    }
    .empty-state .emoji{font-size:55px}
    .empty-state h3{margin:8px 0;color:var(--gold)}
    .empty-state p{color:var(--muted)}

    .modal-wrap{
      position:fixed;
      inset:0;
      display:none;
      align-items:center;
      justify-content:center;
      padding:18px;
      background:rgba(0,0,0,.72);
      z-index:100;
    }
    .modal-wrap.show{display:flex}
    .modal{
      width:min(480px,100%);
      border-radius:25px;
      padding:21px;
      max-height:90vh;
      overflow:auto;
    }
    .modal h2{margin:0 0 15px;color:var(--gold)}
    .field{margin-bottom:12px}
    .field label{display:block;margin:0 2px 6px;font-weight:800;color:var(--muted)}
    .field input,.field select{width:100%}
    .modal-actions{display:flex;gap:9px;margin-top:18px}
    .modal-actions .btn{flex:1}

    .toast{
      position:fixed;
      bottom:20px;
      left:50%;
      transform:translate(-50%,120px);
      opacity:0;
      z-index:200;
      min-width:min(340px,calc(100% - 28px));
      text-align:center;
      padding:13px 18px;
      border-radius:15px;
      background:#10261b;
      border:1px solid rgba(255,255,255,.15);
      box-shadow:var(--shadow);
      font-weight:800;
      transition:.35s;
    }
    .toast.show{transform:translate(-50%,0);opacity:1}
    .toast.error{background:#48131b}

    .loading{
      position:fixed;inset:0;
      display:none;place-items:center;
      background:rgba(1,8,5,.72);
      z-index:300;
      backdrop-filter:blur(6px);
    }
    .loading.show{display:grid}
    .spinner{
      width:58px;height:58px;border-radius:50%;
      border:5px solid rgba(255,255,255,.18);
      border-top-color:var(--gold);
      animation:spin .85s linear infinite;
    }
    @keyframes spin{to{transform:rotate(360deg)}}

    .credit{
      text-align:center;
      font-size:11px;
      color:rgba(255,255,255,.45);
      margin-top:22px;
    }
    .credit a{color:inherit}

    @media(max-width:760px){
      .page{width:min(100% - 14px,1180px);padding-top:9px}
      .header{padding:18px;border-radius:21px}
      .logo{width:60px;height:60px;font-size:30px}
      .toolbar{grid-template-columns:repeat(2,1fr);border-radius:20px}
      .rooms{grid-template-columns:1fr}
      .actions{align-items:stretch}
      .actions>.btn{flex:1}
      .filters{width:100%;margin:0}
      .filters select,.filters input{flex:1;min-width:130px}
    }
  </style>
</head>

<body>
  <main class="page">
    <header class="header glass">
      <div class="brand">
        <h1>ڕوناکی مەدینە</h1>
        <p>🏨 سیستەمی دابەشکردنی ژوورەکان</p>
      </div>
      <div class="logo">🕋</div>
    </header>

    <section class="toolbar glass">
      <div class="stat"><span id="totalRooms">٠</span><small>🚪 کۆی ژوور</small></div>
      <div class="stat"><span id="totalBeds">٠</span><small>🛏️ کۆی سەریر</small></div>
      <div class="stat"><span id="totalGuests">٠</span><small>👥 میوان</small></div>
      <div class="stat"><span id="emptyBeds">٠</span><small>✅ سەریری بەتاڵ</small></div>
    </section>

    <section class="actions glass">
      <button class="btn btn-green" onclick="openRoomModal()">➕ زیادکردنی ژوور</button>
      <button class="btn btn-yellow" onclick="loadRooms()">🔄 نوێکردنەوە</button>
      <button class="btn btn-dark" onclick="window.print()">🖨️ چاپکردن</button>

      <div class="filters">
        <select id="genderFilter" onchange="renderRooms()">
          <option value="all">👥 هەموو</option>
          <option value="male">👨 پیاو</option>
          <option value="female">👩 ئافرەت</option>
        </select>
        <select id="capacityFilter" onchange="renderRooms()">
          <option value="all">🛏️ هەموو ژوورەکان</option>
          <option value="4">٤ سەریر</option>
          <option value="5">٥ سەریر</option>
        </select>
        <input id="searchInput" type="search" placeholder="🔍 گەڕان بە ناو یان ژمارە..." oninput="renderRooms()">
      </div>
    </section>

    <section id="roomsContainer" class="rooms"></section>

    <div class="credit">
      وێنەی پاشبنەما: Wikimedia Commons — Kaaba at night
    </div>
  </main>

  <!-- مۆداڵی زیادکردنی ژوور -->
  <div id="roomModal" class="modal-wrap" onclick="closeOnBackdrop(event,'roomModal')">
    <div class="modal glass">
      <h2>➕ زیادکردنی ژووری نوێ</h2>

      <div class="field">
        <label>🚪 ژمارە یان ناوی ژوور</label>
        <input id="roomNumber" type="text" placeholder="بۆ نموونە: ١٠١" maxlength="50">
      </div>

      <div class="field">
        <label>🛏️ ژمارەی سەریر</label>
        <select id="roomCapacity">
          <option value="4">٤ سەریر</option>
          <option value="5">٥ سەریر</option>
        </select>
      </div>

      <div class="field">
        <label>👥 جۆری ژوور</label>
        <select id="roomGender">
          <option value="male">👨 پیاو</option>
          <option value="female">👩 ئافرەت</option>
        </select>
      </div>

      <div class="modal-actions">
        <button class="btn btn-green" onclick="addRoom()">✅ پاشەکەوت</button>
        <button class="btn btn-red" onclick="closeModal('roomModal')">❌ داخستن</button>
      </div>
    </div>
  </div>

  <!-- مۆداڵی زیادکردنی میوان -->
  <div id="guestModal" class="modal-wrap" onclick="closeOnBackdrop(event,'guestModal')">
    <div class="modal glass">
      <h2>👤 زیادکردنی ناوی میوان</h2>
      <p id="guestModalInfo" style="color:var(--muted);font-weight:700"></p>

      <div class="field">
        <label>📝 ناوی سیانی</label>
        <input id="guestName" type="text" placeholder="ناوی سیانی بنووسە" maxlength="120">
      </div>

      <div class="modal-actions">
        <button class="btn btn-green" onclick="addGuest()">✅ تۆمارکردن</button>
        <button class="btn btn-red" onclick="closeModal('guestModal')">❌ داخستن</button>
      </div>
    </div>
  </div>

  <div id="toast" class="toast"></div>
  <div id="loading" class="loading"><div class="spinner"></div></div>

  <script>
    const SUPABASE_URL = "https://vhxafelyesuhpivopcni.supabase.co";
    const SUPABASE_KEY = "sb_publishable_fMc3VhlhSEnyoCAf0DcJWQ_zTsl5tRv";
    const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    let rooms = [];
    let selectedRoomId = null;
    let selectedBedNumber = null;

    const kurdishDigits = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
    const toKurdishNumber = value =>
      String(value ?? 0).replace(/\d/g, d => kurdishDigits[Number(d)]);

    function showLoading(show=true){
      document.getElementById("loading").classList.toggle("show",show);
    }

    function toast(message,type="success"){
      const el = document.getElementById("toast");
      el.textContent = message;
      el.className = "toast show" + (type === "error" ? " error" : "");
      clearTimeout(window.toastTimer);
      window.toastTimer = setTimeout(()=>el.classList.remove("show"),2800);
    }

    function openRoomModal(){
      document.getElementById("roomNumber").value = "";
      document.getElementById("roomModal").classList.add("show");
      setTimeout(()=>document.getElementById("roomNumber").focus(),150);
    }

    function openGuestModal(roomId,bedNumber){
      selectedRoomId = roomId;
      selectedBedNumber = bedNumber;
      const room = rooms.find(r=>r.id===roomId);
      document.getElementById("guestName").value = "";
      document.getElementById("guestModalInfo").textContent =
        `🚪 ژوور ${room?.room_number || ""} — 🛏️ سەریری ${toKurdishNumber(bedNumber)}`;
      document.getElementById("guestModal").classList.add("show");
      setTimeout(()=>document.getElementById("guestName").focus(),150);
    }

    function closeModal(id){document.getElementById(id).classList.remove("show")}
    function closeOnBackdrop(e,id){if(e.target.id===id) closeModal(id)}

    async function loadRooms(){
      showLoading(true);
      const {data,error} = await db
        .from("hotel_rooms")
        .select("id,room_number,capacity,gender,created_at,room_guests(id,guest_name,bed_number,created_at)")
        .order("created_at",{ascending:true});

      showLoading(false);

      if(error){
        console.error(error);
        toast("❌ زانیارییەکان نەخوێندرایەوە. SQL و RLS بپشکنە.","error");
        return;
      }

      rooms = (data || []).map(room=>({
        ...room,
        room_guests:(room.room_guests || []).sort((a,b)=>a.bed_number-b.bed_number)
      }));

      renderRooms();
    }

    async function addRoom(){
      const roomNumber = document.getElementById("roomNumber").value.trim();
      const capacity = Number(document.getElementById("roomCapacity").value);
      const gender = document.getElementById("roomGender").value;

      if(!roomNumber){
        toast("⚠️ تکایە ژمارە یان ناوی ژوور بنووسە.","error");
        return;
      }

      showLoading(true);
      const {error} = await db.from("hotel_rooms").insert({
        room_number:roomNumber,
        capacity,
        gender
      });
      showLoading(false);

      if(error){
        console.error(error);
        toast(error.code==="23505" ? "⚠️ ئەم ژمارە ژوورە پێشتر تۆمار کراوە." : "❌ ژوورەکە زیاد نەکرا.","error");
        return;
      }

      closeModal("roomModal");
      toast("✅ ژوورەکە بە سەرکەوتوویی زیاد کرا.");
      loadRooms();
    }

    async function addGuest(){
      const guestName = document.getElementById("guestName").value.trim();

      if(!guestName){
        toast("⚠️ تکایە ناوی سیانی بنووسە.","error");
        return;
      }

      showLoading(true);
      const {error} = await db.from("room_guests").insert({
        room_id:selectedRoomId,
        guest_name:guestName,
        bed_number:selectedBedNumber
      });
      showLoading(false);

      if(error){
        console.error(error);
        toast(error.code==="23505" ? "⚠️ ئەم سەریرە پێشتر پڕکراوەتەوە." : "❌ ناوەکە تۆمار نەکرا.","error");
        return;
      }

      closeModal("guestModal");
      toast("✅ ناوی میوان تۆمار کرا.");
      loadRooms();
    }

    async function removeGuest(guestId,guestName){
      if(!confirm(`دڵنیایت لە سڕینەوەی «${guestName}»؟`)) return;

      showLoading(true);
      const {error} = await db.from("room_guests").delete().eq("id",guestId);
      showLoading(false);

      if(error){
        console.error(error);
        toast("❌ ناوەکە نەسڕایەوە.","error");
        return;
      }

      toast("🗑️ ناوی میوان سڕایەوە.");
      loadRooms();
    }

    async function deleteRoom(roomId,roomNumber){
      if(!confirm(`دڵنیایت لە سڕینەوەی ژووری «${roomNumber}» و هەموو ناوەکانی؟`)) return;

      showLoading(true);
      const {error} = await db.from("hotel_rooms").delete().eq("id",roomId);
      showLoading(false);

      if(error){
        console.error(error);
        toast("❌ ژوورەکە نەسڕایەوە.","error");
        return;
      }

      toast("🗑️ ژوورەکە سڕایەوە.");
      loadRooms();
    }

    function renderRooms(){
      const container = document.getElementById("roomsContainer");
      const gender = document.getElementById("genderFilter").value;
      const capacity = document.getElementById("capacityFilter").value;
      const search = document.getElementById("searchInput").value.trim().toLowerCase();

      const filtered = rooms.filter(room=>{
        const genderOK = gender==="all" || room.gender===gender;
        const capacityOK = capacity==="all" || Number(room.capacity)===Number(capacity);
        const names = room.room_guests.map(g=>g.guest_name).join(" ").toLowerCase();
        const searchOK = !search ||
          String(room.room_number).toLowerCase().includes(search) ||
          names.includes(search);
        return genderOK && capacityOK && searchOK;
      });

      updateStats();

      if(!filtered.length){
        container.innerHTML = `
          <div class="empty-state glass">
            <div class="emoji">🏨</div>
            <h3>هیچ ژوورێک نییە</h3>
            <p>لە دوگمەی «➕ زیادکردنی ژوور» ژووری نوێ زیاد بکە.</p>
          </div>`;
        return;
      }

      container.innerHTML = filtered.map(room=>{
        const guests = room.room_guests || [];
        const isFull = guests.length >= room.capacity;
        const genderText = room.gender==="male" ? "👨 پیاو" : "👩 ئافرەت";
        let bedsHTML = "";

        for(let bed=1; bed<=room.capacity; bed++){
          const guest = guests.find(g=>Number(g.bed_number)===bed);
          bedsHTML += `
            <div class="bed">
              <div class="bed-number">${toKurdishNumber(bed)}</div>
              <div class="guest-info">
                ${guest
                  ? `<div class="guest-name">👤 ${escapeHTML(guest.guest_name)}</div>`
                  : `<div class="empty-text">سەریری بەتاڵ</div>`
                }
              </div>
              <div class="bed-actions">
                ${guest
                  ? `<button class="icon-btn remove-guest" title="سڕینەوە"
                      onclick='removeGuest("${guest.id}",${JSON.stringify(guest.guest_name)})'>🗑️</button>`
                  : `<button class="icon-btn add-guest" title="زیادکردنی ناو"
                      onclick='openGuestModal("${room.id}",${bed})'>➕</button>`
                }
              </div>
            </div>`;
        }

        return `
          <article class="room glass ${isFull ? "full" : "available"}">
            <div class="room-head">
              <div class="room-title">
                <h3>🚪 ژوور ${escapeHTML(room.room_number)}</h3>
                <p>🛏️ ${toKurdishNumber(room.capacity)} سەریر — ${genderText}</p>
              </div>
              <div class="badge">${isFull ? "🔴 پڕە" : "🟢 بەردەستە"}</div>
            </div>

            <div class="beds">${bedsHTML}</div>

            <div class="room-footer">
              <span class="occupancy">
                👥 ${toKurdishNumber(guests.length)} / ${toKurdishNumber(room.capacity)} تۆمارکراو
              </span>
              <button class="btn btn-red btn-sm"
                onclick='deleteRoom("${room.id}",${JSON.stringify(room.room_number)})'>
                🗑️ سڕینەوەی ژوور
              </button>
            </div>
          </article>`;
      }).join("");
    }

    function updateStats(){
      const totalRooms = rooms.length;
      const totalBeds = rooms.reduce((sum,r)=>sum+Number(r.capacity),0);
      const totalGuests = rooms.reduce((sum,r)=>sum+(r.room_guests?.length || 0),0);
      const emptyBeds = totalBeds-totalGuests;

      document.getElementById("totalRooms").textContent = toKurdishNumber(totalRooms);
      document.getElementById("totalBeds").textContent = toKurdishNumber(totalBeds);
      document.getElementById("totalGuests").textContent = toKurdishNumber(totalGuests);
      document.getElementById("emptyBeds").textContent = toKurdishNumber(emptyBeds);
    }

    function escapeHTML(value){
      return String(value ?? "")
        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");
    }

    document.addEventListener("keydown",e=>{
      if(e.key==="Escape"){
        closeModal("roomModal");
        closeModal("guestModal");
      }
      if(e.key==="Enter" && document.getElementById("guestModal").classList.contains("show")) addGuest();
    });

    loadRooms();
  </script>
</body>
</html>
