export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

export interface MailgunResponseBody {
  id: string;
  message: string;
}
