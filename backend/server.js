require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 5001;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Configurable recipient and sender emails
const contactToEmail = process.env.CONTACT_TO_EMAIL || 'hanushvardhan100@gmail.com';
// NOTE: Resend requires 'onboarding@resend.dev' on free tier unless you verified a custom domain
const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'Celestrix Inquiries <onboarding@resend.dev>';

app.use(
  cors({
    origin: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json({ limit: '1mb' }));

const servicesData = [
  {
    id: 1,
    title: 'Cloud & Infrastructure Solutions',
    description:
      'Multi-cloud architecture, DevOps automation, cloud migration, and secure 24/7 infrastructure management for modern enterprises.',
    icon: 'Cloud',
  },
  {
    id: 2,
    title: 'Full-Stack Software Engineering',
    description:
      'Bespoke web applications, high-throughput microservices, API architecture, and scalable SaaS products engineered for growth.',
    icon: 'Code2',
  },
  {
    id: 3,
    title: 'AI & Data Intelligence',
    description:
      'Enterprise machine learning models, predictive analytics, and data platforms that turn operational complexity into measurable value.',
    icon: 'BrainCircuit',
  },
  {
    id: 4,
    title: 'Cybersecurity & Compliance',
    description:
      'Zero-trust network design, security operations, audit readiness, and regulatory compliance frameworks built for critical systems.',
    icon: 'ShieldCheck',
  },
  {
    id: 5,
    title: 'Mobile App Development',
    description:
      'High-performance native and cross-platform mobile products for iOS and Android designed around user experience and speed.',
    icon: 'Smartphone',
  },
  {
    id: 6,
    title: 'IT Consulting & Digital Strategy',
    description:
      'Technology transformation roadmaps, legacy modernization, architecture advisory, and executive strategy that align IT with business outcomes.',
    icon: 'BriefcaseBusiness',
  },
];

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/services', (req, res) => {
  res.status(200).json({
    success: true,
    data: servicesData,
  });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, company, service, projectBrief, message } = req.body;
  const trimmedName = typeof name === 'string' ? name.trim() : '';
  const trimmedEmail = typeof email === 'string' ? email.trim() : '';
  const trimmedCompany = typeof company === 'string' ? company.trim() : '';
  const trimmedService = typeof service === 'string' ? service.trim() : 'General Inquiry';
  const trimmedProjectBrief =
    typeof projectBrief === 'string'
      ? projectBrief.trim()
      : typeof message === 'string'
      ? message.trim()
      : '';

  if (!trimmedName || !trimmedEmail || !trimmedProjectBrief) {
    return res.status(400).json({
      success: false,
      error: 'Name, work email, and project brief are required.',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid work email address.',
    });
  }

  const inquiry = {
    name: trimmedName,
    email: trimmedEmail,
    company: trimmedCompany || 'N/A',
    service: trimmedService,
    projectBrief: trimmedProjectBrief,
    receivedAt: new Date().toISOString(),
  };

  console.log('Incoming consultation inquiry:', inquiry);

  if (!process.env.RESEND_API_KEY) {
    console.error('CRITICAL: RESEND_API_KEY is missing from environment variables (.env file).');
    return res.status(500).json({
      success: false,
      error: 'Email service is not configured on the server.',
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: resendFromEmail,
      to: [contactToEmail],
      replyTo: trimmedEmail,
      subject: `New CELESTRIX Consultation Request from ${trimmedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #0f172a; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #4f46e5; margin-top: 0; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9;">
            CELESTRIX IT SERVICES — New Inquiry
          </h2>
          <p style="margin: 8px 0;"><strong>Client Name:</strong> ${trimmedName}</p>
          <p style="margin: 8px 0;"><strong>Work Email:</strong> <a href="mailto:${trimmedEmail}">${trimmedEmail}</a></p>
          <p style="margin: 8px 0;"><strong>Company:</strong> ${trimmedCompany || 'Not specified'}</p>
          <p style="margin: 8px 0;"><strong>Service Area:</strong> ${trimmedService}</p>
          
          <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #4f46e5;">
            <p style="margin: 0 0 6px 0; font-weight: bold; color: #334155;">Project Brief:</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; color: #1e293b;">${trimmedProjectBrief.replace(/\n/g, '<br />')}</p>
          </div>

          <p style="font-size: 11px; color: #94a3b8; margin-top: 24px; margin-bottom: 0;">
            Sent automatically via the CELESTRIX Web Portal
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API rejected the email dispatch:', error);
      return res.status(500).json({
        success: false,
        error: `Email delivery failed: ${error.message}`,
      });
    }

    console.log('Email delivered successfully! Resend ID:', data.id);

    return res.status(201).json({
      success: true,
      message:
        'Thank you for reaching out to CELESTRIX IT SERVICES. Our engagement team will respond within 24 hours.',
    });
  } catch (err) {
    console.error('Unexpected server error during Resend call:', err);
    return res.status(500).json({
      success: false,
      error: 'Your inquiry could not be sent right now. Please try again later.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`CELESTRIX IT SERVICES Backend running on http://localhost:${PORT}`);
});