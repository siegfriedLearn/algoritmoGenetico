let listadoJugadores = [
  {
   "Nombre": "Marcos Acuña",
   "PG": 85,
   "RT": 76,
   "TR": 74,
   "PA": 83,
   "RE": 87,
   "DF": 80,
   "FI": 83,
   "País": "Argentina",
   "Pos": "Defensa izquierdo",
   "Cat": "Defensa"
  },
  {
   "Nombre": "David Alaba",
   "PG": 86,
   "RT": 79,
   "TR": 71,
   "PA": 83,
   "RE": 80,
   "DF": 85,
   "FI": 77,
   "País": "Austria",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Jordi Alba",
   "PG": 85,
   "RT": 84,
   "TR": 70,
   "PA": 82,
   "RE": 82,
   "DF": 77,
   "FI": 70,
   "País": "España",
   "Pos": "Defensa izquierdo",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Trent Alexander-Arnold",
   "PG": 87,
   "RT": 76,
   "TR": 69,
   "PA": 89,
   "RE": 80,
   "DF": 80,
   "FI": 73,
   "País": "Inglaterra",
   "Pos": "Defensa derecho",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Allison",
   "PG": 89,
   "RT": 86,
   "TR": 85,
   "PA": 85,
   "RE": 89,
   "DF": 54,
   "FI": 90,
   "País": "Brasil",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Angelino",
   "PG": 83,
   "RT": 78,
   "TR": 71,
   "PA": 82,
   "RE": 84,
   "DF": 76,
   "FI": 70,
   "País": "España",
   "Pos": "Lateral izquierdo",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Iago Aspas",
   "PG": 85,
   "RT": 82,
   "TR": 85,
   "PA": 79,
   "RE": 86,
   "DF": 35,
   "FI": 63,
   "País": "España",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Pierre-Emerick Aubameyang",
   "PG": 85,
   "RT": 87,
   "TR": 84,
   "PA": 74,
   "RE": 79,
   "DF": 36,
   "FI": 68,
   "País": "Gabón",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Nicolo Barella",
   "PG": 86,
   "RT": 79,
   "TR": 76,
   "PA": 83,
   "RE": 84,
   "DF": 77,
   "FI": 81,
   "País": "Italia",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Jude Bellingham",
   "PG": 84,
   "RT": 75,
   "TR": 75,
   "PA": 78,
   "RE": 84,
   "DF": 77,
   "FI": 80,
   "País": "Inglaterra",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Wissam Ben Yedder",
   "PG": 84,
   "RT": 81,
   "TR": 87,
   "PA": 78,
   "RE": 88,
   "DF": 39,
   "FI": 68,
   "País": "Francia",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Karim Benzema",
   "PG": 91,
   "RT": 80,
   "TR": 88,
   "PA": 83,
   "RE": 87,
   "DF": 39,
   "FI": 78,
   "País": "Francia",
   "Pos": "Media punta",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Marcelo Brozovic",
   "PG": 86,
   "RT": 69,
   "TR": 74,
   "PA": 81,
   "RE": 81,
   "DF": 81,
   "FI": 78,
   "País": "Croacia",
   "Pos": "Medio centro defensa",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Sergio Busquets",
   "PG": 85,
   "RT": 42,
   "TR": 62,
   "PA": 79,
   "RE": 79,
   "DF": 82,
   "FI": 73,
   "País": "España",
   "Pos": "Medio centro defensa",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Joao Cancelo",
   "PG": 88,
   "RT": 85,
   "TR": 73,
   "PA": 85,
   "RE": 85,
   "DF": 81,
   "FI": 73,
   "País": "Portugal",
   "Pos": "Defensa izquierdo",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Yannick Carrasco",
   "PG": 85,
   "RT": 89,
   "TR": 82,
   "PA": 80,
   "RE": 87,
   "DF": 53,
   "FI": 67,
   "País": "Bélgica",
   "Pos": "Medio izquierdo",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Casemiro",
   "PG": 89,
   "RT": 63,
   "TR": 73,
   "PA": 75,
   "RE": 72,
   "DF": 87,
   "FI": 90,
   "País": "Brasil",
   "Pos": "Medio centro defensa",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Ben Chilwell",
   "PG": 82,
   "RT": 76,
   "TR": 60,
   "PA": 78,
   "RE": 78,
   "DF": 78,
   "FI": 69,
   "País": "Inglaterra",
   "Pos": "Lateral izquierdo",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Kingsley Coman",
   "PG": 86,
   "RT": 92,
   "TR": 77,
   "PA": 79,
   "RE": 87,
   "DF": 30,
   "FI": 62,
   "País": "Francia",
   "Pos": "Medio izquierdo",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Thibaut Courtois",
   "PG": 90,
   "RT": 84,
   "TR": 89,
   "PA": 75,
   "RE": 90,
   "DF": 46,
   "FI": 89,
   "País": "Bélgica",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Juan Cuadrado",
   "PG": 83,
   "RT": 90,
   "TR": 75,
   "PA": 78,
   "RE": 87,
   "DF": 76,
   "FI": 72,
   "País": "Colombia",
   "Pos": "Defensa derecho",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Kevin De Bruyne",
   "PG": 91,
   "RT": 74,
   "TR": 88,
   "PA": 93,
   "RE": 87,
   "DF": 64,
   "FI": 77,
   "País": "Bélgica",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Frenkie De Jong",
   "PG": 87,
   "RT": 82,
   "TR": 69,
   "PA": 86,
   "RE": 87,
   "DF": 77,
   "FI": 78,
   "País": "Países Bajos",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Matthews Delight",
   "PG": 85,
   "RT": 75,
   "TR": 59,
   "PA": 61,
   "RE": 69,
   "DF": 84,
   "FI": 87,
   "País": "Países Bajos",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Memphis Depay",
   "PG": 85,
   "RT": 83,
   "TR": 84,
   "PA": 82,
   "RE": 86,
   "DF": 30,
   "FI": 79,
   "País": "Países Bajos",
   "Pos": "Media punta",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Rubén Días",
   "PG": 88,
   "RT": 63,
   "TR": 39,
   "PA": 66,
   "RE": 68,
   "DF": 88,
   "FI": 88,
   "País": "Portugal",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Luis Díaz",
   "PG": 84,
   "RT": 91,
   "TR": 80,
   "PA": 75,
   "RE": 87,
   "DF": 34,
   "FI": 73,
   "País": "Colombia",
   "Pos": "Extremo izquierdo",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Gianluigi Donnarumma",
   "PG": 88,
   "RT": 90,
   "TR": 83,
   "PA": 79,
   "RE": 89,
   "DF": 52,
   "FI": 85,
   "País": "Italia",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Denzel Dumfries",
   "PG": 82,
   "RT": 83,
   "TR": 63,
   "PA": 70,
   "RE": 73,
   "DF": 78,
   "FI": 89,
   "País": "Países Bajos",
   "Pos": "Lateral derecho",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Paulo Dybala",
   "PG": 86,
   "RT": 80,
   "TR": 85,
   "PA": 85,
   "RE": 90,
   "DF": 40,
   "FI": 59,
   "País": "Argentina",
   "Pos": "Media punta",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Ederson",
   "PG": 89,
   "RT": 87,
   "TR": 82,
   "PA": 93,
   "RE": 88,
   "DF": 64,
   "FI": 88,
   "País": "Brasil",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Fabinho",
   "PG": 87,
   "RT": 66,
   "TR": 69,
   "PA": 78,
   "RE": 77,
   "DF": 86,
   "FI": 83,
   "País": "Brasil",
   "Pos": "Medio centro defensa",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Nabil Fekir",
   "PG": 85,
   "RT": 83,
   "TR": 84,
   "PA": 82,
   "RE": 86,
   "DF": 30,
   "FI": 79,
   "País": "Francia",
   "Pos": "Medio centro of",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Joao Félix",
   "PG": 84,
   "RT": 83,
   "TR": 80,
   "PA": 81,
   "RE": 88,
   "DF": 40,
   "FI": 67,
   "País": "Portugal",
   "Pos": "Media punta",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Bruno Fernandes",
   "PG": 86,
   "RT": 72,
   "TR": 86,
   "PA": 88,
   "RE": 81,
   "DF": 67,
   "FI": 76,
   "País": "Portugal",
   "Pos": "Medio centro of",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Phil Foden",
   "PG": 85,
   "RT": 82,
   "TR": 78,
   "PA": 81,
   "RE": 88,
   "DF": 56,
   "FI": 60,
   "País": "Inglaterra",
   "Pos": "Extremo izquierdo",
   "Cat": "Delantero"
  },
  {
   "Nombre": "De Gea",
   "PG": 87,
   "RT": 88,
   "TR": 80,
   "PA": 76,
   "RE": 89,
   "DF": 51,
   "FI": 84,
   "País": "España",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Serge Gnabry",
   "PG": 85,
   "RT": 82,
   "TR": 84,
   "PA": 79,
   "RE": 85,
   "DF": 43,
   "FI": 69,
   "País": "Alemania",
   "Pos": "Medio derecho",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "León Goretzka",
   "PG": 87,
   "RT": 78,
   "TR": 82,
   "PA": 82,
   "RE": 83,
   "DF": 81,
   "FI": 86,
   "País": "Alemania",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Ronin Gosens",
   "PG": 82,
   "RT": 82,
   "TR": 75,
   "PA": 74,
   "RE": 79,
   "DF": 77,
   "FI": 80,
   "País": "Alemania",
   "Pos": "Lateral izquierdo",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Jack Grealish",
   "PG": 84,
   "RT": 76,
   "TR": 76,
   "PA": 83,
   "RE": 87,
   "DF": 46,
   "FI": 69,
   "País": "Inglaterra",
   "Pos": "Extremo izquierdo",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Peter Gulácsi",
   "PG": 85,
   "RT": 85,
   "TR": 84,
   "PA": 76,
   "RE": 85,
   "DF": 43,
   "FI": 83,
   "País": "Hungría",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Ílkay Gundogan",
   "PG": 85,
   "RT": 64,
   "TR": 80,
   "PA": 85,
   "RE": 85,
   "DF": 72,
   "FI": 72,
   "País": "Alemania",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Erling Haaland",
   "PG": 88,
   "RT": 89,
   "TR": 91,
   "PA": 65,
   "RE": 80,
   "DF": 49,
   "FI": 87,
   "País": "Noruega",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Achraf Hakimi",
   "PG": 84,
   "RT": 92,
   "TR": 75,
   "PA": 79,
   "RE": 80,
   "DF": 75,
   "FI": 78,
   "País": "Marruecos",
   "Pos": "Defensa derecho",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Hans Hateboer",
   "PG": 80,
   "RT": 82,
   "TR": 64,
   "PA": 71,
   "RE": 77,
   "DF": 77,
   "FI": 76,
   "País": "Países Bajos",
   "Pos": "Lateral derecho",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Theo Hernández",
   "PG": 85,
   "RT": 93,
   "TR": 72,
   "PA": 76,
   "RE": 81,
   "DF": 78,
   "FI": 83,
   "País": "Francia",
   "Pos": "Defensa izquierdo",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Ciro Immobile",
   "PG": 86,
   "RT": 85,
   "TR": 87,
   "PA": 68,
   "RE": 80,
   "DF": 39,
   "FI": 75,
   "País": "Italia",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Reece James",
   "PG": 84,
   "RT": 81,
   "TR": 70,
   "PA": 82,
   "RE": 82,
   "DF": 80,
   "FI": 82,
   "País": "Inglaterra",
   "Pos": "Lateral derecho",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Jorginho",
   "PG": 85,
   "RT": 54,
   "TR": 67,
   "PA": 86,
   "RE": 81,
   "DF": 73,
   "FI": 73,
   "País": "Italia",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Diogo Jota",
   "PG": 85,
   "RT": 85,
   "TR": 83,
   "PA": 75,
   "RE": 85,
   "DF": 57,
   "FI": 77,
   "País": "Portugal",
   "Pos": "Media punta",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Neymar Junior",
   "PG": 89,
   "RT": 87,
   "TR": 83,
   "PA": 85,
   "RE": 93,
   "DF": 37,
   "FI": 61,
   "País": "Brasil",
   "Pos": "Extremo izquierdo",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Vinicius Junior",
   "PG": 86,
   "RT": 95,
   "TR": 79,
   "PA": 74,
   "RE": 90,
   "DF": 29,
   "FI": 67,
   "País": "Brasil",
   "Pos": "Extremo izquierdo",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Harry Kane",
   "PG": 89,
   "RT": 68,
   "TR": 91,
   "PA": 83,
   "RE": 82,
   "DF": 47,
   "FI": 82,
   "País": "Inglaterra",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "N´golo Kanté",
   "PG": 89,
   "RT": 72,
   "TR": 66,
   "PA": 74,
   "RE": 81,
   "DF": 87,
   "FI": 82,
   "País": "Francia",
   "Pos": "Medio centro defensa",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Rick Karsdorp",
   "PG": 80,
   "RT": 82,
   "TR": 63,
   "PA": 74,
   "RE": 77,
   "DF": 75,
   "FI": 79,
   "País": "Países Bajos",
   "Pos": "Lateral derecho",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Joshua Kimmich",
   "PG": 89,
   "RT": 68,
   "TR": 72,
   "PA": 87,
   "RE": 84,
   "DF": 83,
   "FI": 79,
   "País": "Alemania",
   "Pos": "Medio centro defensa",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Flip Kostick",
   "PG": 85,
   "RT": 84,
   "TR": 78,
   "PA": 82,
   "RE": 82,
   "DF": 68,
   "FI": 80,
   "País": "Serbia",
   "Pos": "Medio izquierdo",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Kalidou Koulibaly",
   "PG": 87,
   "RT": 82,
   "TR": 33,
   "PA": 59,
   "RE": 68,
   "DF": 88,
   "FI": 85,
   "País": "Senegal",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Jules Kounde",
   "PG": 84,
   "RT": 84,
   "TR": 45,
   "PA": 64,
   "RE": 74,
   "DF": 85,
   "FI": 78,
   "País": "Francia",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Toni Kroos",
   "PG": 88,
   "RT": 53,
   "TR": 81,
   "PA": 90,
   "RE": 81,
   "DF": 71,
   "FI": 68,
   "País": "Alemania",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Aymeric Laporte",
   "PG": 86,
   "RT": 61,
   "TR": 50,
   "PA": 72,
   "RE": 69,
   "DF": 86,
   "FI": 79,
   "País": "España",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Robert Lewandowski",
   "PG": 91,
   "RT": 75,
   "TR": 91,
   "PA": 79,
   "RE": 86,
   "DF": 44,
   "FI": 83,
   "País": "Polonia",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Marcos Llorente",
   "PG": 84,
   "RT": 88,
   "TR": 79,
   "PA": 81,
   "RE": 82,
   "DF": 78,
   "FI": 81,
   "País": "España",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Hugo Lloris",
   "PG": 87,
   "RT": 88,
   "TR": 83,
   "PA": 74,
   "RE": 88,
   "DF": 61,
   "FI": 84,
   "País": "Francia",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Romelu Lukaku",
   "PG": 86,
   "RT": 80,
   "TR": 85,
   "PA": 75,
   "RE": 77,
   "DF": 38,
   "FI": 82,
   "País": "Bélgica",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Riyad Mahrez",
   "PG": 86,
   "RT": 80,
   "TR": 83,
   "PA": 81,
   "RE": 90,
   "DF": 38,
   "FI": 60,
   "País": "Argelia",
   "Pos": "Extremo derecho",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Mike Maignan",
   "PG": 87,
   "RT": 85,
   "TR": 82,
   "PA": 85,
   "RE": 89,
   "DF": 51,
   "FI": 85,
   "País": "Francia",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Sadio Mané",
   "PG": 89,
   "RT": 90,
   "TR": 83,
   "PA": 80,
   "RE": 88,
   "DF": 44,
   "FI": 77,
   "País": "Senegal",
   "Pos": "Medio izquierdo",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Marquinhos",
   "PG": 88,
   "RT": 79,
   "TR": 56,
   "PA": 75,
   "RE": 74,
   "DF": 89,
   "FI": 80,
   "País": "Brasil",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Lautaro Martínez",
   "PG": 86,
   "RT": 83,
   "TR": 83,
   "PA": 72,
   "RE": 85,
   "DF": 48,
   "FI": 84,
   "País": "Argentina",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Kylian Mbappe",
   "PG": 91,
   "RT": 75,
   "TR": 91,
   "PA": 79,
   "RE": 86,
   "DF": 44,
   "FI": 83,
   "País": "Francia",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Edward Mendy",
   "PG": 86,
   "RT": 84,
   "TR": 82,
   "PA": 81,
   "RE": 88,
   "DF": 34,
   "FI": 85,
   "País": "Senegal",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Lionel Messi",
   "PG": 91,
   "RT": 81,
   "TR": 89,
   "PA": 90,
   "RE": 94,
   "DF": 34,
   "FI": 64,
   "País": "Argentina",
   "Pos": "Extremo derecho",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Sergej Milinkovic-Savic",
   "PG": 86,
   "RT": 68,
   "TR": 80,
   "PA": 82,
   "RE": 82,
   "DF": 79,
   "FI": 86,
   "País": "Serbia",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Heung Min Son",
   "PG": 89,
   "RT": 88,
   "TR": 89,
   "PA": 82,
   "RE": 86,
   "DF": 42,
   "FI": 69,
   "País": "Corea del Sur",
   "Pos": "Extremo izquierdo",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Luka Modric",
   "PG": 88,
   "RT": 73,
   "TR": 76,
   "PA": 89,
   "RE": 88,
   "DF": 72,
   "FI": 66,
   "País": "Croacia",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Gerard Moreno",
   "PG": 85,
   "RT": 78,
   "TR": 86,
   "PA": 77,
   "RE": 83,
   "DF": 46,
   "FI": 72,
   "País": "España",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Mason Mount",
   "PG": 84,
   "RT": 74,
   "TR": 81,
   "PA": 85,
   "RE": 82,
   "DF": 55,
   "FI": 67,
   "País": "Inglaterra",
   "Pos": "Medio centro of",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Thomas Müller",
   "PG": 87,
   "RT": 69,
   "TR": 84,
   "PA": 83,
   "RE": 80,
   "DF": 56,
   "FI": 71,
   "País": "Alemania",
   "Pos": "Medio centro defensa",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Luis Muriel",
   "PG": 82,
   "RT": 89,
   "TR": 83,
   "PA": 74,
   "RE": 86,
   "DF": 27,
   "FI": 67,
   "País": "Colombia",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Keylor Navas",
   "PG": 88,
   "RT": 89,
   "TR": 84,
   "PA": 75,
   "RE": 89,
   "DF": 54,
   "FI": 87,
   "País": "Costa Rica",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Manuel Neuer",
   "PG": 90,
   "RT": 87,
   "TR": 88,
   "PA": 91,
   "RE": 88,
   "DF": 56,
   "FI": 91,
   "País": "Alemania",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Christopher Nkunku",
   "PG": 86,
   "RT": 88,
   "TR": 81,
   "PA": 83,
   "RE": 88,
   "DF": 65,
   "FI": 66,
   "País": "Francia",
   "Pos": "Media punta",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Jan Oblak",
   "PG": 89,
   "RT": 86,
   "TR": 90,
   "PA": 78,
   "RE": 89,
   "DF": 49,
   "FI": 87,
   "País": "Eslovenia",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Martin Odegaard",
   "PG": 84,
   "RT": 76,
   "TR": 75,
   "PA": 86,
   "RE": 84,
   "DF": 58,
   "FI": 63,
   "País": "Noruega",
   "Pos": "Medio centro of",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Parejo",
   "PG": 86,
   "RT": 50,
   "TR": 83,
   "PA": 90,
   "RE": 80,
   "DF": 71,
   "FI": 68,
   "País": "España",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Pedri",
   "PG": 85,
   "RT": 79,
   "TR": 67,
   "PA": 81,
   "RE": 87,
   "DF": 68,
   "FI": 73,
   "País": "España",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Paul Pogba",
   "PG": 85,
   "RT": 67,
   "TR": 80,
   "PA": 85,
   "RE": 85,
   "DF": 62,
   "FI": 80,
   "País": "Francia",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Pedro Porro",
   "PG": 81,
   "RT": 82,
   "TR": 71,
   "PA": 75,
   "RE": 80,
   "DF": 75,
   "FI": 78,
   "País": "España",
   "Pos": "Lateral derecho",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Christian Pulisic",
   "PG": 82,
   "RT": 87,
   "TR": 71,
   "PA": 73,
   "RE": 86,
   "DF": 37,
   "FI": 59,
   "País": "Estados Unidos",
   "Pos": "Extremo izquierdo",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Marcus Rashford",
   "PG": 81,
   "RT": 87,
   "TR": 82,
   "PA": 75,
   "RE": 81,
   "DF": 41,
   "FI": 71,
   "País": "Inglaterra",
   "Pos": "Extremo izquierdo",
   "Cat": "Delantero"
  },
  {
   "Nombre": "David Raum",
   "PG": 81,
   "RT": 87,
   "TR": 59,
   "PA": 77,
   "RE": 78,
   "DF": 71,
   "FI": 77,
   "País": "Alemania",
   "Pos": "Lateral izquierdo",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Marco Reus",
   "PG": 85,
   "RT": 70,
   "TR": 84,
   "PA": 84,
   "RE": 85,
   "DF": 53,
   "FI": 65,
   "País": "Alemania",
   "Pos": "Medio centro of",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Declan Rice",
   "PG": 84,
   "RT": 71,
   "TR": 64,
   "PA": 74,
   "RE": 76,
   "DF": 82,
   "FI": 83,
   "País": "Inglaterra",
   "Pos": "Medio centro defensa",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Andrew Robertson",
   "PG": 87,
   "RT": 80,
   "TR": 61,
   "PA": 81,
   "RE": 81,
   "DF": 82,
   "FI": 76,
   "País": "Escocia",
   "Pos": "Defensa izquierdo",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Rodri",
   "PG": 87,
   "RT": 58,
   "TR": 72,
   "PA": 78,
   "RE": 79,
   "DF": 83,
   "FI": 84,
   "País": "España",
   "Pos": "Medio centro defensa",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Cristiano Ronaldo",
   "PG": 90,
   "RT": 81,
   "TR": 92,
   "PA": 78,
   "RE": 85,
   "DF": 34,
   "FI": 75,
   "País": "Portugal",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Antonio Rudiger",
   "PG": 87,
   "RT": 82,
   "TR": 53,
   "PA": 71,
   "RE": 67,
   "DF": 86,
   "FI": 85,
   "País": "Alemania",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Mohamed Salah",
   "PG": 90,
   "RT": 90,
   "TR": 89,
   "PA": 82,
   "RE": 90,
   "DF": 45,
   "FI": 75,
   "País": "Egipto",
   "Pos": "Extremo derecho",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Patrick Schick",
   "PG": 85,
   "RT": 78,
   "TR": 83,
   "PA": 71,
   "RE": 83,
   "DF": 36,
   "FI": 76,
   "País": "República Checa",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Bernardo Silva",
   "PG": 88,
   "RT": 77,
   "TR": 78,
   "PA": 84,
   "RE": 92,
   "DF": 61,
   "FI": 68,
   "País": "Portugal",
   "Pos": "Medio centro of",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Thiago Silva",
   "PG": 86,
   "RT": 49,
   "TR": 54,
   "PA": 73,
   "RE": 72,
   "DF": 87,
   "FI": 76,
   "País": "Brasil",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Milan Skriniar",
   "PG": 86,
   "RT": 78,
   "TR": 41,
   "PA": 57,
   "RE": 69,
   "DF": 88,
   "FI": 86,
   "País": "Eslovaquia",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Yann Sommer",
   "PG": 85,
   "RT": 78,
   "TR": 81,
   "PA": 82,
   "RE": 90,
   "DF": 50,
   "FI": 86,
   "País": "Suiza",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Leonardo Spinazzola",
   "PG": 82,
   "RT": 91,
   "TR": 64,
   "PA": 73,
   "RE": 80,
   "DF": 78,
   "FI": 69,
   "País": "Italia",
   "Pos": "Lateral izquierdo",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Raheem Sterling",
   "PG": 86,
   "RT": 90,
   "TR": 80,
   "PA": 78,
   "RE": 86,
   "DF": 45,
   "FI": 67,
   "País": "Inglaterra",
   "Pos": "Extremo izquierdo",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Nicklas Sule",
   "PG": 85,
   "RT": 71,
   "TR": 84,
   "PA": 66,
   "RE": 59,
   "DF": 85,
   "FI": 83,
   "País": "Alemania",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Wojciech Szczesny",
   "PG": 86,
   "RT": 86,
   "TR": 81,
   "PA": 73,
   "RE": 87,
   "DF": 49,
   "FI": 86,
   "País": "Polonia",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Marc-Andre Terstegen",
   "PG": 88,
   "RT": 86,
   "TR": 85,
   "PA": 87,
   "RE": 90,
   "DF": 47,
   "FI": 85,
   "País": "Alemania",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Thiago",
   "PG": 86,
   "RT": 61,
   "TR": 72,
   "PA": 87,
   "RE": 90,
   "DF": 72,
   "FI": 69,
   "País": "España",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Kevin Trapp",
   "PG": 86,
   "RT": 84,
   "TR": 82,
   "PA": 79,
   "RE": 87,
   "DF": 46,
   "FI": 85,
   "País": "Alemania",
   "Pos": "Portero",
   "Cat": "Portero"
  },
  {
   "Nombre": "Virgil Van Dijk",
   "PG": 90,
   "RT": 81,
   "TR": 60,
   "PA": 71,
   "RE": 72,
   "DF": 91,
   "FI": 86,
   "País": "Países Bajos",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Jamie Vardy",
   "PG": 85,
   "RT": 84,
   "TR": 84,
   "PA": 70,
   "RE": 79,
   "DF": 52,
   "FI": 72,
   "País": "Inglaterra",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Marco Verratti",
   "PG": 87,
   "RT": 60,
   "TR": 61,
   "PA": 87,
   "RE": 91,
   "DF": 79,
   "FI": 66,
   "País": "Italia",
   "Pos": "Medio centro",
   "Cat": "Medio campo"
  },
  {
   "Nombre": "Dusan Vlahovic",
   "PG": 84,
   "RT": 80,
   "TR": 85,
   "PA": 66,
   "RE": 78,
   "DF": 28,
   "FI": 79,
   "País": "Serbia",
   "Pos": "Delantero a centro",
   "Cat": "Delantero"
  },
  {
   "Nombre": "Kyle Walker",
   "PG": 85,
   "RT": 91,
   "TR": 63,
   "PA": 77,
   "RE": 78,
   "DF": 80,
   "FI": 82,
   "País": "Inglaterra",
   "Pos": "Defensa derecho",
   "Cat": "Defensa"
  },
  {
   "Nombre": "Duván Zapata",
   "PG": 83,
   "RT": 78,
   "TR": 82,
   "PA": 63,
   "RE": 79,
   "DF": 35,
   "FI": 85,
   "País": "Colombia",
   "Pos": "Defensa central",
   "Cat": "Defensa"
  }
 ]

 let porcentajePoblacionInicial = 40;
 
 //Función objetivo jugador.PG +jugador.RT +jugador.TR +jugador.PA +jugador.RE +jugador.DF +jugador.FI/7

