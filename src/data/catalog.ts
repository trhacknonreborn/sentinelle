export type Cite = {
  label: string;
  url: string;
  year: string;
};

export type Territory = {
  slug: string;
  name: string;
  region: string;
  dept: string;
  lat: number;
  lng: number;
  intensity: "critique" | "élevé" | "surveillé";
  summary: string;
  facts: { title: string; body: string; cite: Cite }[];
  examples: { title: string; body: string; cite: Cite; year: string }[];
};

export type HealthTopic = {
  id: string;
  substance: string;
  short: string;
  risks: string[];
  facts: { body: string; cite: Cite }[];
};

export const cites = {
  ofdt2025: {
    label: "OFDT — Drogues et addictions, chiffres clés 2025",
    url: "https://www.ofdt.fr/publication/2025/drogues-et-addictions-chiffres-cles-2025-2474",
    year: "2025",
  },
  ofdtOffre2024: {
    label: "OFDT — L’offre de stupéfiants en France en 2024",
    url: "https://www.ofdt.fr/communique-de-presse/stupefiants-les-tendances-de-l-offre-en-2024-en-france-2655",
    year: "2026",
  },
  ofdtTrend2024: {
    label: "OFDT — Tendances n°170, substances, usagers et marchés 2024",
    url: "https://www.ofdt.fr/publication/2025/substances-psychoactives-usagers-et-marches-tendances-en-2024-2625",
    year: "2025",
  },
  spfCocaine: {
    label: "Santé publique France — Urgences cocaïne 2012-2024",
    url: "https://www.santepubliquefrance.fr/drogues-illicites/enquetesetudes/evolution-des-passages-aux-urgences-et-des-sollicitations-de-drogues-info-service-en-lien-avec-la",
    year: "2025",
  },
  ssmsi2025: {
    label: "SSMSI — Insécurité et délinquance en 2025",
    url: "https://www.interieur.gouv.fr/Interstats/Actualites/Insecurite-et-delinquance-en-2025-bilan-statistique-et-atlas-departemental",
    year: "2026",
  },
  interstats78: {
    label: "SSMSI — Interstats Analyse n°78 (trafic et usage depuis 2016)",
    url: "https://www.interieur.gouv.fr/Interstats/Actualites/Interstats-Analyse-n-78-Caracteristiques-des-infractions-de-trafic-ou-usage-de-stupefiants-selon-le-type-de-substance-impliquee-depuis-2016-premier-etat-des-lieux",
    year: "2025",
  },
  nunezSaisies: {
    label: "Ministère de l’Intérieur / BFMTV — Saisies 2025 (Nuñez, 17 mars 2026)",
    url: "https://www.bfmtv.com/police-justice/lutte-contre-le-narcotrafic-84-3-tonnes-de-cocaine-saisies-en-france-en-2025-en-hausse-de-58-par-rapport-a-2024_AV-202603170680.html",
    year: "2026",
  },
  marseille2024: {
    label: "franceinfo — Bilan parquet/préfecture Marseille, narchomicides 2024",
    url: "https://www.franceinfo.fr/faits-divers/criminalite-a-marseille/le-nombre-de-narchomicides-a-baisse-de-60-a-marseille-en-2024_7028342.html",
    year: "2025",
  },
  marseilleCarte: {
    label: "France 3 PACA — Carte des règlements de comptes à Marseille",
    url: "https://france3-regions.franceinfo.fr/provence-alpes-cote-d-azur/bouches-du-rhone/marseille/carte-narcotrafic-a-marseille-les-reglements-de-comptes-se-deplacent-des-quartiers-nord-vers-le-centre-ville-3042642.html",
    year: "2024",
  },
  parisCrack: {
    label: "Ville de Paris — Bilan du plan crack (4 février 2025)",
    url: "https://www.paris.fr/pages/lutte-contre-le-crack-un-plan-d-actions-2019-2021-6843",
    year: "2025",
  },
  sevranCartel: {
    label: "Le Parisien — « Cartel de Sevran » et Cité-Basse",
    url: "https://www.leparisien.fr/seine-saint-denis-93/le-cartel-de-sevran-toujours-plus-violent-leconomie-de-la-drogue-cadenassee-par-des-familles-historiques-03-03-2025-JFPLTPX2FZCTJADI3OLWRCTJC4.php",
    year: "2025",
  },
  sevranJugement: {
    label: "Le Parisien — Jugement Bobigny, réseau de Sevran (18 déc. 2025)",
    url: "https://www.leparisien.fr/seine-saint-denis-93/jusqua-huit-ans-de-prison-ferme-pour-les-membres-dun-reseau-international-de-trafic-de-drogue-base-a-sevran-18-12-2025-A4XW5HH4YZCPLHYJFXP24IRLYA.php",
    year: "2025",
  },
  lyonPrefet: {
    label: "Préfecture du Rhône — Bilan narcotrafic Lyon 2025",
    url: "https://actu.fr/auvergne-rhone-alpes/lyon_69123/narcotrafic-a-lyon-on-met-un-coup-de-pied-dans-la-foumiliere-la-prefete-devoile-son-bilan_63633680.html",
    year: "2025",
  },
  lyonMazagran: {
    label: "Le Point — Place Mazagran, Lyon (La Guillotière)",
    url: "https://www.lepoint.fr/societe/sur-cette-place-de-lyon-la-mairie-bouge-les-bancs-mais-pas-les-dealers-16-04-2025-2587504_23.php",
    year: "2025",
  },
  grenoble: {
    label: "The Telegraph / Yahoo — Guerre des gangs à Grenoble 2024-2025",
    url: "https://www.yahoo.com/news/articles/below-ski-slopes-france-alpine-060000156.html",
    year: "2025",
  },
  ansmCannabis: {
    label: "ANSM — Addictovigilance cannabis (teneurs THC 2021-2024)",
    url: "https://ansm.sante.fr/uploads/2026/09/03/20260903-resume-rapport-enquete-addictovigilance-csp-cannabis-non-medical.pdf",
    year: "2026",
  },
  tf1Mineurs: {
    label: "TF1 Info — Recrutement de guetteurs de 12-13 ans",
    url: "https://www.tf1info.fr/justice-faits-divers/video-enquete-tf1-on-a-des-guetteurs-qui-ont-12-13-ans-voire-moins-l-inquietant-rajeunissement-des-recrues-des-trafiquants-de-drogue-2378058.html",
    year: "2025",
  },
  busMarseille: {
    label: "Le Figaro — Bus RTM déviés près des points de deal, Marseille",
    url: "https://www.lefigaro.fr/marseille/marseille-par-peur-des-reglements-de-comptes-certains-bus-devient-leurs-trajets-au-gre-des-dealers-20241022",
    year: "2024",
  },
  kessaci: {
    label: "Radio-Canada — Assassinat de Mehdi Kessaci, novembre 2025",
    url: "https://ici.radio-canada.ca/info/long-format/2212683/marseille-narcotrafic-criminels-omerta",
    year: "2025",
  },
  socayna: {
    label: "RTBF / associations marseillaises — Socayna, balle perdue, sept. 2023",
    url: "https://www.rtbf.be/article/plongee-dans-les-quartiers-nord-de-marseille-ou-les-trafiquants-de-drogue-font-la-loi-11571246",
    year: "2025",
  },
  ofastPresse: {
    label: "Presse (Le Monde / Valeurs actuelles) — Note OFAST 2025",
    url: "https://www.valeursactuelles.com/societe/exclusif-rapport-de-lofast-sur-le-narcotrafic-les-saisies-en-france-ont-atteint-des-niveaux-record",
    year: "2025",
  },
  santeGouv: {
    label: "Ministère de la Santé — Addictions, lignes d’écoute, CSAPA",
    url: "https://sante.gouv.fr/prevention-en-sante/addictions/article/informations-sur-les-addictions-et-les-drogues",
    year: "2025",
  },
  agrasc: {
    label: "Ministère de la Justice — Bilan AGRASC 2025",
    url: "https://www.justice.gouv.fr/actualites/espace-presse/saisies-confiscations-biens-criminels-gerald-darmanin-dresse-bilan-2025-lagrasc",
    year: "2026",
  },
  halles: {
    label: "Le Parisien — Tunnel des Halles et consommation de crack, juin 2025",
    url: "https://www.leparisien.fr/paris-75/je-prie-pour-ne-pas-tomber-en-panne-dedans-a-paris-le-tunnel-des-halles-ronge-par-le-crack-09-06-2025-C454656RYRGSBEFJPI6EKR7J7A.php",
    year: "2025",
  },
  ssmsiDept: {
    label: "SSMSI — Atlas départemental 2025 (Paris, 93, 13…)",
    url: "https://www.interieur.gouv.fr/content/download/139762/1102438/file/Ins%C3%A9curit%C3%A9%20et%20d%C3%A9linquance%20en%202025%20-%20Bilan%20statistique%20-%20%C3%A9dition%202026%20-%20SSMSI.pdf",
    year: "2026",
  },
} as const satisfies Record<string, Cite>;

