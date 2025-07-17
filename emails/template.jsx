import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function EmailTemplate({
  userName = "Malisha",
  type = "budget-alert",
  data = {
    percentageUsed: 85,
    budgetAmount: 4000,
    totalExpenses: 3400,
  },
}) {
  if (type === "monthly-report") {
  }

  if (type === "budget-alert") {
    return (
      <Html>
        <Head />
        <Preview>Budget Alert</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <h1 style={styles.title}>Budget Alert</h1>

            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              You’ve used <b>{data?.percentageUsed.toFixed(1)}%</b> of your
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
                  $
                  {data
                    ? (data.budgetAmount - data.totalExpenses).toFixed(2)
                    : "0.00"}
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }

  return null; // For unsupported types or fallback
}

const styles = {
  body: {
    backgroundColor: "#f2f2f2",
    fontFamily: "apple-system, sans-serif",
    padding: "40px 0",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "6px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
    maxWidth: "500px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  text: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "12px",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#111",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    gap: "12px",
  },
  stat: {
    flex: "1",
    textAlign: "center",
  },
};
