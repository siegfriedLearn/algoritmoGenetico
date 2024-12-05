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
        "Pais": "Argentina",
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
        "Pais": "Austria",
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
        "Pais": "España",
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
        "Pais": "Inglaterra",
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
        "Pais": "Brasil",
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
        "Pais": "España",
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
        "Pais": "España",
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
        "Pais": "Gabón",
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
        "Pais": "Italia",
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
        "Pais": "Inglaterra",
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
        "Pais": "Francia",
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
        "Pais": "Francia",
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
        "Pais": "Croacia",
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
        "Pais": "España",
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
        "Pais": "Portugal",
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
        "Pais": "Bélgica",
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
        "Pais": "Brasil",
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
        "Pais": "Inglaterra",
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
        "Pais": "Francia",
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
        "Pais": "Bélgica",
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
        "Pais": "Colombia",
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
        "Pais": "Bélgica",
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
        "Pais": "Paises Bajos",
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
        "Pais": "Paises Bajos",
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
        "Pais": "Paises Bajos",
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
        "Pais": "Portugal",
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
        "Pais": "Colombia",
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
        "Pais": "Italia",
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
        "Pais": "Paises Bajos",
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
        "Pais": "Argentina",
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
        "Pais": "Brasil",
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
        "Pais": "Brasil",
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
        "Pais": "Francia",
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
        "Pais": "Portugal",
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
        "Pais": "Portugal",
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
        "Pais": "Inglaterra",
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
        "Pais": "España",
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
        "Pais": "Alemania",
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
        "Pais": "Alemania",
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
        "Pais": "Alemania",
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
        "Pais": "Inglaterra",
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
        "Pais": "Hungría",
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
        "Pais": "Alemania",
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
        "Pais": "Noruega",
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
        "Pais": "Marruecos",
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
        "Pais": "Paises Bajos",
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
        "Pais": "Francia",
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
        "Pais": "Italia",
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
        "Pais": "Inglaterra",
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
        "Pais": "Italia",
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
        "Pais": "Portugal",
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
        "Pais": "Brasil",
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
        "Pais": "Brasil",
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
        "Pais": "Inglaterra",
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
        "Pais": "Francia",
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
        "Pais": "Paises Bajos",
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
        "Pais": "Alemania",
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
        "Pais": "Serbia",
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
        "Pais": "Senegal",
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
        "Pais": "Francia",
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
        "Pais": "Alemania",
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
        "Pais": "España",
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
        "Pais": "Polonia",
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
        "Pais": "España",
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
        "Pais": "Francia",
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
        "Pais": "Bélgica",
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
        "Pais": "Argelia",
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
        "Pais": "Francia",
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
        "Pais": "Senegal",
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
        "Pais": "Brasil",
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
        "Pais": "Argentina",
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
        "Pais": "Francia",
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
        "Pais": "Senegal",
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
        "Pais": "Argentina",
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
        "Pais": "Serbia",
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
        "Pais": "Corea del Sur",
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
        "Pais": "Croacia",
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
        "Pais": "España",
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
        "Pais": "Inglaterra",
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
        "Pais": "Alemania",
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
        "Pais": "Colombia",
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
        "Pais": "Costa Rica",
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
        "Pais": "Alemania",
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
        "Pais": "Francia",
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
        "Pais": "Eslovenia",
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
        "Pais": "Noruega",
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
        "Pais": "España",
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
        "Pais": "España",
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
        "Pais": "Francia",
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
        "Pais": "España",
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
        "Pais": "Estados Unidos",
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
        "Pais": "Inglaterra",
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
        "Pais": "Alemania",
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
        "Pais": "Alemania",
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
        "Pais": "Inglaterra",
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
        "Pais": "Escocia",
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
        "Pais": "España",
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
        "Pais": "Portugal",
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
        "Pais": "Alemania",
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
        "Pais": "Egipto",
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
        "Pais": "República Checa",
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
        "Pais": "Portugal",
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
        "Pais": "Brasil",
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
        "Pais": "Eslovaquia",
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
        "Pais": "Suiza",
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
        "Pais": "Italia",
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
        "Pais": "Inglaterra",
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
        "Pais": "Alemania",
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
        "Pais": "Polonia",
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
        "Pais": "Alemania",
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
        "Pais": "España",
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
        "Pais": "Alemania",
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
        "Pais": "Paises Bajos",
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
        "Pais": "Inglaterra",
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
        "Pais": "Italia",
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
        "Pais": "Serbia",
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
        "Pais": "Inglaterra",
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
        "Pais": "Colombia",
        "Pos": "Defensa central",
        "Cat": "Defensa"
    }
]

