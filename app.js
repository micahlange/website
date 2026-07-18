const img = {
  chicagoHero: "assets/photos/chicago-hero.jpeg",
  winter: "assets/photos/winter.png",
  gym: "assets/photos/gym.jpeg",
  cousins: "assets/photos/cousins.jpg",
  mustache: "assets/photos/mustache.jpeg",
  running: "assets/photos/running.jpeg",
  tennis: "assets/photos/tennis.jpeg",
  canada: "assets/photos/canada.jpeg",
  nyc: "assets/photos/nyc.jpeg",
  dog: "assets/photos/dog.jpeg",
  baku: "assets/photos/baku.jpeg",
  singapore: "assets/photos/singapore.jpeg",
  marathon: "assets/photos/marathon.jpeg",
  chicago2024: "assets/photos/chicago2024.jpg",
  japan1: "assets/photos/japan1.jpeg",
  japan2: "assets/photos/japan2.jpeg",
  japan3: "assets/photos/japan3.jpeg",
  scotland: "assets/photos/scotland.jpeg",
  recap2023: "assets/photos/recap2023.jpg",
  europe1: "assets/photos/europe1.jpeg",
  europe2: "assets/photos/europe2.jpeg",
  europe3: "assets/photos/europe3.jpeg",
  team1: "assets/photos/team1.jpeg",
  team2: "assets/photos/team2.jpeg",
  team3: "assets/photos/team3.jpeg",
  team4: "assets/photos/team4.jpg"
};

const years = {
  2026: {
    status: "In construction",
    intro: "The 2026 page is being built as life starts pointing toward Austin. Notes, photos, and the official recap will land here as the year takes shape.",
    feature: img.chicagoHero,
    stories: [
      ["Soon", "In construction", "This page is reserved for the next chapter. Expect Austin, fresh routines, new trips, and probably at least one ambitious plan that gets revised in public.", []]
    ]
  },
  2025: {
    status: "Live",
    intro: "This year has brought exceptional fun at home in Chicago as well as on the road. The first half built a base for athletic aspirations; the back half brought a triathlon, two marathons, plenty of travel, and the beginning of a move toward Austin.",
    feature: img.winter,
    stories: [
      ["01", "Bundled Up in Chicago", "I live in the Gold Coast neighborhood of Chicago, as I have for the last 3 years. I love the balance of restaurants and shops on top of basic life amenities. It's easy to get to work and is also home to several good friends of mine.", [img.winter]],
      ["02", "Indoor Training", "During the winter months, I've spent a good amount of time at my nearby gym. I am training for a triathlon and two marathons. Starting training early has been good for me physically and mentally.", [img.gym]],
      ["03", "The Third Cousin Trip", "My cousins and I returned to KC for a third trip. We visited the Nelson-Atkins Museum of Art and the Negro Leagues Baseball Museum. This trip is a great time to reconnect with family.", [img.cousins]],
      ["04", "Mustache Micah", "Yes, I got a mustache. Reviews have been mixed.", [img.mustache]],
      ["05", "Running", "The Chicago Half Marathon was my first real organized race. I didn't know what to expect, but ended up very happy with my time of 1:34. My work also participates in a company 5k, and I've led our team 3 years in a row.", [img.running]],
      ["06", "Tennis", "I've picked up tennis over the last few summers. Some friends and I play every weekend at a nearby court, then often check out the Lincoln Park Farmers Market afterwards.", [img.tennis]],
      ["07", "Montreal + Quebec City", "I took a trip up to Canada in June. I explored new cities, saw an F1 race, learned much about Quebecois history, and practiced a little French. C'est fantastique!", [img.canada]],
      ["08", "New York x2", "In July, I had a work trip one week and a birthday trip just two weeks later. NY continues to offer endless adventures: museum visits, jazz shows, and a bakery crawl.", [img.nyc]],
      ["09", "Dog Sitting", "What's summer without some dog days? I've been lucky enough to pet sit Sherlock a few times this year. Plenty of walks, treats, and picnics in the park.", [img.dog]],
      ["10", "The Chicago Triathlon", "Near the end of August, I tackled my first triathlon. The swim was difficult, but I pulled it together on the bike and run for a finish time of 2:45.", []],
      ["11", "Around the World", "I ended summer with an around-the-world adventure: 17 days, 9 flights, 26,000 miles, 53 hours in the air, an international ferry, and a train. It was a great way to visit five new countries and cultures.", [img.baku, img.singapore]],
      ["12", "Marathon 2x", "My athletic aspirations culminated in running the Chicago and New York City Marathons. I finished Chicago in 3:25 and New York in 3:31.", [img.marathon]],
      ["14", "Looking Towards Austin", "A new role at work is taking me from hands-on trading responsibilities to strategy and business development for a different trading team. The loose plan is to move mid-2026.", []],
      ["15", "Christmas with Family", "The year wrapped up in Nebraska with family, cookie baking, Christmas celebrations, games, movies, and time to reflect on everything for which I am grateful.", []]
    ]
  },
  2024: {
    status: "Recap",
    intro: "2024 was a year of experiments: reading goals, new classes, cooking, training, Japan, New York, Scotland, and a lot of gratitude at the finish.",
    feature: img.chicago2024,
    stories: [
      ["01", "New Years Resolutions", "Books, classes, recipes, body composition, and running goals gave the year direction. Not every resolution survived contact with real life, but most kept me pointed the right way.", []],
      ["02", "Cousin Trip 2024", "My cousins and I returned to Kansas City. Eleven of us made the trek from across the Midwest and enjoyed exploring more of the city together.", []],
      ["03", "Japan is Marvelous", "I travelled to Japan in March and April, spending 11 days across Tokyo, Hakuba, Kyoto, Suzuka, and Shibuya. It is an incredible country with a strikingly rich and diverse culture.", [img.japan1, img.japan2, img.japan3]],
      ["04", "NYC 2024", "Back for the third time, two college friends and I celebrated summer in style. I worked out of my company's New York office, then we explored rooftops and the city.", []],
      ["05", "Scotland Adventures", "In October, I explored the highlands of Scotland on a solo, nine day driving tour. Embracing nature, taking in vistas, trying to stay dry. It was wonderful.", [img.scotland]],
      ["06", "Ending Thoughts", "2024 was a year of growth, development, travel, reconnection, and new possibility. I am excited to see what 2025 brings.", []]
    ]
  },
  2023: {
    status: "Recap",
    intro: "The year 2023 was a whirlwind adventure, from new challenges at work to exploring cities around the world, with family and friends as the steady center.",
    feature: img.recap2023,
    stories: [
      ["01", "Austin + New Orleans", "The year started with barbecue, a recruiting experience at UT Austin, team bonding, and a solo weekend in New Orleans with architecture, Bourbon Street, and the National WWII Museum.", []],
      ["02", "Chicago", "After Austin and NOLA, I settled into Gold Coast life, took a sewing class, stayed active at the gym, and started trading with a new team at PEAK6.", []],
      ["03", "Europe", "Brussels, Lugano, Zurich, and Barcelona made for a packed summer adventure: jazz, lakeside walks, mountain trains, art, food, cocktail bars, and Formula 1.", [img.europe1, img.europe2, img.europe3]],
      ["04", "New York", "I took a quick trip to NYC for a friend's birthday, explored Brooklyn, and worked from the New York office for a handful of days.", []],
      ["05", "Chicago, Part 2", "After a busy summer, I returned to routine in Chicago, played a lot of tennis, enjoyed the food scene, and built out my rankings for the best Chicago burger.", []],
      ["06", "Mexico + Cancun", "In the fall, I visited Mexico City and Cancun for Día de los Muertos celebrations, the Mexico F1 Grand Prix, and the WTA Finals.", []],
      ["07", "Nebraska + Holiday Travels", "The year concluded with family, friends, and a slower pace. I am grateful for everything I was able to experience and ready for 2024.", []]
    ]
  }
};

