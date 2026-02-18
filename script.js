function showEvents(choice) {
    let output = "";

    const events = {
        "Arts and Culture": [
            {
                name: "Kigali Fashion Week",
                date: "May 30, 2026",
                place: "Zaria Court, Kigali",
                price: "20,000–50,000 RWF",
                description: "Rwanda's biggest fashion showcase featuring local designers.",
                image: "https://via.placeholder.com/300x180?text=Kigali+Fashion+Week",
                age: "16+",
                link: "https://www.kigalifashionweek.com/"
            },
            {
                name: "Ubumuntu Arts Festival",
                date: "July 13–19, 2026",
                place: "Kigali Genocide Memorial Site",
                price: "Free (Donations)",
                description: "A festival promoting peace and unity through arts.",
                image: "https://via.placeholder.com/300x180?text=Ubumuntu+Arts+Festival",
                age: "All Ages",
                link: "https://ubumuntuarts.org/"
            },
            {
                name: "Hobe Rwanda Festival",
                date: "September 2026",
                place: "Kigali",
                price: "10,000–20,000 RWF",
                description: "Celebration of contemporary Rwandan music, arts, and theatre.",
                image: "https://via.placeholder.com/300x180?text=Hobe+Rwanda+Festival",
                age: "All Ages",
                link: "https://example.com/hobe-rwanda"
            },
            {
                name: "Kigali Photo Festival",
                date: "June 2026",
                place: "Various Galleries",
                price: "Free",
                description: "Photography exhibitions showcasing Rwandan and African photographers.",
                image: "https://via.placeholder.com/300x180?text=Kigali+Photo+Festival",
                age: "All Ages",
                link: "https://example.com/kigali-photo"
            }
        ],
        "Culture and Traditions": [
            {
                name: "Umoja Fest",
                date: "Dec 26, 2026",
                place: "Nature Kigali",
                price: "Free – 5,000 RWF",
                description: "Celebrating Rwandan unity and culture through music and dance.",
                image: "https://via.placeholder.com/300x180?text=Umoja+Fest",
                age: "All Ages",
                link: "https://example.com/umoja-fest"
            },
            {
                name: "Umuganura (Harvest Day)",
                date: "Aug 7, 2026",
                place: "Nationwide",
                price: "Free",
                description: "Traditional Rwandan harvest celebration.",
                image: "https://via.placeholder.com/300x180?text=Umuganura",
                age: "All Ages",
                link: "https://example.com/umuganura"
            }
        ],
        "Music and Nightlife": [
            {
                name: "Kigali Up Music Festival",
                date: "July 10, 2026",
                place: "Kigali",
                price: "10,000–25,000 RWF",
                description: "Live concerts featuring local and international artists.",
                image: "https://via.placeholder.com/300x180?text=Kigali+Up+Music",
                age: "18+",
                link: "https://example.com/kigali-up-music"
            },
            {
                name: "Kivu Fest",
                date: "July 10, 2026",
                place: "Lake Kivu, Rubavu",
                price: "10,000–30,000 RWF",
                description: "Outdoor music festival by Lake Kivu with live performances.",
                image: "https://via.placeholder.com/300x180?text=Kivu+Fest",
                age: "18+",
                link: "https://example.com/kivu-fest"
            }
        ],
        "Sports and Athletics": [
            {
                name: "Tour de Rwanda",
                date: "Feb 2026",
                place: "Nationwide, ends in Kigali",
                price: "Free (Spectating)",
                description: "International cycling competition across Rwanda.",
                image: "https://via.placeholder.com/300x180?text=Tour+de+Rwanda",
                age: "All Ages",
                link: "https://www.tourderwanda.rw/"
            },
            {
                name: "Kigali Peace Marathon",
                date: "May 2026",
                place: "Kigali",
                price: "10,000 RWF (Registration)",
                description: "Annual marathon promoting peace and fitness.",
                image: "https://via.placeholder.com/300x180?text=Peace+Marathon",
                age: "15+",
                link: "https://example.com/peace-marathon"
            }
        ],
        "Technology and Business": [
            {
                name: "MWC (Mobile World Congress)",
                date: "Oct 2026",
                place: "KCC/BK Arena",
                price: "200–1,200 $",
                description: "Tech exhibition showcasing latest mobile technologies.",
                image: "https://via.placeholder.com/300x180?text=MWC",
                age: "All Ages",
                link: "https://www.mwcbarcelona.com/"
            }
        ],
        "Food and Lifestyle": [
            {
                name: "Kigali Coffee Festival",
                date: "June 2026",
                place: "Kigali",
                price: "5,000–10,000 RWF",
                description: "Showcasing Rwanda's coffee culture with tastings and workshops.",
                image: "https://via.placeholder.com/300x180?text=Coffee+Festival",
                age: "All Ages",
                link: "https://example.com/coffee-festival"
            }
        ],
        "Conservation and Nature": [
            {
                name: "Kwita Izina",
                date: "Sep 5, 2026",
                place: "Kinigi, Musanze",
                price: "Free (Public)",
                description: "Annual gorilla naming ceremony in Rwanda.",
                image: "https://via.placeholder.com/300x180?text=Kwita+Izina",
                age: "All Ages",
                link: "https://www.kwitaizina.rw/"
            }
        ],
        "Religious Events": [
            {
                name: "Feast of Our Lady of Kibeho",
                date: "Nov 28, 2026",
                place: "Kibeho, Nyaruguru",
                price: "Free (Pilgrimage)",
                description: "Annual pilgrimage to honor Our Lady of Kibeho.",
                image: "https://via.placeholder.com/300x180?text=Kibeho+Feast",
                age: "All Ages",
                link: "https://example.com/kibeho-feast"
            }
        ]
    };

    if (events[choice] && events[choice].length > 0) {
        events[choice].forEach(ev => {
            output += `
                <div class="event-card">
                    <h3 class="event-title">${ev.name}</h3>
                    <img src="${ev.image}" alt="${ev.name}" class="event-img">
                    <p class="event-details"><strong>Date:</strong> ${ev.date}<br>
                    <strong>Place:</strong> ${ev.place}<br>
                    <strong>Price:</strong> ${ev.price}<br>
                    <strong>Age:</strong> ${ev.age}</p>
                    <p>${ev.description}</p>
                    <p>For more info: <a href="${ev.link}" target="_blank">Click here</a></p>
                </div>
            `;
        });
    } else {
        output = "<p>No events found for this category.</p>";
    }

    document.getElementById("output").innerHTML = output;
}