const factorPrecision = 0.0001;
const tamanioPoblacion = 40;
let poblacionCreada = [];
const cantidadGeneraciones = 20;

// Función objetivo
// f(x)=media ponderada de (PG, TR, RE ...)
// f(x)=0.05*PG + 0.1*RT + 0.2*TR + 0.1*PA + 0.1*RE + 0.05*DF + 0.1*FI + 0.1* Pais + 0.2* Pos

function calcularVA(listadoJugadores) {
    listadoJugadores.forEach((jugador, index) => {
        let { PG, RT, TR, PA, RE, DF, FI, Pais, Pos } = jugador
        if (Pais === 'Francia' || Pais === 'Colombia') {
            Pais = 40;
        } else {
            Pais = 0;
        }
        if (Pos === 'Extremo izquierdo') {
            Pos = 80;
        }
        else {
            Pos = 0;
        }
        // console.log(PG,RT,TR,PA, RE, DF, FI, Pais, Pos)
        let VA = 0.05*PG + 0.1*RT + 0.2*TR + 0.1*PA + 0.1*RE + 0.05*DF + 0.1*FI + 0.1* Pais + 0.2* Pos
        listadoJugadores[index].VA = Number(VA.toFixed(2))
    })
    return listadoJugadores;
}
calcularVA(listadoJugadores)
//   console.log(listadoJugadores[0])


function encontrarMaxMin(array) {
    // Inicializamos las variables para el valor máximo y mínimo
    let max = -Infinity;
    let min = Infinity;

    // Recorremos el array de objetos
    array.forEach(obj => {
        // Extraemos los valores de las propiedades PG, TR y RE
        const valores = [obj.VA];

        // Comprobamos cada valor para actualizar el máximo y el mínimo
        valores.forEach(valor => {
            if (valor > max) max = valor;
            if (valor < min) min = valor;
        });
    });

    // Devolvemos el valor máximo y mínimo
    return { max, min };
}

let { max, min } = encontrarMaxMin(listadoJugadores);
// console.log("Valor mínimo de VA:", min);
// console.log("Valor máximo de VA:", max);

// Determinar número de cromosomas
function calcularCantidadCromosomas(max, min, c) {
    // Calculamos el valor de la expresión
    const valor = 1 + ((max - min) / c);

    // Calculamos el logaritmo en base 2
    const n = Math.log(valor) / Math.log(2);

    return Math.round(n);
}
let cantidadCromosomas = calcularCantidadCromosomas(max, min, factorPrecision)
//   console.log('Cantidad de cromosomas',cantidadCromosomas)


// CREAR POBLACIÓN

function crearPoblacion(tamanioPoblacion, cantidadCromosomas) {
    for (let index = 0; index < tamanioPoblacion; index++) {
        let cromosomas = generateBinaryArray(cantidadCromosomas);
        let VA = calcularX(min, max, cromosomas)
        poblacionCreada.push({ "gen": cromosomas, "VA": VA })

    }
}



function generateBinaryArray(length) {
    const binaryArray = [];

    for (let i = 0; i < length; i++) {
        const w = Math.random(); // Generar un valor aleatorio entre 0 y 1
        const binaryValue = w <= 0.5 ? 0 : 1; // Condición para determinar el valor binario
        binaryArray.push(binaryValue); // Agregar el valor al arreglo
    }

    return binaryArray;
}

