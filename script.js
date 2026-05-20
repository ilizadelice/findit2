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
           <p> <a href="${link}" target="_blank">Find a ticket</a></p>
          <p>  <a href="${link}" target="_blank">More Info</a></p>
            
        </div>
    </div>`;
}

// Main function to show events by category
function showEvents(choice) {
    let output = "";
    const backgrounds = {
        "Arts and Culture": "url('https://artgallery.yale.edu/sites/default/files/styles/section_teaser/public/2026-05/2026-EA-ag-doc-3132-0001-pub.jpg?itok=W8THG1JY')",
        "Culture and Traditions": "url('https://cdn.sanity.io/images/y0jkjygh/production/1eaea01d6c84fc8b7d17dca6053da4a4c9ccabbb-1200x750.jpg?w=3840&q=85&fit=clip&auto=format')",
        "Music and Nightlife": "url('images/music.jpg')",
        "Sports and Athletics": "url('images/sports.jpg')",
        "Technology and Business": "url('images/tech.jpg')",
        "Food and Lifestyle": "url('images/food.jpg')",
        "Conservation and Nature": "url('images/nature.jpg')",
        "Religious Events": "url('images/religion.jpg')"
    };
    document.body.style.backgroundImage ="url('" + backgrounds[choice] + "')";

    // CHANGE BACKGROUND
    document.body.style.backgroundImage = backgrounds[choice];
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";


    if (choice === "Arts and Culture") {
        output += "<h3>Rwanda's Creative Hub Events</h3>";
        output += eventHTML("Kigali Fashion Week", "May 30, 2026", "Zaria Court, Kigali", "20,000–50,000 RWF","In English:The Kigali Fashion Week is Rwanda's premier runway event celebrating vibrant African style, local designers, and international couture. This dynamic showcase connects creative talent with global fashion enthusiasts to spotlight the future of contemporary African design.","Mu kinyarwanda:Icyumweru cyimyambarire ya Kigali nicyamamare cyambere cyu Rwanda cyizihiza imiterere nyafurika ikomeye, abashushanya baho, hamwe na couture mpuzamahanga. Iyerekana ryerekana imbaraga zihuza impano zo guhanga hamwe nabakunda imyambarire kwisi kugirango berekane ejo hazaza h'ibishushanyo mbonera bya Afrika.","https://lgeventsrw.sinc.events/","https://www.newtimes.co.rw/article/29618/entertainment/fashion/kigali-fashion-week");
        output += eventHTML("Ubumuntu Arts Festival", "July 13–19, 2026", "Kigali Genocide Memorial Site","Free (Donations)","In english:A cultural festival using theatre, music, and art to promote peace and humanity. Artists from Africa and around the world perform at the Kigali Genocide Memorial. ","Mu kinyarwanda:Umunsi mukuru wumuco ukoresheje ikinamico, umuziki, nubuhanzi mugutezimbere amahoro nubumuntu. Abahanzi baturutse muri Afrika ndetse no kwisi yose baririmbira ku rwibutso rwa Jenoside rwa Kigali.","none and free", "https://ubumuntuartsfestival.com/about-us/");
        output += eventHTML("Rwanda Film Festival", "July 2026", "Kigali / Rubavu", "Free (Public Screening)","In english:A film festival that brings African and international movies to different communities in Rwanda. It is also known for outdoor screenings and supporting local filmmakers.","Mu kinyarwanda:Iserukiramuco rya firime rizana firime nyafurika n’amahanga mumiryango itandukanye mu Rwanda. Azwiho kandi kwerekana hanze no gushyigikira abakora firime.","https://kcjfest.com/Programme","https://en.wikipedia.org/wiki/Rwanda_Film_Festival");
        output += eventHTML("Kigali Photo Festival", "June 2026", "Various Galleries", "Free","In engish:A photography event that displays powerful visual stories through exhibitions and workshops. It promotes African photographers and creative expression.","Mu kinyarwanda:Igikorwa cyo gufotora cyerekana inkuru zikomeye ziboneka binyuze mumurikagurisha n'amahugurwa. Itezimbere abafotozi bo muri Afrika no kwerekana imvugo.","none and free","https://www.kigaliphotofest.com/");
        output += eventHTML("Hobe Rwanda Festival", "September 2026", "Kigali", "10,000–20,000 RWF","In english:A festival celebrating Rwandan culture through music, dance, food, and art. It creates a fun environment for youth and families to enjoy local talent.","Mu kinyarwanda:Ibirori byizihiza umuco wu Rwanda binyuze mumuziki, imbyino, ibiryo, nubuhanzi. Irema ibidukikije bishimishije urubyiruko nimiryango kwishimira impano zaho.","https://egotickets.com/events?country=rw","https://www.visitrwandagorilla.com/hobe-rwanda-festival/");
    }
    else if (choice === "Culture and Traditions") {
        output += "<h3>Rwanda's Core Identity and Cultural Events</h3>";
        output += eventHTML("Umoja Fest", "Dec 26, 2026", "Nature Kigali", "Free – 5,000 RWF","In english:A community festival focused on unity, friendship, and youth entertainment. It combines music, games, and cultural activities in a lively atmosphere.","Mu kinyarwanda:Umuganda rusange wibanze ku bumwe, ubucuti, no kwidagadura mu rubyiruko. Ihuza umuziki, imikino, nibikorwa byumuco mubihe byiza.","https://www.eventbrite.com/e/umoja-fest-2025-tickets-1530194405659","https://egotickets.com/events/umoja-fest-2025");
        output += eventHTML("Umuganura (Harvest Day)", "Aug 7, 2026", "Nationwide", "Free (Public Holiday)", "In english:A national celebration that thanks farmers and honors Rwanda’s harvest traditions. People share food, cultural performances, and community activities.","Mu kinyarwanda:Umunsi mukuru wigihugu ushimira abahinzi kandi wubaha imigenzo yo gusarura u Rwanda. Abantu basangira ibiryo, ibikorwa byumuco, nibikorwa byabaturage.","free and public","https://umuganura.com");
        output += eventHTML("National Liberation Day", "July 4, 2026", "Amahoro Stadium", "Free", "In english:A public holiday celebrating Rwanda’s liberation and progress. The day includes speeches, patriotic events, and national celebrations.","Mu kinyarwanda:.Umunsi mukuru rusange wizihiza kwibohora kwu Rwanda niterambere. Umunsi urimo disikuru, ibirori byo gukunda igihugu, no kwizihiza igihugu.","free and public","https://en.wikipedia.org/wiki/Liberation_Day_(Rwanda)");
        output += eventHTML("Umuganda (Community Service)", "Last Saturday of every month", "Local Communities", "Free (Respectful Entry)","In english:A monthly community service activity where citizens clean and improve their neighborhoods together. It promotes teamwork, responsibility, and national unity.","Mu kinyarwanda:Igikorwa rusange cya buri kwezi aho abaturage basukura kandi batezimbere aho batuye hamwe. Itezimbere gukorera hamwe, inshingano, nubumwe bwigihugu."," free and public","https://www.allaboutrwanda.com/umuganda.html");
        output += eventHTML("Kwibuka (Genocide Remembrance)", "April 7, 2026 – July 4, 2026", "Memorial Sites", "Free (Respectful Entry)", "In english:A remembrance period honoring victims of the 1994 Genocide against the Tutsi. It includes memorial ceremonies, discussions, and moments of reflection.","Mu kinyarwanda:Igihe cyo kwibuka cyubaha abazize Jenoside yakorewe Abatutsi mu 1994. Harimo imihango yo kwibuka, ibiganiro, nibihe byo gutekereza.","free and public","https://genocidearchiverwanda.org.rw/category/Remembrance");
    }
    else if (choice === "Music and Nightlife") {
        output += "<h3>Concerts and Festivals in Rwanda</h3>";
        output += eventHTML("Kigali Up Music Festival", "July 10, 2026", "Kigali", "10,000–25,000 RWF","In english:A popular music festival featuring live African music, dance, and performances. It supports local artists and brings together music lovers.","Mu kinyarwanda:.Umunsi mukuru wumuziki uzwi cyane urimo umuziki nyafurika, imbyino, nibikorwa. Ifasha abahanzi baho kandi ihuza abakunzi ba muzika.","https://seatgeek.com/venues/kigali-up-festival/tickets","https://www.ishyoartscentre.org/kigali-up-fesival/");
        output += eventHTML("Kivu Fest", "July 10, 2026", "Lake Kivu, Rubavu", "10,000–30,000 RWF","In english:A beachside festival held near Lake Kivu with music, parties, and entertainment. It attracts visitors looking for fun and nightlife experiences.","Mu kinyarwanda:Ibirori byo ku nkombe byabereye hafi yikiyaga cya Kivu hamwe numuziki, ibirori, n'imyidagaduro. Ikurura abashyitsi bashaka uburambe kandi bwubuzima bwijoro.","https://rgtickets.com/event/kivu-fest-sunset-music-fest/","https://kivufest.com");
        output += eventHTML("Misozi Music Festival", "Dec 2026", "Kigali", "5,000–15,000 RWF","In english:A youth-focused music event with live concerts, DJs, and modern entertainment. It creates an exciting atmosphere for young audiences.","Mu kinyarwanda:Ibirori byumuziki byibanda ku rubyiruko hamwe n'ibitaramo bya Live, aba DJ, n'imyidagaduro igezweho. Irema umwuka ushimishije kubakiri bato.","https://egotickets.com/events?country=rw","https://misozifest.com");
        output += eventHTML("Jazz Junction", "Quarterly", "Kigali Hotels", "20,000–40,000 RWF","In english:A classy music event featuring jazz performances from local and international artists. It is often hosted in hotels and elegant venues.","Mu kinyarwanda:Igikorwa cyumuziki cyiza kirimo ibitaramo bya jazz byabahanzi baho ndetse n’amahanga. Bikunze kwakirwa mumahoteri nibibuga byiza.","https://rgtickets.com/event/kigali-jazz-junction-lovers-edition-2023/","https://jazzjunction.com");
        output += eventHTML("Chop Life Kigali", "Twice a month", "Various venues", "10,000–20,000 RWF","In english:A vibrant nightlife event series with music, dancing, and social entertainment. It is popular among young people in Kigali.","Mu kinyarwanda:Ibirori byubuzima bwijoro hamwe numuziki, kubyina, hamwe nimyidagaduro. Irazwi cyane mu rubyiruko muri Kigali.","https://www.ticqet.rw/?direct=true","https://choplifekigali.com");
    }
    else if (choice === "Sports and Athletics") {
        output += "<h3>Rwanda's Athletic Events</h3>";
        output += eventHTML("Tour de Rwanda", "Feb 2026", "Nationwide, ends in Kigali", "Free (Spectating)","In english:An international cycling competition that takes place across Rwanda’s hills and cities. It attracts professional cyclists from around the world.","In kinyarwanda:Amarushanwa mpuzamahanga yo gusiganwa ku magare abera hakurya y'imisozi n'u Rwanda. Ikurura abanyamagare babigize umwuga baturutse kwisi.","https://www.tourdurwanda.rw/");
        output += eventHTML("Kigali Peace Marathon", "May 2026", "Kigali", "10,000 RWF (Registration)","In english:A marathon promoting peace, fitness, and unity through sports. Runners from different countries participate in the race every year.","In kinyarwanda:Marato iteza imbere amahoro, ubuzima bwiza, nubumwe binyuze muri siporo. Abiruka baturutse mu bihugu bitandukanye bitabira isiganwa buri mwaka.", "https://peace-marathon.com");
        output += eventHTML("Basketball Africa League", "May 2026", "BK Arena", "5,000–50,000 RWF","In english:A continental basketball competition featuring top African clubs. Games in Rwanda bring excitement to basketball fans at BK Arena.","In kinyarwanda:Amarushanwa ya basketball kumugabane urimo amakipe akomeye yo muri Afrika. Imikino mu Rwanda izana umunezero kubakunzi ba basketball kuri BK Arena.", "https://basketballafricaleague.com");
        output += eventHTML("Ironman 70.3 Rwanda", "Aug 2026", "Rubavu", "250–350 $","In english:A challenging international triathlon involving swimming, cycling, and running. Athletes compete while enjoying Rwanda’s beautiful scenery.","In kinyarwanda:Triathlon mpuzamahanga itoroshye irimo koga, gusiganwa ku magare, no kwiruka. Abakinnyi barushanwe mugihe bishimira ibyiza byu Rwanda.","https://ironman.com/rwanda");
        output += eventHTML("Rwanda Gorilla Rally", "Sep 2026", "Gako/Kigali", "Free (Spectating)", "In english:A motorsport event featuring rally cars racing through different terrains in Rwanda. It attracts racing fans and skilled drivers.","In kinyarwanda:Ibirori bya motorsport byerekana imodoka ziterana zisiganwa mu turere dutandukanye mu Rwanda. Ikurura abakunzi basiganwa nabashoferi babahanga.","https://gorillarallyrwanda.com");
    }
    else if (choice === "Technology and Business") {
        output += "<h3>Business and Tech Events in Rwanda</h3>";
        output += eventHTML("MWC (Mobile World Congress)", "Oct 2026", "KCC/BK Arena", "200–1,200 $","In english:A global technology conference focused on mobile innovation and digital transformation. Tech companies and experts gather to share ideas and new products.","In kinyarwanda:Inama y’ikoranabuhanga ku isi yibanze ku guhanga udushya no guhindura imibare. Ibigo byikoranabuhanga ninzobere biraterana kugirango dusangire ibitekerezo nibicuruzwa bishya.", "https://www.mwckigali.com/");
        output += eventHTML("Africa Tech Summit", "Feb 2026", "Kigali", "400–600 $","In english:A major business and technology event connecting startups, investors, and entrepreneurs. It highlights innovation and digital growth in Africa.","In kinyarwanda:Igikorwa gikomeye cyubucuruzi nikoranabuhanga rihuza abatangiye, abashoramari, na ba rwiyemezamirimo. Irerekana udushya niterambere rya digitale muri Afrika.", "https://africatechsummit.com");
        output += eventHTML("Africa CEO Forum", "May 14–15, 2026", "Kigali Convention Centre", "1,500–2,500 €","In english:An international business conference bringing together African leaders and company executives. Discussions focus on investment, leadership, and economic growth.","In kinyarwanda:Inama mpuzamahanga yubucuruzi ihuza abayobozi ba Afrika n'abayobozi b'ibigo. Ibiganiro byibanda ku ishoramari, ubuyobozi, no kuzamuka mu bukungu.","https://africaceoforum.com");
        output += eventHTML("Inclusive Fintech Forum", "June 2026", "KCC", "300–500 $","In english:A fintech event exploring digital finance and financial inclusion in Africa. Experts discuss technology solutions for banking and online payments.","In kinyarwanda:Ibikorwa bya fintech byerekana imari ya digitale no kwinjiza imari muri Afrika. Abahanga baganira ku gisubizo cy’ikoranabuhanga mu kwishyura banki no kuri interineti.","https://inclusivefintechforum.com");
        output += eventHTML("Aviation Africa Summit", "Sep 2026", "KCC", "500–800 $","In english:An aviation conference discussing air transport, tourism, and airline development in Africa. It connects industry leaders and aviation professionals.","In kinyarwanda:Inama yindege iganira ku bwikorezi bwo mu kirere, ubukerarugendo, n’iterambere ry’indege muri Afurika. Ihuza abayobozi binganda ninzobere mu by'indege.", "https://aviationafrica.com");
    }
    else if (choice === "Food and Lifestyle") {
        output += "<h3>Gastronomy and Lifestyle Events in Rwanda</h3>";
        output += eventHTML("Kigali Coffee Festival", "June 2026", "Kigali", "5,000–10,000 RWF","In english:A celebration of Rwanda’s famous coffee industry with tasting sessions and exhibitions. Visitors learn about coffee production and local brands.","Mu kinyarwanda:Ibirori byo kwamamariza ikawa izwi cyane mu Rwanda hamwe no kuryoherwa no kwerekana. Abashyitsi biga kubyerekeye ikawa n'ibirango byaho.", "https://africacoffeeteaexpo.com/");
        output += eventHTML("Restaurant Week Kigali", "Aug 2026", "Across Kigali", "15,000–35,000 RWF","In english:A food event where restaurants offer special menus and dining experiences. It encourages people to explore Kigali’s food scene.","In kinyarwanda:Ibirori byokurya aho resitora zitanga menus zidasanzwe hamwe nuburambe bwo kurya. Irashishikariza abantu gushakisha ibiryo bya Kigali.", "https://restaurantweekkigali.com");
        output += eventHTML("Diner en Blanc", "Aug 2026", "Secret Location", "40–60 $","In english:An elegant outdoor dinner where guests dress in white and gather at a secret location. The event combines dining, music, and social experiences.","In kinyarwanda:Ifunguro ryiza ryo hanze hanze aho abashyitsi bambara imyenda yera bagateranira ahantu hihishe. Ibirori bihuza ibyokurya, umuziki, hamwe nubunararibonye.", "https://dinerenblancrwanda.com");
        output += eventHTML("Oktoberfest Kigali", "Oct 2026", "Various Venues", "10,000–25,000 RWF", "In english:A festive event inspired by German Oktoberfest celebrations with food, drinks, and live entertainment. It creates a lively social atmosphere.","In kinyarwanda:Ibirori byatewe no kwizihiza Ubudage Oktoberfest hamwe nibiryo, ibinyobwa, n'imyidagaduro ibaho. Irema umwuka mwiza.","https://oktoberfestkigali.com");
        output += eventHTML("Twilight Picnic & Cine", "Dec 2026", "Kigali", "10,000–15,000 RWF","In english:An outdoor event combining picnics, movies, and music under the evening sky. Families and friends gather to relax and enjoy entertainment.","In kinyarwanda:Ibirori byo hanze bihuza picnike, firime, numuziki munsi yikirere nimugoroba. Imiryango n'inshuti bateranira kuruhuka no kwishimira imyidagaduro.", "https://twilightpicniccine.com");
    }
    else if (choice === "Conservation and Nature") {
        output += "<h3>Nature and Conservation Events in Rwanda</h3>";
        output += eventHTML("Kwita Izina (Gorilla Naming Ceremony)", "Sep 5, 2026", "Kinigi, Musanze", "Free (Public Event)","In english:A famous conservation event where newborn mountain gorillas are officially named. It promotes wildlife protection and eco-tourism in Rwanda.","In kinyarwanda:Igikorwa kizwi cyane cyo kubungabunga aho ingagi zo mu misozi zavutse zitwa ku mugaragaro. Itera imbere kurengera inyamaswa n’ubukerarugendo bushingiye ku bidukikije mu Rwanda.", "https://kwitaizina.rw/");
        output += eventHTML("World Environment Day", "June 5, 2026", "Nationwide", "Free", "In english:An environmental awareness event encouraging people to protect nature and reduce pollution. Activities include cleanups and educational programs.","In kinyarwanda:Igikorwa cyo gukangurira ibidukikije gushishikariza abantu kurengera ibidukikije no kugabanya umwanda. Ibikorwa birimo isuku na gahunda zuburezi.","https://worldenvironmentday.com");
        output += eventHTML("Arbor Week (Tree Planting)", "Nov 2026", "Nationwide", "Free","In english:A nationwide environmental campaign focused on planting trees and protecting forests. Communities participate in conservation activities together.","In kinyarwanda:Igikorwa cyo kubungabunga ibidukikije mu gihugu hose cyibanze ku gutera ibiti no kurinda amashyamba. Abaturage bitabira ibikorwa byo kubungabunga hamwe.", "https://arborweekrwanda.com");
        output += eventHTML("International Biodiversity Conference", "July 30, 2026", "KCC, Kigali", "200–400 $","In english:A conference discussing environmental protection and biodiversity conservation. Scientists and leaders share ideas about protecting ecosystems.","In kinyarwanda:Inama ivuga ku kurengera ibidukikije no kubungabunga urusobe rw’ibinyabuzima. Abahanga n'abayobozi basangiye ibitekerezo bijyanye no kurengera urusobe rw'ibinyabuzima.", "https://biodiversityconf.com");
        output += eventHTML("Smart City Expo Africa", "Sep 2026", "Kigali", "200–450 $","In english:An innovation event exploring sustainable cities and modern technology solutions. It focuses on urban development, transport, and green living.","In kinyarwanda:Igikorwa cyo guhanga udushya twiga imijyi irambye nibisubizo byikoranabuhanga bigezweho. Yibanze ku iterambere ryimijyi, ubwikorezi, nubuzima bubisi.", "https://smartcityexpoafrica.com");
    }
    else if (choice === "Religious Events") {
        output += "<h3>Religious and Pilgrimage Events in Rwanda</h3>";
        output += eventHTML("Feast of Our Lady of Kibeho", "Nov 28, 2026", "Kibeho, Nyaruguru", "Free (Pilgrimage)","In english:A Catholic pilgrimage event honoring the Marian apparitions in Kibeho. Thousands of believers gather for prayer and worship.","In kinyarwanda:Ibirori byo gutembera gatolika byubahiriza ibonekerwa rya Marian i Kibeho. Ibihumbi by'abizera bateranira gusenga no gusenga.", "https://en.wikipedia.org/wiki/Our_Lady_of_Kibeho");
        output += eventHTML("Assumption Day Pilgrimage", "Aug 15, 2026", "Kibeho", "Free","In english:A religious gathering celebrating the Assumption of Mary. Pilgrims travel to Kibeho for prayers, songs, and spiritual reflection.","In kinyarwanda:Igiterane cy’amadini cyizihiza Ifatwa rya Mariya. Ingenzi zijya i Kibeho gusenga, indirimbo, no gutekereza ku mwuka.","https://assumptionpilgrimage.com");
        output += eventHTML("Eid al-Fitr", "March 20, 2026", "Kigali Pelé Stadium", "Free","In english:A Muslim celebration marking the end of Ramadan fasting. Families and communities gather for prayers and celebrations.","In kinyarwanda:Ibirori byabayisilamu biranga igisibo cya Ramazani. Imiryango hamwe nabaturage bateranira gusenga no kwizihiza.", "https://eidfitrkigali.com");
        output += eventHTML("Eid al-Adha", "May 27, 2026", "Nationwide", "Free","In english:An important Islamic festival focused on sacrifice, charity, and faith. Muslims celebrate with prayers and family gatherings.","In kinyarwanda:Umunsi mukuru ukomeye wa kisilamu wibanze ku bitambo, gufasha, no kwizera. Abayisilamu bizihiza amasengesho hamwe n’iteraniro ryimiryango.", "https://eidadharwanda.com");
        output += eventHTML("Kibeho Spiritual Retreat", "Aug 31 – Sep 11, 2026", "Kibeho", "100 $+","In english:A spiritual retreat offering prayer sessions, reflection, and religious teachings. Visitors attend for personal growth and peace.","In kinyarwanda:Umwiherero wo mu mwuka utanga amasengesho, gutekereza, hamwe n’inyigisho z’idini. Abashyitsi bitabira iterambere ryumuntu n'amahoro.", "https://kibeho-retreat.com");
    }
    else {
        output = "<p>No events available for this category.</p>";
    }

    // Footer & support contact
    output += `<hr>
        <p class="support-contact">For any problem, please contact us at <a href="mailto:ilizadelice@gmail.com">ilizadelice@gmail.com</a>or <a href="mailo:0791810091">0791810091</a> </p>`;

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
