import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

// export default function EmailTemplate({
//   userName = "",
//   type = "budget-alert",
//   data = {
//
//
//   },
// }) {
//   if (type === "monthly-report") {
//     return (
//       <Html>
//         <Head />
//         <Preview>Your Monthly Financial Report</Preview>
//         <Body style={styles.body}>
//           <Container style={styles.container}>
//             <Heading style={styles.title}>Monthly Financial Report</Heading>
//
//             <Text style={styles.text}>Hello {userName},</Text>
//             <Text style={styles.text}>
//               Here&rsquo;s your financial summary for {data?.month}:
//             </Text>
//
//             {/* Main Stats */}
//             <Section style={styles.statsContainer}>
//               <div style={styles.stat}>
//                 <Text style={styles.text}>Total Income</Text>
//                 <Text style={styles.heading}>${data?.stats?.totalIncome}</Text>
//               </div>
//               <div style={styles.stat}>
//                 <Text style={styles.text}>Total Expenses</Text>
//                 <Text style={styles.heading}>
//                   ${data?.stats?.totalExpenses}
//                 </Text>
//               </div>
//               <div style={styles.stat}>
//                 <Text style={styles.text}>Net</Text>
//                 <Text style={styles.heading}>
//                   ${data?.stats?.totalIncome - data?.stats?.totalExpenses}
//                 </Text>
//               </div>
//             </Section>
//
//             {/* Category Breakdown */}
//             {data?.stats?.byCategory && (
//               <Section style={styles.section}>
//                 <Heading style={styles.heading}>Expenses by Category</Heading>
//                 {Object.entries(data.stats.byCategory).map(
//                   ([category, amount]) => (
//                     <div key={category} style={styles.row}>
//                       <Text style={styles.text}>{category}</Text>
//                       <Text style={styles.text}>${amount}</Text>
//                     </div>
//                   )
//                 )}
//               </Section>
//             )}
//
//             {/* AI Insights */}
//             {data?.insights && (
//               <Section style={styles.section}>
//                 <Heading style={styles.heading}>Wealth Insights</Heading>
//                 {data.insights.map((insight, index) => (
//                   <Text key={index} style={styles.text}>
//                     • {insight}
//                   </Text>
//                 ))}
//               </Section>
//             )}
//           </Container>
//         </Body>
//       </Html>
//     );
//   }
//
//   // Budget Alert Email
//   if (type === "budget-alert") {
//     return (
//       <Html>
//         <Head />
//         <Preview>Budget Alert</Preview>
//         <Body style={styles.body}>
//           <Container style={styles.container}>
//             <Heading style={styles.title}>Budget Alert</Heading>
//             <Text style={styles.text}>Hello {userName},</Text>
//             <Text style={styles.text}>
//               You&rsquo;ve used {data?.percentageUsed?.toFixed(1)}% of your
//               monthly budget.
//             </Text>
//             <Section style={styles.statsContainer}>
//               <div style={styles.stat}>
//                 <Text style={styles.text}>Budget Amount</Text>
//                 <Text style={styles.heading}>${data?.budgetAmount}</Text>
//               </div>
//               <div style={styles.stat}>
//                 <Text style={styles.text}>Spent So Far</Text>
//                 <Text style={styles.heading}>${data?.totalExpenses}</Text>
//               </div>
//               <div style={styles.stat}>
//                 <Text style={styles.text}>Remaining</Text>
//                 <Text style={styles.heading}>
//                   ${data?.budgetAmount - data?.totalExpenses}
//                 </Text>
//               </div>
//             </Section>
//           </Container>
//         </Body>
//       </Html>
//     );
//   }
//
//   return null;
// }
//
// const styles = {
//   body: {
//     backgroundColor: "#f2f2f2",
//     fontFamily: "apple-system, sans-serif",
//     padding: "40px 0",
//   },
//   container: {
//     backgroundColor: "#ffffff",
//     margin: "0 auto",
//     padding: "20px",
//     borderRadius: "6px",
//     boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
//     maxWidth: "500px",
//   },
//   title: {
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "#333",
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   text: {
//     fontSize: "14px",
//     color: "#333",
//     marginBottom: "12px",
//   },
//   heading: {
//     fontSize: "18px",
//     fontWeight: "bold",
//     color: "#111",
//     marginBottom: "8px",
//   },
//   statsContainer: {
//     marginTop: "20px",
//     display: "flex",
//     justifyContent: "space-between",
//     gap: "12px",
//   },
//   stat: {
//     flex: "1",
//     textAlign: "center",
//     backgroundColor: "#f9fafb",
//     padding: "12px",
//     borderRadius: "4px",
//     border: "1px solid #e5e7eb",
//   },
//   section: {
//     marginTop: "32px",
//     padding: "20px",
//     backgroundColor: "#f9fafb",
//     borderRadius: "5px",
//     border: "1px solid #e5e7eb",
//   },
//   row: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "12px 0",
//     borderBottom: "1px solid #e5e7eb",
//   },
//   footer: {
//     fontSize: "13px",
//     color: "#666",
//     textAlign: "center",
//     marginTop: "30px",
//     paddingTop: "10px",
//     borderTop: "1px solid #ddd",
//   },
// };

export default function EmailTemplate({
  userName = "Malisha",
  type = "monthly-report",
  data = {
    // month:"December",
    // stats:{
    //   totalIncome:5000,
    //   totalExpenses:3500,
    //   byCategory:{
    //     housing:1500,
    //     groceries:600,
    //     transportation:400,
    //     entertainment:300,
    //     utilities:700,
    //   },
    // },
    // insights: [
    //   "Your housing expenses are 43% of your total spending – consider reviewing your rent or mortgage plans to see if cost-saving options are available.",
    //   "Dining out made up 22% of your expenses this month – cooking more at home could help you save.",
    //   "Your entertainment spending increased by 18% compared to last month – track subscriptions and one-time purchases.",
    //   "You saved 12% of your income this month – great job! Consider automating savings to keep up the momentum.",
    //   "Spending on transportation dropped by 10% – keep optimizing by carpooling or using public transport.",
    // ]
  },
}) {
  if (type === "monthly-report") {
    return (
      <Html>
        <Head />
        <Preview>Your Monthly Financial Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.title}>Monthly Financial Report</Heading>

            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              Here&rsquo;s your financial summary for {data?.month}:
            </Text>

            {/* Main Stats */}
            <Section style={styles.statsContainer}>
              <div style={styles.stat}>
                <Text style={styles.text}>Total Income</Text>
                <Text style={styles.heading}>${data?.stats.totalIncome}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Total Expenses</Text>
                <Text style={styles.heading}>${data?.stats.totalExpenses}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Net</Text>
                <Text style={styles.heading}>
                  ${data?.stats.totalIncome - data?.stats.totalExpenses}
                </Text>
              </div>
            </Section>

            {/* Category Breakdown */}
            {data?.stats?.byCategory && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Expenses by Category</Heading>
                {Object.entries(data?.stats.byCategory).map(
                  ([category, amount]) => (
                    <div key={category} style={styles.row}>
                      <Text style={styles.text}>{category}</Text>
                      <Text style={styles.text}>${amount}</Text>
                    </div>
                  )
                )}
              </Section>
            )}

            {/* AI Insights */}
            {data?.insights && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Welth Insights</Heading>
                {data.insights.map((insight, index) => (
                  <Text key={index} style={styles.text}>
                    • {insight}
                  </Text>
                ))}
              </Section>
            )}

            <Text style={styles.footer}>
              Thank you for using Welth. Keep tracking your finances for better
              financial health!
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }

  if (type === "budget-alert") {
    return (
      <Html>
        <Head />
        <Preview>Budget Alert</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.title}>Budget Alert</Heading>
            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              You&rsquo;ve used {data?.percentageUsed.toFixed(1)}% of your
              monthly budget.
            </Text>
            <Section style={styles.statsContainer}>
              <div style={styles.stat}>
                <Text style={styles.text}>Budget Amount</Text>
                <Text style={styles.heading}>${data?.budgetAmount}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Spent So Far</Text>
                <Text style={styles.heading}>${data?.totalExpenses}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Remaining</Text>
                <Text style={styles.heading}>
                  ${data?.budgetAmount - data?.totalExpenses}
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }
}

const styles = {
  body: {
    backgroundColor: "#f6f9fc",
    fontFamily: "-apple-system, sans-serif",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  title: {
    color: "#1f2937",
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "0 0 20px",
  },
  heading: {
    color: "#1f2937",
    fontSize: "20px",
    fontWeight: "600",
    margin: "0 0 16px",
  },
  text: {
    color: "#4b5563",
    fontSize: "16px",
    margin: "0 0 16px",
  },
  section: {
    marginTop: "32px",
    padding: "20px",
    backgroundColor: "#f9fafb",
    borderRadius: "5px",
    border: "1px solid #e5e7eb",
  },
  statsContainer: {
    margin: "32px 0",
    padding: "20px",
    backgroundColor: "#f9fafb",
    borderRadius: "5px",
  },
  stat: {
    marginBottom: "16px",
    padding: "12px",
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #e5e7eb",
  },
  footer: {
    color: "#6b7280",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "32px",
    paddingTop: "16px",
    borderTop: "1px solid #e5e7eb",
  },
};