const team = [
  ["Micah Lange", "CEO + Hot Guy", img.team1],
  ["Micah Lange", "Fashionista", img.team2],
  ["Micah Lange", "Usher Extraordinaire", img.team3],
  ["Micah Lange", "Foodie + Socialite", img.team4]
];

const yearOrder = ["2026", "2025", "2024", "2023"];

function renderApp() {
  const app = document.querySelector("#app");
  const route = window.location.hash.replace(/^#/, "") || "/";
  const parts = route.split("/").filter(Boolean);

  if (parts[0] === "years" && parts[1]) {
    app.innerHTML = renderYearPage(parts[1]);
  } else if (parts[0] === "years") {
    app.innerHTML = renderHomePage();
  } else if (parts[0] === "ideas") {
    app.innerHTML = renderIdeasPage();
  } else if (parts[0] === "team") {
    app.innerHTML = renderTeamPage();
  } else {
    app.innerHTML = renderHomePage();
  }

  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "auto" });
  wireCarouselControls();
  updateCollapsedNav();
}

function renderHomePage() {
  return `
    <section class="home-hero">
      <img class="home-hero-image" src="${img.chicagoHero}" alt="Chicago skyline at sunset">
      <div class="home-hero-copy">
        <p class="section-kicker">micahlange.com</p>
        <h1>Letters, ideas, and the many Micahs.</h1>
        <p>Start with a year, wander into a note, or meet the whole executive committee.</p>
      </div>
    </section>

    <section class="home-section years-home compact-years" aria-label="Year carousel">
      <div class="home-section-heading">
        <div>
          <p class="section-kicker">Yearly reviews</p>
          <h2>Choose a year.</h2>
        </div>
      </div>
      <div class="year-carousel" id="year-carousel" tabindex="0" aria-label="Available yearly reviews">
        ${yearOrder.map(renderYearTile).join("")}
      </div>
    </section>

    <section class="home-band ideas-band">
      <div>
        <p class="section-kicker">Ideas</p>
        <h2>Notes worth returning to.</h2>
      </div>
      <a class="band-link" href="#/ideas">Open ideas</a>
    </section>

    <section class="home-band team-band">
      <div>
        <p class="section-kicker">The team</p>
        <h2>Who is Micah?</h2>
      </div>
      <a class="band-link" href="#/team">Meet the team</a>
    </section>
  `;
}

