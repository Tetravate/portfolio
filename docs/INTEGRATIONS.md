# Tetravate Studio — Integrations Specification

> **Status:** Verified from `src/main.js`, `google-apps-script/Code.gs`, and `index.html`.  
> **Last Verified:** October 2026

---

## 1. Google Apps Script Contact Form Webhook

### Overview
The contact form on `/contact` is integrated with a lightweight, serverless Google Apps Script Web App that relays incoming project inquiries directly to `tetravate@gmail.com`.

* **Active Web App Endpoint:**
  ```
  https://script.google.com/macros/s/AKfycbwFNF5WtffNhm-p3UlqH4e4bW_SnizCNXw5GTIADvNdboDcexQS9jw1S7blbmi0dS4l/exec
  ```
* **Source Code:** Maintained in [`google-apps-script/Code.gs`](file:///c:/TETRAVATE/Portfolio/google-apps-script/Code.gs).
* **Target Inbox:** `tetravate@gmail.com`
* **Reply-To:** Configured automatically to the inquirer's provided email address.

### Payload Schema
Dispatched via `fetch(GOOGLE_APPS_SCRIPT_INQUIRY_URL, ...)`:
```json
{
  "name": "Client Name",
  "email": "client@example.com",
  "company": "Independent / Organization Name",
  "service": "Web Application Development",
  "message": "Detailed project brief (min 10 chars)",
  "budget": "Flexible / To be discussed",
  "timeline": "Flexible / Q1 2027",
  "website": "",
  "submittedAt": "2026-10-13T14:30:00.000Z"
}
```

### Critical Implementation Details
1. **CORS Protocol:** Google Apps Script Web Apps reject cross-origin preflight `OPTIONS` requests if sent with `Content-Type: application/json`. Therefore, requests **must** be sent as `Content-Type: text/plain;charset=utf-8` with a stringified JSON body.
2. **Anti-Spam Honeypot:** Includes an invisible `inquiryWebsite` field. If filled by an automated bot, the webhook silently returns success without dispatching an email.
3. **No External Databases:** Intentionally operates without Google Sheets, third-party databases, or paid form services to prevent unnecessary maintenance overhead.
4. **Error Handling & Fallback:** If the webhook request fails or encounters a network interruption, a clear error banner appears providing a direct fallback link to `tetravate@gmail.com`.

---

## 2. Direct WhatsApp Integrations

To facilitate direct communication with founders, WhatsApp click-to-chat links are provided on the Contact page and in the global footer:

* **Primary WhatsApp Number:** `+91 63810 77598`
* **Secondary WhatsApp Number:** `+91 98941 65334`
* **Prefilled Message:**
  ```
  Hi Tetravate team! I'm interested in discussing a project with you. Could you share more details about your services?
  ```
* **Encoded Link Format:**
  `https://wa.me/916381077598?text=Hi%20Tetravate%20team!%20I'm%20interested%20in%20discussing%20a%20project%20with%20you.%20Could%20you%20share%20more%20details%20about%20your%20services%3F`

### Protected UX Decisions
* **Floating Contact Button:** The persistent floating button in the bottom right is an email/contact form shortcut linking directly to `/contact`.
* **Prohibition:** **DO NOT** restore a floating WhatsApp widget. Direct WhatsApp messaging is available on the Contact page and footer, keeping the main browsing viewport uncluttered.

---

## 3. Social & Channel Endpoints

* **GitHub:** `https://github.com/orgs/Tetravate` (rel="noopener" target="_blank")
* **LinkedIn:** `https://www.linkedin.com/company/tetravate/` (rel="noopener" target="_blank")
* **Instagram:** `https://www.instagram.com/tetra.vate?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==`
* **Reddit:** `https://www.reddit.com/user/Tetravate/`