export const nationalStats = [
  {
    id: "cocaine-users",
    value: "1,1 M",
    label: "Français ont consommé de la cocaïne dans l’année",
    detail: "11-75 ans. Psychostimulants en diffusion large.",
    cite: cites.ofdt2025,
  },
  {
    id: "cannabis-daily",
    value: "900 000",
    label: "usagers quotidiens de cannabis",
    detail: "Première drogue illicite consommée en France.",
    cite: cites.ofdt2025,
  },
  {
    id: "cocaine-seized",
    value: "84,3 t",
    label: "de cocaïne saisies en 2025",
    detail: "+58 % par rapport à 53,5 t en 2024.",
    cite: cites.nunezSaisies,
  },
  {
    id: "er-cocaine",
    value: "5 067",
    label: "passages aux urgences liés à la cocaïne en 2024",
    detail: "97 par semaine. 1 619 hospitalisations.",
    cite: cites.spfCocaine,
  },
  {
    id: "traffic-charged",
    value: "52 300",
    label: "mis en cause pour trafic en 2024",
    detail: "+7 % par an environ depuis 2017. 78 % liés au cannabis.",
    cite: cites.interstats78,
  },
  {
    id: "mdma",
    value: "750 000",
    label: "usagers d’ecstasy/MDMA dans l’année",
    detail: "Offre de stimulants en expansion, teneurs en hausse.",
    cite: cites.ofdt2025,
  },
];

export const seizureSeries = [
  { year: "2023", cocaine: 23.3, cannabis: 125 },
  { year: "2024", cocaine: 53.5, cannabis: 101 },
  { year: "2025", cocaine: 84.3, cannabis: 127.3 },
];

export const thcSeries = [
  { year: "2021", herbe: 6.3, resine: 11.9 },
  { year: "2024", herbe: 13.5, resine: 31.7 },
];

