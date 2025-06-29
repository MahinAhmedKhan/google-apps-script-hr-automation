# Employee Onboarding & Performance Tracker Automation

## Overview

This project automates employee onboarding and performance review reminders using Google Forms, Sheets, and Google Apps Script.

### Features

- Onboarding form submission triggers welcome emails (mocked in this version).
- Performance tracker sends reminders to managers (email sending mocked).
- Manual trigger via custom menu in Google Sheets.
- Designed for easy customization and extension.

## Usage Instructions

1. Make a copy of the Google Sheet and Form.
2. Open **Extensions → Apps Script** and paste the script.
3. Authorize script to access your Google account.
4. Uncomment the `GmailApp.sendEmail()` lines to enable real email sending.
5. Set up time-driven trigger to run `sendPerformanceReminders` daily.
6. Use the **People Ops** menu in Sheets to manually trigger reminders.

## Notes on Privacy

- Email sending is currently **mocked** with `console.log()` statements to avoid exposing personal emails.
- Replace placeholder emails in the sheets with real ones when running in your own environment.
- Uncomment email lines only after verifying your setup.
---

## Next Steps

- Add onboarding progress tracking.
- Integrate with HR systems via API.
- Enhance email templates and notification workflows.

---

Feel free to reach out if you want help customizing or deploying this project!
