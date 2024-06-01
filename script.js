
document.getElementById("survey-form").addEventListener("submit", function(event){
    event.preventDefault(); 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var favoriteGenre = document.getElementById("favoriteGenre").value;
    var opinion = document.querySelector('input[name="opinion"]:checked').value;
    var comment = document.getElementById("comment").value;
    console.log("Nama: " + name);
    console.log("Email: " + email);
    console.log("Tanggal Lahir: " + dob);
    console.log("Genre Musik Favorit: " + favoriteGenre);
    console.log("Opini tentang lagu 'Kupu-kupu' - Tiara Andini: " + opinion);
    console.log("Komentar Tambahan: " + comment);

});