function renderYearsIndex() {
  return `
    <section class="page-hero">
      <div>
        <p class="section-kicker">Yearly reviews</p>
        <h1>Pick a year.</h1>
      </div>
      <p>Each year now lives on its own page, so the site feels more like an archive and less like one enormous scroll.</p>
    </section>
    <section class="home-section years-home">
      <div class="year-grid">
        ${yearOrder.map(renderYearTile).join("")}
      </div>
    </section>
  `;
}

function renderYearTile(year) {
  const data = years[year];
  return `
    <a class="year-tile" href="#/years/${year}" style="--tile-image: url('${data.feature}')">
      <span class="year-status">${data.status}</span>
      <span>
        <h3>${year}</h3>
        <p>${data.intro}</p>
      </span>
    </a>
  `;
}

function renderYearPage(year) {
  const data = years[year];
  if (!data) return renderYearsIndex();

  const pageClass = year === "2026" ? "page-section construction" : year === "2024" ? "page-section muted" : "page-section";

  return `
    <section class="${pageClass}">
      <div class="year-shell">
        <aside class="year-aside">
          <p class="section-kicker">${data.status}</p>
          <h2>${year}</h2>
          <p>${data.intro}</p>
          <img class="feature-image" src="${data.feature}" alt="${year} recap photo">
        </aside>
        <div class="story-grid">
          ${data.stories.map(renderStory).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderIdeasPage() {
  return `
    <section class="page-hero">
      <div>
        <p class="section-kicker">Ideas</p>
        <h1>Notes worth returning to.</h1>
      </div>
      <p>A place for short essays, experiments, rankings, lists, and other thoughts that should not be trapped in a notes app forever.</p>
    </section>
    <section class="home-section">
      <article class="idea">
        <p class="eyebrow">All posts</p>
        <h3>Decide to _______</h3>
        <p>
          A placeholder from the current site, ready to become a short essay, reading note,
          travel reflection, or whatever small thought deserves a permanent home.
        </p>
      </article>
    </section>
  `;
}

function renderTeamPage() {
  return `
    <section class="team-strip team-page">
      <div class="team-strip-copy">
        <p class="section-kicker">The team</p>
        <h2>Who is Micah?</h2>
      </div>
      <div class="team-row">
        ${team.map(renderPerson).join("")}
      </div>
    </section>
  `;
}

function renderStory([number, title, body, media]) {
  const gallery = media.length
    ? `<div class="story-media">${media.map((src) => `<img src="${src}" alt="${title} photo" loading="lazy">`).join("")}</div>`
    : "";

  return `
    <article class="story-card">
      <div class="story-number">${number}</div>
      <div>
        <h3>${title}</h3>
        <p>${body}</p>
        ${gallery}
      </div>
    </article>
  `;
}

function renderPerson([name, role, photo]) {
  return `
    <article class="person">
      <img src="${photo}" alt="${role}" loading="lazy">
      <div>
        <h3>${name}</h3>
        <p>${role}</p>
      </div>
    </article>
  `;
}

function wireCarouselControls() {
}

function updateCollapsedNav() {
  const isMobile = window.matchMedia("(max-width: 560px)").matches;
  const shouldCollapse = isMobile && (window.scrollY > 24 || document.body.classList.contains("nav-open"));
  document.body.classList.toggle("nav-collapsed", shouldCollapse);
  if (!shouldCollapse) document.body.classList.remove("nav-open");
}

function wireNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const yearsMenu = document.querySelector(".nav-menu");
  const yearsTrigger = document.querySelector(".nav-menu > a");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    yearsMenu?.classList.remove("years-open");
  });

  yearsTrigger?.addEventListener("click", (event) => {
    if (!window.matchMedia("(max-width: 560px)").matches) return;
    event.preventDefault();
    yearsMenu?.classList.toggle("years-open");
  });

  nav.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest("a");
    if (!link || link === yearsTrigger) return;
    document.body.classList.remove("nav-open");
    yearsMenu?.classList.remove("years-open");
    toggle.setAttribute("aria-expanded", "false");
  });

  window.addEventListener("scroll", updateCollapsedNav, { passive: true });
  window.addEventListener("resize", updateCollapsedNav);
  updateCollapsedNav();
}

window.addEventListener("hashchange", renderApp);
renderApp();
wireNavToggle();
