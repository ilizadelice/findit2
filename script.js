// script.js

// Function to scroll to main content and show it
function goToContinue() {
    const mainContent = document.getElementById('mainContent');
    const heroSection = document.getElementById('heroSection');
    const aboutSection = document.getElementById('aboutSection');
    
    // Hide hero and about sections
    heroSection.style.display = 'none';
    aboutSection.style.display = 'none';
    
    // Show main content
    mainContent.classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to generate a single event HTML in card style
function eventHTML(title, date, place, cost,englishdescription,kinyarwandadescription, link) {
    return `<div class="event-card event">
        <span class="event-title">${title}</span><br>
        <div class="event-details">
            Date: ${date}<br>
            Place: ${place}<br>
            Cost: ${cost}<br>
            ${englishdescription ? `<p class="event-description english">${englishdescription}</p>` : ''}
            ${kinyarwandadescription ? `<p class="event-description kinyarwanda">${kinyarwandadescription}</p>` : ''}
            <a href="${link}" target="_blank">More Info</a>
            
        </div>
    </div>`;
}

// Main function to show events by category
function showEvents(choice) {
    let output = "";

    if (choice === "Arts and Culture") {
        output += "<h3>Rwanda's Creative Hub Events</h3>";
        output += eventHTML("Kigali Fashion Week", "May 30, 2026", "Zaria Court, Kigali", "20,000–50,000 RWF","In English:The Kigali Fashion Week is Rwanda's premier runway event celebrating vibrant African style, local designers, and international couture. This dynamic showcase connects creative talent with global fashion enthusiasts to spotlight the future of contemporary African design.","Mu kinyarwanda:Icyumweru cyimyambarire ya Kigali nicyamamare cyambere cyu Rwanda cyizihiza imiterere nyafurika ikomeye, abashushanya baho, hamwe na couture mpuzamahanga. Iyerekana ryerekana imbaraga zihuza impano zo guhanga hamwe nabakunda imyambarire kwisi kugirango berekane ejo hazaza h'ibishushanyo mbonera bya Afrika.","https://www.newtimes.co.rw/article/29618/entertainment/fashion/kigali-fashion-week");
        output += eventHTML("Ubumuntu Arts Festival", "July 13–19, 2026", "Kigali Genocide Memorial Site","Free (Donations)","In english:A cultural festival using theatre, music, and art to promote peace and humanity. Artists from Africa and around the world perform at the Kigali Genocide Memorial. ","Mu kinyarwanda:Umunsi mukuru wumuco ukoresheje ikinamico, umuziki, nubuhanzi mugutezimbere amahoro nubumuntu. Abahanzi baturutse muri Afrika ndetse no kwisi yose baririmbira ku rwibutso rwa Jenoside rwa Kigali.", "https://ubumuntuartsfestival.com/about-us/");
        output += eventHTML("Rwanda Film Festival", "July 2026", "Kigali / Rubavu", "Free (Public Screening)","In english:A film festival that brings African and international movies to different communities in Rwanda. It is also known for outdoor screenings and supporting local filmmakers.","Mu kinyarwanda:Iserukiramuco rya firime rizana firime nyafurika n’amahanga mumiryango itandukanye mu Rwanda. Azwiho kandi kwerekana hanze no gushyigikira abakora firime.","https://en.wikipedia.org/wiki/Rwanda_Film_Festival");
        output += eventHTML("Kigali Photo Festival", "June 2026", "Various Galleries", "Free","In engish:A photography event that displays powerful visual stories through exhibitions and workshops. It promotes African photographers and creative expression.","Mu kinyarwanda:Igikorwa cyo gufotora cyerekana inkuru zikomeye ziboneka binyuze mumurikagurisha n'amahugurwa. Itezimbere abafotozi bo muri Afrika no kwerekana imvugo.","https://www.kigaliphotofest.com/");
        output += eventHTML("Hobe Rwanda Festival", "September 2026", "Kigali", "10,000–20,000 RWF","In english:A festival celebrating Rwandan culture through music, dance, food, and art. It creates a fun environment for youth and families to enjoy local talent.","Mu kinyarwanda:Ibirori byizihiza umuco wu Rwanda binyuze mumuziki, imbyino, ibiryo, nubuhanzi. Irema ibidukikije bishimishije urubyiruko nimiryango kwishimira impano zaho.","https://www.visitrwandagorilla.com/hobe-rwanda-festival/");
    }
    else if (choice === "Culture and Traditions") {
        output += "<h3>Rwanda's Core Identity and Cultural Events</h3>";
        output += eventHTML("Umoja Fest", "Dec 26, 2026", "Nature Kigali", "Free – 5,000 RWF","In english:A community festival focused on unity, friendship, and youth entertainment. It combines music, games, and cultural activities in a lively atmosphere.","Mu kinyarwanda:Umuganda rusange wibanze ku bumwe, ubucuti, no kwidagadura mu rubyiruko. Ihuza umuziki, imikino, nibikorwa byumuco mubihe byiza.","https://egotickets.com/events/umoja-fest-2025");
        output += eventHTML("Umuganura (Harvest Day)", "Aug 7, 2026", "Nationwide", "Free (Public Holiday)", "In english:A national celebration that thanks farmers and honors Rwanda’s harvest traditions. People share food, cultural performances, and community activities.","Mu kinyarwanda:Umunsi mukuru wigihugu ushimira abahinzi kandi wubaha imigenzo yo gusarura u Rwanda. Abantu basangira ibiryo, ibikorwa byumuco, nibikorwa byabaturage.","https://umuganura.com");
        output += eventHTML("National Liberation Day", "July 4, 2026", "Amahoro Stadium", "Free", "In english:A public holiday celebrating Rwanda’s liberation and progress. The day includes speeches, patriotic events, and national celebrations.","Mu kinyarwanda:.Umunsi mukuru rusange wizihiza kwibohora kwu Rwanda niterambere. Umunsi urimo disikuru, ibirori byo gukunda igihugu, no kwizihiza igihugu.","https://en.wikipedia.org/wiki/Liberation_Day_(Rwanda)");
        output += eventHTML("Umuganda (Community Service)", "Last Saturday of every month", "Local Communities", "Free (Respectful Entry)","In english:A monthly community service activity where citizens clean and improve their neighborhoods together. It promotes teamwork, responsibility, and national unity.","Mu kinyarwanda:Igikorwa rusange cya buri kwezi aho abaturage basukura kandi batezimbere aho batuye hamwe. Itezimbere gukorera hamwe, inshingano, nubumwe bwigihugu.", "https://www.allaboutrwanda.com/umuganda.html");
        output += eventHTML("Kwibuka (Genocide Remembrance)", "April 7, 2026 – July 4, 2026", "Memorial Sites", "Free (Respectful Entry)", "In english:A remembrance period honoring victims of the 1994 Genocide against the Tutsi. It includes memorial ceremonies, discussions, and moments of reflection.","Mu kinyarwanda:Igihe cyo kwibuka cyubaha abazize Jenoside yakorewe Abatutsi mu 1994. Harimo imihango yo kwibuka, ibiganiro, nibihe byo gutekereza.","https://genocidearchiverwanda.org.rw/category/Remembrance");
    }
    else if (choice === "Music and Nightlife") {
        output += "<h3>Concerts and Festivals in Rwanda</h3>";
        output += eventHTML("Kigali Up Music Festival", "July 10, 2026", "Kigali", "10,000–25,000 RWF","In english:A popular music festival featuring live African music, dance, and performances. It supports local artists and brings together music lovers.","Mu kinyarwanda:.","https://www.ishyoartscentre.org/kigali-up-fesival/");
        output += eventHTML("Kivu Fest", "July 10, 2026", "Lake Kivu, Rubavu", "10,000–30,000 RWF","In english:A beachside festival held near Lake Kivu with music, parties, and entertainment. It attracts visitors looking for fun and nightlife experiences.","Mu kinyarwanda:","https://kivufest.com");
        output += eventHTML("Misozi Music Festival", "Dec 2026", "Kigali", "5,000–15,000 RWF","In english:A youth-focused music event with live concerts, DJs, and modern entertainment. It creates an exciting atmosphere for young audiences.","Mu kinyarwanda:","https://misozifest.com");
        output += eventHTML("Jazz Junction", "Quarterly", "Kigali Hotels", "20,000–40,000 RWF","In english:A classy music event featuring jazz performances from local and international artists. It is often hosted in hotels and elegant venues.","Mu kinyarwanda:","https://jazzjunction.com");
        output += eventHTML("Chop Life Kigali", "Twice a month", "Various venues", "10,000–20,000 RWF","In english:A vibrant nightlife event series with music, dancing, and social entertainment. It is popular among young people in Kigali.","Mu kinyarwanda:","https://choplifekigali.com");
    }
    else if (choice === "Sports and Athletics") {
        output += "<h3>Rwanda's Athletic Events</h3>";
        output += eventHTML("Tour de Rwanda", "Feb 2026", "Nationwide, ends in Kigali", "Free (Spectating)","In english:An international cycling competition that takes place across Rwanda’s hills and cities. It attracts professional cyclists from around the world.","In kinyarwanda:","https://www.tourdurwanda.rw/");
        output += eventHTML("Kigali Peace Marathon", "May 2026", "Kigali", "10,000 RWF (Registration)","In english:A marathon promoting peace, fitness, and unity through sports. Runners from different countries participate in the race every year.","In kinyarwanda:", "https://peace-marathon.com");
        output += eventHTML("Basketball Africa League", "May 2026", "BK Arena", "5,000–50,000 RWF","In english:A continental basketball competition featuring top African clubs. Games in Rwanda bring excitement to basketball fans at BK Arena.","In kinyarwanda:", "https://basketballafricaleague.com");
        output += eventHTML("Ironman 70.3 Rwanda", "Aug 2026", "Rubavu", "250–350 $","In english:A challenging international triathlon involving swimming, cycling, and running. Athletes compete while enjoying Rwanda’s beautiful scenery.","In kinyarwanda:","https://ironman.com/rwanda");
        output += eventHTML("Rwanda Gorilla Rally", "Sep 2026", "Gako/Kigali", "Free (Spectating)", "In english:A motorsport event featuring rally cars racing through different terrains in Rwanda. It attracts racing fans and skilled drivers.","In kinyarwanda:","https://gorillarallyrwanda.com");
    }
    else if (choice === "Technology and Business") {
        output += "<h3>Business and Tech Events in Rwanda</h3>";
        output += eventHTML("MWC (Mobile World Congress)", "Oct 2026", "KCC/BK Arena", "200–1,200 $","In english:A global technology conference focused on mobile innovation and digital transformation. Tech companies and experts gather to share ideas and new products.","In kinyarwanda:", "https://www.mwckigali.com/");
        output += eventHTML("Africa Tech Summit", "Feb 2026", "Kigali", "400–600 $","In english:A major business and technology event connecting startups, investors, and entrepreneurs. It highlights innovation and digital growth in Africa.","In kinyarwanda:", "https://africatechsummit.com");
        output += eventHTML("Africa CEO Forum", "May 14–15, 2026", "Kigali Convention Centre", "1,500–2,500 €","In english:An international business conference bringing together African leaders and company executives. Discussions focus on investment, leadership, and economic growth.","In kinyarwanda:","https://africaceoforum.com");
        output += eventHTML("Inclusive Fintech Forum", "June 2026", "KCC", "300–500 $","In english:A fintech event exploring digital finance and financial inclusion in Africa. Experts discuss technology solutions for banking and online payments.","In kinyarwanda:","https://inclusivefintechforum.com");
        output += eventHTML("Aviation Africa Summit", "Sep 2026", "KCC", "500–800 $","In english:An aviation conference discussing air transport, tourism, and airline development in Africa. It connects industry leaders and aviation professionals.","In kinyarwanda:", "https://aviationafrica.com");
    }
    else if (choice === "Food and Lifestyle") {
        output += "<h3>Gastronomy and Lifestyle Events in Rwanda</h3>";
        output += eventHTML("Kigali Coffee Festival", "June 2026", "Kigali", "5,000–10,000 RWF","In english:A celebration of Rwanda’s famous coffee industry with tasting sessions and exhibitions. Visitors learn about coffee production and local brands.","In kinyarwanda:", "https://africacoffeeteaexpo.com/");
        output += eventHTML("Restaurant Week Kigali", "Aug 2026", "Across Kigali", "15,000–35,000 RWF","In english:A food event where restaurants offer special menus and dining experiences. It encourages people to explore Kigali’s food scene.","In kinyarwanda:", "https://restaurantweekkigali.com");
        output += eventHTML("Diner en Blanc", "Aug 2026", "Secret Location", "40–60 $","In english:An elegant outdoor dinner where guests dress in white and gather at a secret location. The event combines dining, music, and social experiences.","In kinyarwanda:", "https://dinerenblancrwanda.com");
        output += eventHTML("Oktoberfest Kigali", "Oct 2026", "Various Venues", "10,000–25,000 RWF", "In english:A festive event inspired by German Oktoberfest celebrations with food, drinks, and live entertainment. It creates a lively social atmosphere.","In kinyarwanda:","https://oktoberfestkigali.com");
        output += eventHTML("Twilight Picnic & Cine", "Dec 2026", "Kigali", "10,000–15,000 RWF","In english:An outdoor event combining picnics, movies, and music under the evening sky. Families and friends gather to relax and enjoy entertainment.","In kinyarwanda:", "https://twilightpicniccine.com");
    }
    else if (choice === "Conservation and Nature") {
        output += "<h3>Nature and Conservation Events in Rwanda</h3>";
        output += eventHTML("Kwita Izina (Gorilla Naming Ceremony)", "Sep 5, 2026", "Kinigi, Musanze", "Free (Public Event)","In english:A famous conservation event where newborn mountain gorillas are officially named. It promotes wildlife protection and eco-tourism in Rwanda.","In kinyarwanda:", "https://kwitaizina.rw/");
        output += eventHTML("World Environment Day", "June 5, 2026", "Nationwide", "Free", "In english:An environmental awareness event encouraging people to protect nature and reduce pollution. Activities include cleanups and educational programs.","In kinyarwanda:","https://worldenvironmentday.com");
        output += eventHTML("Arbor Week (Tree Planting)", "Nov 2026", "Nationwide", "Free","In english:A nationwide environmental campaign focused on planting trees and protecting forests. Communities participate in conservation activities together.","In kinyarwanda:", "https://arborweekrwanda.com");
        output += eventHTML("International Biodiversity Conference", "July 30, 2026", "KCC, Kigali", "200–400 $","In english:A conference discussing environmental protection and biodiversity conservation. Scientists and leaders share ideas about protecting ecosystems.","In kinyarwanda:", "https://biodiversityconf.com");
        output += eventHTML("Smart City Expo Africa", "Sep 2026", "Kigali", "200–450 $","In english:An innovation event exploring sustainable cities and modern technology solutions. It focuses on urban development, transport, and green living.","In kinyarwanda:", "https://smartcityexpoafrica.com");
    }
    else if (choice === "Religious Events") {
        output += "<h3>Religious and Pilgrimage Events in Rwanda</h3>";
        output += eventHTML("Feast of Our Lady of Kibeho", "Nov 28, 2026", "Kibeho, Nyaruguru", "Free (Pilgrimage)","In english:A Catholic pilgrimage event honoring the Marian apparitions in Kibeho. Thousands of believers gather for prayer and worship.","In kinyarwanda:", "https://en.wikipedia.org/wiki/Our_Lady_of_Kibeho");
        output += eventHTML("Assumption Day Pilgrimage", "Aug 15, 2026", "Kibeho", "Free","In english:A religious gathering celebrating the Assumption of Mary. Pilgrims travel to Kibeho for prayers, songs, and spiritual reflection.","In kinyarwanda:","https://assumptionpilgrimage.com");
        output += eventHTML("Eid al-Fitr", "March 20, 2026", "Kigali Pelé Stadium", "Free","In english:A Muslim celebration marking the end of Ramadan fasting. Families and communities gather for prayers and celebrations.","In kinyarwanda:", "https://eidfitrkigali.com");
        output += eventHTML("Eid al-Adha", "May 27, 2026", "Nationwide", "Free","In english:An important Islamic festival focused on sacrifice, charity, and faith. Muslims celebrate with prayers and family gatherings.","In kinyarwanda:", "https://eidadharwanda.com");
        output += eventHTML("Kibeho Spiritual Retreat", "Aug 31 – Sep 11, 2026", "Kibeho", "100 $+","In english:A spiritual retreat offering prayer sessions, reflection, and religious teachings. Visitors attend for personal growth and peace.","In kinyarwanda:", "https://kibeho-retreat.com");
    }
    else {
        output = "<p>No events available for this category.</p>";
    }

    // Footer & support contact
    output += `<hr>
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
