# EmailJS Setup Instructions

To enable the contact form to send emails, you need to set up EmailJS (free service):

## Steps:

1. **Create an EmailJS account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account (200 emails/month free)

2. **Create an Email Service**
   - Go to Email Services in the dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Follow the setup instructions
   - Copy your **Service ID**

3. **Create an Email Template**
   - Go to Email Templates in the dashboard
   - Click "Create New Template"
   - Use this template:
     ```
     From: {{from_name}} <{{from_email}}>
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
   - Set "To Email" to: `sithomolamusiki@gmail.com`
   - Copy your **Template ID**

4. **Get your Public Key**
   - Go to Account > API Keys
   - Copy your **Public Key**

5. **Add to your project**
   - Create a `.env` file in the root directory
   - Add these variables:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```
   - Restart your dev server

## Alternative: Direct Configuration

If you prefer not to use environment variables, edit `src/config/emailjs.config.ts` and replace the placeholder values directly.

## Testing

Once configured, test the form by sending a message. You should receive an email at `sithomolamusiki@gmail.com`.