crearPoblacion(tamanioPoblacion, cantidadCromosomas)
// console.log(poblacionCreada[39])
// console.table(poblacionCreada[39])


// FUNCIÓN X
function calcularX(min, max, coeficientes) {
    const n = coeficientes.length; // Número de coeficientes
    let sumaPonderada = 0;

    // Calcular la suma ponderada
    for (let k = 0; k < n; k++) {
        sumaPonderada += Math.pow(2, k) * coeficientes[n - k - 1];
    }

    // Calcular el valor de x
    const x = min + ((max - min) / (Math.pow(2, n) - 1)) * sumaPonderada;

    return Number(x.toFixed(2));
}

// Ejemplo:
// const coeficientes = [1, 0, 1, 1]; // Coeficientes binarios

// const result = calcularX(min, max, coeficientes);
// console.log("El valor calculado de x es:", result);


// CREAR GENERACIONES
function crearGeneraciones(poblacionCreada, cantidadGeneraciones) {

    for (let i = 0; i < cantidadGeneraciones; i++) {
        poblacionCreada[0]
        if (poblacionCreada.length === 1) {
            return
        }

        // INICIO PROCESO DE SELECCION
        let acumuladoProbabilidad = poblacionCreada.reduce((acumulador, jugador) => acumulador + jugador.VA, 0);
        // console.log(acumuladoProbabilidad)

        function agregarValorProbabilidad() {
            let Q = 0;
            poblacionCreada.forEach((jugador, index) => {
                // console.log(jugador.VA / acumuladoProbabilidad)
                poblacionCreada[index].probabilidad = jugador.VA / acumuladoProbabilidad
                Q += poblacionCreada[index].probabilidad;
                poblacionCreada[index].Q = Q
            })
        }
        agregarValorProbabilidad()

        let w = parseFloat(Math.random().toFixed(2));
        let tamanioSeleccion = Math.round(poblacionCreada.length * 0.4)

        // SELECCIONAR A LOS QUE VAN A SER PADRES
        let seleccion = []
        for (let i = 0; i < tamanioSeleccion; i++) {
            let fi = (w + (i + 1) - 1) / tamanioSeleccion
            // console.log(fi)
            let Q0 = 0
            let Q1 = 0
            poblacionCreada.forEach((jugador, index) => {
                Q1 = jugador.Q;
                if (fi >= Q0 && fi < Q1) {
                    seleccion.push(poblacionCreada[index])
                }
                Q0 = jugador.Q
            })
        }
        // MOSTRAR SELECCIONADOS
        // console.log(seleccion)


        //CRUCE DE LOS PADRES PARA OBTENER A LOS HIJOS
        let hijosGenerados = []
    function cruzar(seleccion) {
        
  
        // Recorremos el seleccion en pasos de 2 elementos
        for (let i = 0; i < seleccion.length; i += 2) {
          // Aseguramos que tenemos un par de elementos
          const gen0 = seleccion[i] ? seleccion[i].gen : null
          const gen1 = seleccion[i + 1] ? seleccion[i + 1].gen : null; // Verificamos si existe un par
        //   console.log(gen0)
  
          // Si encontramos un par, concatenamos las mitades
  
          if (gen1) {
            // Primera concatenación: primera mitad de gen0 + segunda mitad de gen1
            const mitad1 = gen0.slice(0, gen0.length / 2); // Primera mitad del objeto i
            const mitad2 = gen1.slice(gen1.length / 2); // Segunda mitad del objeto i+1
            // console.log(gen0)
            // console.log(gen1)
            // console.log(mitad1)
            // console.log(mitad2)
  
            const nuevogen1 = [...mitad1,...mitad2];
            // console.log(nuevogen1)
  
            let VA1 = calcularX(min, max, nuevogen1)
  
            // Creamos un nuevo objeto con el gen concatenado
            const nuevoObjeto1 = {
              gen: nuevogen1,
              VA: VA1
            };
  
  
            // Segunda concatenación: segunda mitad de gen0 + primera mitad de gen1
            const mitad3 = gen0.slice(gen0.length / 2); // Segunda mitad del objeto i
            const mitad4 = gen1.slice(0, gen1.length / 2); // Primera mitad del objeto i+1
  
            const nuevogen2 = [...mitad4,...mitad3]

            let VA2 = calcularX(min, max, nuevogen2)
  
  
            // Creamos otro nuevo objeto con el gen concatenado
            const nuevoObjeto2 = {
              gen: nuevogen2,
              VA: VA2
            };
  
            // Agregamos los nuevos objetos al seleccion
            poblacionCreada.push(nuevoObjeto1, nuevoObjeto2);
            hijosGenerados.push(nuevoObjeto1, nuevoObjeto2)
          }
          
          
        }
        // return [...poblacionCreada, ...resultado];
      }

      cruzar(seleccion)



      // ELIMINACIÓN
      let cantidadHijosGenerados = hijosGenerados.length
      let VATotal = poblacionCreada.reduce((acumulador, jugador) => acumulador + jugador.VA, 0);
      
      

    function eliminar(cantidadHijosGenerados, poblacionCreada, VATotal) {
        let mediaVA = VATotal/poblacionCreada.length
        const condicion = 0.95 * mediaVA;
        // console.log(condicion)
        
        // console.log('Población INICIAL', poblacionCreada.length)
    for (let i = 0; i < cantidadHijosGenerados; i++) {
        const randomIndex = Math.floor(Math.random() * poblacionCreada.length);
        // console.log(poblacionCreada[randomIndex].VA)
        if (poblacionCreada[randomIndex].VA < condicion) {
            poblacionCreada.splice(randomIndex,1)
            // console.log('indice', i)
            // console.log('VA del hijo', poblacionCreada[randomIndex].VA)
        }
    }
    // console.log('Población luego de eliminación', poblacionCreada.length)
    }
    

    eliminar(cantidadHijosGenerados, poblacionCreada, VATotal)


    //   console.log(seleccion.length)
    
    // console.log(cantidadHijosGenerados)
        // console.log('Tamaño de la seleccion', tamanioSeleccion)
        //   console.log(poblacionCreada.length)
        
    }

    
}//Fin ciclo crear generaciones

