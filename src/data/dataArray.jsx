import { avatar1, BusinessDay, ChinaCom, Image1, Image2, Image3, TechCabal, Techpoint, TheGuardian } from "./index";
import {
	AgreementsIcon,
	BankIcon,
	BellIconVar,
	ChartIcon,
	ChineseLanguageIcon,
	FacebookIcon,
	GatewayIcon,
	GlobeIcon,
	HomeIcon,
	InstagramIcon,
	LimitIcon,
	PowerIcon,
	QuestionIcon,
	ShieldIcon,
	StacksIcon,
	StatementAndReportIcon,
	TiktokIcon,
	TwitterIcon,
	UserDetailsIcon,
	UsersIcon,
	UserVerificationIcon,
	VideoIcon,
	WalletIcon,
	YenIcon,
	YoutubeIcon,
} from "./Icons";

import { routes } from "./routes";

export const BlogSupportLinks = [
	{ name: "Live Chat", path: "/live-chat" },
	{ name: "Email Us", path: "/email-us" },
	{ name: "Blog", path: "/blog" },
	{ name: "Medium", path: "/medium" },
];

export const ProductLinks = [
	{ name: "Pay Alipay with Naira", path: "/pay-alipay" },
	{ name: "Pay Wechat with Naira", path: "/pay-wechat" },
	{ name: "Pay Bank Transfer with Naira", path: "/pay-bank-transfer" },
];

export const CompanyLinks = [
	{ name: "Home", path: "/" },
	{ name: "About Us", path: "/about" },
	{ name: "Contact Us", path: "/contact" },
	{ name: "Aml & kyc policy", path: "/aml-kyc-policy" },
	{ name: "Privacy Policy", path: "/privacy-policy" },
	{ name: "Terms", path: "/terms" },
];

export const SocialLinks = [
	{ link: "", name: "Facebook", icon: FacebookIcon },
	{ link: "", name: "Instagram", icon: InstagramIcon },
	{ link: "", name: "Twitter/X", icon: TwitterIcon },
	{ link: "", name: "TikTok", icon: TiktokIcon },
	{ link: "", name: "YouTube", icon: YoutubeIcon },
];

export const supportLinks = [
	{
		type: "Email",
		text: "Email support: support@naira4yuan.com",
		href: "mailto:help@load.africa",
	},
	{
		type: "WhatsApp",
		text: "Whatsapp support: +234 80000 400",
		href: "https://wa.me/+2348129700472",
	},
	{
		type: "Call",
		text: "Call support: 080-80000-400",
		href: "https://wa.me/+2348129700472",
	},
	{
		type: "Social",
		text: "@naira4yuan",
		href: "#",
	},
];

export const naira4yuanResources = [
	{
		title: "Naira4yuan Blog",
		description:
			"Stay updated with the latest tips, insights, and news on currency exchange, financial trends, and more. Our blog is your go-to source for all things Naira-to-Yuan.",
		linkText: "Visit Naira4yuan blog",
		link: "/blog",
		icon: StacksIcon,
	},
	{
		title: "Naira4yuan Youtube Channel",
		description:
			"Watch engaging tutorials, walkthroughs, and expert discussions on Naira-to-Yuan transactions and financial strategies. Subscribe for valuable content delivered in an easy-to-understand format.",
		linkText: "Visit Naira4yuan Youtube channel",
		link: "/youtube",
		icon: VideoIcon,
	},
	{
		title: "Naira4yuan Knowledgebase",
		description:
			"Access a comprehensive library of in-depth guides and answers to your most pressing questions. The Knowledgebase is here to simplify your currency exchange journey.",
		linkText: "Visit Naira4yuan knowledgebase",
		link: "/knowledgebase",
		icon: GatewayIcon,
	},
	{
		title: "Naira4yuan Links",
		description:
			"Discover a curated collection of essential tools, resources, and partner sites to enhance your experience with Naira-to-Yuan services. Everything you need is just a click away.",
		linkText: "Visit Naira4yuan links",
		link: "/links",
		icon: GlobeIcon,
	},
];

