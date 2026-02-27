function showEvents(choice) {
    let output = "";

    if (choice === "Arts and Culture") {
        output += "<h3>Rwanda's Creative Hub Events</h3>";
        output += `<p><span class="event-title">Kigali Fashion Week</span><br>
        <span class="event-details">Date: May 30, 2026<br>
        Place: Zaria Court, Kigali<br>
        Cost: 20,000–50,000 RWF<br>
        <a href="https://www.newtimes.co.rw/article/29618/entertainment/fashion/kigali-fashion-week-set-for-comeback-under-new-management" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Ubumuntu Arts Festival</span><br>
        <span class="event-details">Date: July 13–19, 2026<br>
        Place: Kigali Genocide Memorial Site<br>
        Cost: Free (Donations)<br>
        <a href="https://ubumuntuartsfestival.com/about-us/" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Rwanda Film Festival</span><br>
        <span class="event-details">Date: July 2026<br>
        Place: Kigali / Rubavu<br>
        Cost: Free (Public Screening)<br>
        <a href="https://en.wikipedia.org/wiki/Rwanda_Film_Festival" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Kigali Photo Festival</span><br>
        <span class="event-details">Date: June 2026<br>
        Place: Various Galleries<br>
        Cost: Free<br>
        <a href="https://www.kigaliphotofest.com/" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Hobe Rwanda Festival</span><br>
        <span class="event-details">Date: September 2026<br>
        Place: Kigali<br>
        Cost: 10,000–20,000 RWF<br>
        <a href="https://www.visitrwandagorilla.com/hobe-rwanda-festival/" target="_blank">More Info</a>`;
    }
    else if (choice === "Culture and Traditions") {
        output += "<h3>Rwanda's Core Identity and Cultural Events</h3>";
        output += `<p><span class="event-title">Umoja Fest</span><br>
        <span class="event-details">Date: Dec 26, 2026<br>
        Place: Nature Kigali<br>
        Cost: Free – 5,000 RWF<br>
        <a href="https://egotickets.com/events/umoja-fest-2025" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Umuganura (Harvest Day)</span><br>
        <span class="event-details">Date: Aug 7, 2026<br>
        Place: Nationwide<br>
        Cost: Free (Public Holiday)<br>
        <a href="https://umuganura.com" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">National Liberation Day</span><br>
        <span class="event-details">Date: July 4, 2026<br>
        Place: Amahoro Stadium<br>
        Cost: Free<br>
        <a href="https://en.wikipedia.org/wiki/Liberation_Day_(Rwanda)" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Umuganda (Community Service)</span><br>
        <span class="event-details">Date: Last Saturday of every month<br>
        Place: Local Communities<br>
        Cost: Free (Respectful Entry)<br>
        <a href="https://www.allaboutrwanda.com/umuganda.html" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Kwibuka (Genocide Remembrance)</span><br>
        <span class="event-details">Date: April 7, 2026 – July 4, 2026<br>
        Place: Memorial Sites<br>
        Cost: Free (Respectful Entry)<br>
        <a href="https://genocidearchiverwanda.org.rw/category/Remembrance" target="_blank">More Info</a>`;
    }
    else if (choice === "Music and Nightlife") {
        output += "<h3>Concerts and Festivals in Rwanda</h3>";
        output += `<p><span class="event-title">Kigali Up Music Festival</span><br>
        <span class="event-details">Date: July 10, 2026<br>
        Place: Kigali<br>
        Cost: 10,000–25,000 RWF<br>
        <a href="https://www.ishyoartscentre.org/kigali-up-fesival/" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Kivu Fest</span><br>
        <span class="event-details">Date: July 10, 2026<br>
        Place: Lake Kivu, Rubavu<br>
        Cost: 10,000–30,000 RWF<br>
        <a href="https://kivufest.com" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Misozi Music Festival</span><br>
        <span class="event-details">Date: Dec 2026<br>
        Place: Kigali<br>
        Cost: 5,000–15,000 RWF<br>
        <a href="https://misozifest.com" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Jazz Junction</span><br>
        <span class="event-details">Date: Quarterly<br>
        Place: Kigali Hotels<br>
        Cost: 20,000–40,000 RWF<br>
        <a href="https://jazzjunction.com" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Chop Life Kigali</span><br>
        <span class="event-details">Date: Twice a month<br>
        Place: Various venues<br>
        Cost: 10,000–20,000 RWF<br>
        <a href="https://choplifekigali.com" target="_blank">More Info</a>`;
    }
    else if (choice === "Sports and Athletics") {
        output += "<h3>Rwanda's Athletic Events</h3>";
        output += `<p><span class="event-title">Tour de Rwanda</span><br>
        <span class="event-details">Date: Feb 2026<br>
        Place: Nationwide, ends in Kigali<br>
        Cost: Free (Spectating)<br>
        <a href="https://https://www.tourdurwanda.rw//" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Kigali Peace Marathon</span><br>
        <span class="event-details">Date: May 2026<br>
        Place: Kigali<br>
        Cost: 10,000 RWF (Registration)<br>
        <a href="https://peace-marathon.com" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Basketball Africa League</span><br>
        <span class="event-details">Date: May 2026<br>
        Place: BK Arena<br>
        Cost: 5,000–50,000 RWF<br>
        <a href="https://basketballafricaleague.com" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Ironman 70.3 Rwanda</span><br>
        <span class="event-details">Date: Aug 2026<br>
        Place: Rubavu<br>
        Cost: 250–350 $<br>
        <a href="https://ironman.com/rwanda" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Rwanda Gorilla Rally</span><br>
        <span class="event-details">Date: Sep 2026<br>
        Place: Gako/Kigali<br>
        Cost: Free (Spectating)<br>
        <a href="https://gorillarallyrwanda.com" target="_blank">More Info</a>`;
    }

    else if (choice === "Technology and Business") {
        output += "<h3>Business and Tech Events in Rwanda</h3>";
        output += `<p><span class="event-title">MWC (Mobile World Congress)</span><br>
        <span class="event-details">Date: Oct 2026<br>
        Place: KCC/BK Arena<br>
        Cost: 200–1,200 $<br>
        <a href="https://www.mwckigali.com/" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Africa Tech Summit</span><br>
        <span class="event-details">Date: Feb 2026<br>
        Place: Kigali<br>
        Cost: 400–600 $<br>
        <a href="https://africatechsummit.com" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Africa CEO Forum</span><br>
        <span class="event-details">Date: May 14–15, 2026<br>
        Place: Kigali Convention Centre<br>
        Cost: 1,500–2,500 €<br>
        <a href="https://africaceoforum.com" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Inclusive Fintech Forum</span><br>
        <span class="event-details">Date: June 2026<br>
        Place: KCC<br>
        Cost: 300–500 $<br>
        <a href="https://inclusivefintechforum.com" target="_blank">More Info</a>`;
        output += `<p><span class="event-title">Aviation Africa Summit</span><br>
        <span class="event-details">Date: Sep 2026<br>
        Place: KCC<br>
        Cost: 500–800 $<br>
        <a href="https://aviationafrica.com" target="_blank">More Info</a>`;
    }

    else if (choice === "Food and Lifestyle") {
    output += "<h3>Gastronomy and Lifestyle Events in Rwanda</h3>";
    output += `<p><span class="event-title">Kigali Coffee Festival</span><br>
    <span class="event-details">Date: June 2026<br>
    Place: Kigali<br>
    Cost: 5,000–10,000 RWF<br>
    <a href="https://africacoffeeteaexpo.com/" target="_blank">More Info</a>`;
    output += `<p><span class="event-title">Restaurant Week Kigali</span><br>
    <span class="event-details">Date: Aug 2026<br>
    Place: Across Kigali<br>
    Cost: 15,000–35,000 RWF<br>
    <a href="https://restaurantweekkigali.com" target="_blank">More Info</a>`;
    output += `<p><span class="event-title">Diner en Blanc</span><br>
    <span class="event-details">Date: Aug 2026<br>
    Place: Secret Location<br>
    Cost: 40–60 $<br>
    <a href="https://dinerenblancrwanda.com" target="_blank">More Info</a>`;
    output += `<p><span class="event-title">Oktoberfest Kigali</span><br>
    <span class="event-details">Date: Oct 2026<br>
    Place: Various Venues<br>
    Cost: 10,000–25,000 RWF<br>
    <a href="https://oktoberfestkigali.com" target="_blank">More Info</a>`;
    output += `<p><span class="event-title">Twilight Picnic & Cine</span><br>
    <span class="event-details">Date: Dec 2026<br>
    Place: Kigali<br>
    Cost: 10,000–15,000 RWF<br>
    <a href="https://twilightpicniccine.com" target="_blank">More Info</a>`;
}

else if (choice === "Conservation and Nature") {
    output += "<h3>Nature and Conservation Events in Rwanda</h3>";
    output += `<p><span class="event-title">Kwita Izina (Gorilla Naming Ceremony)</span><br>
    <span class="event-details">Date: Sep 5, 2026<br>
    Place: Kinigi, Musanze<br>
    Cost: Free (Public Event)<br>
    <a href="https://kwitaizina.rw/" target="_blank">More Info</a>`;
    output += `<p><span class="event-title">World Environment Day</span><br>
    <span class="event-details">Date: June 5, 2026<br>
    Place: Nationwide<br>
    Cost: Free<br>
    <a href="https://worldenvironmentday.com" target="_blank">More Info</a>`;
    output += `<p><span class="event-title">Arbor Week (Tree Planting)</span><br>
    <span class="event-details">Date: Nov 2026<br>
    Place: Nationwide<br>
    Cost: Free<br>
    <a href="https://arborweekrwanda.com" target="_blank">More Info</a>`;
    output += `<p><span class="event-title">International Biodiversity Conference</span><br>
    <span class="event-details">Date: July 30, 2026<br>
    Place: KCC, Kigali<br>
    Cost: 200–400 $<br>
    <a href="https://biodiversityconf.com" target="_blank">More Info</a>`;
    output += `<p><span class="event-title">Smart City Expo Africa</span><br>
    <span class="event-details">Date: Sep 2026<br>
    Place: Kigali<br>
    Cost: 200–450 $<br>
    <a href="https://smartcityexpoafrica.com" target="_blank">More Info</a>`;
}

else if (choice === "Religious Events") {
    output += "<h3>Religious and Pilgrimage Events in Rwanda</h3>";
    output += `<p><span class="event-title">Feast of Our Lady of Kibeho</span><br>
    <span class="event-details">Date: Nov 28, 2026<br>
    Place: Kibeho, Nyaruguru<br>
    Cost: Free (Pilgrimage)<br>
    <a href="https://en.wikipedia.org/wiki/Our_Lady_of_Kibeho" target="_blank">More Info</a>`;
    output += `<p><span class="event-title">Assumption Day Pilgrimage</span><br>
    <span class="event-details">Date: Aug 15, 2026<br>
    Place: Kibeho<br>
    Cost: Free<br>
    <a href="https://assumptionpilgrimage.com" target="_blank">More Info</a>`;
    output += `<p><span class="event-title">Eid al-Fitr</span><br>
    <span class="event-details">Date: March 20, 2026<br>
    Place: Kigali Pelé Stadium<br>
    Cost: Free<br>
    <a href="https://eidfitrkigali.com" target="_blank">More Info</a>`;
    output += `<p><span class="event-title">Eid al-Adha</span><br>
    <span class="event-details">Date: May 27, 2026<br>
    Place: Nationwide<br>
    Cost: Free<br>
    <a href="https://eidadharwanda.com" target="_blank">More Info</a>`;
    output += `<p><span class="event-title">Kibeho Spiritual Retreat</span><br>
    <span class="event-details">Date: Aug 31 – Sep 11, 2026<br>
    Place: Kibeho<br>
    Cost: 100 $+<br>
    <a href="https://kibeho-retreat.com" target="_blank">More Info</a>`;
} else {
        output = "<p>NO RESOURCES</p>";
    }

    output += `
    <hr>
    <p>
      For more information about these events,
      <a href="https://camp-nav-mauve.vercel.app/browse" target="_blank">
        click here
      </a>
      to explore more details.
  </p>
// Add support email contact
    const supportEmail = "ilizadelice@gmail.com";
    output += `<p class="support-contact">For any problem, please contact us at <a href="mailto:${supportEmail}">${supportEmail}</a>.</p>`;
 </p>`;

// Finalize output
document.getElementById("output").innerHTML = output;
}
