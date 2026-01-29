// ====== EmailJS instellingen (VUL IN) ======
// 1) Maak gratis account: https://www.emailjs.com/
// 2) Add "Email Service" (bv Gmail/Outlook)
// 3) Create "Email Template"
// 4) Kopieer hier jouw IDs

const EMAILJS_PUBLIC_KEY = "VUL_HIER_JE_PUBLIC_KEY_IN";
const EMAILJS_SERVICE_ID = "VUL_HIER_JE_SERVICE_ID_IN";
const EMAILJS_TEMPLATE_ID = "VUL_HIER_JE_TEMPLATE_ID_IN";

// ==========================================

(function initEmailJS(){
  if (!window.emailjs) return;
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
})();

const form = document.getElementById("contactForm");
const ok = document.getElementById("alertOk");
const err = document.getElementById("alertErr");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  ok.style.display = "none";
  err.style.display = "none";

  const data = {
    naam: document.getElementById("naam").value.trim(),
    telefoon: document.getElementById("telefoon").value.trim(),
    email: document.getElementById("email").value.trim(),
    bedrijf: document.getElementById("bedrijf").value.trim(),
    bericht: document.getElementById("bericht").value.trim(),
    // Handig voor onderwerpregel:
    subject: `Nieuwe aanvraag via website - ${new Date().toLocaleString("nl-NL")}`
  };

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data);
    ok.style.display = "block";
    form.reset();
  } catch (error) {
    console.error(error);
    err.style.display = "block";
  }
});
