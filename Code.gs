function onFormSubmit(e) {
  const responses = e.values;

  const timestamp = responses[0];
  const fullName = responses[1];
  const email = responses[2];
  const jobTitle = responses[3];
  const department = responses[4];
  const startDate = responses[5];
  const manager = responses[6];
  const managerEmail = responses[7];

  sendWelcomeEmail(fullName, email, jobTitle, department, startDate, manager, managerEmail);
}

function sendWelcomeEmail(fullName, email, jobTitle, department, startDate, manager, managerEmail) {
  const subjectToEmployee = `Welcome to the Company, ${fullName}!`;
  const bodyToEmployee = `
Hi ${fullName},

Welcome aboard! We're excited to have you join the ${department} team as a ${jobTitle}, starting on ${startDate}.

If you have any questions, feel free to reach out to your manager, ${manager} (${managerEmail}).

Looking forward to seeing you thrive!

Best,  
People Team
`;

  const subjectToManager = `New team member: ${fullName}`;
  const bodyToManager = `
Hi ${manager},

Just a heads-up — ${fullName} will be joining your team as a ${jobTitle} in ${department}, starting on ${startDate}.

Please prepare any resources, onboarding material, or meetings they may need.

Best,  
People Team
`;

  //GmailApp.sendEmail(email, subjectToEmployee, bodyToEmployee);
  //GmailApp.sendEmail(managerEmail, subjectToManager, bodyToManager);
  console.log(`Email sent to ${managerEmail} and ${email} (mocked)`);
}

function sendPerformanceReminders() {
  console.log('starts');
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Performance Tracker");
  const data = sheet.getDataRange().getValues();
  const today = new Date();

  for (let i = 1; i < data.length; i++) {
  const row = data[i];
  const [employeeName, managerEmail, lastReview, nextReview, score, notes] = row;
  console.log('Row #' + i + ':', row);

  if (!managerEmail || !nextReview) continue;

  const reviewDate = new Date(nextReview);
  console.log(`Checking ${employeeName} - Review due: ${reviewDate} vs today: ${today}`);

  if (reviewDate <= today) {
    const subject = `Performance Review Due for ${employeeName}`;
    const body = `
Hi,

This is a reminder that ${employeeName}'s performance review is due (Scheduled for ${reviewDate.toDateString()}).

Please conduct the review and update the tracker accordingly.

Thanks,  
People Ops
`;
    //GmailApp.sendEmail(managerEmail, subject, body);
    console.log(`Reminder sent to ${managerEmail}`);
  }
}
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('People Ops')
    .addItem('Send Performance Reminders', 'sendPerformanceReminders')
    .addToUi();
}

