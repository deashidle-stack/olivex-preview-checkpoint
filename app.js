const products = [
  {
    id: "core",
    kicker: "Høyphenolitisk olivenolje",
    name: "OliveX høyphenolitisk olje",
    description:
      "Mer enn en matolje. Ditt daglige, flytende kosttilskudd. Resultatet er en olje med 600-700 mg/l polyfenoler.",
    image: "./assets/visuals/olivex-product-ritual-2026-06-07.jpg",
    imagePosition: "34% center",
    badge: "600-700 mg/l",
    detailsUrl: "./product-olivex-superolje.html",
    facts: [
      ["Polyfenoler", "600-700 mg/l"],
      ["Oleocanthal", "Over 67 %"],
      ["Dosering", "15-20 ml"],
    ],
    variants: [
      { id: "core-size-1", size: "Størrelse 1", note: "ml og pris kommer", price: null },
      { id: "core-size-2", size: "Størrelse 2", note: "ml og pris kommer", price: null },
    ],
    purchasePlans: [
      { id: "one-time", label: "Engangskjøp", note: "Betales én gang", cartLabel: "Engangskjøp" },
      {
        id: "recurring-preview",
        label: "Fast levering",
        note: "Jevnlig levering",
        cartLabel: "Fast levering",
      },
    ],
  },
  {
    id: "pending",
    kicker: "Produkt 2",
    name: "Neste produkt kommer",
    description:
      "Det neste produktet legges inn når navn, innhold, størrelser og pris er klart.",
    image: "./assets/visuals/olivex-product-placeholder-2026-06-07.jpg",
    badge: "Kommer",
    available: false,
    facts: [
      ["Produkt", "Kommer"],
      ["Størrelser", "2 valg"],
      ["Pris", "Kommer"],
    ],
    variants: [
      { id: "pending-size-1", size: "Størrelse 1", note: "kommer", price: null },
      { id: "pending-size-2", size: "Størrelse 2", note: "kommer", price: null },
    ],
  },
];

const evidenceCopy = {
  heart: {
    step: "01",
    title: "Forebygging av hjerte- og karsykdommer (Hjerteinfarkt og slag)",
    body:
      "Oljen beskytter hjertet ditt på tre måter samtidig: Hindre harskning av kolesterol, lavere blodtrykk og elastiske årer.",
    image: "./assets/visuals/body-journey/olivex-body-heart-2026-06-07.jpg",
    imageAlt: "Visualisering av hjerte, blodårer og polyfenoler fra olivenolje",
    points: ["Hindre harskning av kolesterol", "Lavere blodtrykk", "Elastiske årer"],
  },
  diabetes: {
    step: "02",
    title: "Forebygging av type 2-diabetes og metabolsk syndrom",
    body:
      "Polyfenolene bidrar til å øke kroppens insulinsensitivitet. Dette hjelper cellene dine med å ta opp sukker fra blodet mer effektivt, noe som gir mer stabilt blodsukker og motvirker utviklingen av insulinresistens og type 2-diabetes.",
    image: "./assets/visuals/body-journey/olivex-body-metabolic-2026-06-07.jpg",
    imageAlt: "Visualisering av metabolsk balanse, bukspyttkjertel og polyfenoler",
    points: ["Økt insulinsensitivitet", "Mer stabilt blodsukker", "Motvirker insulinresistens"],
  },
  liver: {
    step: "03",
    title: "Reduksjon av fettlever (Ikke-alkoholisk fettlever)",
    body:
      "Kliniske undersøkelser viser at høyt inntak av polyfenolrik olje reduserer fettansamling i levercellene og demper betennelse i leveren. Dette hjelper organet med dens naturlige fettforbrenning.",
    image: "./assets/visuals/body-journey/olivex-body-liver-2026-06-07.jpg",
    imageAlt: "Visualisering av lever, fettlever og polyfenoler fra olivenolje",
    points: ["Reduserer fettansamling", "Demper betennelse", "Støtter naturlig fettforbrenning"],
  },
  brain: {
    step: "04",
    title: "Nevrologisk beskyttelse",
    body:
      "Hjerneforskning viser at oleocanthal aktiverer kroppens egne mekanismer for å renske ut skadelige proteinavleiringer (amyloid-beta-plakk) i hjernen, de samme avleiringene som knyttes til utviklingen av Alzheimers sykdom.",
    image: "./assets/visuals/body-journey/olivex-body-brain-2026-06-07.jpg",
    imageAlt: "Visualisering av hjerne, nervebaner og oleocanthal",
    points: ["Aktiverer kroppens egne mekanismer", "Rensker ut proteinavleiringer", "Støtter nevrologisk beskyttelse"],
  },
};