export const testimonials = [
	{
		userImage: avatar1,
		title: "HOW NAIRA4YUAN HAS TRANSFORMED OUR ECOMMERCE BUSINESS ENTIRELY",
		description:
			"Naira4Yuan has been a complete game-changer for our eCommerce business. Their transparent rates and seamless transactions have allowed us to scale without concerns. The support team is always available. We've saved both time and money, and couldn't be happier!",
		author: "Abdulrahman Gwamna",
		position: "CEO Emporium",
	},
	{
		userImage: Image1,
		title: "THIS IS GAME CHANGING",
		description:
			"Naira4Yuan has completely transformed the way we operate our eCommerce business, making cross-border payments faster and stress-free. This truly is game-changing!",
		author: "Brenda Stephen & Co",
	},
	{
		title: "ITS THE UPDATES FOR ME",
		userImage: Image2,
		description:
			"It’s the real-time updates on the Naira-to-Yuan rate for me. Naira4Yuan keeps me constantly informed and takes all the guesswork out of transactions!",
		author: "Greakia Business",
	},
	{
		userImage: Image3,
		title: "MY BUSINESS NOW RUNS ON AUTO-PILOT, THANKS N4Y",
		description:
			"My business practically runs on auto-pilot now. Naira4Yuan’s rates remain precise and their trade guidance keeps us ahead. Huge fan of N4Y so far!",
		author: "Prince Samuel",
	},
];

export const CompanyLogos = [
	{ name: "Techpoint", logo: Techpoint, link: routes.EXTERNAL.techpoint },
	{ name: "TechCabal", logo: TechCabal, link: routes.EXTERNAL.techCabal },
	{ name: "BusinessDay", logo: BusinessDay, link: routes.EXTERNAL.businessDay },
	{ name: "TheGuardian", logo: TheGuardian, link: routes.EXTERNAL.theGuardian },
	{ name: "ChinaCom", logo: ChinaCom, link: routes.EXTERNAL.chinaCom },
];

export const depositArray = [
	{
		type: "NGN Deposit",
		description: "Sent In",
		amount: "+500,000 NGN",
	},
	{
		type: "NGN Deposit",
		description: "Sent In",
		amount: "+1,500,000 NGN",
	},
	{
		type: "NGN Deposit",
		description: "Sent In",
		amount: "+200,000 NGN",
	},
];

export const faqsArray = [
	{
		question: "How Do I Monitor My Shipment?",
		answer:
			"To keep track of your order status, log into your account and go to the 'Orders' section. Click on the relevant order to see its current progress and updates.",
	},
	{
		question: "How Can I View My Active Orders?",
		answer:
			"Once you've placed an order and uploaded your payment confirmation, you can check its status under the 'Orders' section in your profile. This can be accessed from the top-right corner of the dashboard.",
	},
	{
		question: "How Do I Make Payments Using Alipay?",
		subtext: "Alipay is a trusted platform for seamless and secure payments. To pay using Alipay via Naira4Yuan:",
		answer: [
			"Choose the Alipay Payment option on our platform.",
			"Provide the recipient details by scanning the Alipay QR code or entering their Alipay Number and Name.",
			"Click Submit and follow the steps provided on the screen.",
			"After completing the Naira transfer and uploading your proof of payment, sit back while we process the transaction.",
			"Once the payment is completed in RMB, you'll receive a confirmation message and a downloadable receipt.",
		],
	},
	{
		question: "How Do I Use WeChat to Make Payments?",
		subtext: "WeChat Pay makes paying for services simple and secure. Here’s how to use WeChat Pay with Naira4Yuan",
		answer: [
			"Select the WeChat Payment option on the platform.",
			"Upload the recipient's WeChat QR code.",
			"Click Submit and follow the instructions.",
			"Complete the Naira transfer and upload proof of payment. We'll handle the rest.",
			"Once the RMB payment is successfully processed, you'll receive a confirmation and can download the payment receipt.",
		],
	},
	{
		question: "How Do I Pay Through Bank Transfer?",
		subtext: "Naira4Yuan ensures your bank transfers are smooth and efficient. Follow these steps:",
		answer: [
			"Select the Bank Transfer option.",
			"Enter the required details, including the Bank Account Number, Account Name, and Bank Name of the recipient.",
			"Click Submit and proceed as directed.",
			"Transfer the Naira amount and upload proof of payment. Relax while we process your transaction.",
			"Once the payment is successfully completed, you'll receive a notification and a receipt for download.",
		],
	},
	{
		question: "How Can I Resolve Payment Issues?",
		subtext: "If you encounter any issues during the payment process, follow these steps to get assistance:",
		answer: [
			"Double-check the details you provided, such as the recipient’s account information or QR code, to ensure accuracy.",
			"Verify that your Naira transfer was successfully checked by your bank’s transaction history.",
			"Use Naira4Yuan’s support team to contact the Help Center or via our support email/chat feature, providing transaction details for a faster resolution.",
			"Our team will investigate and reach out to update you on the progress or necessary corrections promptly.",
			"If additional verification is needed, our team will guide you on the next steps to complete the transaction successfully.",
		],
		note: "At Naira4Yuan, we are committed to providing excellent support to ensure your transactions are stress-free and efficient.",
	},
];

