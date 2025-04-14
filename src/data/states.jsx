export const states = {
  isLoggedIn: false,
  landingSideBarVisible: false,
  modals: {
    AUTH_RESET_PASSWORD: false,
    AUTH_EMAIL_VERIFICATION: false,
    SELECT_COUNTRY: false,
    SELECT_REFERRAL_METHOD: false,
    MANUAL_VERIFICATION: false,
    SELECT_ID: false,
    HOW_TO_NAIRA4YUAN: false,
    VERIFY_ID: false,
  // dashboard

    DASHBOARD_ACCOUNT_OWNERSHIP: false,
    DASHBOARD_BANK_TRANSFER: false,
    DASHBOARD_2FA_VERIFICATION_ALERT_METHOD: false,
  },
  auth: {
    register: {
      isRegistered: false,
      userdata: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        pin: "",
        referral: "",
        referralCode: "",
      },
      stepperVal: 1,
    },
  },
  dashboard: {
    sidebar: false,
    send: {
      stepperVal: 1,
    },
    transaction: {},
    recipients: {
      filterSidebar: false,
    },
    account: {
      limit: {
        upgrade: false,
      },
    },
  },
};
