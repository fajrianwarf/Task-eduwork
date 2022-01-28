import { Table } from './tugas1.js';

//adding data to the tables
const table = new Table({
    header: ["Name", "Email", "City", "Phone Number"],
    data: [
      ["Fajrianwar Fachrul", "fajrianwarfachrul@gmail.com", "Semarang", "089#######23"],
      ["Erma Agustin", "erma.example@gmail.com", "Purwodadi", "081#######11"],
      ["Joko Susilo", "jokosus@gmail.com", "Yogyakarta", "081#######54"],
      ["Maudy Fathihah", "mody.example@gmail.com", "Surabaya", "082#######99"]
    ]
});

const opp = document.getElementById("oop");
table.wrap(oop);
  