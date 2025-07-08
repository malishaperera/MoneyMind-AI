import {
    BarChart3,
    Receipt,
    PieChart,
    CreditCard,
    Globe,
    Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
    {
        value: "75K+",
        label: "Trusted Users",
    },
    {
        value: "$3.5B+",
        label: "Total Transactions",
    },
    {
        value: "99.99%",
        label: "System Reliability",
    },
    {
        value: "4.8/5",
        label: "Average Rating",
    },
];


// Features Data
export const featuresData = [
    {
        icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
        title: "Smart Analytics",
        description: "Visualize trends and spending habits with intelligent dashboards.",
    },
    {
        icon: <Receipt className="h-8 w-8 text-blue-600" />,
        title: "AI Receipt Capture",
        description: "Snap a photo, and we’ll do the rest — fast and accurate parsing.",
    },
    {
        icon: <PieChart className="h-8 w-8 text-blue-600" />,
        title: "Goal-Based Budgeting",
        description: "Set goals and track progress with personalized budget suggestions.",
    },
    {
        icon: <CreditCard className="h-8 w-8 text-blue-600" />,
        title: "Unified Wallet",
        description: "View all your bank accounts and cards in a single dashboard.",
    },
    {
        icon: <Globe className="h-8 w-8 text-blue-600" />,
        title: "Global Coverage",
        description: "Manage finances in 150+ currencies with live exchange rates.",
    },
    {
        icon: <Zap className="h-8 w-8 text-blue-600" />,
        title: "Instant Reports",
        description: "Generate detailed reports with one click — powered by AI.",
    },
];


// How It Works Data
export const howItWorksData = [
    {
        icon: <CreditCard className="h-8 w-8 text-blue-600" />,
        title: "1. Sign Up Instantly",
        description: "Join in seconds with a secure and seamless onboarding experience.",
    },
    {
        icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
        title: "2. Sync Your Accounts",
        description: "Connect your bank, cards, and wallets to monitor all spending.",
    },
    {
        icon: <PieChart className="h-8 w-8 text-blue-600" />,
        title: "3. Unlock Insights",
        description: "Use AI to get real-time alerts and actionable financial advice.",
    },
];


// Testimonials Data
export const testimonialsData = [
    {
        name: "Ava Thompson",
        role: "Startup Founder",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        quote:
            "MoneyMind-AI is a game changer. I save hours each week and feel completely in control of my company’s cash flow.",
    },
    {
        name: "Daniel Kim",
        role: "Remote Consultant",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        quote:
            "The dashboard is clean and powerful. Multi-account support and smart categorization are must-haves for any freelancer.",
    },
    {
        name: "Olivia Garcia",
        role: "Digital Nomad",
        image: "https://randomuser.me/api/portraits/women/66.jpg",
        quote:
            "The multi-currency features and real-time insights make it the perfect tool while traveling. Highly recommended!",
    },
];