const faqs = [
  {
    question: "Hvorfor koster denne oljen mer enn ekstra virgin olivenolje i matbutikken?",
    answer: `Svaret ligger i høstetidspunktet og mengden oliven som kreves. Vanlig olivenolje produseres av modne, mørke oliven fordi de inneholder mye væske og gir mye olje per kilo frukt. Vår superolje lages utelukkende av tidlig høstede, grønne oliven. Umodne, grønne oliven inneholder svært lite olje. Vi trenger opptil fire til fem ganger så mange oliven for å presse én enkelt flaske. Til gjengjeld er det på dette tidspunktet at konsentrasjonen av de aktive virkestoffene er på sitt absolutte maksimum. Du betaler for tettheten av næringsstoffene, ikke for volumet.`,
  },
  {
    question: "Hvorfor smaker oljen litt pepperaktig, og hvorfor må jeg hoste noen ganger?",
    answer: `Det er en helt naturlig, biokjemisk reaksjon og beviset på at den virker. Oljen har en frisk, grønn smak med en karakteristisk pepperaktig ettersmak. At du av og til føler trang til å kremte eller hoste når du svelger den rå, skyldes det høye innholdet av Oleocanthal. Dette unike molekylet aktiverer en spesifikk nerve-reseptor (TRPA1) som sitter dypt i svelget, noe som utløser en mild hosterefleks. Det er akkurat denne egenskapen som bekrefter oljens høye kvalitet og betennelsesdempende egenskaper. Hvis en olivenolje er helt mild og smøraktig, betyr det at innholdet av de biologisk aktive stoffene er lavt.`,
  },
  {
    question: "Er 1 spiseskje om dagen virkelig nok for å gi effekt?",
    answer: `Ja, 1 spiseskje (ca. 15 ml) som en fast helseshot om morgenen er et utmerket utgangspunkt. Mens EU setter en minimumsgrense som tilsvarer 5 mg blandede polyfenoler for å beskytte kolesterolet, viser nyere medisinsk forskning at man bør opp i over 10 mg av kun stoffet Oleocanthal per dag for å oppnå en reell, målbar betennelsesdempende effekt i kroppen. Ved å ta 1 spiseskje rå om morgenen dekker du grunndosen din. Hvis du i tillegg bruker oljen aktivt i hverdagen, for eksempel ringlet over salaten, som topping på middagen eller som erstatning for smør, bikker du enkelt den optimale dagsdosen på 10 mg Oleocanthal, helt uten unødvendige kalorier.`,
  },
  {
    question: "Kan jeg ikke bare spise vanlige oliven i stedet for å drikke oljen?",
    answer: `Du får i deg polyfenoler fra hele oliven, men ikke i samme konsentrasjon eller med samme opptak. Spiseoliven blir nesten alltid lagt i en saltlake eller gjennomgår en herdeprosess for å fjerne den bitre smaken. Denne prosessen vasker ut en stor del av de ømfintlige polyfenolene. I tillegg måtte du ha spist enorme mengder oliven hver dag for å matche konsentrasjonen du får i en konsentrert skje med superolje, der virkestoffene allerede er frigjort og løst opp i en lettabsorberbar fettmatrise.`,
  },
  {
    question: "Kan jeg bruke denne oljen til vanlig steking og matlaging?",
    answer: `Nei, det anbefaler vi ikke. Det vil være sløsing med de sunne stoffene. Høye temperaturer i en stekepanne (over 120-140 °C) vil raskt bryte ned og ødelegge de ømfintlige polyfenolene. Oljens sunne fettsyrer tåler varmen godt, men du mister den unike effekten. Bruk heller en rimeligere, vanlig olivenolje til steking, og behold superoljen til kaldt bruk for å bevare virkestoffene intakt.`,
  },
  {
    question: "I hvilken alder er det viktigst å begynne med et daglig inntak?",
    answer: `Forebyggingen bør starte i 30-40-årsalderen, mens den aktive beskyttelsen blir mer kritisk fra 50 år og oppover. 30-50 år: Det er i disse tiårene at kronisk, lavgradig betennelse begynner å etablere seg i kroppen uten at du merker det. Ved å starte tidlig, bremser du disse prosessene før de utvikler seg til synlig sykdom. 50 år+: Etter fylte 50 øker risikoen for tette blodårer, stive ledd, insulinresistens og kognitiv svikt markant. Her fungerer oljen som en aktiv beskytter av organer, hjerneceller og blodårer.`,
  },
  {
    question: "Tran gis jo gjerne til barn, bør denne oljen også gis til barn?",
    answer: `Nei, vår høyphenolitiske olje er utviklet spesifikt for voksne kropper. Barn har andre ernæringsmessige behov under vekst. De trenger først og fremst Omega-3 og Vitamin D (som finnes i tran) for utvikling av skjelett, syn og hjerne. Barn har dessuten naturlig høye nivåer av egne antioksidanter og har ennå ikke utviklet den aldersrelaterte slitasjen som denne oljen er designet for å motvirke. Gi heller barna en mild, vanlig ekstra virgin olivenolje som en sunn fettkilde i maten.`,
  },
  {
    question: "Bør jeg ta oljen på tom mage om morgenen, eller sammen med mat?",
    answer: `Begge deler fungerer godt, men det avhenger av hva magen din trives best med. Å ta den som en ren "helseshot" på tom mage om morgenen sikrer et uforstyrret opptak i tarmen. Hvis du derimot synes det er ubehagelig med rent fett på tom mage, kan du helt fint ta den sammen med frokosten (f.eks. over litt yoghurt eller en skive grovbrød). Det viktigste er at du tar den daglig, ikke nøyaktig hva den tas sammen med.`,
  },
  {
    question: "Hvilke konkrete blodmarkører kan legen min måle for å se effekten?",
    answer: `Ved regelmessig inntak over 3-6 måneder vil du kunne se positive endringer på flere sentrale helsemarkører: Oksidert LDL (ox-LDL), hs-CRP, HbA1c (langtidsblodsukker) og blodtrykk.`,
  },
  {
    question: "Hvorfor er det så viktig å dempe betennelsesnivået i kroppen, og hvorfor øker det med alderen?",
    answer: `Kronisk, lavgradig betennelse (ofte kalt "silent inflammation") er roten til de fleste moderne livsstilssykdommer. Den fungerer som en usynlig ulmebrann som over tid skader blodårene og vev. Jo eldre vi blir, desto mer opplever vi det forskerne kaller "inflammaging" (aldringsbetennelse). Immunforsvaret svekkes naturlig, cellene produserer mer avfall, og kroppens egen evne til å slukke disse ulmebrannene blir dårligere. Derfor blir vi med årene mer avhengige av å tilføre kraftige, eksterne betennelsesdempere som Oleocanthal fra superoljen.`,
  },
  {
    question: "Hvordan kan det skadelige bukfettet (visceralt fett) reduseres av at man drikker ren olje?",
    answer: `Det virker som et paradoks, men biologien handler om hormoner og metabolisme, ikke bare kalorier. Visceralt fett (fettet rundt de indre organene) trigges i stor grad av høyt insulin og kronisk betennelse. Polyfenolene gjør cellene mer sensitive for insulin. Når insulinnivået i blodet faller, går kroppen ut av "fettlagringsmodus". Kroppen foretrekker å bruke de enumettede fettsyrene i olivenolje (oleinsyre) som drivstoff. Studier viser at dette inntaket stimulerer leveren til å øke den generelle fettforbrenningen. Fettet i oljen aktiverer naturlige metthetsstoffer i tarmen, noe som demper søtsug og småspising ellers på dagen.`,
  },
  {
    question: "Blir jeg ikke tykk av å ta ren olje hver dag?",
    answer: `Nei, ikke så lenge det erstatter andre, mindre sunne fettkilder i kostholdet ditt. En spiseskje olivenolje utgjør i underkant av 120 kalorier. Fordi dette fettet øker metthetsfølelsen og stabiliserer blodsukkeret (slik at du unngår akutt søtsug), viser kliniske studier at personer som legger til høyphenolitisk olivenolje i kostholdet, ofte ender opp med å spise mindre totalt sett i løpet av en dag. Det handler om å bytte ut usunt fett (som mettet fett fra ultraprosessert mat) med dette rene, flytende tilskuddet.`,
  },
  {
    question: "Hvor raskt kan jeg forvente å merke eller måle en effekt?",
    answer: `De biokjemiske endringene starter med en gang, men målbare resultater krever litt tid. Uke 1-2: Den milde betennelsesdempende effekten i muskler og ledd kan for noen merkes ganske raskt som en lett lindring av stivhet. Måned 2-3: Cellene i blodårene fornyer seg. Dette er tidspunktet hvor du kan begynne å se utslag på blodtrykket og betennelsesmarkører (hs-CRP) på prøver hos legen. Måned 6+: Langtidseffekter på metabolisme, reduksjon av visceralt bukfett og leverhelse blir tydelige. Husk at dette er en forebyggende livsstilsendring, ikke en hurtigkur.`,
  },
  {
    question: "Kan jeg ta denne oljen hvis jeg allerede går på reseptbelagte medisiner?",
    answer: `Ja, for de aller fleste er dette helt trygt, da det er en ren og naturlig matvare. Siden superoljen bidrar til å gjøre blodårene mer elastiske og naturlig senke blodtrykket, kan den over tid forsterke effekten av blodtrykksmedisiner eller blodfortynnende medisiner. Hvis du går på sterke doser av dette, anbefaler vi at du nevner det for legen din, slik at de kan følge med på om medisineringen din eventuelt kan justeres ned etter hvert som kroppen gjør deler av jobben naturlig.`,
  },
];

