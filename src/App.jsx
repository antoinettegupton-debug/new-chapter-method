import { useState } from "react";

const COLORS = {
  cream: "#f7f3ee",
  espresso: "#3f2e2a",
  taupe: "#8b7e74",
  gold: "#c9a24d",
  sage: "#a7b1a1",
};

const steps = [
  { id: 1, label: "Your Story" },
  { id: 2, label: "Credit Snapshot" },
  { id: 3, label: "Your Goals" },
  { id: 4, label: "Get Started" },
];

const creditIssues = [
  "Late Payments",
  "Collections",
  "High Utilization",
  "Charge-Offs",
  "Bankruptcies",
  "Identity Theft",
  "Medical Debt",
  "Student Loans",
];

const scoreRanges = [
  { label: "Below 500 — Starting Fresh", value: "below_500" },
  { label: "500–579 — Poor", value: "500_579" },
  { label: "580–669 — Fair", value: "580_669" },
  { label: "670–739 — Good", value: "670_739" },
  { label: "740+ — Very Good", value: "740_plus" },
  { label: "I Don't Know Yet", value: "unknown" },
];

const goals = [
  { icon: "🏠", label: "Buy a Home" },
  { icon: "🚗", label: "Finance a Car" },
  { icon: "💳", label: "Get Approved for Credit" },
  { icon: "📈", label: "Raise My Score 100+ Points" },
  { icon: "🏢", label: "Rent an Apartment" },
  { icon: "💼", label: "Business Funding" },
  { icon: "✈️", label: "Travel Rewards Card" },
  { icon: "🔄", label: "Fresh Financial Start" },
];

