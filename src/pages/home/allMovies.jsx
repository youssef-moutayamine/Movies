export default class Movie {
    constructor(id, title, poster, date, time, type, description) {
        this.id = id
        this.title = title
        this.poster = poster
        this.date = date
        this.time = time
        this.type = type
        this.description = description
    }
}

export const movies = [
    new Movie(
        1,
        "Fast & Furious",
        "https://m.media-amazon.com/images/M/MV5BODJkMTQ5ZmQtNzQxYy00ZWNlLWI0ZGYtYjU1NzdiMjcyNDRmXkEyXkFqcGc@._V1_.jpg",
        "MON 1 JULY",
        "06:00PM",
        "Action",
        "A high-octane street racing saga with adrenaline-pumping heists and fast cars."
    ),
    new Movie(
        2,
        "Spider-Man",
        "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_.jpg",
        "TUE 2 JULY",
        "08:00PM",
        "Adventure",
        "Peter Parker balances teenage life and superhero duties as Spider-Man."
    ),
    new Movie(
        3,
        "Batman",
        "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_.jpg",
        "WED 3 JULY",
        "07:30PM",
        "Superhero",
        "The Dark Knight faces Gotham's criminals and his own inner demons."
    ),
    new Movie(
        4,
        "Prison Break",
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkrufuGorprDa66HYVd-pio7leaeSsfdf60VcmduuG1WOMAjMa4iaAwLrv2GyWUMFWxuks",
        "THU 4 JULY",
        "09:00PM",
        "Drama",
        "A man intentionally gets imprisoned to break out his innocent brother."
    ),
    new Movie(
        5,
        "Breaking Bad",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmR1UfShiKt6vY3J9tjztfpJvB7qM3xIQ_-TUF25_zZYzoTfz",
        "FRI 5 JULY",
        "10:00PM",
        "Crime",
        "A chemistry teacher turns to a life of crime to secure his family's future."
    ),
    new Movie(
        6,
        "Inception",
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        "SAT 6 JULY",
        "07:00PM",
        "Sci-Fi",
        "A skilled thief is given a chance at redemption if he can successfully perform inception."
    ),
    new Movie(
        7,
        "The Matrix",
        "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
        "SUN 7 JULY",
        "09:00PM",
        "Sci-Fi",
        "A computer hacker learns the true nature of reality and his role in the war against its controllers."
    ),
    new Movie(
        8,
        "Avengers: Endgame",
        "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
        "MON 8 JULY",
        "08:00PM",
        "Superhero",
        "The Avengers assemble for a final battle against Thanos to save the universe."
    ),
    new Movie(
        9,
        "Interstellar",
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "TUE 9 JULY",
        "06:30PM",
        "Sci-Fi",
        "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival."
    ),
    new Movie(
        10,
        "The Shawshank Redemption",
        "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
        "WED 10 JULY",
        "07:00PM",
        "Drama",
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption."
    ),
    new Movie(
        11,
        "The Godfather",
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "THU 11 JULY",
        "08:00PM",
        "Crime",
        "The aging patriarch of an organized crime dynasty transfers control to his reluctant son."
    ),
    new Movie(
        12,
        "Pulp Fiction",
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "FRI 12 JULY",
        "09:15PM",
        "Crime",
        "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption."
    ),
    new Movie(
        13,
        "The Dark Knight",
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        "SAT 13 JULY",
        "07:30PM",
        "Superhero",
        "Batman fights the menace known as the Joker, who wreaks havoc on Gotham City."
    ),
    new Movie(
        14,
        "Forrest Gump",
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        "SUN 14 JULY",
        "06:45PM",
        "Drama",
        "The presidencies, Vietnam, and other historical events unfold through the perspective of an Alabama man with an IQ of 75."
    ),
    new Movie(
        15,
        "The Lord of the Rings: The Fellowship of the Ring",
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        "MON 15 JULY",
        "07:00PM",
        "Fantasy",
        "A young hobbit embarks on a perilous journey to destroy a powerful ring."
    ),
    new Movie(
        16,
        "Titanic",
        "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        "TUE 16 JULY",
        "08:00PM",
        "Romance",
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
    ),
    new Movie(
        17,
        "Jurassic Park",
        "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
        "WED 17 JULY",
        "06:30PM",
        "Adventure",
        "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose."
    ),
    new Movie(
        18,
        "The Avengers",
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "THU 18 JULY",
        "07:15PM",
        "Superhero",
        "Earth's mightiest heroes must come together and learn to fight as a team to stop the mischievous Loki and his alien army from enslaving humanity."
    ),
    new Movie(
        19,
        "Avatar",
        "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_.jpg",
        "FRI 19 JULY",
        "08:30PM",
        "Sci-Fi",
        "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
    ),
    new Movie(
        20,
        "The Lion King",
        "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
        "SAT 20 JULY",
        "06:00PM",
        "Animation",
        "Lion prince Simba grows up in the African heartland until tragedy forces him to run away, leaving his evil uncle to steal the throne."
    ),
    new Movie(
        21,
        "Gladiator",
        "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "SUN 21 JULY",
        "07:45PM",
        "Action",
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
    ),
    new Movie(
        22,
        "The Silence of the Lambs",
        "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "MON 22 JULY",
        "09:00PM",
        "Thriller",
        "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer."
    ),
    new Movie(
        23,
        "The Green Mile",
        "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg",
        "TUE 23 JULY",
        "08:15PM",
        "Drama",
        "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift."
    ),
    new Movie(
        24,
        "Fight Club",
        "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "WED 24 JULY",
        "10:00PM",
        "Drama",
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
    ),
    new Movie(
        25,
        "Parasite",
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        "THU 25 JULY",
        "08:30PM",
        "Thriller",
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
    )
];

