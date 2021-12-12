import type { Handler, HandlerResponse } from '@netlify/functions';
import Sentry from '@sentry/node';
import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import type { ContactFormData, MailgunResponseBody } from '../types/mail';

/**
 * Creates text body for email
 */
function formatEmailText(data: ContactFormData) {
  return `
===
Name: ${data.name}
Email: ${data.email}
===

${data.message}
`;
}

/**
 * Send email
 * @param data message data
 * @returns Mailgun response message
 */
async function sendMail(data: ContactFormData): Promise<MailgunResponseBody> {
  const { MG_RECIPIENT, MG_DOMAIN, MG_API_KEY } = process.env;

  if (!MG_API_KEY) {
    throw new Error('Missing Credentials');
  }

  const mailgun = new Mailgun(FormData);
  const mailgunClient = mailgun.client({
    username: 'api',
    key: MG_API_KEY,
  });
  const { message } = await mailgunClient.messages.create(MG_DOMAIN || '', {
    from: `coalminestudios.ca <noreply@${MG_DOMAIN}>`,
    to: MG_RECIPIENT,
    subject: `New contact form submission from ${MG_DOMAIN}`,
    text: formatEmailText(data),
  });

  return message;
}

let sentryInitialized = false;

/**
 * Initializes sentry
 */
function initSentry(): void {
  Sentry.init({ dsn: process.env.SENTRY_DSN });
  sentryInitialized = true;
}

/**
 * Reports errors to Sentry correctly
 */
function reportError(err: Error | string): void | Promise<boolean> {
  if (process.env.NODE_ENV !== 'production') {
    return console.log(err);
  }

  if (!sentryInitialized) {
    return;
  }

  typeof err === 'string'
    ? Sentry.captureMessage(err)
    : Sentry.captureException(err);

  return Sentry.flush();
}

initSentry();

const response500: HandlerResponse = {
  statusCode: 500,
  body: 'Something went wrong',
};

/**
 * Netlify Function handler
 */
const handler: Handler = async (event, context) => {
  // Make sure AWS doesn't wait for an empty event loop, as that can break things with Sentry
  context.callbackWaitsForEmptyEventLoop = false;

  // only accept POST with body
  if (event.httpMethod !== 'POST' || event.body == null) {
    return response500;
  }

  // verify request has body, filter honeypot
  const data = JSON.parse(event.body);

  if (!data || data.honeypot !== '') {
    return response500;
  }

  try {
    // Send mail
    const message = await sendMail(data);

    return {
      statusCode: 200,
      body: JSON.stringify(message),
    };
  } catch (err: any) {
    // Send errors to Sentry
    await reportError(err);

    return response500;
  }
};

export { handler };
