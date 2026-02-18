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
            }
        ]
        // You can continue adding other categories the same way
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
