import React from "react";
import LandingPage from "./pages/Landing/LandingPage";
import { states } from "./data/states";
import { Route, Routes } from "react-router";

// auth pages
import { AuthPage } from "./pages/Auth";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { TroubleLoggingIn } from "./pages/Auth/TroubleLoggingIn";

import { DashboardIndex } from "./pages/Dashboard/index";
import { Home } from "./pages/Dashboard/Home/Home";


import About from "./pages/Landing/About";
import AML from "./pages/Landing/AML";
import Privacy from "./pages/Landing/Privacy";
import Terms from "./pages/Landing/Terms";
import Contact from "./pages/Landing/Contact";

import { routes } from "./data/routes";
import DashboardError from "./pages/Errors/DashboardError";
// transaction
import { TransactionIndex } from "./pages/Dashboard/Transaction";
import { TransactionDetails } from "./pages/Dashboard/Transaction/TransactionDetails";
import { TransactionMain } from "./pages/Dashboard/Transaction/TransactionMain";
import { TransactionInput } from "./pages/Dashboard/Transaction/TransactionInput";
// import { TransactionHelp } from "./pages/Dashboard/Transaction/TransactionHelp";
// import { TransactionHelpDetails } from "./pages/Dashboard/Transaction/TransactionHelpDetails";
// earn
import { EarnIndex } from "./pages/Dashboard/Earn/EarnIndex";
// fund wallet
import { FundWalletIndex } from "./pages/Dashboard/FundWallet/Index";
import { FundWallet } from "./pages/Dashboard/FundWallet/FundWallet";
//send
import { Send } from "./pages/Dashboard/Send/Send";
import { SendIndex } from "./pages/Dashboard/Send/Index";
// recipient
import { RecipientIndex } from "./pages/Dashboard/Recipient";
import { RecipientMain } from "./pages/Dashboard/Recipient/RecipientMain";
import { RecipientPageDetails } from "./pages/Dashboard/Recipient/RecipientPageDetails";
import { RecipientTransaction } from "./pages/Dashboard/Recipient/RecipientTransaction";
import { Wallet } from "./pages/Dashboard/Wallet/Wallet";
import { AccountIndex } from "./pages/Dashboard/Account/AccountIndex";
import { Inbox } from "./pages/Dashboard/Account/Inbox";
import { Limit } from "./pages/Dashboard/Account/Limit";
import { Settings } from "./pages/Dashboard/Account/Settings/Settings";
import { NotificationIndex } from "./pages/Dashboard/Account/Notification/NotificationIndex";
import { Notifications } from "./pages/Dashboard/Account/Notification/Notifications";
import { MarketAlerts } from "./pages/Dashboard/Account/Notification/MarketAlerts";
import { Language } from "./pages/Dashboard/Account/Language";
import { PersonalDetails } from "./pages/Dashboard/Account/Personal/PersonalDetails";
import { Update } from "./pages/Dashboard/Account/Personal/Update";
import { StatementFees } from "./pages/Dashboard/Account/Statement/StatementFees";
import { AccountOwnership } from "./pages/Dashboard/Account/Statement/AccountOwnership";
import { StatementReportIndex } from "./pages/Dashboard/Account/Statement/StatementIndex";
import { Statement } from "./pages/Dashboard/Account/Statement/Statement";
import { Password } from "./pages/Dashboard/Account/Settings/Password";
import { TwoFA } from "./pages/Dashboard/Account/Settings/TwoFA";
import { FindMeBy } from "./pages/Dashboard/Account/Settings/FindMeBy";
import { LogoutEverywhere } from "./pages/Dashboard/Account/Settings/LogoutEverywhere";
import { SocialLogin } from "./pages/Dashboard/Account/Settings/SocialLogin";
import { TextMessage } from "./pages/Dashboard/Account/Settings/TextMessage";
import { AuthenticatorApp } from "./pages/Dashboard/Account/AuthenticatorApp";
// help
import { HelpIndex } from "./pages/Dashboard/Help/Index";
import { Help } from "./pages/Dashboard/Help/Help";
import { HelpTransaction } from "./pages/Dashboard/Help/HelpTransaction";
import { HelpContact } from "./pages/Dashboard/Help/HelpContact";
import { HelpDetails } from "./pages/Dashboard/Help/HelpDetails";
import { WalletTransaction } from "./pages/Dashboard/Wallet/WalletTransaction";
import { LimitUpgrade, Upgrade } from "./pages/Dashboard/Account/LimitUpgrade";
import Individual from "./pages/Dashboard/Account/Individual";

// recipients and transaction

export const StateDataContext = React.createContext(null);

