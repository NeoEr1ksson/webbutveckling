let mediaQuery = window.matchMedia("(max-width: 700px)")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
let img6 = document.getElementById("img6")
let img7 = document.getElementById("img7")
let img8 = document.getElementById("img8")
let img9 = document.getElementById("img9")
let img10 = document.getElementById("img10")
let img11 = document.getElementById("img11")
let img12 = document.getElementById("img12")

function changeImages(mediaQuery) {
    if (mediaQuery.matches) {
        img1.src = "https://i.redd.it/huniztvtuen31.png"
        img2.src = "https://i.redd.it/hbkdowuiyuc81.jpg"
        img3.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e6d9276-f1d5-4938-a79a-38037a489fef/dchyiwz-0570b47a-f188-457a-ab88-21e78b7d5264.png/v1/fill/w_575,h_800,q_80,strp/darkwood_by_narcomanic_dchyiwz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvM2U2ZDkyNzYtZjFkNS00OTM4LWE3OWEtMzgwMzdhNDg5ZmVmXC9kY2h5aXd6LTA1NzBiNDdhLWYxODgtNDU3YS1hYjg4LTIxZTc4YjdkNTI2NC5wbmciLCJ3aWR0aCI6Ijw9NTc1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iSpb5FScLuL9gK6PJKk28gceI37WB_GBUk7m_1mryGA"
        img4.src = "https://th.bing.com/th/id/OIP.Z1F0YH1QirMMOULFvipmuQHaKO?rs=1&pid=ImgDetMain"
        img5.src = "https://i.pinimg.com/originals/bf/15/18/bf1518aab923aca500500dd81f7a2a5d.png"
        img6.src = "https://ih1.redbubble.net/image.3571408649.0755/raf,750x1000,075,t,101010:01c5ca27c6.jpg"
        img7.src = "https://preview.redd.it/elden-ring-cover-link-to-original-artist-in-comments-v0-va1x3q6gtev81.png?auto=webp&s=66a9f94d0cead1967b0a0aaeb12e15c471ccc40e"
        img8.src = "https://c4.wallpaperflare.com/wallpaper/35/864/877/disco-elysium-cover-art-game-logo-hd-wallpaper-preview.jpg"
        img9.src = "https://th.bing.com/th/id/OIP.ygx6g0wuWuDi7wGeGrXIfgHaLH?rs=1&pid=ImgDetMain"
        img10.src = "https://i.redd.it/r5pk6ucg1ub51.png"
        img11.src = "https://posterspy.com/wp-content/uploads/2018/08/reddead2.jpg"
        img12.src = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/barotrauma-mark-berger.jpg"
    }
    else {
        img1.src = "https://i.pinimg.com/originals/9f/27/56/9f2756c1d936b4ffb68ac146d11a8e9a.jpg"
        img2.src = "https://i.pinimg.com/originals/38/e4/79/38e47934eca3ecffaa7f8f8b2e1c8ebb.jpg"
        img3.src = "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/3b267b61af49fe177d1752e33d1afc93.jpg"
        img4.src = "https://repacklab.com/wp-content/uploads/2021/06/METAL-GEAR-RISING-REVENGEANCE-Free-Download-Repacklab-1.jpg"
        img5.src = "https://interfaceingame.com/wp-content/uploads/totally-accurate-battle-simulator/totally-accurate-battle-simulator-cover-375x500.jpg "
        img6.src = "https://assetsio.reedpopcdn.com/co4es5.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp"
        img7.src = "https://i.etsystatic.com/27995107/r/il/786cf0/3734592060/il_1588xN.3734592060_dql7.jpg"
        img8.src = "https://th.bing.com/th/id/R.ecb0d569efbd8336de6841a806b94efb?rik=JXTDyWvO6%2be1MQ&pid=ImgRaw&r=0"
        img9.src = "https://th.bing.com/th/id/OIP.ygx6g0wuWuDi7wGeGrXIfgHaLH?rs=1&pid=ImgDetMain"
        img10.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHdbd9fRikHGf6fVN48e0P8j8-BbU0TWxNw&s"
        img11.src = "https://preview.redd.it/4lkvr5g3klm81.jpg?auto=webp&s=e2faf8fb372c1a9ddc3dfc57d6f0122170934f57"
        img12.src = "https://cdn1.epicgames.com/spt-assets/2ff3a988723d4a80a33102eb23ae2525/barotrauma-mt24m.jpg"
    
    }
}

mediaQuery.addEventListener("change", function () {
    changeImages(mediaQuery)
})