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


const factorPrecision = 0.0001;

// Función objetivo
// f(x)=media ponderada de (PG, TR, RE)
// f(x)=0.4⋅PG+0.3⋅TR+0.3⋅RE

// Encontrar Máximo y mínimo
let { max, min } = encontrarMaxMin(listadoJugadores);
function encontrarMaxMin(array) {
  // Inicializamos las variables para el valor máximo y mínimo
  let max = -Infinity;
  let min = Infinity;

  // Recorremos el array de objetos
  array.forEach(obj => {
    // Extraemos los valores de las propiedades PG, TR y RE
    const valores = [obj.PG, obj.TR, obj.RE];

    // Comprobamos cada valor para actualizar el máximo y el mínimo
    valores.forEach(valor => {
      if (valor > max) max = valor;
      if (valor < min) min = valor;
    });
  });

  // Devolvemos el valor máximo y mínimo
  return { max, min };
}

// Determinar número de cromosomas
function calcularCantidadCromosomas(b, a, c) {
  // Calculamos el valor de la expresión
  const valor = 1 + ((b - a) / c);

  // Calculamos el logaritmo en base 2
  const n = Math.log(valor) / Math.log(2);

  return Math.round(n);
}

let cantidadCromosomas = calcularCantidadCromosomas(max, min, factorPrecision)


//Crear cromosomas y añadirlos al objeto
function decimalABinario(decimal) {
  // Convertimos el número decimal a binario
  let binario = decimal.toString(2);

  // Si la longitud del binario es menor que el número de bits, agregamos ceros a la izquierda
  while (binario.length < cantidadCromosomas) {
    binario = '0' + binario;
  }

  // Si el binario tiene más bits de los que queremos, lo truncamos
  if (binario.length > cantidadCromosomas) {
    binario = binario.slice(-cantidadCromosomas);
  }

  return binario;
}

function agregarGen(listadoJugadores) {
  listadoJugadores.forEach((jugador, index) => {
    listadoJugadores[index].id = index
    listadoJugadores[index].gen1 = decimalABinario(jugador.PG)
    listadoJugadores[index].gen2 = decimalABinario(jugador.TR)
    listadoJugadores[index].gen3 = decimalABinario(jugador.RE)
    listadoJugadores[index].genCompleto = listadoJugadores[index].gen1 + listadoJugadores[index].gen2 + listadoJugadores[index].gen3

  })
  return listadoJugadores;
}

let jugadoresActualizado = agregarGen(listadoJugadores)


