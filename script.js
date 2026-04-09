// script.js

// Function to generate a single event HTML
function eventHTML(title, date, place, cost, link) {
    return `<div class="event-card event">
        <span class="event-title">${title}</span><br>
        <span class="event-details">
            Date: ${date}<br>
            Place: ${place}<br>
            Cost: ${cost}<br>
            <a href="${link}" target="_blank">More Info</a>
        </span>
    </div>`;
}

// Main function to show events by category
function showEvents(choice) {
    let output = "";

    if (choice === "Arts and Culture") {
        output += "<h3>Rwanda's Creative Hub Events</h3>";
        output += eventHTML("Kigali Fashion Week", "May 30, 2026", "Zaria Court, Kigali", "20,000–50,000 RWF", "https://www.newtimes.co.rw/article/29618/entertainment/fashion/kigali-fashion-week-set-for-comeback-under-new-management");
        output += eventHTML("Ubumuntu Arts Festival", "July 13–19, 2026", "Kigali Genocide Memorial Site", "Free (Donations)", "https://ubumuntuartsfestival.com/about-us/");
        output += eventHTML("Rwanda Film Festival", "July 2026", "Kigali / Rubavu", "Free (Public Screening)", "https://en.wikipedia.org/wiki/Rwanda_Film_Festival");
        output += eventHTML("Kigali Photo Festival", "June 2026", "Various Galleries", "Free", "https://www.kigaliphotofest.com/");
        output += eventHTML("Hobe Rwanda Festival", "September 2026", "Kigali", "10,000–20,000 RWF", "https://www.visitrwandagorilla.com/hobe-rwanda-festival/");
    }
    else if (choice === "Culture and Traditions") {
        output += "<h3>Rwanda's Core Identity and Cultural Events</h3>";
        output += eventHTML("Umoja Fest", "Dec 26, 2026", "Nature Kigali", "Free – 5,000 RWF", "https://egotickets.com/events/umoja-fest-2025");
        output += eventHTML("Umuganura (Harvest Day)", "Aug 7, 2026", "Nationwide", "Free (Public Holiday)", "https://umuganura.com");
        output += eventHTML("National Liberation Day", "July 4, 2026", "Amahoro Stadium", "Free", "https://en.wikipedia.org/wiki/Liberation_Day_(Rwanda)");
        output += eventHTML("Umuganda (Community Service)", "Last Saturday of every month", "Local Communities", "Free (Respectful Entry)", "https://www.allaboutrwanda.com/umuganda.html");
        output += eventHTML("Kwibuka (Genocide Remembrance)", "April 7, 2026 – July 4, 2026", "Memorial Sites", "Free (Respectful Entry)", "https://genocidearchiverwanda.org.rw/category/Remembrance");
    }
    else if (choice === "Music and Nightlife") {
        output += "<h3>Concerts and Festivals in Rwanda</h3>";
        output += eventHTML("Kigali Up Music Festival", "July 10, 2026", "Kigali", "10,000–25,000 RWF", "https://www.ishyoartscentre.org/kigali-up-fesival/");
        output += eventHTML("Kivu Fest", "July 10, 2026", "Lake Kivu, Rubavu", "10,000–30,000 RWF", "https://kivufest.com");
        output += eventHTML("Misozi Music Festival", "Dec 2026", "Kigali", "5,000–15,000 RWF", "https://misozifest.com");
        output += eventHTML("Jazz Junction", "Quarterly", "Kigali Hotels", "20,000–40,000 RWF", "https://jazzjunction.com");
        output += eventHTML("Chop Life Kigali", "Twice a month", "Various venues", "10,000–20,000 RWF", "https://choplifekigali.com");
    }
    else if (choice === "Sports and Athletics") {
        output += "<h3>Rwanda's Athletic Events</h3>";
        output += eventHTML("Tour de Rwanda", "Feb 2026", "Nationwide, ends in Kigali", "Free (Spectating)", "https://www.tourdurwanda.rw/");
        output += eventHTML("Kigali Peace Marathon", "May 2026", "Kigali", "10,000 RWF (Registration)", "https://peace-marathon.com");
        output += eventHTML("Basketball Africa League", "May 2026", "BK Arena", "5,000–50,000 RWF", "https://basketballafricaleague.com");
        output += eventHTML("Ironman 70.3 Rwanda", "Aug 2026", "Rubavu", "250–350 $", "https://ironman.com/rwanda");
        output += eventHTML("Rwanda Gorilla Rally", "Sep 2026", "Gako/Kigali", "Free (Spectating)", "https://gorillarallyrwanda.com");
    }
    else if (choice === "Technology and Business") {
        output += "<h3>Business and Tech Events in Rwanda</h3>";
        output += eventHTML("MWC (Mobile World Congress)", "Oct 2026", "KCC/BK Arena", "200–1,200 $", "https://www.mwckigali.com/");
        output += eventHTML("Africa Tech Summit", "Feb 2026", "Kigali", "400–600 $", "https://africatechsummit.com");
        output += eventHTML("Africa CEO Forum", "May 14–15, 2026", "Kigali Convention Centre", "1,500–2,500 €", "https://africaceoforum.com");
        output += eventHTML("Inclusive Fintech Forum", "June 2026", "KCC", "300–500 $", "https://inclusivefintechforum.com");
        output += eventHTML("Aviation Africa Summit", "Sep 2026", "KCC", "500–800 $", "https://aviationafrica.com");
    }
    else if (choice === "Food and Lifestyle") {
        output += "<h3>Gastronomy and Lifestyle Events in Rwanda</h3>";
        output += eventHTML("Kigali Coffee Festival", "June 2026", "Kigali", "5,000–10,000 RWF", "https://africacoffeeteaexpo.com/");
        output += eventHTML("Restaurant Week Kigali", "Aug 2026", "Across Kigali", "15,000–35,000 RWF", "https://restaurantweekkigali.com");
        output += eventHTML("Diner en Blanc", "Aug 2026", "Secret Location", "40–60 $", "https://dinerenblancrwanda.com");
        output += eventHTML("Oktoberfest Kigali", "Oct 2026", "Various Venues", "10,000–25,000 RWF", "https://oktoberfestkigali.com");
        output += eventHTML("Twilight Picnic & Cine", "Dec 2026", "Kigali", "10,000–15,000 RWF", "https://twilightpicniccine.com");
    }
    else if (choice === "Conservation and Nature") {
        output += "<h3>Nature and Conservation Events in Rwanda</h3>";
        output += eventHTML("Kwita Izina (Gorilla Naming Ceremony)", "Sep 5, 2026", "Kinigi, Musanze", "Free (Public Event)", "https://kwitaizina.rw/");
        output += eventHTML("World Environment Day", "June 5, 2026", "Nationwide", "Free", "https://worldenvironmentday.com");
        output += eventHTML("Arbor Week (Tree Planting)", "Nov 2026", "Nationwide", "Free", "https://arborweekrwanda.com");
        output += eventHTML("International Biodiversity Conference", "July 30, 2026", "KCC, Kigali", "200–400 $", "https://biodiversityconf.com");
        output += eventHTML("Smart City Expo Africa", "Sep 2026", "Kigali", "200–450 $", "https://smartcityexpoafrica.com");
    }
    else if (choice === "Religious Events") {
        output += "<h3>Religious and Pilgrimage Events in Rwanda</h3>";
        output += eventHTML("Feast of Our Lady of Kibeho", "Nov 28, 2026", "Kibeho, Nyaruguru", "Free (Pilgrimage)", "https://en.wikipedia.org/wiki/Our_Lady_of_Kibeho");
        output += eventHTML("Assumption Day Pilgrimage", "Aug 15, 2026", "Kibeho", "Free", "https://assumptionpilgrimage.com");
        output += eventHTML("Eid al-Fitr", "March 20, 2026", "Kigali Pelé Stadium", "Free", "https://eidfitrkigali.com");
        output += eventHTML("Eid al-Adha", "May 27, 2026", "Nationwide", "Free", "https://eidadharwanda.com");
        output += eventHTML("Kibeho Spiritual Retreat", "Aug 31 – Sep 11, 2026", "Kibeho", "100 $+", "https://kibeho-retreat.com");
    }
    else {
        output = "<p>No events available for this category.</p>";
    }

    // Footer & support contact
    output += `<hr>
        <p>
            For more information about these events,
            <a href="https://camp-nav-mauve.vercel.app/browse" target="_blank">click here</a>
            to explore more details.
        </p>
        <p class="support-contact">For any problem, please contact us at <a href="mailto:ilizadelice@gmail.com">ilizadelice@gmail.com</a>.</p>
    `;

    document.getElementById("output").innerHTML = output;
}

// Search function
function searchEvents() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const events = document.getElementsByClassName("event");

    for (let i = 0; i < events.length; i++) {
        const text = events[i].innerText.toLowerCase();
        events[i].style.display = text.includes(input) ? "block" : "none";
    }
}
