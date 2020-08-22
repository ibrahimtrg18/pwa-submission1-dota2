const CACHE_NAME = "dota2-v1";
const urlsToCache = [
    "/",
    "/manifest.json",
    "/data.json",
    "/index.html",
    "/nav.html",
    "/pages/about.html",
    "/pages/heroes.html",
    "/pages/news.html",
    "/pages/teams.html",
    "/css/materialize.min.css",
    "/css/style.css",
    "/js/materialize.min.js",
    "/js/nav.js",
    "/js/heroes.js",
    "/assets/fonts/Nunito/Nunito-Regular.ttf",
    "/assets/icons/dota2.png",
    "/assets/icons/dota2-192.png",
    "/assets/icons/dota2-512.png",
    "/assets/icons/dota2.svg",
    "/assets/icons/github_icon.svg",
    "/assets/icons/instagram_icon.svg",
    "/assets/icons/Agility_attribute_symbol.png",
    "/assets/icons/Intelligence_attribute_symbol.png",
    "/assets/icons/Strength_attribute_symbol.png",
    "/assets/images/event1.png",
    "/assets/images/event2.png",
    "/assets/images/profile.jpg",
    "/assets/images/Abaddon_icon.png",
    "/assets/images/Alchemist_icon.png",
    "/assets/images/Ancient_Apparition_icon.png",
    "/assets/images/Anti-Mage_icon.png",
    "/assets/images/Arc_Warden_icon.png",
    "/assets/images/Axe_icon.png",
    "/assets/images/Bane_icon.png",
    "/assets/images/Batrider_icon.png",
    "/assets/images/Beastmaster_icon.png",
    "/assets/images/Bloodseeker_icon.png",
    "/assets/images/Bounty_Hunter_icon.png",
    "/assets/images/Brewmaster_icon.png",
    "/assets/images/Bristleback_icon.png",
    "/assets/images/Broodmother_icon.png",
    "/assets/images/Centaur_Warrunner_icon.png",
    "/assets/images/Chaos_Knight_icon.png",
    "/assets/images/Chen_icon.png",
    "/assets/images/Clinkz_icon.png",
    "/assets/images/Clockwerk_icon.png",
    "/assets/images/Crystal_Maiden_icon.png",
    "/assets/images/Dark_Seer_icon.png",
    "/assets/images/Dark_Willow_icon.png",
    "/assets/images/Dazzle_icon.png",
    "/assets/images/Death_Prophet_icon.png",
    "/assets/images/Disruptor_icon.png",
    "/assets/images/Doom_icon.png",
    "/assets/images/Dragon_Knight_icon.png",
    "/assets/images/Drow_Ranger_icon.png",
    "/assets/images/Earthshaker_icon.png",
    "/assets/images/Earth_Spirit_icon.png",
    "/assets/images/Elder_Titan_icon.png",
    "/assets/images/Ember_Spirit_icon.png",
    "/assets/images/Enchantress_icon.png",
    "/assets/images/Enigma_icon.png",
    "/assets/images/Faceless_Void_icon.png",
    "/assets/images/Grimstroke_icon.png",
    "/assets/images/Gyrocopter_icon.png",
    "/assets/images/Huskar_icon.png",
    "/assets/images/Invoker_icon.png",
    "/assets/images/Io_icon.png",
    "/assets/images/Jakiro_icon.png",
    "/assets/images/Juggernaut_icon.png",
    "/assets/images/Keeper_of_the_Light_icon.png",
    "/assets/images/Kunkka_icon.png",
    "/assets/images/Legion_Commander_icon.png",
    "/assets/images/Leshrac_icon.png",
    "/assets/images/Lich_icon.png",
    "/assets/images/Lifestealer_icon.png",
    "/assets/images/Lina_icon.png",
    "/assets/images/Lion_icon.png",
    "/assets/images/Lone_Druid_icon.png",
    "/assets/images/Luna_icon.png",
    "/assets/images/Lycan_icon.png",
    "/assets/images/Magnus_icon.png",
    "/assets/images/Mars_icon.png",
    "/assets/images/Medusa_icon.png",
    "/assets/images/Meepo_icon.png",
    "/assets/images/Mirana_icon.png",
    "/assets/images/Monkey_King_icon.png",
    "/assets/images/Morphling_icon.png",
    "/assets/images/Naga_Siren_icon.png",
    "/assets/images/Nature's_Prophet_icon.png",
    "/assets/images/Necrophos_icon.png",
    "/assets/images/Night_Stalker_icon.png",
    "/assets/images/Nyx_Assassin_icon.png",
    "/assets/images/Ogre_Magi_icon.png",
    "/assets/images/Omniknight_icon.png",
    "/assets/images/Oracle_icon.png",
    "/assets/images/Outworld_Devourer_icon.png",
    "/assets/images/Pangolier_icon.png",
    "/assets/images/Phantom_Assassin_icon.png",
    "/assets/images/Phantom_Lancer_icon.png",
    "/assets/images/Phoenix_icon.png",
    "/assets/images/Puck_icon.png",
    "/assets/images/Pudge_icon.png",
    "/assets/images/Pugna_icon.png",
    "/assets/images/Queen_Of_Pain_icon.png",
    "/assets/images/Razor_icon.png",
    "/assets/images/Riki_icon.png",
    "/assets/images/Rubick_icon.png",
    "/assets/images/Sand_King_icon.png",
    "/assets/images/Shadow_Demon_icon.png",
    "/assets/images/Shadow_Fiend_icon.png",
    "/assets/images/Shadow_Shaman_icon.png",
    "/assets/images/Silencer_icon.png",
    "/assets/images/Skywrath_Mage_icon.png",
    "/assets/images/Slardar_icon.png",
    "/assets/images/Slark_icon.png",
    "/assets/images/Snapfire_icon.png",
    "/assets/images/Sniper_icon.png",
    "/assets/images/Spectre_icon.png",
    "/assets/images/Spirit_Breaker_icon.png",
    "/assets/images/Storm_Spirit_icon.png",
    "/assets/images/Sven_icon.png",
    "/assets/images/Techies_icon.png",
    "/assets/images/Templar_Assassin_icon.png",
    "/assets/images/Terrorblade_icon.png",
    "/assets/images/Tidehunter_icon.png",
    "/assets/images/Timbersaw_icon.png",
    "/assets/images/Tinker_icon.png",
    "/assets/images/Tiny_icon.png",
    "/assets/images/Treant_Protector_icon.png",
    "/assets/images/Troll_Warlord_icon.png",
    "/assets/images/Tusk_icon.png",
    "/assets/images/Underlord_icon.png",
    "/assets/images/Undying_icon.png",
    "/assets/images/Ursa_icon.png",
    "/assets/images/Vengeful_Spirit_icon.png",
    "/assets/images/Venomancer_icon.png",
    "/assets/images/Viper_icon.png",
    "/assets/images/Visage_icon.png",
    "/assets/images/Void_Spirit_icon.png",
    "/assets/images/Warlock_icon.png",
    "/assets/images/Weaver_icon.png",
    "/assets/images/Windranger_icon.png",
    "/assets/images/Winter_Wyvern_icon.png",
    "/assets/images/Witch_Doctor_icon.png",
    "/assets/images/Wraith_King_icon.png",
    "/assets/images/Zeus_icon.png",
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches
            .match(event.request, { cacheName: CACHE_NAME })
            .then(function (response) {
                if (response) {
                    console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
                    return response;
                }

                console.log(
                    "ServiceWorker: Memuat aset dari server: ",
                    event.request.url
                );
                return fetch(event.request);
            })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName != CACHE_NAME) {
                        console.log("ServiceWorker: cache " + cacheName + " dihapus");
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