export default function NewChapterMethod() {
  const [step, setStep] = useState(0); // 0 = landing
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    score: "",
    issues: [],
    goals: [],
    timeline: "",
    referral: "",
    notes: "",
  });

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const toggleArray = (field, value) => {
    setForm((f) => {
      const arr = f[field];
      return {
        ...f,
        [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const canProceed = () => {
    if (currentStep === 1) return form.firstName && form.lastName && form.email && form.phone;
    if (currentStep === 2) return form.score;
    if (currentStep === 3) return form.goals.length > 0;
    return true;
  };

  const styles = {
    root: {
      minHeight: "100vh",
      background: COLORS.sage,
      fontFamily: "'Georgia', 'Times New Roman', serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    // ── LANDING ──────────────────────────────────────────────
    hero: {
      width: "100%",
      minHeight: "100vh",
      background: `linear-gradient(160deg, ${COLORS.cream} 0%, #ede8e0 60%, #e5dfd6 100%)`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 24px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },
    heroBg: {
      position: "absolute",
      inset: 0,
      background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${COLORS.gold}18 0%, transparent 70%)`,
      pointerEvents: "none",
    },
    badge: {
      display: "inline-block",
      background: `${COLORS.gold}22`,
      border: `1px solid ${COLORS.gold}88`,
      color: "#8a6a28",
      padding: "6px 18px",
      borderRadius: 40,
      fontSize: 11,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 32,
    },
    heroTitle: {
      color: COLORS.espresso,
      fontSize: "clamp(36px, 8vw, 64px)",
      fontWeight: 400,
      lineHeight: 1.12,
      margin: "0 0 12px",
      letterSpacing: "-0.02em",
      maxWidth: 640,
    },
    heroAccent: {
      color: COLORS.gold,
      fontStyle: "italic",
    },
    heroSub: {
      color: COLORS.taupe,
      fontSize: 17,
      lineHeight: 1.6,
      maxWidth: 480,
      margin: "0 auto 48px",
    },
    pillRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      justifyContent: "center",
      marginBottom: 48,
    },
    pill: {
      background: `${COLORS.espresso}0f`,
      border: `1px solid ${COLORS.espresso}22`,
      color: COLORS.taupe,
      padding: "8px 18px",
      borderRadius: 40,
      fontSize: 13,
    },
    priceLine: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      justifyContent: "center",
      marginBottom: 36,
    },
    priceTag: {
      color: COLORS.gold,
      fontSize: 42,
      fontWeight: 700,
      fontFamily: "'Georgia', serif",
    },
    priceSub: {
      color: COLORS.espresso,
      fontSize: 14,
      textAlign: "left",
      lineHeight: 1.4,
    },
    ctaBtn: {
      background: `linear-gradient(135deg, ${COLORS.gold}, #a07a38)`,
      color: "#fff",
      border: "none",
      padding: "18px 48px",
      borderRadius: 4,
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      cursor: "pointer",
      fontFamily: "'Georgia', serif",
      transition: "transform 0.15s, box-shadow 0.15s",
    },
    brandName: {
      position: "absolute",
      top: 28,
      left: 28,
      color: COLORS.taupe,
      fontSize: 12,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
    },

    // ── FORM ─────────────────────────────────────────────────
    formWrapper: {
      width: "100%",
      maxWidth: 620,
      margin: "0 auto",
      padding: "40px 20px 80px",
    },
    formHeader: {
      textAlign: "center",
      marginBottom: 36,
    },
    formBrand: {
      color: COLORS.taupe,
      fontSize: 11,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 8,
    },
    formTitle: {
      color: COLORS.espresso,
      fontSize: 28,
      fontWeight: 400,
      margin: "0 0 6px",
    },
    formSub: {
      color: COLORS.taupe,
      fontSize: 14,
    },

    // progress
    progress: {
      display: "flex",
      justifyContent: "center",
      gap: 0,
      marginBottom: 40,
    },
    stepDot: (active, done) => ({
      display: "flex",
      alignItems: "center",
    }),
    dot: (active, done) => ({
      width: 32,
      height: 32,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 600,
      background: done ? COLORS.sage : active ? COLORS.gold : `${COLORS.taupe}33`,
      color: done || active ? "#fff" : COLORS.taupe,
      transition: "all 0.3s",
      flexShrink: 0,
    }),
    connector: (done) => ({
      width: 48,
      height: 2,
      background: done ? COLORS.sage : `${COLORS.taupe}33`,
      margin: "0 4px",
      alignSelf: "center",
      transition: "background 0.3s",
    }),
    dotLabel: (active) => ({
      fontSize: 10,
      color: active ? COLORS.espresso : COLORS.taupe,
      textAlign: "center",
      marginTop: 4,
      letterSpacing: "0.05em",
    }),

    // card
    card: {
      background: "#fff",
      border: `1px solid ${COLORS.taupe}33`,
      borderRadius: 8,
      padding: "32px 28px",
      marginBottom: 24,
      boxShadow: `0 2px 24px ${COLORS.espresso}0a`,
    },
    sectionTitle: {
      color: COLORS.espresso,
      fontSize: 20,
      fontWeight: 400,
      marginBottom: 6,
    },
    sectionSub: {
      color: COLORS.taupe,
      fontSize: 13,
      marginBottom: 24,
      lineHeight: 1.5,
    },

    // inputs
    fieldRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14,
      marginBottom: 14,
    },
    fieldFull: {
      marginBottom: 14,
    },
    label: {
      display: "block",
      color: COLORS.espresso,
      fontSize: 12,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      marginBottom: 6,
      fontFamily: "'Georgia', serif",
    },
    input: {
      width: "100%",
      padding: "12px 14px",
      border: `1.5px solid ${COLORS.taupe}55`,
      borderRadius: 4,
      fontSize: 15,
      color: COLORS.espresso,
      background: COLORS.cream,
      fontFamily: "'Georgia', serif",
      outline: "none",
      boxSizing: "border-box",
      transition: "border-color 0.2s",
    },

    // score picker
    scoreGrid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 10,
    },
    scoreOption: (selected) => ({
      padding: "14px 18px",
      border: `1.5px solid ${selected ? COLORS.gold : COLORS.taupe + "44"}`,
      borderRadius: 4,
      cursor: "pointer",
      background: selected ? `${COLORS.gold}18` : "#fff",
      color: selected ? COLORS.espresso : COLORS.taupe,
      fontSize: 14,
      fontFamily: "'Georgia', serif",
      textAlign: "left",
      transition: "all 0.2s",
      display: "flex",
      alignItems: "center",
      gap: 10,
    }),

    // issues
    issueGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
    },
    issueChip: (selected) => ({
      padding: "10px 12px",
      border: `1.5px solid ${selected ? COLORS.sage : COLORS.taupe + "44"}`,
      borderRadius: 4,
      cursor: "pointer",
      background: selected ? `${COLORS.sage}22` : "#fff",
      color: selected ? COLORS.espresso : COLORS.taupe,
      fontSize: 13,
      fontFamily: "'Georgia', serif",
      transition: "all 0.2s",
      textAlign: "center",
    }),

    // goals
    goalGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
    },
    goalCard: (selected) => ({
      padding: "16px 12px",
      border: `1.5px solid ${selected ? COLORS.gold : COLORS.taupe + "33"}`,
      borderRadius: 6,
      cursor: "pointer",
      background: selected ? `${COLORS.gold}14` : "#fff",
      color: selected ? COLORS.espresso : COLORS.taupe,
      fontSize: 13,
      fontFamily: "'Georgia', serif",
      transition: "all 0.2s",
      textAlign: "center",
    }),
    goalIcon: {
      fontSize: 22,
      marginBottom: 6,
      display: "block",
    },

    // pricing summary
    pricingCard: {
      background: `linear-gradient(135deg, ${COLORS.espresso}, #2a1e1a)`,
      borderRadius: 8,
      padding: "28px 24px",
      marginBottom: 20,
      color: COLORS.cream,
      textAlign: "center",
    },
    pricingBadge: {
      display: "inline-block",
      background: `${COLORS.gold}33`,
      border: `1px solid ${COLORS.gold}66`,
      color: COLORS.gold,
      padding: "4px 14px",
      borderRadius: 40,
      fontSize: 10,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      marginBottom: 16,
    },
    pricingTitle: {
      fontSize: 22,
      fontWeight: 400,
      marginBottom: 6,
      color: COLORS.cream,
    },
    pricingPrice: {
      fontSize: 48,
      color: COLORS.gold,
      fontWeight: 700,
      lineHeight: 1,
      marginBottom: 4,
    },
    pricingPer: {
      color: `${COLORS.cream}77`,
      fontSize: 13,
      marginBottom: 20,
    },
    includesList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    includesItem: {
      color: `${COLORS.cream}cc`,
      fontSize: 13,
      display: "flex",
      alignItems: "center",
      gap: 8,
    },
    checkmark: {
      color: COLORS.gold,
      fontSize: 14,
      flexShrink: 0,
    },

    // nav buttons
    navRow: {
      display: "flex",
      gap: 12,
      justifyContent: "space-between",
    },
    backBtn: {
      flex: 1,
      padding: "14px",
      border: `1.5px solid ${COLORS.taupe}55`,
      borderRadius: 4,
      background: "transparent",
      color: COLORS.taupe,
      fontSize: 13,
      cursor: "pointer",
      fontFamily: "'Georgia', serif",
      letterSpacing: "0.05em",
    },
    nextBtn: (enabled) => ({
      flex: 2,
      padding: "14px",
      border: "none",
      borderRadius: 4,
      background: enabled
        ? `linear-gradient(135deg, ${COLORS.gold}, #a07a38)`
        : `${COLORS.taupe}44`,
      color: enabled ? COLORS.espresso : COLORS.taupe,
      fontSize: 13,
      fontWeight: 700,
      cursor: enabled ? "pointer" : "not-allowed",
      fontFamily: "'Georgia', serif",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      transition: "all 0.2s",
    }),

    // success
    successWrap: {
      textAlign: "center",
      padding: "60px 20px",
    },
    successIcon: {
      width: 72,
      height: 72,
      background: `linear-gradient(135deg, ${COLORS.gold}, #a07a38)`,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 30,
      margin: "0 auto 24px",
    },
    successTitle: {
      color: COLORS.espresso,
      fontSize: 32,
      fontWeight: 400,
      marginBottom: 12,
    },
    successBody: {
      color: COLORS.taupe,
      fontSize: 15,
      lineHeight: 1.7,
      maxWidth: 400,
      margin: "0 auto 32px",
    },
    successHighlight: {
      background: `${COLORS.gold}18`,
      border: `1px solid ${COLORS.gold}44`,
      borderRadius: 6,
      padding: "16px 20px",
      color: COLORS.espresso,
      fontSize: 14,
      lineHeight: 1.6,
    },
  };

  // ── LANDING PAGE ──
  if (step === 0) {
    return (
      <div style={styles.hero}>
        <div style={styles.heroBg} />
        <span style={styles.brandName}>Nette Connect Solutions Co.</span>
        <div style={styles.badge}>Introducing</div>
        <h1 style={styles.heroTitle}>
          The <span style={styles.heroAccent}>New Chapter</span> Method
        </h1>
        <p style={styles.heroSub}>
          A proven 3-month credit repair program designed to rebuild your financial story — one chapter at a time.
        </p>
        <div style={styles.pillRow}>
          {["Dispute Management", "Score Monitoring", "1-on-1 Coaching", "Proven Results"].map((p) => (
            <span key={p} style={styles.pill}>{p}</span>
          ))}
        </div>
        <div style={styles.priceLine}>
          <span style={styles.priceTag}>$147</span>
          <span style={styles.priceSub}>
            3-Month Program<br />
            <span style={{ color: COLORS.taupe, fontSize: 12 }}>Everything included. No hidden fees.</span>
          </span>
        </div>
        <button
          style={styles.ctaBtn}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = `0 8px 24px ${COLORS.gold}44`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          onClick={() => setStep(1)}
        >
          Begin My New Chapter →
        </button>
      </div>
    );
  }

  // ── SUCCESS ──
  if (submitted) {
    return (
      <div style={styles.root}>
        <div style={{ ...styles.formWrapper, maxWidth: 500 }}>
          <div style={styles.successWrap}>
            <div style={styles.successIcon}>✓</div>
            <h2 style={styles.successTitle}>You're In, {form.firstName}.</h2>
            <p style={styles.successBody}>
              Your application for <strong>The New Chapter Method</strong> has been received. Complete the steps below in order to get your journey started.
            </p>

            {/* Step-by-step action list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>

              {/* Step 1 — Payment */}
              <div style={{ background: "#fff", border: `1.5px solid ${COLORS.gold}55`, borderRadius: 6, overflow: "hidden" }}>
                <div style={{ background: `${COLORS.gold}18`, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ background: COLORS.gold, color: "#fff", borderRadius: "50%", width: 20, height: 20, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>1</span>
                  <span style={{ color: COLORS.espresso, fontSize: 13, fontWeight: 700, letterSpacing: "0.05em" }}>COMPLETE PAYMENT</span>
                </div>
                <div style={{ padding: "12px 16px" }}>
                  <a
                    href="https://www.fanbasis.com/agency-checkout/netteconnect/g5Ro3"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "block", textAlign: "center",
                      background: `linear-gradient(135deg, ${COLORS.gold}, #a07a38)`,
                      color: "#fff", padding: "14px", borderRadius: 4,
                      textDecoration: "none", fontSize: 14, fontWeight: 700,
                      letterSpacing: "0.06em", fontFamily: "'Georgia', serif",
                    }}
                  >
                    💳 Pay $147 — Lock In My Spot
                  </a>
                </div>
              </div>

              {/* Step 2 — Onboarding */}
              <div style={{ background: "#fff", border: `1.5px solid ${COLORS.sage}55`, borderRadius: 6, overflow: "hidden" }}>
                <div style={{ background: `${COLORS.sage}22`, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ background: COLORS.sage, color: "#fff", borderRadius: "50%", width: 20, height: 20, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>2</span>
                  <span style={{ color: COLORS.espresso, fontSize: 13, fontWeight: 700, letterSpacing: "0.05em" }}>COMPLETE ONBOARDING</span>
                </div>
                <div style={{ padding: "12px 16px" }}>
                  <a
                    href="https://www.newclientsignup.com/Agreement/Onboarding?crepto=gEfHRP2RP1huWvG6wcG49w%3d%3d"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "block", textAlign: "center",
                      background: `linear-gradient(135deg, ${COLORS.sage}, #7a9080)`,
                      color: "#fff", padding: "14px", borderRadius: 4,
                      textDecoration: "none", fontSize: 14, fontWeight: 700,
                      letterSpacing: "0.06em", fontFamily: "'Georgia', serif",
                    }}
                  >
                    📝 Sign My Client Agreement
                  </a>
                </div>
              </div>

              {/* Step 3 — Credit Report */}
              <div style={{ background: "#fff", border: `1.5px solid ${COLORS.taupe}44`, borderRadius: 6, overflow: "hidden" }}>
                <div style={{ background: `${COLORS.taupe}14`, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ background: COLORS.taupe, color: "#fff", borderRadius: "50%", width: 20, height: 20, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>3</span>
                  <span style={{ color: COLORS.espresso, fontSize: 13, fontWeight: 700, letterSpacing: "0.05em" }}>PULL YOUR CREDIT REPORT</span>
                </div>
                <div style={{ padding: "12px 16px" }}>
                  <a
                    href="https://myfreescorenow.com/enroll/?AID=NetteConnectSoultionsCo&PID=16273"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "block", textAlign: "center",
                      background: `${COLORS.espresso}`,
                      color: COLORS.cream, padding: "14px", borderRadius: 4,
                      textDecoration: "none", fontSize: 14, fontWeight: 700,
                      letterSpacing: "0.06em", fontFamily: "'Georgia', serif",
                    }}
                  >
                    📋 Get My Free Credit Report
                  </a>
                </div>
              </div>

            </div>

            {/* Portal instructions notice */}
            <div style={{
              background: `${COLORS.espresso}`,
              borderRadius: 8,
              padding: "20px 20px",
              textAlign: "left",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 18 }}>📬</span>
                <span style={{ color: COLORS.gold, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Check Your Email in 24–48 Hours</span>
              </div>
              <p style={{ color: `${COLORS.cream}cc`, fontSize: 13, lineHeight: 1.7, margin: "0 0 14px" }}>
                Your <strong style={{ color: COLORS.cream }}>client portal login credentials</strong> will be sent to <em style={{ color: COLORS.gold }}>{form.email}</em> within 24–48 hours of completing your onboarding.
              </p>
              <div style={{ borderTop: `1px solid ${COLORS.cream}22`, paddingTop: 14 }}>
                <p style={{ color: COLORS.gold, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 10px" }}>
                  ⚠️ Required to Proceed — Upload to Your Portal:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { icon: "🪪", text: "Government-Issued Photo ID" },
                    { icon: "🔒", text: "Social Security Card or Number" },
                    { icon: "📄", text: "Current Utility Bill or Proof of Address" },
                  ].map((item) => (
                    <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 16 }}>{item.icon}</span>
                      <span style={{ color: `${COLORS.cream}cc`, fontSize: 13 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
                <p style={{ color: `${COLORS.cream}77`, fontSize: 11, marginTop: 12, lineHeight: 1.6 }}>
                  Your portal must be filled out thoroughly and all documents uploaded before your credit repair process can begin.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ── FORM ──
  return (
    <div style={styles.root}>
      <div style={styles.formWrapper}>
        {/* Header */}
        <div style={styles.formHeader}>
          <div style={styles.formBrand}>Nette Connect Solutions Co.</div>
          <h1 style={styles.formTitle}>The New Chapter Method</h1>
          <p style={styles.formSub}>Tell us about yourself so we can tailor your journey.</p>
        </div>

        {/* Progress */}
        <div style={styles.progress}>
          {steps.map((s, i) => (
            <div key={s.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && <div style={styles.connector(currentStep > s.id)} />}
                <div style={styles.dot(currentStep === s.id, currentStep > s.id)}>
                  {currentStep > s.id ? "✓" : s.id}
                </div>
              </div>
              <span style={styles.dotLabel(currentStep === s.id)}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Step 1 — Personal Info */}
        {currentStep === 1 && (
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Let's start with you</h2>
            <p style={styles.sectionSub}>We'll use this to reach out and personalize your program.</p>
            <div style={styles.fieldRow}>
              <div>
                <label style={styles.label}>First Name</label>
                <input
                  style={styles.input}
                  placeholder="Jane"
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  onFocus={(e) => (e.target.style.borderColor = COLORS.gold)}
                  onBlur={(e) => (e.target.style.borderColor = `${COLORS.taupe}55`)}
                />
              </div>
              <div>
                <label style={styles.label}>Last Name</label>
                <input
                  style={styles.input}
                  placeholder="Smith"
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  onFocus={(e) => (e.target.style.borderColor = COLORS.gold)}
                  onBlur={(e) => (e.target.style.borderColor = `${COLORS.taupe}55`)}
                />
              </div>
            </div>
            <div style={styles.fieldFull}>
              <label style={styles.label}>Email Address</label>
              <input
                style={styles.input}
                type="email"
                placeholder="jane@email.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                onFocus={(e) => (e.target.style.borderColor = COLORS.gold)}
                onBlur={(e) => (e.target.style.borderColor = `${COLORS.taupe}55`)}
              />
            </div>
            <div style={styles.fieldFull}>
              <label style={styles.label}>Phone Number</label>
              <input
                style={styles.input}
                type="tel"
                placeholder="(555) 000-0000"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                onFocus={(e) => (e.target.style.borderColor = COLORS.gold)}
                onBlur={(e) => (e.target.style.borderColor = `${COLORS.taupe}55`)}
              />
            </div>
            <div style={styles.fieldFull}>
              <label style={styles.label}>How did you hear about us?</label>
              <input
                style={styles.input}
                placeholder="Social media, referral, etc."
                value={form.referral}
                onChange={(e) => update("referral", e.target.value)}
                onFocus={(e) => (e.target.style.borderColor = COLORS.gold)}
                onBlur={(e) => (e.target.style.borderColor = `${COLORS.taupe}55`)}
              />
            </div>
          </div>
        )}

        {/* Step 2 — Credit Snapshot */}
        {currentStep === 2 && (
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Your credit snapshot</h2>
            <p style={styles.sectionSub}>Knowing where you are helps us map out where you're going.</p>

            {/* Credit Report Banner */}
            <a
              href="https://myfreescorenow.com/enroll/?AID=NetteConnectSoultionsCo&PID=16273"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: `${COLORS.sage}22`,
                border: `1.5px solid ${COLORS.sage}66`,
                borderRadius: 6,
                padding: "14px 16px",
                marginBottom: 24,
                textDecoration: "none",
                color: COLORS.espresso,
              }}
            >
              <span style={{ fontSize: 22 }}>📋</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>Don't know your score?</div>
                <div style={{ fontSize: 12, color: COLORS.taupe }}>Get your free credit report at MyFreeScoreNow.com →</div>
              </div>
            </a>

            <label style={{ ...styles.label, marginBottom: 12 }}>Current Credit Score Range</label>
            <div style={styles.scoreGrid}>
              {scoreRanges.map((r) => (
                <button
                  key={r.value}
                  style={styles.scoreOption(form.score === r.value)}
                  onClick={() => update("score", r.value)}
                >
                  <span style={{ color: form.score === r.value ? COLORS.gold : `${COLORS.taupe}88`, fontSize: 16 }}>
                    {form.score === r.value ? "◉" : "○"}
                  </span>
                  {r.label}
                </button>
              ))}
            </div>

            <label style={{ ...styles.label, marginTop: 24, marginBottom: 12 }}>
              What issues are on your report? <span style={{ color: COLORS.taupe, fontWeight: 400 }}>(Select all that apply)</span>
            </label>
            <div style={styles.issueGrid}>
              {creditIssues.map((issue) => (
                <button
                  key={issue}
                  style={styles.issueChip(form.issues.includes(issue))}
                  onClick={() => toggleArray("issues", issue)}
                >
                  {issue}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 — Goals */}
        {currentStep === 3 && (
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>What's your why?</h2>
            <p style={styles.sectionSub}>Select everything you want to achieve. Your goals shape your chapter.</p>

            <div style={styles.goalGrid}>
              {goals.map((g) => (
                <button
                  key={g.label}
                  style={styles.goalCard(form.goals.includes(g.label))}
                  onClick={() => toggleArray("goals", g.label)}
                >
                  <span style={styles.goalIcon}>{g.icon}</span>
                  {g.label}
                </button>
              ))}
            </div>

            <label style={{ ...styles.label, marginTop: 24, marginBottom: 8 }}>Timeline</label>
            <select
              style={{ ...styles.input, appearance: "none" }}
              value={form.timeline}
              onChange={(e) => update("timeline", e.target.value)}
            >
              <option value="">How soon do you want results?</option>
              <option value="asap">As soon as possible</option>
              <option value="3months">Within 3 months</option>
              <option value="6months">Within 6 months</option>
              <option value="year">Within a year</option>
            </select>

            <label style={{ ...styles.label, marginTop: 16, marginBottom: 8 }}>Anything else we should know?</label>
            <textarea
              style={{
                ...styles.input,
                resize: "vertical",
                minHeight: 80,
                lineHeight: 1.6,
              }}
              placeholder="Share any context about your situation..."
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              onFocus={(e) => (e.target.style.borderColor = COLORS.gold)}
              onBlur={(e) => (e.target.style.borderColor = `${COLORS.taupe}55`)}
            />
          </div>
        )}

        {/* Step 4 — Review & Commit */}
        {currentStep === 4 && (
          <>
            <div style={styles.pricingCard}>
              <div style={styles.pricingBadge}>Your Program</div>
              <div style={styles.pricingTitle}>The New Chapter Method</div>
              <div style={styles.pricingPrice}>$147</div>
              <div style={styles.pricingPer}>3-Month Credit Repair Program</div>
              <ul style={styles.includesList}>
                {[
                  "Comprehensive credit report analysis",
                  "Personalized dispute letter strategy",
                  "Direct bureau & creditor disputes",
                  "Monthly score tracking & updates",
                  "1-on-1 coaching calls each month",
                  "Credit-building roadmap & guidance",
                ].map((item) => (
                  <li key={item} style={styles.includesItem}>
                    <span style={styles.checkmark}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ ...styles.card, padding: "20px 24px" }}>
              <p style={{ color: COLORS.taupe, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                By submitting, <strong>{form.firstName} {form.lastName}</strong>, you agree to be contacted at{" "}
                <em>{form.email}</em> and <em>{form.phone}</em> by Nette Connect Solutions Co. regarding your enrollment in The New Chapter Method.
              </p>
            </div>

            {/* Payment Button */}
            <a
              href="https://www.fanbasis.com/agency-checkout/netteconnect/g5Ro3"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                background: `linear-gradient(135deg, ${COLORS.sage}, #7a9080)`,
                color: "#fff",
                padding: "16px",
                borderRadius: 4,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.06em",
                fontFamily: "'Georgia', serif",
                marginBottom: 12,
              }}
            >
              💳 Complete My $147 Payment Now
            </a>
            <a
              href="https://www.newclientsignup.com/Agreement/Onboarding?crepto=gEfHRP2RP1huWvG6wcG49w%3d%3d"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                background: `linear-gradient(135deg, ${COLORS.espresso}, #2a1e1a)`,
                color: COLORS.cream,
                padding: "14px",
                borderRadius: 4,
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.06em",
                fontFamily: "'Georgia', serif",
                marginBottom: 12,
              }}
            >
              📝 Complete Client Onboarding Agreement
            </a>
            <p style={{ textAlign: "center", color: COLORS.taupe, fontSize: 11, margin: "0 0 16px", letterSpacing: "0.05em" }}>
              SECURE CHECKOUT · NETTE CONNECT SOLUTIONS CO.
            </p>
          </>
        )}

        {/* Nav Buttons */}
        <div style={styles.navRow}>
          {currentStep > 1 && (
            <button style={styles.backBtn} onClick={() => setCurrentStep((s) => s - 1)}>
              ← Back
            </button>
          )}
          {currentStep < 4 ? (
            <button
              style={styles.nextBtn(canProceed())}
              disabled={!canProceed()}
              onClick={() => setCurrentStep((s) => s + 1)}
            >
              Continue →
            </button>
          ) : (
            <button
              style={styles.nextBtn(true)}
              onClick={() => setSubmitted(true)}
            >
              Submit My Application →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