export const SideBarArray = [
	{
		icon: HomeIcon,
		text: "Home",
    goto: routes.DASHBOARD.abs,
	},
	{
		icon: UsersIcon,
		text: "Recipients",
		goto: routes.DASHBOARD.recipients.index.abs,
	},
	{
		icon: WalletIcon,
		text: "Wallets",
    goto: routes.DASHBOARD.wallets.index.abs,
	},
	{
		icon: YenIcon,
		text: "Earn",
		goto: routes.DASHBOARD.earn.abs,
	},
  // {
  // 	icon: YenIcon,
  // 	text: "Send",
  // 	goto: routes.DASHBOARD.send.abs,
  // },
  // {
  // 	icon: YenIcon,
  // 	text: "Transaction",
  // 	goto: routes.DASHBOARD.transaction.index.abs,
  // },
];

export const transactionDetailsArray = [
	{
		id: 1,
		icon: ChineseLanguageIcon,
		title: "Search Naira4Yuan",
		description: "Quickly find them by email or phone number",
		link: "/search",
	},
	{
		id: 2,
		icon: BankIcon,
		title: "Enter bank details",
		description: "You will need their account information",
		link: "/bank-details",
	},
];

export const notificationsArray = [
	{
		id: 1,
		icon: BellIconVar,
		title: "Notifications",
		description: "Choose which notifications you get and how you get them.",
		link: routes.DASHBOARD.account.notification.alert.rel,
	},
	{
		id: 2,
		icon: ChartIcon,
		title: "Exchange rate alerts",
		description: "Get notified when a currency hits your chosen rate.",
		link: routes.DASHBOARD.account.notification.exchange.rel,
	},
];

export const landingPageHeaderCompanyLinkArray = [
	{ label: "About", link: routes.ABOUT },
	{ label: "Contact", link: routes.CONTACT },
	{ label: "AML & KYC Policy", link: routes.AML },
	{ label: "Privacy Policy", link: routes.PRIVACY },
	{ label: "Terms", link: routes.TERMS },
];

export const accountArray = [
	{
		title: "Your Account",
		list: [
			{
				title: "Inbox",
				icon: BellIconVar,
				to: routes.DASHBOARD.account.inbox.rel,
				notification: true,
			},
			{
				title: "Help",
				icon: QuestionIcon,
        to: routes.DASHBOARD.help.index.abs,
			},
			{
				title: "Statements and reports",
				icon: StatementAndReportIcon,
				to: routes.DASHBOARD.account.statementReport.index.rel,
			},
		],
	},
	{
		title: "Settings",
		list: [
			{
				title: "Limits",
				description: "Manage your transfer limits",
				icon: LimitIcon,
        to: routes.DASHBOARD.account.limit.index.rel,
			},
			{
				title: "KYC Verification",
				description: "Connect your account to third-party software.",
				icon: UserVerificationIcon,
				to: routes.DASHBOARD.account,
			},
			{
				title: "Security and privacy",
				description: "Change your security and privacy settings",
				icon: ShieldIcon,
				to: routes.DASHBOARD.account.security.index.rel,
			},
			{
				title: "Notifications",
				description: "Customize how you get updates",
				icon: BellIconVar,
				to: routes.DASHBOARD.account.notification.index.rel,
			},
			{
				title: "Language",
				description: "Customize language settings",
				icon: GlobeIcon,
				to: routes.DASHBOARD.account.language.rel,
			},
			{
				title: "Personal details",
				description: "Update your personal information",
				icon: UserDetailsIcon,
				to: routes.DASHBOARD.account.personal.index.rel,
			},
		],
	},
  {
    title: "Actions and Agreements",
    list: [
      {
        title: "Our agreements",
        icon: AgreementsIcon,
        to: routes.DASHBOARD.account,
      },
      {
        title: "Close account",
        description: "Close your personal account",
        icon: PowerIcon,
        modal: "CLOSE_ACCOUNT",
      },
    ],
  },
];
