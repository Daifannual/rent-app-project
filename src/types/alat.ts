export interface User {
    id: number;
    name: string;
    email: string;
    
}

export interface Tool {
    id: number;
    alat_kategori_id: number;
    alat_nama: string;
    alat_deskripsi: string;
    alat_hargaperhari: number;
    alat_stok: number;  
}