export const territories: Territory[] = [
  {
    slug: "marseille",
    name: "Marseille",
    region: "Provence-Alpes-Côte d’Azur",
    dept: "Bouches-du-Rhône (13)",
    lat: 43.3,
    lng: 5.37,
    intensity: "critique",
    summary:
      "Laboratoire français du narcotrafic de cité : points de vente ouverts, guerres de clans, victimes collatérales, et un service public qui recule par endroits.",
    facts: [
      {
        title: "Narchomicides : 49 morts en 2023, 24 en 2024",
        body: "Le parquet de Marseille et la préfecture de police des Bouches-du-Rhône ont annoncé 24 morts liés au narcobanditisme en 2024 (dont 20 à Marseille), contre 49 en 2023 — année record. La baisse s’explique par la fin d’une guerre entre deux clans et par des interpellations ciblées, y compris de commanditaires incarcérés. Le procureur a souligné que la situation restait « fragile ».",
        cite: cites.marseille2024,
      },
      {
        title: "84 points de deal encore actifs",
        body: "Selon le préfet de police des Bouches-du-Rhône (janvier 2025), le nombre de points de deal a été divisé par deux en trois ans. Il en restait 84 actifs. Moins de points visibles ne signifie pas la disparition du marché : la presse et les associations décrivent une emprise plus concentrée, et une terreur qui se déplace.",
        cite: cites.marseille2024,
      },
      {
        title: "Du nord vers le centre-ville",
        body: "En 2024, France 3 a cartographié le déplacement des fusillades : au 7 octobre, 21 morts par armes à feu, dont une part croissante dans le 3e arrondissement (Félix Pyat) alors que les quartiers nord (13e notamment) restent surreprésentés. Les 2e, 9e et 10e sont aussi concernés.",
        cite: cites.marseilleCarte,
      },
    ],
    examples: [
      {
        title: "Socayna, 24 ans, tuée dans sa chambre",
        year: "2023",
        body: "En septembre 2023, Socayna, étudiante, est mortellement touchée par une balle perdue alors qu’elle étudiait chez elle. Le cas est devenu, pour les associations (« Trop jeune pour mourir ») et les habitants, le symbole des victimes qui n’ont rien à voir avec le trafic — et de la cohabitation forcée avec les armes.",
        cite: cites.socayna,
      },
      {
        title: "Mehdi Kessaci, frère d’un militant, abattu",
        year: "2025",
        body: "Le 13 novembre 2025, Mehdi Kessaci, une vingtaine d’années, est tué par un commando à moto dans le 4e arrondissement. Il n’était pas impliqué dans le trafic : son frère Amine milite contre le narcotrafic depuis l’assassinat d’un autre frère, Brahim, en 2020. Un message d’intimidation qui vise aussi ceux qui parlent.",
        cite: cites.kessaci,
      },
      {
        title: "Les bus ne s’arrêtent plus",
        year: "2024",
        body: "La RTM a dû dévier des lignes (dont le 23, près de La Cayolle) : chauffeurs et syndicats décrivent des points de deal collés aux arrêts, la peur d’un règlement de comptes, et des jeunes qui montent contrôler les passagers. « On est l’un des seuls services publics qui entrent encore dans ces quartiers. »",
        cite: cites.busMarseille,
      },
    ],
  },
  {
    slug: "paris",
    name: "Paris — nord-est et centre",
    region: "Île-de-France",
    dept: "Paris (75)",
    lat: 48.86,
    lng: 2.35,
    intensity: "critique",
    summary:
      "Scènes de crack (Stalingrad, Chapelle, Rosa Parks, Halles), deal de rue, et un plan public qui combine police, soin et réduction des risques — sans faire disparaître la souffrance visible.",
    facts: [
      {
        title: "Plan crack 2024 : 1 141 trafiquants interpellés",
        body: "Le bilan officiel du 4 février 2025 (préfecture, Ville de Paris, ARS, parquet, MILDECA) recense 1 141 interpellations de trafiquants, 23 « cuisines de crack » démantelées, et indique qu’aucune scène d’ampleur du type Forceval n’a pu se réimplanter sur Stalingrad, Éole, Porte de la Chapelle, Rosa Parks et les quais de l’Ourcq.",
        cite: cites.parisCrack,
      },
      {
        title: "Un espace de repos, 38 000 passages",
        body: "L’espace de repos de la Porte de la Chapelle (associations Aurore et Gaïa), ouvert 7j/7 avec accueil de nuit, a enregistré plus de 38 000 passages en 2024, 4 062 soins infirmiers et environ 200 personnes par jour. C’est l’autre face du phénomène : une population très précaire, souvent polyconsommatrice, loin du cliché du « festif ».",
        cite: cites.parisCrack,
      },
      {
        title: "Paris, 1er département pour le trafic enregistré",
        body: "Selon le SSMSI (bilan 2025), Paris et la Seine-Saint-Denis sont les deux départements les plus concernés, avec 2,7 et 2,4 mis en cause pour trafic de stupéfiants pour 1 000 habitants. L’usage y est aussi le plus enregistré (14 ‰ à Paris).",
        cite: cites.ssmsiDept,
      },
    ],
    examples: [
      {
        title: "Le tunnel des Halles",
        year: "2025",
        body: "En juin 2025, Le Parisien documente le report de consommateurs vers le tunnel des Halles (I er–IV e), après la pression sur La Chapelle et Stalingrad. Riverains et commerçants décrivent bagarres et occupation d’un ouvrage routier du centre-ville. Le deal et la misère ne restent pas « ailleurs » : ils se déplacent.",
        cite: cites.halles,
      },
      {
        title: "Forceval, 2022 : la scène qu’on a voulu ne plus revoir",
        year: "2022",
        body: "Le square Forceval (porte de la Villette) a concentré plusieurs centaines de consommateurs en campement avant l’évacuation d’octobre 2022. Le plan crack de 2024 se juge encore à l’aune de ce souvenir : empêcher qu’une telle scène se reforme, tout en offrant un filet sanitaire.",
        cite: cites.parisCrack,
      },
    ],
  },
  {
    slug: "seine-saint-denis",
    name: "Seine-Saint-Denis",
    region: "Île-de-France",
    dept: "93",
    lat: 48.91,
    lng: 2.45,
    intensity: "critique",
    summary:
      "Parmi les taux de mis en cause pour trafic les plus élevés de France. Sevran, Saint-Denis, Aulnay, Bondy : points de vente, go-fast, et une économie criminelle ancrée dans certains quartiers.",
    facts: [
      {
        title: "2,4 mis en cause pour trafic / 1 000 hab.",
        body: "Le SSMSI place la Seine-Saint-Denis juste derrière Paris. Le trafic de cannabis y est particulièrement enregistré (20 mis en cause pour 10 000 habitants, devant les Bouches-du-Rhône). Ce sont des faits constatés par la police et la gendarmerie, pas une photographie exhaustive du marché.",
        cite: cites.ssmsiDept,
      },
      {
        title: "Sevran, « cartel » dans le langage policier",
        body: "La Cité-Basse a été le théâtre, en mai 2024, d’un des règlements de comptes les plus meurtriers du département : deux hommes exécutés au 9 mm près d’un point de deal, allée des Perce-Neige. Le Parisien décrit une économie locale verrouillée par des familles historiques, et des « jambisés » encore en 2025 aux Beaudottes.",
        cite: cites.sevranCartel,
      },
      {
        title: "Dispositif « villes de sécurité renforcée »",
        body: "Depuis septembre 2025, Aulnay-sous-Bois, Bondy, Noisy-le-Sec et Sevran sont sous le régime VSR. Bilan préfectoral : 408 opérations, 206 interpellations, 48 kg de drogue saisis. La pression policière existe ; elle ne dit pas que le marché a disparu.",
        cite: cites.ssmsi2025,
      },
    ],
    examples: [
      {
        title: "Réseau international jugé à Bobigny",
        year: "2025",
        body: "Le 18 décembre 2025, la 13e chambre du tribunal de Bobigny (chambre « stups ») condamne dix prévenus d’un réseau basé à Sevran, approvisionné d’Espagne et de Belgique. Peines jusqu’à 8 ans ferme et 100 000 € d’amende. Saisies citées : 4,4 kg de cocaïne et 7 kg d’ecstasy. Un point de deal local branché sur l’Europe.",
        cite: cites.sevranJugement,
      },
      {
        title: "Fusillades et « baisse de rentabilité »",
        year: "2024",
        body: "En mai 2024, une série d’homicides dans le 93 est reliée par des enquêteurs à la concurrence : ubérisation du deal, opérations « Place nette », et nécessité de conquérir de nouveaux territoires. Ce n’est pas « Marseille importé » : c’est la même économie, avec les mêmes armes.",
        cite: cites.sevranCartel,
      },
    ],
  },
  {
    slug: "lyon",
    name: "Lyon et agglomération",
    region: "Auvergne-Rhône-Alpes",
    dept: "Rhône (69)",
    lat: 45.76,
    lng: 4.84,
    intensity: "élevé",
    summary:
      "Longtemps perçue comme épargnée comparée à Marseille, l’agglomération lyonnaise concentre désormais deal de centre-ville (Guillotière), cités de l’est, et un usage massif des interdictions de paraître.",
    facts: [
      {
        title: "1 900 mis en cause pour trafic dans le Rhône",
        body: "La préfète du Rhône (bilan fin 2025) indique un nombre stable d’environ 1 900 mis en cause pour trafic, 7 944 amendes forfaitaires délictuelles (+17 %), et plus de 21 M€ d’avoirs criminels saisis (+69 % à fin septembre 2025).",
        cite: cites.lyonPrefet,
      },
      {
        title: "115 interdictions de paraître",
        body: "Depuis le 12 août 2025, 115 arrêtés d’interdiction de paraître sur un point de deal ont été signés dans l’agglomération : Lyon 3e, 7e, 8e, 9e, Vénissieux, Villeurbanne, Oullins, Vaulx-en-Velin, Bron… L’outil, issu de la loi narcotrafic, vise à éloigner les « petites mains » des halls et des places.",
        cite: cites.lyonPrefet,
      },
    ],
    examples: [
      {
        title: "Place Mazagran, La Guillotière",
        year: "2025",
        body: "Un an et demi d’aménagements (bancs déplacés, allée grillagée, terrain de pétanque, 400 policiers en opération « place nette ») n’ont pas fait disparaître le deal sur cette place du 7e. Le Point décrit un trafic qui s’adapte à l’urbanisme : on bouge les recoins, les vendeurs se décalent de quelques mètres.",
        cite: cites.lyonMazagran,
      },
    ],
  },
  {
    slug: "grenoble",
    name: "Grenoble",
    region: "Auvergne-Rhône-Alpes",
    dept: "Isère (38)",
    lat: 45.19,
    lng: 5.72,
    intensity: "élevé",
    summary:
      "Derrière l’image de capitale alpine, l’une des scènes de violence liées au trafic les plus denses de France, avec armes de guerre et une trentaine de points de vente dans l’agglomération.",
    facts: [
      {
        title: "48 fusillades en 2024",
        body: "Des reportages internationaux (2025) reprennent le bilan local : 48 fusillades dans l’année, plusieurs homicides liés au trafic sur 15 mois, et environ 28 points de deal dans l’agglomération. Grenoble n’est plus un « cas à part » : c’est un marché disputé, avec une violence hors de proportion avec la taille de la ville.",
        cite: cites.grenoble,
      },
      {
        title: "Des quartiers comme Mistral",
        body: "Le quartier Mistral est cité comme un exemple d’offre « à la carte » (haschich, ecstasy, cocaïne) qui a basculé vers les réseaux sociaux et la livraison — le même mouvement national décrit par l’OFDT : le point de vente physique n’est plus le seul canal.",
        cite: cites.grenoble,
      },
    ],
    examples: [
      {
        title: "Assassinat d’un ancien parrain, mars",
        year: "2025",
        body: "Jean-Pierre Maldera, 71 ans, figure de la pègre « italo-grenobloise », est abattu par arme automatique près de son véhicule. Un basculement générationnel : les réseaux historiques cèdent sous la pression de groupes plus jeunes, plus armés, moins « codés ».",
        cite: cites.grenoble,
      },
    ],
  },
  {
    slug: "le-havre",
    name: "Le Havre et ports",
    region: "Normandie",
    dept: "Seine-Maritime (76)",
    lat: 49.49,
    lng: 0.11,
    intensity: "surveillé",
    summary:
      "Pas un « quartier chaud » au sens des cités de deal : un verrou logistique. C’est par les ports que la cocaïne entre, avant d’alimenter Paris, Lille, Lyon, Marseille.",
    facts: [
      {
        title: "Le Havre : 14,4 tonnes de cocaïne en 2024",
        body: "Selon la note OFAST relayée par la presse, sur 53,5 tonnes de cocaïne saisies en France en 2024, 41,8 t l’ont été par voie maritime (78 %). Le port du Havre à lui seul : 14,4 t (contre 5,3 t en 2023). Dunkerque, Rouen, Nantes–Saint-Nazaire et Gennevilliers sont aussi en première ligne.",
        cite: cites.ofastPresse,
      },
      {
        title: "L’OFDT : les ports français, front de la cocaïne",
        body: "Le bilan 2024 de l’offre (publié en 2026) confirme que les ports français sont le point d’entrée majeur, que l’avion (Antilles, Guyane, Afrique de l’Ouest, Amérique du Sud) reste important, et que le marché des stimulants s’élargit : plus de saisies, prix réels en baisse, teneurs en hausse.",
        cite: cites.ofdtOffre2024,
      },
    ],
    examples: [
      {
        title: "Ce que ça change pour un quartier",
        year: "2024",
        body: "Un container intercepté au Havre, c’est une cargaison qui n’atteint pas un hall d’immeuble. Une cargaison qui passe, c’est de la cocaïne plus pure, moins chère, plus disponible — et, en bout de chaîne, plus de passages aux urgences (Santé publique France) et plus de conflits pour le contrôle de la revente.",
        cite: cites.ofdtOffre2024,
      },
    ],
  },
  {
    slug: "guyane",
    name: "Guyane",
    region: "Guyane",
    dept: "973",
    lat: 4.92,
    lng: -52.3,
    intensity: "élevé",
    summary:
      "Territoire français d’Amérique du Sud, sur la route de la cocaïne. Taux d’infractions et de passages aux urgences parmi les plus élevés, loin des clichés hexagonaux du « quartier ». ",
    facts: [
      {
        title: "Trafic de cocaïne parmi les plus enregistrés",
        body: "Le SSMSI souligne que le trafic de cocaïne est particulièrement enregistré en Guyane, à Paris et dans les Bouches-du-Rhône. La Guyane n’est pas un détail ultramarin : c’est un corridor, avec des « mules » aériennes vers l’Hexagone documentées de longue date par les douanes et l’OFAST.",
        cite: cites.ssmsiDept,
      },
      {
        title: "Urgences cocaïne : taux parmi les plus hauts",
        body: "Santé publique France : les taux de passages aux urgences liés à la cocaïne sont très élevés en Guyane, devant PACA et Occitanie. Le produit n’est pas qu’« en transit » : il se consomme, et il abîme.",
        cite: cites.spfCocaine,
      },
    ],
    examples: [
      {
        title: "Le corridor aérien",
        year: "2024",
        body: "L’OFDT rappelle que le transport aérien reste significatif pour les stupéfiants en provenance des Antilles, de Guyane, du Brésil, du Pérou et d’Afrique de l’Ouest, souvent par mules. Derrière un mot administratif, des vies brisées à l’aéroport et des familles endettées.",
        cite: cites.ofdtOffre2024,
      },
    ],
  },
];