//SELECCIONAR POBLACIÓN
 let poblacionSeleccionada = seleccionarPorcentaje(listadoJugadores, porcentajePoblacionInicial)
 console.log(`El tamaño de la población seleccionada es ${poblacionSeleccionada.length}`)
 //console.log('Listado de seleccionados', poblacionSeleccionada)  

//  DETERMINAR VA DE LA POBLACIÓN
 poblacionSeleccionada=encontrarVA(poblacionSeleccionada);
 //console.log(poblacionSeleccionada)


function encontrarVA(jugadores) {
let valorAdaptacion=0
  jugadores.forEach((jugador, index) => {
    valorAdaptacion=(jugador.PG +jugador.RT +jugador.TR +jugador.PA +jugador.RE +jugador.DF +jugador.FI)/7
    jugadores[index].VA = valorAdaptacion
  });

  return jugadores
}


function seleccionarPorcentaje(array, porcentaje) {
  const cantidadSeleccionar = Math.ceil(array.length * (porcentaje / 100)); // Calcula la cantidad de objetos a seleccionar
  const arrayCopia = [...array]; // Copia el array original para no modificarlo
  const seleccionados = [];

  for (let i = 0; i < cantidadSeleccionar; i++) {
      const indiceAleatorio = Math.floor(Math.random() * arrayCopia.length);
      seleccionados.push(arrayCopia.splice(indiceAleatorio, 1)[0]); // Extrae y elimina el objeto seleccionado
  }

  return seleccionados;
}