const App = () => {
  const [stateData, setStateData] = React.useState(states);
  return (
    <StateDataContext.Provider value={{ stateData, setStateData }}>
      <Routes>
        <Route path={routes.INDEX} index element={<LandingPage />} />
        <Route path={routes.ABOUT} index element={<About />} />
        <Route path={routes.CONTACT} index element={<Contact />} />
        <Route path={routes.AML} index element={<AML />} />
        <Route path={routes.TERMS} index element={<Terms />} />
        <Route path={routes.PRIVACY} index element={<Privacy />} />

        {/* Auth Routes */}
        <Route path="/auth" element={<AuthPage />}>
          <Route path={routes.AUTH.login.rel} index element={<Login />} />
          <Route path={routes.AUTH.register.rel} element={<Register />} />
          <Route path={routes.AUTH.loginErr.rel} element={<TroubleLoggingIn />} />
          <Route path="/auth/*" index element={<h1>Hellow</h1>} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardIndex />}>
          <Route index path={routes.DASHBOARD.index.abs} element={<Home />} />

          <Route path={routes.DASHBOARD.wallets.index.rel} element={<Wallet />}>
            <Route path={routes.DASHBOARD.wallets.transaction.rel} element={<WalletTransaction />} />
          </Route>

          <Route path={routes.DASHBOARD.transaction.index.rel} element={<TransactionIndex />}>
            <Route index element={<TransactionMain />} />
            <Route path={routes.DASHBOARD.transaction.details.rel} element={<TransactionDetails />} />
            <Route path={routes.DASHBOARD.transaction.input.rel} element={<TransactionInput />} />
            {/* <Route path={routes.DASHBOARD.transaction.help.rel} element={<TransactionHelp />} />
            <Route path={routes.DASHBOARD.transaction.helpDetails.rel} element={<TransactionHelpDetails />} /> */}
          </Route>
          <Route path={routes.DASHBOARD.earn.rel} element={<EarnIndex />} />

          <Route path={routes.DASHBOARD.recipients.index.rel} element={<RecipientIndex />}>
            <Route index element={<RecipientMain />} />
            <Route path={`${routes.DASHBOARD.recipients.recep.rel}/:recipientId`} element={<RecipientPageDetails />} />
            <Route path={`${routes.DASHBOARD.recipients.transaction.rel}/:recipientId`} element={<RecipientTransaction />} />
          </Route>

          <Route path={routes.DASHBOARD.account.index.rel}>
            <Route index element={<AccountIndex />} />

            <Route path={routes.DASHBOARD.account.statementReport.index.rel}>
              <Route index element={<StatementReportIndex />} />
              <Route path={routes.DASHBOARD.account.statementReport.statement.rel} element={<Statement />} />
              <Route path={routes.DASHBOARD.account.statementReport.statementFees.rel} element={<StatementFees />} />
              <Route path={routes.DASHBOARD.account.statementReport.ownership.rel} element={<AccountOwnership />} />
            </Route>

            {/* security */}
            <Route path={routes.DASHBOARD.account.security.index.rel}>
              <Route index element={<Settings />} />
              <Route path={routes.DASHBOARD.account.security.password.index.rel} element={<Password />} />

              <Route path={routes.DASHBOARD.account.security._2stepVerification.index.rel}>
                <Route index element={<TwoFA />} />
                <Route path={routes.DASHBOARD.account.security._2stepVerification.message.rel} element={<TextMessage />} />
                <Route path={routes.DASHBOARD.account.security._2stepVerification.authenticator.rel} element={<AuthenticatorApp />} />
              </Route>

              <Route path={routes.DASHBOARD.account.security.socialLogin.rel} element={<SocialLogin />} />
              <Route path={routes.DASHBOARD.account.security.find.rel} element={<FindMeBy />} />
              <Route path={routes.DASHBOARD.account.security.logout.rel} element={<LogoutEverywhere />} />
            </Route>

            <Route path={routes.DASHBOARD.account.notification.index.rel}>
              <Route index element={<NotificationIndex />} />
              <Route path={routes.DASHBOARD.account.notification.alert.rel} element={<Notifications />} />
              <Route path={routes.DASHBOARD.account.notification.exchange.rel} element={<MarketAlerts />} />
            </Route>

            <Route path={routes.DASHBOARD.account.personal.index.rel}>
              <Route index element={<PersonalDetails />} />
              <Route path={routes.DASHBOARD.account.personal.update.rel} element={<Update />} />
            </Route>

            <Route path={routes.DASHBOARD.account.language.rel} element={<Language />} />
            <Route path={routes.DASHBOARD.account.inbox.rel} element={<Inbox />} />

            <Route path={routes.DASHBOARD.account.limit.index.rel}>
              <Route index element={<Limit />} />
              <Route path={routes.DASHBOARD.account.limit.upgrade.rel} element={<LimitUpgrade />} />
              <Route path={routes.DASHBOARD.account.limit.upgraded.rel} element={<Upgrade />} />
              <Route path={routes.DASHBOARD.account.limit.individual.rel} element={<Individual />} />
            </Route>
          </Route>

          <Route path={routes.DASHBOARD.error.rel} element={<DashboardError />} />
        </Route>

        <Route path="/dashboard/fundwallets" element={<FundWalletIndex />} >
          <Route path={routes.DASHBOARD.fundwallet.abs} index element={<FundWallet />} />
        </Route>

        <Route path="/dashboard/send" element={<SendIndex />} >
          <Route path={routes.DASHBOARD.send.abs} index element={<Send />} />
        </Route>

        <Route path={routes.DASHBOARD.help.index.abs} element={<HelpIndex />}>
          <Route index element={<Help />} />
          <Route path={routes.DASHBOARD.help.transactions.rel} element={<HelpTransaction />} />
          <Route path={routes.DASHBOARD.help.contact.rel} element={<HelpContact />} />
          <Route path={`${routes.DASHBOARD.help.contact.rel}/:helpId`} element={<HelpDetails />} />
        </Route>


        {/* 404 Not Found Route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </StateDataContext.Provider>
  );
};

export default App;