export const healthTopics: HealthTopic[] = [
  {
    id: "cannabis",
    substance: "Cannabis (herbe, résine, « sweets », vapes)",
    short: "Ce n’est plus le produit des années 2000. Le THC a explosé.",
    risks: [
      "Trouble de l’usage, anxiété, psychose chez les personnes vulnérables",
      "Retentissement scolaire et attention, surtout à l’adolescence",
      "Syndrome d’hyperémèse cannabinoïde (vomissements incoercibles)",
      "Risque accru quand le cerveau n’a pas fini de se construire (avant ~25 ans)",
    ],
    facts: [
      {
        body: "Les collectes SINTES (ANSM / OFDT) montrent un doublement de la teneur moyenne en THC de l’herbe : 6,3 % en 2021 → 13,5 % en 2024. Pour la résine : 11,9 % → 31,7 %. Un joint d’aujourd’hui n’est pas « l’équivalent » d’un joint d’il y a quinze ans.",
        cite: cites.ansmCannabis,
      },
      {
        body: "L’enquête d’addictovigilance 2024 recense une part croissante de notifications graves impliquant le cannabis. Complications principalement psychiatriques (54 %), neurologiques, digestives — dont des hyperémèses. Des décès ont été notifiés, y compris chez des adolescents.",
        cite: cites.ansmCannabis,
      },
      {
        body: "900 000 usagers quotidiens en France (OFDT 2025). L’offre se diversifie : confiseries, vapes, cannabinoïdes de synthèse parfois consommés à l’insu de la personne. Ces synthétiques, eux, peuvent provoquer des intoxications aiguës sévères.",
        cite: cites.ofdt2025,
      },
    ],
  },
  {
    id: "cocaine",
    substance: "Cocaïne (poudre)",
    short: "Cœur, cerveau, psychose : un stimulant qui tue aussi des jeunes.",
    risks: [
      "Infarctus, accident vasculaire cérébral, thrombose — même sans « terrain »",
      "Anxiété, paranoïa, dépression, tentatives de suicide au descente",
      "Dépendance psychique rapide, binge, dettes",
      "Polyconsommation (alcool, benzodiazépines) qui multiplie les urgences",
    ],
    facts: [
      {
        body: "5 067 passages aux urgences liés à la cocaïne en 2024, 1 619 hospitalisations, 97 passages par semaine. Après dix ans de hausse (+118 % du taux entre 2012 et 2022, encore +38 % en 2023), 2024 se stabilise à un niveau élevé. Les hospitalisations ont été multipliées par quatre en dix ans.",
        cite: cites.spfCocaine,
      },
      {
        body: "1,1 million de personnes (11-75 ans) ont consommé de la cocaïne dans l’année. Ce n’est plus un produit « de richissimes » : l’OFDT décrit un marché de stimulants en expansion, avec des prix réels en baisse et des teneurs en hausse — donc plus d’accès, plus de choc sur l’organisme.",
        cite: cites.ofdt2025,
      },
      {
        body: "74 % des passages aux urgences concernent des hommes, âge médian 32 ans. Taux les plus élevés : Guyane, PACA, Occitanie. La cocaïne est souvent associée à l’alcool (29 % des diagnostics associés).",
        cite: cites.spfCocaine,
      },
    ],
  },
  {
    id: "crack",
    substance: "Cocaïne basée / crack",
    short: "La forme qui détruit le plus vite les corps et les rues.",
    risks: [
      "Dépendance extrêmement rapide, craving, errance",
      "Brûlures, infections, dénutrition, troubles psychiatriques lourds",
      "Violence, survie dans l’espace public, rupture familiale",
      "Co-infections et soins retardés",
    ],
    facts: [
      {
        body: "Le dispositif TREND (OFDT, 2024) constate que, chez les personnes en grande précarité, la cocaïne basée occupe une place centrale dans les polyconsommations, au détriment des opioïdes. Les conditions de vie et de santé de ces usagers continuent de se dégrader.",
        cite: cites.ofdtTrend2024,
      },
      {
        body: "À Paris, l’espace de repos de La Chapelle (200 personnes/jour, 4 062 soins infirmiers en 2024) donne la mesure sanitaire : ce n’est pas un « problème d’ordre public » seulement. C’est une file de patients, souvent sans logement, qui ont besoin de soins avant toute injonction morale.",
        cite: cites.parisCrack,
      },
    ],
  },
  {
    id: "mdma",
    substance: "MDMA / ecstasy et stimulants de synthèse",
    short: "Festif en apparence, imprévisible en composition.",
    risks: [
      "Hyperthermie, déshydratation, hyponatrémie, collapsus",
      "Sérotonine : dépression profonde les jours suivants",
      "Comprimés très dosés, adultération par d’autres stimulants",
      "Cathinones de synthèse : intoxications en hausse (SINTES)",
    ],
    facts: [
      {
        body: "750 000 usagers dans l’année (OFDT 2025). Saisies d’ATS en forte hausse : 9 millions de comprimés de MDMA/ecstasy en 2024 (+123 %, note OFAST relayée par la presse). Plus d’offre, plus de teneurs, prix réels en baisse : le risque d’overdose de stimulant augmente.",
        cite: cites.ofdt2025,
      },
      {
        body: "Depuis 2008, 450 nouveaux produits de synthèse ont été répertoriés en France, dont 17 en 2023. On ne « sait » pas ce qu’il y a dans un cachet acheté dans un parking ou en messagerie.",
        cite: cites.ofdt2025,
      },
    ],
  },
  {
    id: "opioides",
    substance: "Héroïne et opioïdes",
    short: "Moins médiatisés que la cocaïne, toujours capables de tuer.",
    risks: [
      "Dépression respiratoire, overdose — surtout en mélange avec alcool ou benzo",
      "VIH, hépatites, abcès si injection",
      "Syndrome de sevrage violent",
      "Risque à la reprise après une période d’abstinence (tolérance baissée)",
    ],
    facts: [
      {
        body: "L’OFDT note qu’en 2024, malgré l’effondrement de la production mondiale d’opium, la disponibilité de l’héroïne en France n’a pas nettement diminué. Les saisies restent de l’ordre de la tonne. Les ruptures d’approvisionnement ont été limitées — ce qui n’interdit pas des à-coups locaux dangereux (produits de substitution inconnus).",
        cite: cites.ofdtTrend2024,
      },
      {
        body: "Les traitements de substitution (CSAPA) existent, sont gratuits et confidentiels. Une overdose n’est pas une fatalité « méritée » : c’est une urgence, le 15, et de la naloxone quand elle est disponible.",
        cite: cites.santeGouv,
      },
    ],
  },
];