// ####### INICIO DE LOS CICLOS
function crearGeneraciones() {

  for (let i = 0; i < 4; i++) {
    if (listadoJugadores.length===1) {
      return
    }
    agregarValorAdaptacion()

    // GENERAR VALOR DE ADAPTACIÓN
    function agregarValorAdaptacion() {
      listadoJugadores.forEach((jugador, index) => {
        listadoJugadores[index].VA = (binarioADecimal(jugador.gen1) * 0.4) + (binarioADecimal(jugador.gen2) * 0.3) + (binarioADecimal(jugador.gen3) * 0.3)
      })
    }
    function binarioADecimal(binario) {
      // Usamos parseInt con base 2 para convertir de binario a decimal
      const decimal = parseInt(binario, 2);

      return decimal;
    }

    // GENERAR LA SUMA DE TODOS LOS VALORES DE ADAPTACIÓN PARA CALCULAR LA PROBABILIDAD
    let acumuladoProbabilidad = listadoJugadores.reduce((acumulador, jugador) => acumulador + jugador.VA, 0)

    // GENERAR PROBABILIDAD Y AGREGARLA AL ARRAY DE JUGADORES
    function agregarValorProbabilidad() {
      let Q = 0;
      listadoJugadores.forEach((jugador, index) => {
        listadoJugadores[index].probabilidad = jugador.VA / acumuladoProbabilidad
        Q += listadoJugadores[index].probabilidad;
        listadoJugadores[index].Q = Q
      })
    }
    agregarValorProbabilidad()


    let w = parseFloat(Math.random().toFixed(2));

    let tamanioGeneracion = Math.round(listadoJugadores.length * 0.4)


    // SELECCIONAR A LOS QUE VAN A SER PADRES
    let seleccion = []
    for (let i = 0; i < tamanioGeneracion; i++) {
      let fi = (w + (i + 1) - 1) / tamanioGeneracion
      // console.log(fi)
      let Q0 = 0
      let Q1 = 0
      listadoJugadores.forEach((jugador, index) => {
        Q1 = jugador.Q;
        if (fi >= Q0 && fi < Q1) {
          seleccion.push(listadoJugadores[index])
        }
        Q0 = jugador.Q
      })
    }
    // function mostrarSeleccionados(seleccionados) {
    //   console.log("Jugadores seleccionados para el cruce:");
    //   console.table(
    //     seleccionados.map((jugador) => ({
    //       id: jugador.id,
    //       nombre: jugador.Nombre || "Desconocido",
    //       genCompleto: jugador.genCompleto,
    //     }))
    //   );
    // }

    let hijosGenerados = []
    //CRUCE DE LOS PADRES PARA OBTENER A LOS HIJOS
    function cruzar(array) {
      const resultado = [];

      // Recorremos el array en pasos de 2 elementos
      for (let i = 0; i < array.length; i += 2) {
        // Aseguramos que tenemos un par de elementos
        const genCompleto0 = array[i] ? array[i].genCompleto : null
        const genCompleto1 = array[i + 1] ? array[i + 1].genCompleto : null; // Verificamos si existe un par

        // Si encontramos un par, concatenamos las mitades

        if (genCompleto1) {
          // Primera concatenación: primera mitad de genCompleto0 + segunda mitad de genCompleto1
          const mitad1 = genCompleto0.slice(0, genCompleto0.length / 2); // Primera mitad del objeto i
          const mitad2 = genCompleto1.slice(genCompleto1.length / 2); // Segunda mitad del objeto i+1

          const nuevoGenCompleto1 = mitad1 + mitad2;

          const tamanoParte = Math.floor(nuevoGenCompleto1.length / 3);
          const gen1_1 = nuevoGenCompleto1.slice(0, tamanoParte)
          const gen2_1 = nuevoGenCompleto1.slice(tamanoParte, tamanoParte * 2)
          const gen3_1 = nuevoGenCompleto1.slice(tamanoParte * 2)
          const PG1 = binarioADecimal(nuevoGenCompleto1.slice(0, tamanoParte));
          const TR1 = binarioADecimal(nuevoGenCompleto1.slice(tamanoParte, tamanoParte * 2));
          const RE1 = binarioADecimal(nuevoGenCompleto1.slice(tamanoParte * 2));

          // Creamos un nuevo objeto con el GenCompleto concatenado
          const nuevoObjeto1 = {
            id: resultado.length + 1, // Asignamos un nuevo ID
            genCompleto: nuevoGenCompleto1,
            PG: PG1,
            TR: TR1,
            RE: RE1,
            gen1: gen1_1,
            gen2: gen2_1,
            gen3: gen3_1
          };


          // Segunda concatenación: segunda mitad de genCompleto0 + primera mitad de genCompleto1
          const mitad3 = genCompleto0.slice(genCompleto0.length / 2); // Segunda mitad del objeto i
          const mitad4 = genCompleto1.slice(0, genCompleto1.length / 2); // Primera mitad del objeto i+1

          const nuevoGenCompleto2 = mitad4 + mitad3;

          const gen1_2 = nuevoGenCompleto2.slice(0, tamanoParte)
          const gen2_2 = nuevoGenCompleto2.slice(tamanoParte, tamanoParte * 2)
          const gen3_2 = nuevoGenCompleto2.slice(tamanoParte * 2)
          const PG2 = binarioADecimal(nuevoGenCompleto2.slice(0, tamanoParte));
          const TR2 = binarioADecimal(nuevoGenCompleto2.slice(tamanoParte, tamanoParte * 2));
          const RE2 = binarioADecimal(nuevoGenCompleto2.slice(tamanoParte * 2));

          // Creamos otro nuevo objeto con el GenCompleto concatenado
          const nuevoObjeto2 = {
            id: resultado.length + 2, // Asignamos un nuevo ID
            genCompleto: nuevoGenCompleto2,
            PG: PG2,
            TR: TR2,
            RE: RE2,
            gen1: gen1_2,
            gen2: gen2_2,
            gen3: gen3_2
          };

          // Agregamos los nuevos objetos al array
          listadoJugadores.push(nuevoObjeto1, nuevoObjeto2);
        }
        hijosGenerados = [...resultado]
        
      }
      return [...listadoJugadores, ...resultado];
    }
    

    listadoJugadores = cruzar(seleccion)
    // NO BORRAR
    agregarValorAdaptacion()

    // console.log(listadoJugadores[listadoJugadores.length-1])



    // MUTACION
    function aplicarMutacion(originalJugadores) {
      // Crear una copia profunda de los jugadores para evitar problemas de referencia
      let jugadores = JSON.parse(JSON.stringify(originalJugadores));
      const tasaMutacion = 0.2; // 20% de la población para posible mutación
      const probabilidadCambio = 0.4; // w <= 0.4 para aplicar complemento

      // Calcular el número de individuos que pueden mutar
      const cantidadMutaciones = Math.round(jugadores.length * tasaMutacion);

      // Seleccionar aleatoriamente los individuos que pueden mutar
      const indicesParaMutacion = new Set();
      while (indicesParaMutacion.size < cantidadMutaciones) {
        const indiceAleatorio = Math.floor(Math.random() * jugadores.length);
        indicesParaMutacion.add(indiceAleatorio);
      }

      // Aplicar mutación a los individuos seleccionados
      indicesParaMutacion.forEach((indice) => {
        const jugador = jugadores[indice];
        const w = Math.random(); // Generar probabilidad para decidir mutación

        if (w <= probabilidadCambio) {
          // Convertimos el genCompleto a un array de bits para mutarlo
          let genArray = jugador.genCompleto.split('');

          // Cambiar a complemento los bits en las posiciones c1, c3, c5, c7
          [0, 2, 4, 6].forEach((index) => {
            if (index < genArray.length) {
              // Complemento: '0' -> '1', '1' -> '0'
              genArray[index] = genArray[index] === '0' ? '1' : '0';
            }
          });

          // Reconstruimos el gen mutado y lo reasignamos al jugador
          jugador.genCompleto = genArray.join('');
        }
      });

      return jugadores;
    }


    // Aplicar mutación
    let jugadoresMutados = aplicarMutacion(listadoJugadores);

    // Verificar resultados
    // console.log('Jugadores después de mutación:', jugadoresActualizado.length);


    // COMPROBAR LA POBLACIÓN MUTADA
    // function compararPoblaciones(listadoJugadores, poblacionMutada) {
    //   if (listadoJugadores.length !== poblacionMutada.length) {
    //     console.error("Las poblaciones tienen tamaños diferentes.");
    //     return;
    //   }

    //   const diferencias = [];

    //   for (let i = 0; i < listadoJugadores.length; i++) {
    //     const original = listadoJugadores[i];
    //     const mutada = poblacionMutada[i];

    //     if (original.genCompleto !== mutada.genCompleto) {
    //       diferencias.push({
    //         id: original.id,
    //         nombre: original.Nombre || "Desconocido",
    //         genOriginal: original.genCompleto,
    //         genMutado: mutada.genCompleto,
    //       });
    //     }
    //   }

    //   if (diferencias.length === 0) {
    //     console.log("No se encontraron diferencias entre la población original y la población mutada.");
    //   } else {
    //     console.log("Diferencias encontradas entre la población original y la población mutada:");
    //     console.table(diferencias);
    //   }
    // }

    // Uso de la función
    // compararPoblaciones(listadoJugadores, jugadoresMutados); //(poblacionInicial, poblacionMutada)

  
    // console.log(listadoJugadores.length)
    // listadoJugadores = jugadoresMutados**********************************

    // compararPoblaciones(listadoJugadores, jugadoresMutados); //(poblacionInicial, poblacionMutada)

   




    // REEMPLAZO

    agregarValorAdaptacion();


    function eliminarPeorAdaptados(listadoJugadores, cantidadHijos) {
      const h = 0.8;
    
      // Calcular la media de los valores de adaptación (f)
      const sumaAdaptacion = listadoJugadores.reduce((suma, jugador) => suma + jugador.VA, 0);
      const mediaAdaptacion = sumaAdaptacion / listadoJugadores.length;
    
      // Calcular el umbral para eliminación
      const umbral = h * mediaAdaptacion;
    
      // Filtrar los jugadores con VA mayores al umbral
      let jugadoresRestantes = listadoJugadores.filter(jugador => jugador.VA > umbral);
    
      // Si todavía hay más jugadores de los necesarios, eliminar los peor adaptados
      if (jugadoresRestantes.length > listadoJugadores.length - cantidadHijos) {
        // Ordenar por VA de menor a mayor y eliminar los más débiles
        jugadoresRestantes = jugadoresRestantes
          .sort((a, b) => a.VA - b.VA)
          .slice(0, listadoJugadores.length - cantidadHijos);
      }
    
      return jugadoresRestantes;
    }

    // listadoJugadores = eliminarPeorAdaptados(listadoJugadores, (listadoJugadores.length*0.4)); ************************

  console.log('Cantidad de jugadores: ', listadoJugadores.length)
  console.log('Estadisticas último jugador ', listadoJugadores[listadoJugadores.length-1])

  function mostrarPoblacion(poblacion) {
    console.table(
      poblacion.map(jugador => ({
        nombre: jugador.Nombre,
        VA: jugador.VA,
        // genCompleto: jugador.genCompleto,
        gen1: jugador.gen1,
        gen2: jugador.gen2,
        gen3: jugador.gen3,
        PG: jugador.PG,
        TR: jugador.TR,
        RE: jugador.RE,
      }))
    );
  }
  mostrarPoblacion(listadoJugadores);

  }
  // console.log(listadoJugadores.length)
}


//new
crearGeneraciones()