function showEvents(choice) {
    let output = "";

    if (choice === "Arts and Culture") {
        output += "<h3>Rwanda's Creative Hub Events</h3>";
        output += `<p><span class="event-title">Kigali Fashion Week</span><br>
        <span class="event-details">Date: May 30, 2026<br>
        Place: Zaria Court, Kigali<br>
        Cost: 20,000–50,000 RWF<br>
        <a href="https:// https://europaregina.eu/fashion-weeks/fashion-weeks-africa/kigali-fashion-week/" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Ubumuntu Arts Festival</span><br>
        <span class="event-details">Date: July 13–19, 2026<br>
        Place: Kigali Genocide Memorial Site<br>
        Cost: Free (Donations)<br>
        <a href="https://http://ubumuntuartsfestival.com/." target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Rwanda Film Festival</span><br>
        <span class="event-details">Date: July 2026<br>
        Place: Kigali / Rubavu<br>
        Cost: Free (Public Screening)<br>
        <a href="https://https://filmfreeway.com/RwandaFilmFestival2022. " target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Kigali Photo Festival</span><br>
        <span class="event-details">Date: June 2026<br>
        Place: Various Galleries<br>
        Cost: Free<br>
        <a href="https://https://www.kigaliphotofest.com/" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Hobe Rwanda Festival</span><br>
        <span class="event-details">Date: September 2026<br>
        Place: Kigali<br>
        Cost: 10,000–20,000 RWF<br>
        <a href="https://hoberwanda.com" target="_blank">More Info</a>
    }
    else if (choice === "Culture and Traditions") {
        output += "<h3>Rwanda's Core Identity and Cultural Events</h3>";
        output += `<p><span class="event-title">Umoja Fest</span><br>
        <span class="event-details">Date: Dec 26, 2026<br>
        Place: Nature Kigali<br>
        Cost: Free – 5,000 RWF<br>
        <a href="https://umojafest.com" target=": info@umojaholidaysfestival.com">More Info</a></span></p>`;
        output += `<p><span class="event-title">Umuganura (Harvest Day)</span><br>
        <span class="event-details">Date: Aug 7, 2026<br>
        Place: Nationwide<br>
        Cost: Free (Public Holiday)<br>
        <a href="https://umuganura.com" target="https://www.gov.rw › Gov › Blog Detail">More Info</a></span></p>`;
        output += `<p><span class="event-title">National Liberation Day</span><br>
        <span class="event-details">Date: July 4, 2026<br>
        Place: Amahoro Stadium<br>
        Cost: Free<br>
        <a href="https://" target="https://www.google.com/search?q=National+Liberation+Day+website+for+more+information&rlz=1C1GCEU_en-GBRW1180RW1180&biw=1360&bih=641&sca_esv=2827ae63164125c3&sxsrf=ANbL-n7f5A8gdeg-9mYe5qRSLBvx3iyOlw%3A1771598852918&ei=BHSYaazlN8zyi-gPrbOW2Qc&ved=0ahUKEwis97-CqOiSAxVM-QIHHa2ZJXsQ4dUDCBM&uact=5&oq=National+Liberation+Day+website+for+more+information&gs_lp=Egxnd3Mtd2l6LXNlcnAiNE5hdGlvbmFsIExpYmVyYXRpb24gRGF5IHdlYnNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24yCBAAGIAEGKIEMggQABiABBiiBDIFEAAY7wUyBRAAGO8FSLglUMoFWJIgcAF4AJABAZgB0wKgAecRqgEFMi00LjS4AQPIAQD4AQH4AQKYAgSgArQGwgIKEAAYsAMY1gQYR8ICBhAAGAcYHsICBBAAGB6YAwCIBgGQBgiSBwUxLjAuM6AHkiyyBwMyLTO4B64GwgcFMC4yLjLIBw-ACAA&sclient=gws-wiz-serp">More Info</a></span></p>`;
        output += `<p><span class="event-title">Umuganda (Community Service)</span><br>
        <span class="event-details">Date: Last Saturday of every month<br>
        Place: Local Communities<br>
        Cost: Free (Respectful Entry)<br>
        <a href="https://umuganda.com" target="https://www.google.com/search?q=Umuganda+%28Community+Service%29+website+for+more+information&rlz=1C1GCEU_en-GBRW1180RW1180&biw=1360&bih=641&sca_esv=2827ae63164125c3&sxsrf=ANbL-n5D3w72aLv84yNyUpkG7opvd0z8VA%3A1771598906452&ei=OnSYacumG4qgi-gPt_XfuQY&ved=0ahUKEwjLq4OcqOiSAxUK0AIHHbf6N2cQ4dUDCBM&uact=5&oq=Umuganda+%28Community+Service%29+website+for+more+information&gs_lp=Egxnd3Mtd2l6LXNlcnAiOVVtdWdhbmRhIChDb21tdW5pdHkgU2VydmljZSkgd2Vic2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbjIFEAAY7wUyCBAAGIAEGKIEMggQABiABBiiBDIFEAAY7wUyBRAAGO8FSPgbUABYyhlwAHgBkAEAmAGpAqABiwaqAQMyLTO4AQPIAQD4AQH4AQKYAgOgAqEGwgIGEAAYBxgewgIEEAAYHsICCBAhGKABGMMEmAMAkgcFMi0yLjGgB7EMsgcFMi0yLjG4B6EGwgcHMC4xLjEuMcgHDYAIAA&sclient=gws-wiz-serp">More Info</a></span></p>`;
        output += `<p><span class="event-title">Kwibuka (Genocide Remembrance)</span><br>
        <span class="event-details">Date: April 7, 2026 – July 4, 2026<br>
        Place: Memorial Sites<br>
        Cost: Free (Respectful Entry)<br>
        <a href="https://kwibuka.com" target="https://www.ibuka.rw">More Info</a></span></p>`;
    }
    else if (choice === "Music and Nightlife") {
        output += "<h3>Concerts and Festivals in Rwanda</h3>";
        output += `<p><span class="event-title">Kigali Up Music Festival</span><br>
        <span class="event-details">Date: July 10, 2026<br>
        Place: Kigali<br>
        Cost: 10,000–25,000 RWF<br>
        <a href="https://http://www.kigaliup.net/ http://www.kigaliup.net/" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Kivu Fest</span><br>
        <span class="event-details">Date: July 10, 2026<br>
        Place: Lake Kivu, Rubavu<br>
        Cost: 10,000–30,000 RWF<br>
        <a href="https:// Kivu Fest Instagram" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Misozi Music Festival</span><br>
        <span class="event-details">Date: Dec 2026<br>
        Place: Kigali<br>
        Cost: 5,000–15,000 RWF<br>
        <a href="https://https://www.google.com/search?q=Misozi+Music+Festival&rlz=1C1GCEU_en-GBRW1180RW1180&biw=1360&bih=641&sca_esv=2827ae63164125c3&sxsrf=ANbL-n7WvGqLYXvz_gETZj8XQ3SbHxHo4A%3A1771599464690&ei=aHaYaYfqKfGti-gP6ZeXwA0&ved=0ahUKEwiHvpumquiSAxXx1gIHHenLBdgQ4dUDCBM&uact=5&oq=Misozi+Music+Festival&gs_lp=Egxnd3Mtd2l6LXNlcnAiFU1pc296aSBNdXNpYyBGZXN0aXZhbDIEECMYJzIFEAAY7wUyBRAAGO8FMggQABiABBiiBDIFEAAY7wVIgCZQiwZYqR1wAXgAkAEAmAHgAqABtCSqAQYyLTEyLjW4AQPIAQD4AQGYAgOgAvADwgIIEAAYsAMY7wXCAgsQABiABBiwAxiiBMICCxAAGLADGKIEGIkFwgIIEAAYogQYiQWYAwCIBgGQBgSSBwUxLjAuMqAHg1CyBwMyLTK4B-oDwgcDMi0zyAcRgAgA&sclient=gws-wiz-serp" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Jazz Junction</span><br>
        <span class="event-details">Date: Quarterly<br>
        Place: Kigali Hotels<br>
        Cost: 20,000–40,000 RWF<br>
        <a href="https://https://www.google.com/search?q=kigali+%3EJazz+Junction+&rlz=1C1GCEU_en-GBRW1180RW1180&biw=1360&bih=641&sca_esv=2827ae63164125c3&sxsrf=ANbL-n6bMeuPPSDnSFTSk5tg1Y65X81U1A%3A1771599497937&ei=iXaYaZ74OOuei-gPuZG5-Ao&ved=0ahUKEwje4Ii2quiSAxVrzwIHHblIDq8Q4dUDCBM&uact=5&oq=kigali+%3EJazz+Junction+&gs_lp=Egxnd3Mtd2l6LXNlcnAiFmtpZ2FsaSA-SmF6eiBKdW5jdGlvbiAyBhAAGBYYHjILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyBRAAGO8FMgUQABjvBUjwaFDjBliJY3ABeAGQAQCYAZMCoAG6JaoBBDItMjG4AQPIAQD4AQH4AQKYAgygArUUwgIHECMYsAMYJ8ICChAAGLADGNYEGEfCAgsQABiABBiRAhiKBcICBhAAGAcYHsICBRAAGIAEwgIKECMYgAQYJxiKBcICBBAjGCfCAgoQIxjwBRgnGMkCwgIREC4YgAQYkQIYxwEYigUYrwHCAgsQLhiABBjHARivAcICEBAAGIAEGLEDGIMBGBQYhwLCAgsQABiABBixAxiDAcICBRAuGIAEmAMAiAYBkAYHkgcGMS4wLjExoAeVlwGyBwQyLTExuAevFMIHBTItOS4zyAdKgAgA&sclient=gws-wiz-serp" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Chop Life Kigali</span><br>
        <span class="event-details">Date: Twice a month<br>
        Place: Various venues<br>
        Cost: 10,000–20,000 RWF<br>
        <a href="https://choplifekigali.com" target="https://www.choplifegaming.com">More Info</a></span></p>`;
    }
    else if (choice === "Sports and Athletics") {
        output += "<h3>Rwanda's Athletic Events</h3>";
        output += `<p><span class="event-title">Tour de Rwanda</span><br>
        <span class="event-details">Date: Feb 2026<br>
        Place: Nationwide, ends in Kigali<br>
        Cost: Free (Spectating)<br>
        <a href="https://tourderwanda.com" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Kigali Peace Marathon</span><br>
        <span class="event-details">Date: May 2026<br>
        Place: Kigali<br>
        Cost: 10,000 RWF (Registration)<br>
        <a href="https://peace-marathon.com" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Basketball Africa League</span><br>
        <span class="event-details">Date: May 2026<br>
        Place: BK Arena<br>
        Cost: 5,000–50,000 RWF<br>
        <a href="https://basketballafricaleague.com" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Ironman 70.3 Rwanda</span><br>
        <span class="event-details">Date: Aug 2026<br>
        Place: Rubavu<br>
        Cost: 250–350 $<br>
        <a href="https://ironman.com/rwanda" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Rwanda Gorilla Rally</span><br>
        <span class="event-details">Date: Sep 2026<br>
        Place: Gako/Kigali<br>
        Cost: Free (Spectating)<br>
        <a href="https://gorillarallyrwanda.com" target="_blank">More Info</a></span></p>`;
    }

    else if (choice === "Technology and Business") {
        output += "<h3>Business and Tech Events in Rwanda</h3>";
        output += `<p><span class="event-title">MWC (Mobile World Congress)</span><br>
        <span class="event-details">Date: Oct 2026<br>
        Place: KCC/BK Arena<br>
        Cost: 200–1,200 $<br>
        <a href="https://mwc.com" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Africa Tech Summit</span><br>
        <span class="event-details">Date: Feb 2026<br>
        Place: Kigali<br>
        Cost: 400–600 $<br>
        <a href="https://africatechsummit.com" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Africa CEO Forum</span><br>
        <span class="event-details">Date: May 14–15, 2026<br>
        Place: Kigali Convention Centre<br>
        Cost: 1,500–2,500 €<br>
        <a href="https://africaceoforum.com" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Inclusive Fintech Forum</span><br>
        <span class="event-details">Date: June 2026<br>
        Place: KCC<br>
        Cost: 300–500 $<br>
        <a href="https://inclusivefintechforum.com" target="_blank">More Info</a></span></p>`;
        output += `<p><span class="event-title">Aviation Africa Summit</span><br>
        <span class="event-details">Date: Sep 2026<br>
        Place: KCC<br>
        Cost: 500–800 $<br>
        <a href="https://aviationafrica.com" target="_blank">More Info</a></span></p>`;
    }
else if (choice === "Food and Lifestyle") {
    output += "<h3>Gastronomy and Lifestyle Events in Rwanda</h3>";
    output += `<p><span class="event-title">Kigali Coffee Festival</span><br>
    <span class="event-details">Date: June 2026<br>
    Place: Kigali<br>
    Cost: 5,000–10,000 RWF<br>
    <a href="https://kigalicoffeefestival.com" target="_blank">More Info</a></span></p>`;
    output += `<p><span class="event-title">Restaurant Week Kigali</span><br>
    <span class="event-details">Date: Aug 2026<br>
    Place: Across Kigali<br>
    Cost: 15,000–35,000 RWF<br>
    <a href="https://restaurantweekkigali.com" target="_blank">More Info</a></span></p>`;
    output += `<p><span class="event-title">Diner en Blanc</span><br>
    <span class="event-details">Date: Aug 2026<br>
    Place: Secret Location<br>
    Cost: 40–60 $<br>
    <a href="https://dinerenblancrwanda.com" target="_blank">More Info</a></span></p>`;
    output += `<p><span class="event-title">Oktoberfest Kigali</span><br>
    <span class="event-details">Date: Oct 2026<br>
    Place: Various Venues<br>
    Cost: 10,000–25,000 RWF<br>
    <a href="https://oktoberfestkigali.com" target="_blank">More Info</a></span></p>`;
    output += `<p><span class="event-title">Twilight Picnic & Cine</span><br>
    <span class="event-details">Date: Dec 2026<br>
    Place: Kigali<br>
    Cost: 10,000–15,000 RWF<br>
    <a href="https://twilightpicniccine.com" target="_blank">More Info</a></span></p>`;
}

else if (choice === "Conservation and Nature") {
    output += "<h3>Nature and Conservation Events in Rwanda</h3>";
    output += `<p><span class="event-title">Kwita Izina (Gorilla Naming Ceremony)</span><br>
    <span class="event-details">Date: Sep 5, 2026<br>
    Place: Kinigi, Musanze<br>
    Cost: Free (Public Event)<br>
    <a href="https://kwitazinagorillafestival.com" target="_blank">More Info</a></span></p>`;
    output += `<p><span class="event-title">World Environment Day</span><br>
    <span class="event-details">Date: June 5, 2026<br>
    Place: Nationwide<br>
    Cost: Free<br>
    <a href="https://worldenvironmentday.com" target="_blank">More Info</a></span></p>`;
    output += `<p><span class="event-title">Arbor Week (Tree Planting)</span><br>
    <span class="event-details">Date: Nov 2026<br>
    Place: Nationwide<br>
    Cost: Free<br>
    <a href="https://arborweekrwanda.com" target="_blank">More Info</a></span></p>`;
    output += `<p><span class="event-title">International Biodiversity Conference</span><br>
    <span class="event-details">Date: July 30, 2026<br>
    Place: KCC, Kigali<br>
    Cost: 200–400 $<br>
    <a href="https://biodiversityconf.com" target="_blank">More Info</a></span></p>`;
    output += `<p><span class="event-title">Smart City Expo Africa</span><br>
    <span class="event-details">Date: Sep 2026<br>
    Place: Kigali<br>
    Cost: 200–450 $<br>
    <a href="https://smartcityexpoafrica.com" target="_blank">More Info</a></span></p>`;
}

else if (choice === "Religious Events") {
    output += "<h3>Religious and Pilgrimage Events in Rwanda</h3>";
    output += `<p><span class="event-title">Feast of Our Lady of Kibeho</span><br>
    <span class="event-details">Date: Nov 28, 2026<br>
    Place: Kibeho, Nyaruguru<br>
    Cost: Free (Pilgrimage)<br>
    <a href="https://ladyofkibeho.com" target="_blank">More Info</a></span></p>`;
    output += `<p><span class="event-title">Assumption Day Pilgrimage</span><br>
    <span class="event-details">Date: Aug 15, 2026<br>
    Place: Kibeho<br>
    Cost: Free<br>
    <a href="https://assumptionpilgrimage.com" target="_blank">More Info</a></span></p>`;
    output += `<p><span class="event-title">Eid al-Fitr</span><br>
    <span class="event-details">Date: March 20, 2026<br>
    Place: Kigali Pelé Stadium<br>
    Cost: Free<br>
    <a href="https://eidfitrkigali.com" target="_blank">More Info</a></span></p>`;
    output += `<p><span class="event-title">Eid al-Adha</span><br>
    <span class="event-details">Date: May 27, 2026<br>
    Place: Nationwide<br>
    Cost: Free<br>
    <a href="https://eidadharwanda.com" target="_blank">More Info</a></span></p>`;
    output += `<p><span class="event-title">Kibeho Spiritual Retreat</span><br>
    <span class="event-details">Date: Aug 31 – Sep 11, 2026<br>
    Place: Kibeho<br>
    Cost: 100 $+<br>
    <a href="https://kibeho-retreat.com" target="_blank">More Info</a></span></p>`;
}

// Finalize output
document.getElementById("output").innerHTML = output;
}      

 