export const milieuChapters = [
  {
    id: "mineurs",
    title: "Le recrutement des enfants",
    lead: "On n’entre pas dans le trafic par un film. On y entre pour 50 à 100 euros par jour, souvent avant le brevet.",
    body: "En juin 2025, une enquête de TF1 documente des « choufs » (guetteurs) de 12-13 ans, parfois moins — des garçons encore à l’école primaire, postés en pleine journée pour prévenir de l’arrivée de la police. À Rennes, une vidéo d’un enfant d’environ 10 ans caché dans un carton près d’un point de deal a circulé massivement. La loi du 13 juin 2025 a créé un délit spécifique de recrutement de mineurs dans un trafic. Cela n’efface pas le fait : le milieu a industrialisé l’emploi d’enfants parce qu’ils sont moins poursuivis, moins chers, et déjà sur place.",
    cite: cites.tf1Mineurs,
  },
  {
    id: "violence",
    title: "La violence n’est pas un accident",
    lead: "Un point de vente est un cash. On le dispute avec des armes de guerre.",
    body: "Marseille a compté 49 morts liés au narcobanditisme en 2023. Grenoble, 48 fusillades en 2024. Sevran, des exécutions à quelques mètres d’un hall. Les chercheurs et les parquets décrivent trois moteurs : la délation, les dettes entre criminels, et la compétition pour un marché. Les victimes collatérales — Socayna dans sa chambre, Mehdi Kessaci parce qu’il est le frère d’un militant, un chauffeur VTC, un passant — ne sont pas des « bavures » rares : elles sont la conséquence d’armes automatiques tirées dans des rues habitées.",
    cite: cites.marseille2024,
  },
  {
    id: "argent",
    title: "L’argent, pas la légende",
    lead: "Quelques dizaines d’euros par jour en bas de l’échelle. Des millions saisis en haut. Presque jamais de retraite.",
    body: "L’AGRASC a annoncé 1,44 milliard d’euros saisis par les juridictions en 2025 (tous contentieux de criminalité confondus), 47 millions versés à la MILDECA. Pour le seul narcotrafic, Beauvau a cité 146 millions d’avoirs criminels saisis en 2025. La note OFAST 2025, telle que relayée par la presse, évoque un marché de l’ordre de 7 milliards d’euros et 2 729 points de deal. Ces chiffres mesurent une économie. Ils ne mesurent pas ce que gagne un guetteur de 14 ans, interchangeable, exposé, et souvent créancier du réseau dès la première « perte » de marchandise.",
    cite: cites.agrasc,
  },
  {
    id: "omerta",
    title: "L’omertà et la vie quotidienne",
    lead: "Le trafic ne se limite pas à ceux qui vendent. Il réorganise un immeuble, une ligne de bus, une prise de parole.",
    body: "À Marseille, des bus évitent des arrêts. Des habitants décrivent la peur « surtout des jeunes ». Parler, filmer, témoigner expose. L’assassinat de Mehdi Kessaci en 2025, frère d’un militant connu, a été lu comme un message à ceux qui cassent le silence. Dans un quartier sous emprise, le « milieu » ce n’est pas seulement le deal : c’est la normalisation de l’arme, le recrutement dans la cour, le commerce qui paie une « protection », l’adolescent qui n’imagine plus d’autre salaire.",
    cite: cites.kessaci,
  },
  {
    id: "consommation",
    title: "Consommer, c’est financer",
    lead: "Il n’y a pas de cocaïne « propre », de cannabis « local et sans violence » garanti, d’ecstasy « juste pour la soirée » hors marché.",
    body: "L’OFDT décrit un marché qui s’adapte : livraison, messageries chiffrées, marketing, fidélisation — les codes de l’économie légale au service d’un commerce illégal. Acheter, même loin d’une cité, alimente la chaîne qui commence au port du Havre ou à une mule, et finit dans un hall, une dette, une arme. Ce n’est pas une leçon de morale : c’est la structure du marché, telle que les observatoires la décrivent.",
    cite: cites.ofdtOffre2024,
  },
  {
    id: "sante-sociale",
    title: "Ce que ça fait à une société",
    lead: "Coût sanitaire, décrochage scolaire, corruption, sentiment d’abandon.",
    body: "Le plan crack parisien, les CSAPA, les 5 067 passages aux urgences cocaïne, les 900 000 fumeurs quotidiens de cannabis : le trafic n’est pas un fait divers. C’est un déterminant de santé publique, un facteur de décrochage (mineurs recrutés, absences, psychoses précoces), et un test pour l’État de droit (narco-corruption évoquée par l’OFAST, commandites depuis la prison, intimidation des témoins). Les habitants des quartiers concernés le disent depuis des années : ils ne demandent pas un reportage, ils demandent de pouvoir rentrer chez eux.",
    cite: cites.spfCocaine,
  },
];

