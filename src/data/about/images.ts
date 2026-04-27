/** Local paths for images mirrored from firstversion.site (hashed filenames). */
const base = "/assets/images/firstversion";

const byLogical: Record<string, string> = {
	"Ik_Onkar.png": "Ik_Onkar-CcKAs6Wg.png",
	"Guru_Granth_Sahib.png": "Guru_Granth_Sahib-B3aGh3qk.png",
	"Seva.jpg": "Seva-BvSWhY0U.jpg",
	"Equality.png": "Equality-r3nvHU1u.png",
	"Simran.png": "Simran-B8M-vUYF.png",
	"Kirat_Karo.jpg": "Kirat_Karo-CqdDJSEr.jpg",
	"1_kesha.png": "1_kesha-G_S73-a4.png",
	"2_kangha.png": "2_kangha-BbblTPlX.png",
	"3_kara.jpg": "3_kara-DKXGJNEn.jpg",
	"4_kachera.jpg": "4_kachera-CmCQe81H.jpg",
	"5_kirpan.jpg": "5_kirpan-B3GOXLQ2.jpg",
	"1_naam_japo.png": "1_naam_japo-Ba2Y2d9C.png",
	"2_kirat_karo.png": "2_kirat_karo-Bkvk8RPj.png",
	"3_vand_chhako.png": "3_vand_chhako-Bcs7BElO.png",
};

export function fvAsset(logicalName: string): string {
	const file = byLogical[logicalName] ?? logicalName;
	return `${base}/${file}`;
}

export const ceremonyImageById: Record<string, string> = {
	"amrit-sanchar": `${base}/Amrit_Sanchar-BWroUqoM.png`,
	"anand-karaj": `${base}/Anand_Karaj-Chii6zap.png`,
	"akhand-path": `${base}/Akhand_Path-CNs1lOK7.png`,
	ardas: `${base}/Ardas-DP-h1vgR.png`,
	"naam-karan": `${base}/Naam_Karan-C6IeTKNP.png`,
	"antam-sanskar": `${base}/Antam_Sanskar-BRfFcJBX.png`,
	langar: `${base}/Langar-BUhQTYP4.png`,
	nitnem: `${base}/Nitnem--kTliO9M.png`,
};

export const guruPortraitByNumber: Record<number, string> = {
	1: `${base}/1_Guru_Nanak_Dev_Ji-BjctVT4x.png`,
	2: `${base}/2_Guru_Angad_Dev_Ji-CrKJukN7.png`,
	3: `${base}/3_Guru_Amar_Das_Ji-GUjnjbMW.png`,
	4: `${base}/4_Guru_Ram_Das_Ji-Ba1JuYSc.png`,
	5: `${base}/5_Guru_Arjan_Dev_Ji-CY477L_k.png`,
	6: `${base}/6_Guru_Hargobind_Singh_Ji-Df3CVMrt.png`,
	7: `${base}/7_Guru_Har_Rai_Ji-Ckf_7C9W.png`,
	8: `${base}/8_Guru_Har_Krishan_Ji-QtWcpl7m.png`,
	9: `${base}/9_Guru_Tegh_Bahadur_Ji-DdOzO3vJ.png`,
	10: `${base}/10_Guru_Gobind_Singh_Ji-C-7Ybdun.png`,
};