function estadisticasSobrePromedio(jugador, promedios) {
  let resultado = {};

  for (let estadistica in promedios) {
    resultado[estadistica] = jugador[estadistica] > promedios[estadistica];
  }

  return resultado;
}



function determinarPosicionCategoria(jugador) {
  let Pos = "Sin posición definida";
  let Cat = "Sin categoría definida";

  // Reglas basadas en estadísticas
  if (jugador.DF > 80 && jugador.FI > 80) {
    Pos = "Defensa";
    Cat = "Defensa";
  } else if (jugador.TR > 80 && jugador.RE > 80) {
    Pos = "Delantero";
    if (jugador.RE >= 90) {
      Cat = "Extremo derecho"; 
    } else {
      Cat = "Extremo izquierdo";
    }
    Cat = "Delantero";
  } else if (jugador.PA > 80 && jugador.RT > 80) {
    Pos = "Mediocampo";
    if (jugador.TR > jugador.DF) {
      Cat = "Medio centro of"; 
    } else {
      Cat = "Medio centro";
    }
  } else if (jugador.PG > 85) { // Jugadores con alto PG podrían ser Porteros
    Pos = "Portero";
    Cat = "Portero";
  }

  return { Pos, Cat };
}


//  let valorAdaptacionGlobal = encontrarVAGlobal(listadoJugadores)
//  console.log(`El valor de adaptación es: ${valorAdaptacion}`) 

// function encontrarVAGlobal(jugadores) {
//   let suma = 0;

//   jugadores.forEach(jugador => {
//     let sumatoriaEstadisticas=jugador.PG +jugador.RT +jugador.TR +jugador.PA +jugador.RE +jugador.DF +jugador.FI
//     suma += sumatoriaEstadisticas;
//   });

//   return suma / (jugadores.length*7)
// }