export const timeline = [
  {
    year: "Années 2000",
    title: "Des bandes de quartier",
    body: "Trafic ancré dans certaines cités, armes déjà présentes, mais encore souvent lu comme une délinquance locale. Lyon, longtemps relativement épargnée, n’a pas encore le niveau de violence de Marseille ou Grenoble.",
  },
  {
    year: "2010-2019",
    title: "Armes de guerre, go-fast, premiers « narchomicides » de masse",
    body: "Kalachnikovs, compétition pour les points de vente, go-fast sur les axes Europe–Espagne. À Saint-Ouen (2019), l’exécution d’un gérant de points de deal déclenche une série. Le cannabis reste dominant ; la cocaïne commence sa démocratisation.",
  },
  {
    year: "2022",
    title: "Forceval, la scène de crack au grand jour",
    body: "Évacuation du square Forceval à Paris : des centaines de consommateurs en campement. Le crack n’est plus un impensé parisien. Dans le même temps, l’offre mondiale de cocaïne explose.",
  },
  {
    year: "2023",
    title: "Marseille, année record : 49 morts",
    body: "Guerre de clans. Socayna, étudiante, tuée par une balle perdue. Le mot « narchomicide » s’impose dans le débat public. L’ubérisation du deal (livraison) concurrence les points fixes et déplace les conflits.",
  },
  {
    year: "2024",
    title: "Cocaïne record, THC record, 1,1 million d’usagers",
    body: "53,5 t de cocaïne saisies (+130 %). 9 millions de comprimés de MDMA. THC de la résine à 31,7 % en moyenne dans les collectes SINTES. 5 067 passages aux urgences cocaïne. 52 300 mis en cause pour trafic. 24 narchomicides à Marseille (baisse, mais 84 points encore actifs). Le Havre : 14,4 t.",
  },
  {
    year: "2025",
    title: "Loi narcotrafic, 84,3 tonnes, enfants guetteurs",
    body: "Loi du 13 juin 2025 (interdiction de paraître, recrutement de mineurs). 84,3 t de cocaïne saisies, 127,3 t de cannabis. Infractions stupéfiants encore en hausse (usage +7 %, trafic +9 %, SSMSI). Mehdi Kessaci assassiné. Enquête TF1 sur les choufs de 12 ans. Note OFAST : 2 729 points de deal, marché estimé à ~7 Md€ (presse).",
  },
  {
    year: "2026",
    title: "L’observatoire confirme l’expansion des stimulants",
    body: "L’OFDT publie le bilan 2024 de l’offre : saisies de cocaïne et d’ATS en hausse, prix réels en baisse, teneurs en hausse. Le cannabis se diversifie ( sucreries, vapes) et n’arrive plus seulement du Maroc. Les ports restent le verrou. Rien n’indique un reflux sanitaire.",
  },
];