const state = {
  selectedVariants: Object.fromEntries(products.map((product) => [product.id, product.variants[0].id])),
  selectedPlans: Object.fromEntries(
    products.map((product) => [product.id, product.purchasePlans?.[0]?.id || "one-time"]),
  ),
  activeProductIndex: 0,
  cart: new Map(),
  assistantMessages: [
    {
      role: "assistant",
      title: "OliveX",
      answer: "Hei. Skriv et spørsmål om bruk, smak, oppbevaring, analysebevis, betaling eller levering.",
      source: "Medisinske spørsmål bør tas med lege eller farmasøyt.",
    },
    {
      role: "assistant",
      title: "FAQ-svar",
      answer:
        "Jeg kan svare direkte på spørsmål om pris, smak, daglig dose, steking, oppbevaring, analysebevis, Vipps og levering.",
      source: "Svarene er basert på FAQ og informasjonen på siden.",
    },
  ],
};

const formatter = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "NOK",
  maximumFractionDigits: 0,
});

function formatPrice(price) {
  return Number.isFinite(price) ? formatter.format(price) : "Pris kommer";
}

function canPurchaseVariant(product, variant) {
  return product.available !== false && Number.isFinite(variant?.price);
}

const productGrid = document.querySelector("[data-product-grid]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("[data-cart-items]");
const cartEmpty = document.querySelector("[data-cart-empty]");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const header = document.querySelector(".site-header");
const evidencePanel = document.querySelector("[data-evidence-panel]");
const faqList = document.querySelector("[data-faq-list]");
const faqSearch = document.querySelector("[data-faq-search]");
const videoSlot = document.querySelector("[data-video-slot]");
const cartButton = document.querySelector("[data-open-cart]");
const cartPanel = document.querySelector(".cart-panel");
const liveRegion = document.querySelector("[data-live-region]");
const assistantForm = document.querySelector("[data-assistant-form]");
const assistantInput = document.querySelector("[data-assistant-input]");
const assistantAnswer = document.querySelector("[data-assistant-answer]");
const stickyPurchaseBars = document.querySelectorAll("[data-sticky-purchase]");
const consentBanner = document.querySelector("[data-consent-banner]");
const consentPreferences = document.querySelector("[data-consent-preferences]");
const consentSettingsButton = document.querySelector("[data-consent-settings]");
const consentSaveButton = document.querySelector("[data-consent-save]");
const consentReopenButtons = document.querySelectorAll("[data-consent-reopen]");
const CONSENT_KEY = "olivex-consent-preview";

const assistantTopics = [
  {
    pattern: /steking|steke|varme|varm|matlaging|panne/,
    title: "Bruk den kaldt",
    answer:
      "Denne oljen bør brukes kaldt: som helseshot, over salat, yoghurt eller rett før servering. Høye temperaturer bryter ned de ømfintlige polyfenolene.",
    source: "Kilde: FAQ om steking og kildetekstens seksjon om daglig rituale",
  },
  {
    pattern: /oppbevar|lagre|mørkt|kjølig|flaske|holdbar/,
    title: "Oppbevaring",
    answer:
      "Flasken bør oppbevares mørkt og kjølig. Det hjelper med å bevare de ømfintlige polyfenolene.",
    source: "Kilde: kildetekstens seksjon om daglig rituale",
  },
  {
    pattern: /dose|dosering|mengde|spiseskje|daglig|morgen|ritual/,
    title: "Daglig bruk",
    answer:
      "Kildeteksten anbefaler 15-20 ml, altså 1,5 til 2 spiseskjeer, hver morgen. Den kan drikkes bar eller helles over kald mat.",
    source: "Kilde: kildetekstens seksjon om daglig rituale",
  },
  {
    pattern: /smak|pepper|host|hals|oleocanthal|stikk/,
    title: "Pepperaktig smak",
    answer:
      "Den skarpe, pepperaktige følelsen bakerst i halsen knyttes i kildeteksten til Oleocanthal. Full forklaring ligger i FAQ og Oleocanthal-seksjonen.",
    source: "Kilde: FAQ om smak og seksjonen om Oleocanthal",
  },
  {
    pattern: /analyse|sertifikat|batch|lab|laborator|dokumentasjon|coa|bevis/,
    title: "Analysebevis",
    answer:
      "Når analysebeviset er klart, legges opprinnelse, metode, relevante måleverdier og PDF-lenke inn på produktsiden.",
    source: "Kilde: produktinformasjon",
  },
  {
    pattern: /vipps|kort|betaling|checkout|betale/,
    title: "Betaling",
    answer: "I checkout kan du velge Vipps eller kortbetaling.",
    source: "Kilde: nettbutikkspesifikasjon",
  },
  {
    pattern: /abonnement|fast levering|subscribe|gjentak|recurring/,
    title: "Abonnement",
    answer:
      "Fast levering kan velges når abonnement er tilgjengelig for produktet. Vilkår, intervall og pris vises før betaling.",
    source: "Kilde: nettbutikkspesifikasjon",
  },
  {
    pattern: /posten|bring|frakt|levering|leveres|levert|sendes|forsendelse|pakke|sporing/,
    title: "Levering",
    answer: "Levering skjer med Posten/Bring. Leveringsvalg, pris, hentested og sporing vises i checkout.",
    source: "Kilde: nettbutikkspesifikasjon",
  },
  {
    pattern: /retur|angre|skadet|reklamasjon|bytte/,
    title: "Retur og skadet vare",
    answer: "Retur, angrerett og skadet vare må følge de endelige kjøps- og returvilkårene. Hvis vilkårene ikke er publisert, skal spørsmålet sendes til support.",
    source: "Kilde: kjøpsvilkår og support",
  },
];

const assistantMedicalPattern =
  /medisin|resept|blodtrykk|blodfortynn|diabetes|alzheimer|sykdom|behandling|gravid|ammer|lege|farmasøyt|hjerteinfarkt|slag|fettlever|leversykdom|\blever\b|betennelse|biomarkør|hbA1c|ldl|kolesterol|bivirkning|insulin|visceralt|bukfett|kognitiv|hjerne|diagnose|symptom|dose ved|dosering ved/;

let previousFocus = null;

function getVariant(variantId) {
  for (const product of products) {
    const variant = product.variants.find((item) => item.id === variantId);
    if (variant) return { product, variant };
  }
  return null;
}

function getPlan(product, planId) {
  return (
    product.purchasePlans?.find((plan) => plan.id === planId) || {
      id: "one-time",
      label: "Engangskjøp",
      note: "Betales én gang",
      cartLabel: "Engangskjøp",
    }
  );
}

function getCartKey(variantId, planId = "one-time") {
  return `${variantId}::${planId}`;
}

function getCartEntry(cartKey) {
  const [variantId, planId = "one-time"] = cartKey.split("::");
  const match = getVariant(variantId);
  if (!match) return null;
  return {
    ...match,
    plan: getPlan(match.product, planId),
    cartKey,
  };
}

function setLiveMessage(message) {
  if (liveRegion) liveRegion.textContent = message;
}

function readConsent() {
  try {
    const saved = localStorage.getItem(CONSENT_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

function writeConsent(consent) {
  const payload = {
    necessary: true,
    analytics: Boolean(consent.analytics),
    marketing: Boolean(consent.marketing),
    savedAt: new Date().toISOString(),
  };

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
  } catch {
    // Preview fallback: still apply the choice in-memory if storage is unavailable.
  }

  applyConsent(payload);
  setLiveMessage("Personvernvalg lagret.");
}

function applyConsent(consent) {
  const saved = Boolean(consent);
  document.documentElement.dataset.analyticsConsent = consent?.analytics ? "granted" : "denied";
  document.documentElement.dataset.marketingConsent = consent?.marketing ? "granted" : "denied";
  document.body.classList.toggle("consent-open", !saved);
  if (consentBanner) consentBanner.hidden = saved;
  consentReopenButtons.forEach((button) => {
    button.hidden = !saved;
  });
}

function syncConsentInputs(consent = {}) {
  document.querySelectorAll("[data-consent-toggle]").forEach((input) => {
    input.checked = Boolean(consent[input.dataset.consentToggle]);
  });
}

function showConsentBanner(shouldFocus = false) {
  if (!consentBanner) return;
  const consent = readConsent() || {};
  syncConsentInputs(consent);
  applyConsent(null);
  if (shouldFocus) {
    consentSettingsButton?.focus();
  }
}

function hideConsentPreferences() {
  if (!consentPreferences || !consentSettingsButton || !consentSaveButton) return;
  consentPreferences.hidden = true;
  consentSettingsButton.setAttribute("aria-expanded", "false");
  consentSaveButton.hidden = true;
}

function toggleConsentPreferences() {
  if (!consentPreferences || !consentSettingsButton || !consentSaveButton) return;
  const nextOpen = consentPreferences.hidden;
  consentPreferences.hidden = !nextOpen;
  consentSettingsButton.setAttribute("aria-expanded", nextOpen ? "true" : "false");
  consentSaveButton.hidden = !nextOpen;
}

function saveCustomConsent() {
  const consent = {};
  document.querySelectorAll("[data-consent-toggle]").forEach((input) => {
    consent[input.dataset.consentToggle] = input.checked;
  });
  writeConsent(consent);
  hideConsentPreferences();
}

function syncPlanControls(productId, shouldFocus = false) {
  const selectedPlanId = state.selectedPlans[productId] || "one-time";
  document.querySelectorAll(`[data-select-plan][data-product-id="${productId}"]`).forEach((button) => {
    const selected = button.dataset.selectPlan === selectedPlanId;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-checked", selected ? "true" : "false");
    if (selected && shouldFocus) button.focus();
  });
}

function syncStickyPurchase(productId) {
  stickyPurchaseBars.forEach((bar) => {
    if (bar.dataset.productId !== productId) return;

    const select = bar.querySelector("[data-sticky-variant]");
    const price = bar.querySelector("[data-sticky-price]");
    const planLabel = bar.querySelector("[data-sticky-plan]");
    const addButton = bar.querySelector("[data-sticky-add]");
    const match = getVariant(select?.value || "");
    const plan = getPlan(match?.product || products.find((product) => product.id === productId), state.selectedPlans[productId]);
    const canPurchase = match ? canPurchaseVariant(match.product, match.variant) : false;

    if (!match || !addButton) return;

    addButton.dataset.addToCart = match.variant.id;
    addButton.dataset.productId = productId;
    addButton.disabled = !canPurchase;
    addButton.textContent = canPurchase ? `Legg ${match.variant.size} i kurv` : "Pris kommer";
    if (price) price.textContent = formatPrice(match.variant.price);
    if (planLabel) planLabel.textContent = plan.label;
  });
}

function selectVariant(productId, variantId, shouldFocus = false) {
  state.selectedVariants[productId] = variantId;
  renderProducts();
  syncPlanControls(productId);
  syncStickyPurchase(productId);
  if (shouldFocus) {
    requestAnimationFrame(() => {
      document.querySelector(`[data-select-variant="${variantId}"]`)?.focus();
    });
  }
}

function selectPurchasePlan(productId, planId, shouldFocus = false) {
  state.selectedPlans[productId] = planId;
  renderProducts();
  syncPlanControls(productId, shouldFocus);
  syncStickyPurchase(productId);
}

function setActiveProduct(index, shouldFocus = false) {
  state.activeProductIndex = (index + products.length) % products.length;
  renderProducts();
  if (shouldFocus) {
    requestAnimationFrame(() => {
      document.querySelector(`[data-product-slide="${state.activeProductIndex}"]`)?.focus();
    });
  }
}

function renderProducts() {
  if (!productGrid) return;
  const product = products[state.activeProductIndex] || products[0];
  const selectedId = state.selectedVariants[product.id];
  const selectedVariant = product.variants.find((variant) => variant.id === selectedId);
  const selectedPlanId = state.selectedPlans[product.id] || product.purchasePlans?.[0]?.id || "one-time";
  const canPurchase = canPurchaseVariant(product, selectedVariant);

  productGrid.innerHTML = `
    <section
      class="product-carousel"
      aria-roledescription="carousel"
      aria-label="Produkter"
      aria-live="polite"
    >
      <div class="product-carousel-stage">
        <article class="product-card product-card-feature" aria-labelledby="${product.id}-title">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name}" loading="eager" decoding="async" style="object-position: ${product.imagePosition || "center"}" />
            <span class="product-badge">${product.badge}</span>
            <div class="product-media-caption">
              <span>Slide ${state.activeProductIndex + 1} av ${products.length}</span>
              <strong>${product.available === false ? "Produktdata kommer" : "Høyphenolitisk olje"}</strong>
            </div>
          </div>
          <div class="product-body">
            <span class="product-kicker">${product.kicker}</span>
            <h3 id="${product.id}-title">${product.name}</h3>
            <p>${product.description}</p>
            <div class="variant-group" role="radiogroup" aria-label="Velg størrelse for ${product.name}">
              <span class="variant-label">Størrelse</span>
              <div class="variant-options">
                ${product.variants
                  .map(
                    (variant) => `
                      <button
                        class="variant-option ${variant.id === selectedId ? "is-selected" : ""}"
                        type="button"
                        role="radio"
                        aria-checked="${variant.id === selectedId ? "true" : "false"}"
                        data-select-variant="${variant.id}"
                        data-product-id="${product.id}"
                      >
                        <strong>${variant.size}</strong>
                        <span>${variant.note}</span>
                        <span>${formatPrice(variant.price)}</span>
                      </button>
                    `,
                  )
                  .join("")}
              </div>
            </div>
            ${
              product.available === false || !product.purchasePlans?.length
                ? ""
                : `
                  <div class="purchase-plan-group">
                    <span class="variant-label">Kjøpsvalg</span>
                    <div class="purchase-plan-options" role="radiogroup" aria-label="Velg kjøpsvalg for ${product.name}">
                      ${product.purchasePlans
                        .map(
                          (plan) => `
                            <button
                              class="purchase-plan-option ${plan.id === selectedPlanId ? "is-selected" : ""}"
                              type="button"
                              role="radio"
                              aria-checked="${plan.id === selectedPlanId ? "true" : "false"}"
                              data-select-plan="${plan.id}"
                              data-product-id="${product.id}"
                            >
                              <strong>${plan.label}</strong>
                              <span>${plan.note}</span>
                            </button>
                          `,
                        )
                        .join("")}
                    </div>
                  </div>
                `
            }
            <div class="product-facts" aria-label="Produktfakta">
              ${product.facts
                .map(
                  ([label, value]) => `
                    <div>
                      <span>${label}</span>
                      <strong>${value}</strong>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <div class="product-actions">
              <button
                class="add-button"
                type="button"
                ${canPurchase ? `data-add-to-cart="${selectedVariant.id}"` : "disabled"}
              >
                ${product.available === false ? "Kommer" : canPurchase ? `Legg ${selectedVariant.size} i kurv` : "Pris kommer"}
              </button>
              ${
                product.detailsUrl
                  ? `<a class="detail-link" href="${product.detailsUrl}">Produktside og analysebevis</a>`
                  : ""
              }
            </div>
          </div>
        </article>
      </div>
      <div class="product-carousel-controls" aria-label="Produktcarousel kontroller">
        <button class="carousel-arrow" type="button" data-product-carousel-prev aria-label="Forrige produkt">Forrige</button>
        <div class="product-thumbs" role="tablist" aria-label="Velg produkt">
          ${products
            .map(
              (item, index) => `
                <button
                  class="product-thumb ${index === state.activeProductIndex ? "is-active" : ""}"
                  type="button"
                  role="tab"
                  aria-selected="${index === state.activeProductIndex ? "true" : "false"}"
                  data-product-slide="${index}"
                >
                  <img src="${item.image}" alt="" loading="lazy" decoding="async" />
                  <span>${item.name}</span>
                </button>
              `,
            )
            .join("")}
        </div>
        <button class="carousel-arrow" type="button" data-product-carousel-next aria-label="Neste produkt">Neste</button>
      </div>
    </section>
  `;
}

function renderCart() {
  const entries = [...state.cart.entries()]
    .map(([cartKey, quantity]) => {
      const match = getCartEntry(cartKey);
      return match ? { ...match, quantity } : null;
    })
    .filter(Boolean);
  const totalQuantity = entries.reduce((sum, item) => sum + item.quantity, 0);
  const total = entries.reduce((sum, item) => sum + item.quantity * (item.variant.price || 0), 0);

  cartCount.textContent = String(totalQuantity);
  cartTotal.textContent = formatter.format(total);
  cartEmpty.hidden = entries.length > 0;
  setLiveMessage(totalQuantity ? `Kurven har ${totalQuantity} produkt${totalQuantity === 1 ? "" : "er"}.` : "Kurven er tom.");

  cartItems.innerHTML = entries
    .map(
      ({ product, variant, plan, cartKey, quantity }) => `
        <div class="cart-item">
          <div>
            <strong>${product.name}</strong>
            <span>${variant.size} · ${formatPrice(variant.price)}</span>
            <span class="cart-plan">${plan.cartLabel || plan.label}</span>
          </div>
          <div class="quantity-control" aria-label="Antall ${product.name} ${variant.size} ${plan.cartLabel || plan.label}">
            <button type="button" data-decrease="${cartKey}" aria-label="Reduser antall">−</button>
            <span>${quantity}</span>
            <button type="button" data-increase="${cartKey}" aria-label="Øk antall">+</button>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderFaqs(query = "") {
  if (!faqList) return;
  const normalized = query.trim().toLowerCase();
  const matchingFaqs = normalized
    ? faqs.filter((faq) => `${faq.question} ${faq.answer}`.toLowerCase().includes(normalized))
    : faqs.slice(0, 5);

  faqList.innerHTML = matchingFaqs.length
    ? matchingFaqs
        .map(
          (faq, index) => `
            <details class="faq-item">
              <summary>${faq.question}</summary>
              <p>${faq.answer}</p>
            </details>
          `,
        )
        .join("") +
      (!normalized && faqs.length > matchingFaqs.length
        ? `<p class="faq-more-note">Søk i feltet over for å hente frem resten av FAQ-arkivet.</p>`
        : "")
    : `<p class="faq-empty">Ingen treff. Prøv et annet søkeord eller kontakt support.</p>`;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function normalizeText(value) {
  return value.trim().toLowerCase();
}

function renderAssistantMessages() {
  if (!assistantAnswer) return;
  assistantAnswer.classList.toggle("is-warning", state.assistantMessages.some((message) => message.warning));
  assistantAnswer.innerHTML = state.assistantMessages
    .map((message) => {
      if (message.role === "user") {
        return `
          <div class="chat-bubble user">
            <strong>Du</strong>
            <span>${escapeHtml(message.text)}</span>
          </div>
        `;
      }

      return `
        <div class="chat-bubble assistant ${message.warning ? "is-warning" : ""}">
          <strong>${escapeHtml(message.title)}</strong>
          <span>${escapeHtml(message.answer)}</span>
          ${message.source ? `<small>${escapeHtml(message.source)}</small>` : ""}
        </div>
      `;
    })
    .join("");
  assistantAnswer.scrollTop = assistantAnswer.scrollHeight;
}

function pushAssistantResponse(response, query = "") {
  if (query) {
    state.assistantMessages.push({ role: "user", text: query });
  }
  state.assistantMessages.push({ role: "assistant", ...response });
  if (state.assistantMessages.length > 9) {
    state.assistantMessages = [state.assistantMessages[0], ...state.assistantMessages.slice(-8)];
  }
  renderAssistantMessages();
}

function answerAssistant(query) {
  const normalized = normalizeText(query);
  if (!assistantAnswer) return;

  if (!normalized) {
    pushAssistantResponse({
      title: "Skriv et spørsmål.",
      answer: "Du kan spørre om smak, bruk, dosering, oppbevaring, analysebevis, Vipps eller levering.",
      source: "Kilde: FAQ og informasjonen på siden",
    });
    return;
  }

  if (assistantMedicalPattern.test(normalized)) {
    pushAssistantResponse({
      title: "Medisinske spørsmål må håndteres av helsepersonell.",
      answer:
        "Jeg kan ikke gi medisinske råd. For spørsmål om sykdom, medisiner, graviditet eller behandling bør du kontakte lege eller farmasøyt.",
      warning: true,
    }, query);
    return;
  }

  const topic = assistantTopics.find((item) => item.pattern.test(normalized));
  if (topic) {
    pushAssistantResponse(topic, query);
    return;
  }

  const match = faqs.find((faq) => normalizeText(`${faq.question} ${faq.answer}`).includes(normalized));
  if (match) {
    if (assistantMedicalPattern.test(normalizeText(`${match.question} ${match.answer}`))) {
      pushAssistantResponse({
        title: "Dette FAQ-treffet krever manuell vurdering.",
        answer:
          "Spørsmålet kan handle om helse, sykdom, biomarkører eller medisiner. Ta det med lege, farmasøyt eller support.",
        warning: true,
      }, query);
      return;
    }
    pushAssistantResponse({
      title: match.question,
      answer: match.answer,
      source: "Kilde: FAQ på siden",
    }, query);
    return;
  }

  pushAssistantResponse({
    title: "Ingen sikkert treff.",
    answer: `Jeg fant ikke et sikkert svar på "${query}". Kontakt support for hjelp.`,
  }, query);
}

async function hydrateProducerVideo() {
  if (!videoSlot) return;
  const videoReady = videoSlot.dataset.videoReady === "true";
  const videoSrc = videoSlot.dataset.videoSrc;
  if (!videoReady || !videoSrc) return;
  const videoType = videoSlot.dataset.videoType || "video/mp4";
  const poster = videoSlot.dataset.videoPoster ? ` poster="${videoSlot.dataset.videoPoster}"` : "";
  const captions = videoSlot.dataset.videoCaptions
    ? `<track kind="captions" src="${videoSlot.dataset.videoCaptions}" srclang="no" label="Norsk" default />`
    : "";
  const transcript = videoSlot.dataset.videoTranscript
    ? `<p class="video-transcript-link"><a href="${videoSlot.dataset.videoTranscript}">Les transkript</a></p>`
    : "";
  videoSlot.innerHTML = `
    <video controls playsinline preload="metadata"${poster}>
      <source src="${videoSrc}" type="${videoType}" />
      ${captions}
      Nettleseren din støtter ikke videoavspilling.
    </video>
    ${transcript}
  `;
}

function openCart() {
  previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  cartDrawer.inert = false;
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartButton?.setAttribute("aria-expanded", "true");
  document.body.classList.add("cart-open");
  requestAnimationFrame(() => {
    cartPanel?.focus();
  });
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartDrawer.inert = true;
  cartButton?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("cart-open");
  if (previousFocus && document.contains(previousFocus)) {
    previousFocus.focus();
  }
}

function selectEvidenceTab(tabId, shouldFocus = false) {
  const copy = evidenceCopy[tabId];
  if (!copy) return;
  document.querySelectorAll("[data-tab]").forEach((button) => {
    const selected = button.dataset.tab === tabId;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-selected", selected ? "true" : "false");
    button.tabIndex = selected ? 0 : -1;
    if (selected && shouldFocus) button.focus();
  });
  evidencePanel.innerHTML = `
    <div class="evidence-story-copy">
      <span class="journey-step">${copy.step}</span>
      <h3>${copy.title}</h3>
      <p>${copy.body}</p>
      <ul>
        ${copy.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
    </div>
    <figure class="evidence-story-visual">
      <img src="${copy.image}" alt="${copy.imageAlt}" loading="lazy" decoding="async" />
    </figure>
  `;
}

document.addEventListener("click", (event) => {
  const selectButton = event.target.closest("[data-select-variant]");
  const planButton = event.target.closest("[data-select-plan]");
  const addButton = event.target.closest("[data-add-to-cart]");
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");
  const tabButton = event.target.closest("[data-tab]");
  const productSlideButton = event.target.closest("[data-product-slide]");
  const productPrevButton = event.target.closest("[data-product-carousel-prev]");
  const productNextButton = event.target.closest("[data-product-carousel-next]");

  if (selectButton) {
    selectVariant(selectButton.dataset.productId, selectButton.dataset.selectVariant);
  }

  if (planButton) {
    selectPurchasePlan(planButton.dataset.productId, planButton.dataset.selectPlan);
  }

  if (addButton) {
    const variantId = addButton.dataset.addToCart;
    const match = getVariant(variantId);
    if (!match) return;
    if (!canPurchaseVariant(match.product, match.variant)) {
      setLiveMessage("Pris og størrelse må bekreftes før produktet kan legges i kurv.");
      return;
    }
    const productId = addButton.dataset.productId || match.product.id;
    const planId =
      addButton.dataset.planId || state.selectedPlans[productId] || match.product.purchasePlans?.[0]?.id || "one-time";
    const cartKey = getCartKey(variantId, planId);
    state.cart.set(cartKey, (state.cart.get(cartKey) || 0) + 1);
    renderCart();
    setLiveMessage(`${match.product.name} ${match.variant.size} (${getPlan(match.product, planId).cartLabel}) lagt i kurv.`);
    openCart();
  }

  if (increaseButton) {
    const cartKey = increaseButton.dataset.increase;
    state.cart.set(cartKey, (state.cart.get(cartKey) || 0) + 1);
    renderCart();
  }

  if (decreaseButton) {
    const cartKey = decreaseButton.dataset.decrease;
    const next = (state.cart.get(cartKey) || 0) - 1;
    if (next <= 0) state.cart.delete(cartKey);
    else state.cart.set(cartKey, next);
    renderCart();
  }

  if (event.target.closest("[data-open-cart]")) openCart();
  if (event.target.closest("[data-close-cart]")) closeCart();

  if (tabButton) {
    selectEvidenceTab(tabButton.dataset.tab);
  }

  if (productSlideButton) {
    setActiveProduct(Number(productSlideButton.dataset.productSlide));
  }

  if (productPrevButton) {
    setActiveProduct(state.activeProductIndex - 1);
  }

  if (productNextButton) {
    setActiveProduct(state.activeProductIndex + 1);
  }
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-consent-settings]")) {
    toggleConsentPreferences();
  }

  if (event.target.closest("[data-consent-reject]")) {
    writeConsent({ analytics: false, marketing: false });
    hideConsentPreferences();
  }

  if (event.target.closest("[data-consent-accept]")) {
    writeConsent({ analytics: true, marketing: true });
    hideConsentPreferences();
  }

  if (event.target.closest("[data-consent-save]")) {
    saveCustomConsent();
  }

  if (event.target.closest("[data-consent-reopen]")) {
    showConsentBanner(true);
  }
});

document.addEventListener("keydown", (event) => {
  const variantButton = event.target.closest?.("[data-select-variant]");
  const planButton = event.target.closest?.("[data-select-plan]");
  const tabButton = event.target.closest?.("[data-tab]");

  if (variantButton && ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) {
    event.preventDefault();
    const buttons = [...variantButton.closest(".variant-options").querySelectorAll("[data-select-variant]")];
    const currentIndex = buttons.indexOf(variantButton);
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
    let nextIndex = currentIndex + direction;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = buttons.length - 1;
    if (nextIndex < 0) nextIndex = buttons.length - 1;
    if (nextIndex >= buttons.length) nextIndex = 0;
    const nextButton = buttons[nextIndex];
    selectVariant(nextButton.dataset.productId, nextButton.dataset.selectVariant, true);
  }

  if (planButton && ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) {
    event.preventDefault();
    const buttons = [...planButton.closest(".purchase-plan-options").querySelectorAll("[data-select-plan]")];
    const currentIndex = buttons.indexOf(planButton);
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
    let nextIndex = currentIndex + direction;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = buttons.length - 1;
    if (nextIndex < 0) nextIndex = buttons.length - 1;
    if (nextIndex >= buttons.length) nextIndex = 0;
    const nextButton = buttons[nextIndex];
    selectPurchasePlan(nextButton.dataset.productId, nextButton.dataset.selectPlan, true);
  }

  if (tabButton && ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) {
    event.preventDefault();
    const tabs = [...document.querySelectorAll("[data-tab]")];
    const currentIndex = tabs.indexOf(tabButton);
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
    let nextIndex = currentIndex + direction;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex < 0) nextIndex = tabs.length - 1;
    if (nextIndex >= tabs.length) nextIndex = 0;
    selectEvidenceTab(tabs[nextIndex].dataset.tab, true);
  }

  if (event.key === "Escape") closeCart();
});

document.addEventListener("change", (event) => {
  const stickyVariant = event.target.closest?.("[data-sticky-variant]");
  if (stickyVariant) {
    syncStickyPurchase(stickyVariant.dataset.productId);
  }
});

faqSearch?.addEventListener("submit", (event) => {
  event.preventDefault();
  renderFaqs(new FormData(faqSearch).get("faq-query") || "");
});

faqSearch?.addEventListener("input", (event) => {
  if (event.target.matches('input[type="search"]')) {
    renderFaqs(event.target.value);
  }
});

assistantForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = assistantInput?.value || "";
  answerAssistant(query);
  if (assistantInput) assistantInput.value = "";
});

document.addEventListener("click", (event) => {
  const promptButton = event.target.closest("[data-assistant-prompt]");
  if (!promptButton) return;
  const prompt = promptButton.dataset.assistantPrompt || "";
  answerAssistant(prompt);
});

const observer = new IntersectionObserver(
  ([entry]) => {
    if (header) header.dataset.elevated = entry.isIntersecting ? "false" : "true";
  },
  { threshold: 0.04 },
);

if (productGrid) renderProducts();
stickyPurchaseBars.forEach((bar) => syncStickyPurchase(bar.dataset.productId));
const savedConsent = readConsent();
if (savedConsent) applyConsent(savedConsent);
else showConsentBanner();
renderCart();
renderFaqs();
selectEvidenceTab("heart");
renderAssistantMessages();
hydrateProducerVideo();
const heroElement = document.querySelector(".hero");
if (heroElement) {
  observer.observe(heroElement);
}
