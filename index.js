const mahasiswa = {};

function daftarMahasiswa() {
    const nama = document.getElementById("nama").value;
    const nomorMahasiswa = document.getElementById("nomor_mahasiswa").value;
    const programStudi = document.getElementById("program_studi").value;

    mahasiswa[nomorMahasiswa] = {
        "Nama": nama,
        "Program Studi": programStudi
    };

    // Membuat tampilan hasil daftar menggunakan DOM
    const daftarMahasiswaElement = document.getElementById("daftarMahasiswa");
    const listItem = document.createElement("li");
    listItem.textContent = `Nomor Mahasiswa: ${nomorMahasiswa}, Nama: ${nama}, Program Studi: ${programStudi}`;
    daftarMahasiswaElement.appendChild(listItem);

    // Mengosongkan input setelah mendaftar
    document.getElementById("nama").value = "";
    document.getElementById("nomor_mahasiswa").value = "";
    document.getElementById("program_studi").value = "";
}