export const helpResources = [
  {
    name: "Drogues Info Service",
    phone: "0 800 23 13 13",
    detail: "Anonyme, confidentiel, 7j/7 de 8h à 2h. Appel gratuit depuis un fixe.",
    url: "https://www.drogues-info-service.fr",
    kind: "écoute",
  },
  {
    name: "Écoute cannabis",
    phone: "0 811 91 20 20",
    detail: "Ligne dédiée cannabis (coût d’un appel + service).",
    url: "https://www.drogues-info-service.fr",
    kind: "écoute",
  },
  {
    name: "Fil Santé Jeunes",
    phone: "0 800 235 236",
    detail: "Pour les 12-25 ans et les parents. Anonyme.",
    url: "https://www.filsantejeunes.com",
    kind: "écoute",
  },
  {
    name: "119 — Allô enfance en danger",
    phone: "119",
    detail: "Un mineur recruté, menacé, exploité : signalement gratuit 24h/24.",
    url: "https://www.allo119.gouv.fr",
    kind: "urgence",
  },
  {
    name: "SAMU",
    phone: "15",
    detail: "Overdose, malaise, douleur thoracique, confusion : ne pas « dormir ça ».",
    url: "https://www.samu-de-france.fr",
    kind: "urgence",
  },
  {
    name: "Police / urgence européenne",
    phone: "17 / 112",
    detail: "Violence, arme, menace immédiate.",
    url: "https://www.service-public.fr",
    kind: "urgence",
  },
  {
    name: "3114",
    phone: "3114",
    detail: "Prévention du suicide, 24h/24, gratuit.",
    url: "https://3114.fr",
    kind: "urgence",
  },
  {
    name: "CSAPA / CJC",
    phone: "via l’annuaire",
    detail: "Soins gratuits, substitution, consultations jeunes consommateurs.",
    url: "https://www.drogues-info-service.fr/Adresses-utiles",
    kind: "soin",
  },
  {
    name: "MILDECA",
    phone: "politique publique",
    detail: "Mission interministérielle drogues et addictions.",
    url: "https://www.drogues.gouv.fr",
    kind: "institution",
  },
];

