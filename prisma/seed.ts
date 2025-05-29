import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "FERI AGOESTINA MAINDAH EKOWATI, S.Sos",
    group: "bdh",
  },
  {
    name: "DANNY KUSUMA WARDANA, S.A.P",
    group: "bdh",
  },
  {
    name: "SITI FATIMAH",
    group: "bdh",
  },
  {
    name: "TRIANA YEKTI HINDRIATI, SE",
    group: "bdh",
  },
  {
    name: "EKO DHARMA SETYAWAN, A.Md",
    group: "bdh",
  },
  {
    name: "SANTI DYAH MARTUTI, S.Sos",
    group: "bdh",
  },
  {
    name: "ARIF HIMAWAN, ST",
    group: "bdh",
  },
  {
    name: "UZLATUR RISAALAH",
    group: "bdh",
  },
  {
    name: "LARASSARI EKA NOWATI",
    group: "bdh",
  },
  {
    name: "RIKI NOVA HARDITA, S.Sos",
    group: "bdh",
  },
  {
    name: "RISMAJANTI, S.Sos",
    group: "bdh",
  },
  {
    name: "KUSNATUN KASANAH",
    group: "bdh",
  },
  {
    name: "USWATUN HASANAH",
    group: "bdh",
  },
  {
    name: "DESI ARINTI PRATAMA, A.Md",
    group: "bdh",
  },
  {
    name: "EKA FAJAR ANGGRAINI",
    group: "bdh",
  },
  {
    name: "MOHAMMAD FAUZAN",
    group: "bdh",
  },
  {
    name: "NIRWANA RAHMA SAFURA, SH",
    group: "bdh",
  },
  {
    name: "CUT NYAK HAMRIAH APRILISTINI, S.KM",
    group: "bdh",
  },
  {
    name: "TRI WAHYUNI, S.KM",
    group: "bdh",
  },
  {
    name: "GIANNINI LUDRYA PUTRI, S.KM",
    group: "bdh",
  },
  {
    name: "AISYA SAFIRA NABILA, S.A.P",
    group: "bdh",
  },
  {
    name: "SHERLY NATALIA DEWI, S.KM",
    group: "bdh",
  },
  {
    name: "YULLY ENGGAR FITRI",
    group: "bdh",
  },
  {
    name: "NOOR RAHMAWATI SIAHAAN, A.Md.",
    group: "bdh",
  },
  {
    name: "MUHAMMAD ZAKI, SE",
    group: "bdh",
  },
  {
    name: "ALFAN RAHMATULLAH",
    group: "bdh",
  },
  {
    name: "ABDUL HAMID MAHMUD, SE",
    group: "bdh",
  },
  {
    name: "DINILLA NUR SILMA BARFIDI, S.E",
    group: "bdh",
  },
  {
    name: "ENY MULYANINGSIH, S.Pd",
    group: "bdh",
  },
  {
    name: "TISSA AYU ASTRIA, SM",
    group: "bdh",
  },
  {
    name: "ARYANTO HADI WICAKSONO",
    group: "bdh",
  },
  {
    name: "SITI NUR FARIDAH, S.KM",
    group: "bdh",
  },
  {
    name: "FAJAR AYU SEPTYNINGRUM, A.Md.Kep",
    group: "bdh",
  },
  {
    name: "MERY ASTUTIK, A.Md.Kep",
    group: "bdh",
  },
  {
    name: "YUAN NITTA IKKA CHARISTA DEWA YANI HUSODO, Amd.PK",
    group: "bdh",
  },
  {
    name: "GALIH MAULINA SUKMA FITRI, SKM",
    group: "bdh",
  },
  {
    name: "MINUK MINTOWATI, S.KM",
    group: "bdh",
  },
  {
    name: "ANITA WAHYUNINGSIH, S.KM",
    group: "bdh",
  },
  {
    name: "DWI KURNIA PUSPITASARI, S.KM",
    group: "bdh",
  },
  {
    name: "RINI YUNIASTUTIK, S.Sos",
    group: "bdh",
  },
  {
    name: "ANALIZA FITRIA, A.Md.Gz",
    group: "bdh",
  },
  {
    name: "ADAM FIRDAUS NAZI'AT, S.KM",
    group: "bdh",
  },
  {
    name: "PUJO WARDONO",
    group: "bdh",
  },
  {
    name: "TITIN ROSIDAH, Amd. Keb",
    group: "bdh",
  },
  {
    name: "RIKCO ANGGARA PUTRA",
    group: "bdh",
  },
  {
    name: "RISKI YULIANTO, S.KM",
    group: "bdh",
  },
  {
    name: "DILLY IGUSTA MARDIONO",
    group: "bdh",
  },
  {
    name: "CHRISTIN BHINNEKA INDAH, S.Si",
    group: "bdh",
  },
  {
    name: "NURIA AMINATUN NIKMAH, S.KM",
    group: "bdh",
  },
  {
    name: "RAFIKA IRNAWATI, S.Farm",
    group: "bdh",
  },
  {
    name: "NI WAYAN DESI MARTANIA SARI, S.Farm",
    group: "bdh",
  },
  {
    name: "ANGGA BUDI NUGROHO, SE",
    group: "bdh",
  },
  {
    name: "OLIVIA CININTA, S.Tr.KL",
    group: "bdh",
  },
  {
    name: "FARIDA, A.Md",
    group: "bdh",
  },
  {
    name: "WIDYA SETYANINGSIH, SE",
    group: "bdh",
  },
  {
    name: "LELY APRILIANI, SE.Ak",
    group: "bdh",
  },
  {
    name: "INDRA AGUSTIYANA, S.Kom",
    group: "bdh",
  },
  {
    name: "IRFAN LUBIST, S.Kom",
    group: "bdh",
  },
  {
    name: "YUDHISTIE ENGGAR PRANIDANA, S.Kom",
    group: "bdh",
  },
  {
    name: "ANWAR KHOIRI, S.Pd",
    group: "bdh",
  },
  {
    name: "BARLI KUSMA NURTANIO, S.Kom",
    group: "bdh",
  },
  {
    name: "AMAR FAUZI",
    group: "bdh",
  },
  {
    name: "ANTONIUS DARMO YUWONO",
    group: "bdh",
  },
  {
    name: "IBNU DARMAWAN",
    group: "bdh",
  },
  {
    name: "HAMDANI AZMI",
    group: "bdh",
  },
  {
    name: "WAHYU TRI UTOMO",
    group: "bdh",
  },
  {
    name: "SISWANTO",
    group: "bdh",
  },
  {
    name: "ROSA DIAN TEGUH PRATIWI, M. Si",
    group: "bdh",
  },
  {
    name: "SAIFUL HUDA",
    group: "bdh",
  },
  {
    name: "LUCKY ADI CHANDRA",
    group: "bdh",
  },
  {
    name: "MUHAMAD CHAFIT",
    group: "bdh",
  },
  {
    name: "FATHUR ROUB",
    group: "bdh",
  },
  {
    name: "DYAH PURWITOSARI, A.Md.Tem",
    group: "bdh",
  },
  {
    name: "M.MUNDIR",
    group: "bdh",
  },
  {
    name: "MUHAMMAD SAFI'I",
    group: "bdh",
  },
  {
    name: "KEVIN ARDIANSYAH",
    group: "bdh",
  },
  {
    name: "PUTRA SYAFARUDDIN",
    group: "bdh",
  },
  {
    name: "ACHMAD HABIB CHUSNUL CHULUQ",
    group: "bdh",
  },
  {
    name: "DINI APRILIA, S. Farm.Apt",
    group: "bdh",
  },
  {
    name: "INKA TAMARA, Amd.Farm",
    group: "bdh",
  },
  {
    name: "DHEA APRISCA, A.Md.Farm",
    group: "bdh",
  },
  {
    name: "MUNFAATI LAILI",
    group: "bdh",
  },
  {
    name: "UKKI Rohman",
    group: "campus",
  },
  {
    name: "UKKI Zuhri",
    group: "campus",
  },
  {
    name: "UKKI Dandy",
    group: "campus",
  },
  {
    name: "UKKI Ido",
    group: "campus",
  },
  {
    name: "UKKI Hamsyah",
    group: "campus",
  },
  {
    name: "UKKI Gunawan",
    group: "campus",
  },
  {
    name: "UKKI Anita",
    group: "campus",
  },
  {
    name: "UKKI Melinda",
    group: "campus",
  },
  {
    name: "UKKI Novi",
    group: "campus",
  },
  {
    name: "UKKI Anisa",
    group: "campus",
  },
  {
    name: "UKKI Reni",
    group: "campus",
  },
  {
    name: "UKKI Defi",
    group: "campus",
  },
  {
    name: "UKKI Fian",
    group: "campus",
  },
  {
    name: "UKKI Diana",
    group: "campus",
  },
  {
    name: "UKKI Bayu",
    group: "campus",
  },
  {
    name: "UKKI Mas Tenang",
    group: "campus",
  },
  {
    name: "UKKI Mas Yudi",
    group: "campus",
  },
  {
    name: "UKKI Ilil",
    group: "campus",
  },
  {
    name: "UKKI Zitda",
    group: "campus",
  },
  {
    name: "UKKI Rozi",
    group: "campus",
  },
  {
    name: "UKKI Rosa",
    group: "campus",
  },
  {
    name: "UKKI Sely",
    group: "campus",
  },
  {
    name: "UKKI Ari Iftian",
    group: "campus",
  },
  {
    name: "UKKI Nur Atika",
    group: "campus",
  },
  {
    name: "UKKI Kartika Linda",
    group: "campus",
  },
  {
    name: "UKKI Fitri",
    group: "campus",
  },
  {
    name: "KKN Anggun",
    group: "campus",
  },
  {
    name: "KKN Rina",
    group: "campus",
  },
  {
    name: "KKN Ayu",
    group: "campus",
  },
  {
    name: "KKN Imam",
    group: "campus",
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
