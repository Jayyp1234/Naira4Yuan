/*
this page is just for the route names, incase it wants to be changed
*/
export const routes = {
  INDEX: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  AML: "/aml-kyc-policy",
  TERMS: "/terms",
  PRIVACY: "/privacy-policy",
  CHART: "/chart",
  WAITLIST: "",
  _404: "*",

  LINKS: {
    googlestore: "",
    appstore: "",
  },

  EXTERNAL: {
    facebook: "",
    titkok: "",
    youtube: "https://www.youtube.com/embed/cDCIypI46Ls?si=5wWxPmrGhJBP4EBl",
    howTo: "https://www.youtube.com/embed/cDCIypI46Ls?si=5wWxPmrGhJBP4EBl",
    linktree: "",
    twitter: "",
    instagram: "",

    techpoint: "",
    techCabal: "",
    businessDay: "",
    theGuardian: "",
    chinaCom: "",
  },

  AUTH: {
    index: {
      abs: "/auth/login",
      rel: "login",
    },
    login: {
      abs: "/auth/login",
      rel: "login",
    },
    register: {
      abs: "/auth/register",
      rel: "register",
    },
    loginErr: {
      abs: "/auth/troubleshoot",
      rel: "troubleshoot",
    },
  },

  DASHBOARD: {
    index: {
      abs: "/dashboard/index" || "/dashboard",
      rel: "index",
    },

    recipients: {
      index: {
        abs: "/dashboard/recipients",
        rel: "recipients",
      },
      recep: {
        abs: "/dashboard/recipients/r",
        rel: "r",
      },
      transaction: {
        abs: "/dashboard/recipients/t",
        rel: "t",
      },
    },
    transaction: {
      index: {
        abs: "/dashboard/transaction",
        rel: "transaction",
      },
      details: {
        abs: "/dashboard/transaction/details",
        rel: "details",
      },
      recipient: {
        abs: "/dashboard/transaction/recipient",
        rel: "recipient",
      },
      input: {
        abs: "/dashboard/transaction/input",
        rel: "input",
      },
      // help: {
      //   abs: "/dashboard/transaction/help",
      //   rel: "help",
      // },
      // helpDetails: {
      //   abs: "/dashboard/transaction/helpDetails",
      //   rel: "helpDetails",
      // },
    },
    inbox: {
      abs: "/dashboard/inbox",
      rel: "inbox",
    },
    account: {
      index: {
        abs: "/dashboard/account",
        rel: "account",
      },
      limit: {
        abs: "/dashboard/account/limit",
        rel: "limit",
      },
      language: {
        abs: "/dashboard/account/language",
        rel: "language",
      },
      statementReport: {
        index: {
          abs: "/dashboard/account/statement-report",
          rel: "statement-report",
        },
        statement: {
          abs: "/dashboard/account/statement-report/statement",
          rel: "statement",
        },
        statementFees: {
          abs: "/dashboard/account/statement-report/statement-fees",
          rel: "statement-fees",
        },
        ownership: {
          abs: "/dashboard/account/statement-report/account-ownership",
          rel: "account-ownership",
        },
      },
      inbox: {
        abs: "/dashboard/account/inbox",
        rel: "inbox",
      },
      personal: {
        index: {
          abs: "/dashboard/account/personal",
          rel: "personal",
        },
        update: {
          abs: "/dashboard/account/update",
          rel: "update",
        },
      },
      notification: {
        index: {
          abs: "/dashboard/account/notification",
          rel: "notification",
        },
        alert: {
          abs: "/dashboard/account/notification/alert",
          rel: "alert",
        },
        exchange: {
          abs: "/dashboard/account/notification/exchange-rate",
          rel: "exchange-rate",
        },
      },
      security: {
        index: {
          abs: "/dashboard/account/security",
          rel: "security",
        },
        password: {
          index: {
            abs: "/dashboard/account/security/password",
            rel: "password",
          },
          change: {
            abs: "/dashboard/account/security/password/update",
            rel: "update",
          },
        },
        _2stepVerification: {
          index: {
            abs: "/dashboard/account/security/2fa",
            rel: "2fa",
          },
          message: {
            abs: "/dashboard/account/security/2fa/message",
            rel: "message",
          },
          authenticator: {
            abs: "/dashboard/account/security/2fa/authenticator",
            rel: "authenticator",
          },
        },
        socialLogin: {
          abs: "/dashboard/account/security/social",
          rel: "social",
        },
        find: {
          abs: "/dashboard/account/security/find",
          rel: "find",
        },
        logout: {
          abs: "/dashboard/account/security/logout",
          rel: "logout",
        },
      },
    },
    wallets: {
      index: {
        abs: "/dashboard/wallets",
        rel: "wallets",
      },
      transaction: {
        abs: "/dashboard/wallets/t",
        rel: "t",
      }
    },
    fundwallet: {
      abs: "/dashboard/fundwallets",
      rel: "fundwallets",
    },
    help: {
      index: {
        abs: "/dashboard/help",
        rel: "help",
      },
      transactions: {
        abs: "/dashboard/help/t",
        rel: "t",
      },
      contact: {
        abs: "/dashboard/help/c",
        rel: "c",
      },
    },
    earn: {
      abs: "/dashboard/earn",
      rel: "earn",
    },
    send: {
      abs: "/dashboard/send",
      rel: "send",
    },
    error: {
      abs: "/dashboard/*",
      rel: "*",
    },
  },
};
