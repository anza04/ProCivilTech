window.addEventListener("load", function () {
  // obtain plugin
  var cc = initCookieConsent();
  // run plugin with your configuration
  cc.run({
    mode: localStorage.getItem("consenso"),
    current_lang: "it",
    autoclear_cookies: false, // default: false
    page_scripts: false, // default: false
    force_consent: true,
    autorun: true,

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: '',                      // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: true,                   // default: true
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function (user_preferences, cookie) {
      // callback triggered only once on the first accept/reject action
    },

    onAccept: function (cookie) {
      // callback triggered on the first accept/reject action, and after each page load
    },

    onChange: function (cookie, changed_categories) {
      // callback triggered when user changes preferences after consent has already been given
    },

    languages: {
      it: {
        consent_modal: {
          title: "Usiamo i Cookie!",
          description:
            'Questo sito utilizza cookies tecnici e di terze parti per funzionalità quali la condivisione sui social network e/o la visualizzazione di media. Chiudendo questo banner, cliccando in un’area sottostante o accedendo ad un’altra pagina del sito, acconsenti all’uso dei cookie tecnici. Se non acconsenti all’utilizzo dei cookie di terze parti, alcune di queste funzionalità potrebbero essere non disponibili. &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <button type="button" data-cc="c-settings" class="cc-link"> Fammi scegliere </button> &nbsp; <a href="pages/privacy" class="cc-link"> Privacy policy </a> &nbsp;',
          primary_btn: {
            text: "Si, acconsento",
            role: "accept_all", // 'accept_selected' or 'accept_all'
          },
          secondary_btn: {
            text: "No, non acconsento",
            role: "accept_necessary", // 'settings' or 'accept_necessary'
          },
        },
        settings_modal: {
          title: "Preferenze Cookie",
          save_settings_btn: "Salva impostazioni",
          accept_all_btn: "Accetta tutto",
          reject_all_btn: "Rifiuta tutto",
          close_btn_label: "Chiudi",
          cookie_table_headers: [
            {
              col1: "Nome",
            },
            {
              col2: "Dominio",
            },
            {
              col3: "Scadenza",
            },
            {
              col4: "Descrizione",
            },
          ],
          blocks: [
            {
              title: "Uso dei Cookie 📢",
              description:
                'Usiamo i cookie per garantire le funzionalità di base del sito e per migliorare la tua esperienza online. Puoi scegliere di attivare/disattivare ogni categoria quando vuoi. Per maggiori dettagli relativi ai cookie e ad altri dati sensibili, leggi la <a href="pages/privacy" class="cc-link">Privacy policy</a>.',
            },
            {
              title: "Cookie strettamente necessari",
              description:
                "Questi cookie sono essenziali per il corretto funzionamento del sito. Senza questi cookie il sito non funzionerebbe correttamente",
              toggle: {
                value: "necessary",
                enabled: true,
                readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
              },
            },
            {
              title: "Cookie di performance e analitici",
              description:
                "Questi cookie permettono al sito di ricordare le scelte che hai fatto in passato",
              toggle: {
                value: "analytics", // your cookie category
                enabled: false,
                readonly: false,
              },
              cookie_table: [
                // list of all expected cookies
                {
                  col1: "^_ga", // match all cookies starting with "_ga"
                  col2: "google.com",
                  col3: "2 anni",
                  col4: "...",
                  is_regex: true,
                },
                {
                  col1: "_gid",
                  col2: "google.com",
                  col3: "1 giorno",
                  col4: "...",
                },
              ],
            },
            {
              title: "Cookie pubblicitari e di targeting",
              description:
                "Questi cookie raccolgono informazioni su come utilizzi il sito web, quali pagine hai visitato e quali link hai cliccato. Tutti i dati sono resi anonimi e non possono essere utilizzati per identificarti.",
              toggle: {
                value: "targeting",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Più informazioni",
              description:
                'Per qualsiasi domanda in relazione alla nostra politica sui cookie e alle tue scelte, <a class="cc-link" href="mailto:test@test.it">contattaci</a>.',
            },
          ],
        },
      },
    },
    gui_options: {
      consent_modal: {
        layout: "box", // box/cloud/bar
        position: "middle center", // bottom/middle/top + left/right/center
        transition: "zoom", // zoom/slide
        swap_buttons: false, // enable to invert buttons
      },
      settings_modal: {
        layout: "box", // box/bar
        // position: 'left',           // left/right
        transition: "slide", // zoom/slide
      },
    },
  });
});