crearGeneraciones(poblacionCreada, cantidadGeneraciones);

function numeroMasRepetido(poblacionCreada) {
    const conteo = {}; // Objeto para contar las repeticiones de cada valor de VA

    // Contar las repeticiones de cada valor
    poblacionCreada.forEach((obj) => {
        const valor = obj.VA;
        conteo[valor] = (conteo[valor] || 0) + 1;
    });

    // Encontrar el número más repetido
    let maxRepeticiones = 0;
    let numeroMasFrecuente = null;

    for (const [valor, repeticiones] of Object.entries(conteo)) {
        if (repeticiones > maxRepeticiones) {
            maxRepeticiones = repeticiones;
            numeroMasFrecuente = Number(valor);
        }
    }

    return numeroMasFrecuente;
}

console.table(listadoJugadores)
        // console.table(poblacionCreada)

let valorMasRepetido = numeroMasRepetido(poblacionCreada)
console.log(valorMasRepetido) 

function buscarValorMasCercano(array, valorObjetivo) {
    let valorMasCercano = null;
    let diferenciaMinima = Infinity;

    array.forEach((obj) => {
        const diferencia = Math.abs(obj.VA - valorObjetivo); // Calcular la diferencia absoluta
        if (diferencia < diferenciaMinima) {
            diferenciaMinima = diferencia;
            valorMasCercano = obj;
        }
    });

    return valorMasCercano;
}

console.log(buscarValorMasCercano(listadoJugadores, valorMasRepetido ))