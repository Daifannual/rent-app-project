describe('coba penyewaan', () => {
    it("coba pilih penyewaan", () => {
        cy.visit('http://localhost:3000/admin/penyewaan'); // Gunakan URL lengkap
        cy.get('input[placeholder="Cari nama alat..."]') // menggunakan atribut placeholder
            .type("Hammer"); // mengetik
        cy.wait(500);

        // Klik tombol/link "Penyewaan"
        cy.contains("button", "Penyewaan").click(); // Sesuaikan selector jika perlu

        // Verifikasi URL setelah navigasi
        cy.url().should("include", "/admin/penyewaan/tambah", { timeout: 5000 });

        // Isi formulir
        cy.get("input#nama-alat").type("Laptop");
        cy.get("input#tanggal-sewa").type("2010-02-07");
        cy.get("input#tanggal-kembali").type("2010-02-08");
        cy.get("select#status-pembayaran").type("Lunas");
        cy.get("select#status-pengembalian").type("Dikembalikan");
        cy.get("input#total-harga").type("300.000");

        // Simpan data
        cy.contains("Simpan").click();
        cy.wait(1000);

        // Kembali ke halaman sebelumnya
        cy.contains("Kembali").click();
        cy.go("back");
        cy.wait(2000);

        // Verifikasi URL akhir
        cy.url().should("include", "/admin/penyewaan");
    });
});