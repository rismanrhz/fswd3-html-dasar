alert('Mari Bermain Suit');
let tanggapan = prompt('apakah anda ingin bermain suit?(yes/no) : ');
if (tanggapan == 'yes') {

	let nama = prompt('siapa namamu : ');

	let ulang = 1;
	while(ulang == 1){
		let admins = Math.floor(Math.random() * 3);
		let admin,hasil,replay;
		if (admins == 0) {
			admin = 'gunting' 
		}else if(admins == 1){
			admin = 'batu'
		}else{
			admin = 'kertas'
		}
		let choose = prompt('masukkan pilihan anda (gunting/batu/kertas) ')
		switch(choose){
			case 'gunting' :
				switch(admin){
					case 'gunting' :
						hasil = 'seri'
						break;
					case 'batu' :
						hasil = 'kalah'
						break;
					default:
						hasil = 'menang'
						break;
				}
				break;
			case 'batu' :
				switch(admin){
					case 'gunting' :
						hasil = 'menang'
						break;
					case 'batu' :
						hasil = 'seri'
						break;
					default:
						hasil = 'kalah'
						break;
				}
				break;
			case 'kertas' :
				switch(admin){
					case 'gunting' :
						hasil = 'kalah'
						break;
					case 'batu' :
						hasil = 'menang'
						break;
					default:
						hasil = 'seri'
						break;
				}
				break;
			default:
			hasil = 'gagal';
			break;
		}
		alert('Komputer : ' + admin + ' | '+nama+' : ' + choose + ' | Hasil : ' + hasil);

		let respon = true;
		while(respon){
			respon = false;
			replay = prompt('ingin bermain lagi? (yes/no)');
			if (replay == 'yes') {
				ulang = 1;
			}else if (replay == 'no') {
				ulang = 0;
			}else{
				respon = true;
			}
		}
	}

}