export const quiz = [
  {
    q: "Le cannabis vendu aujourd’hui a-t-il à peu près le même dosage qu’il y a quelques années ?",
    options: [
      "Oui, c’est le même produit",
      "Non : les teneurs en THC ont fortement augmenté",
      "Seule l’herbe a changé, pas la résine",
    ],
    answer: 1,
    explain:
      "Collectes SINTES : THC moyen de l’herbe 6,3 % (2021) → 13,5 % (2024) ; résine 11,9 % → 31,7 %. Un usage « comme avant » n’a plus le même effet sur le cerveau.",
  },
  {
    q: "La cocaïne peut-elle provoquer un infarctus chez une personne jeune, sans maladie connue ?",
    options: [
      "Non, seulement après des années",
      "Oui : c’est un des risques aigus documentés",
      "Uniquement si elle est mélangée à de l’héroïne",
    ],
    answer: 1,
    explain:
      "Santé publique France rappelle les complications cardiovasculaires aiguës (infarctus, AVC, thrombose) et psychiatriques. 5 067 passages aux urgences en 2024.",
  },
  {
    q: "Acheter de la drogue « en livraison », loin d’une cité, finance-t-il le trafic violent ?",
    options: [
      "Non, ce sont deux marchés séparés",
      "Oui : c’est le même marché, décrit par l’OFDT comme unifié et adaptable",
      "Seulement pour la cocaïne",
    ],
    answer: 1,
    explain:
      "L’OFDT décrit la diversification des canaux (rue, livraison, messageries) d’un même marché. L’argent remonte la chaîne — ports, réseaux, points de vente, armes.",
  },
  {
    q: "À partir de quel âge des enfants sont-ils documentés comme guetteurs ?",
    options: ["18 ans révolus", "16 ans", "12-13 ans, parfois moins"],
    answer: 2,
    explain:
      "Enquête TF1, 2025 : « choufs » de 12-13 ans, voire moins, encore à l’école primaire. La loi de juin 2025 a créé un délit de recrutement de mineurs dans un trafic.",
  },
  {
    q: "Où appeler, anonymement, pour parler d’une consommation ou d’un proche ?",
    options: ["Uniquement le 15", "Drogues Info Service, 0 800 23 13 13", "Il n’existe pas de ligne gratuite"],
    answer: 1,
    explain:
      "0 800 23 13 13, 7j/7 de 8h à 2h, anonyme. Les CSAPA et consultations jeunes consommateurs reçoivent aussi, gratuitement.",
  },
];

export function territoryBySlug(slug: string) {
  return territories.find((t) => t.slug === slug);
}
