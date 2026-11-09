# Completed care plan → native Google Doc

## Requested behavior

The user clarified on November 9, 2026: enter information in the website, finish, and generate a **filled native Google Doc arranged like the care-plan form in the syllabus**. A separate blank Google Doc and manual Word import do not satisfy that flow.

The source remains the supplied NRS 114 Fall 2026 WEC(4) syllabus, Clinical Reasoning Plan of Care pp. 34–47. The existing form/export engine supplies the section order, questions, three SBARs, 47 lab rows, two fluid/electrolyte applications and five-column care-plan matrix. Answers expand; identical pagination to the blank source is not promised. No syllabus PDF or patient data is committed.

## Integration

- **Finish & export → Review & create Google Doc** captures the current patient's populated document and shows its answer preview.
- Google Drive receives the **same populated DOCX bytes** as the Word export, with native Google Docs conversion metadata. There is no blank-template link or plain-text-only substitute.
- Google Identity Services' browser token model requests only `drive.file`. Each creation/recovery action starts the Google account chooser. No client secret is used. Tokens stay in the active call, never localStorage, URLs, backups, sync or repository files.
- The patient and exact document bytes must still match the review before upload, including after sign-in. The popup starts synchronously from the click; the Google library is loaded only when a configured export is reviewed.
- Nothing uploads on load, typing, preview or render. The browser sends the reviewed document directly to Google after the explicit creation action. No application server receives the form.
- Native MIME/ID validation and metadata readback precede success. Existing Docs are never overwritten or shared by this flow.
- Duplicate clicks are blocked. A local `cp-google-exports` receipt stores only the opaque patient key, document fingerprint, public client ID, attempt key, time/status and confirmed file ID. No copied answers or token. It remains outside `nav.js` SYNC.
- An uncertain network/5xx/unreadable result stays **unconfirmed**. Recovery reads the known ID or searches the attempt's private app property; it never automatically replays a POST. Another copy requires a separate explicit action.
- Answers and Word download remain available when sign-in, permission, Google or connection setup is unavailable.

## One-time activation — still required

`data/careplan/google-config.js` deliberately has an empty `clientId`. The repo has no Google OAuth client, and ChatGPT's Drive tools do not provision one for the website. ChatGPT's connection cannot be copied or borrowed by GitHub Pages. The UI reports incomplete setup rather than claiming the connection works.

Site owner setup:

1. Open [Google Cloud Console](https://console.cloud.google.com/) and select or create the project intended for this site.
2. Enable **Google Drive API**. A Docs API key and the Docs API are not needed for this Drive conversion path.
3. Configure the OAuth consent/Google Auth Platform information. For a personal test application, allow the Google account that will use it in the test-user settings. A school Workspace account can have administrator restrictions.
4. Create an OAuth client of type **Web application**. Add this exact **Authorized JavaScript origin**, without a path:

   `https://josemose17-commits.github.io`

5. Declare the scope `https://www.googleapis.com/auth/drive.file`. Do not substitute full-Drive access. This token/dialog implementation uses the authorized origin and no app callback endpoint.
6. Put the public **client ID** ending in `.apps.googleusercontent.com` into `window.CP_GOOGLE_CONFIG.clientId`. **Do not send or commit a client secret, token or credential JSON.** Bump the config cache stamp and shared build; publish.
7. Test on the live site using entirely fictional information. Review, create, consent, then inspect actual answers, tables, landscape layout and privacy in the returned Google Doc. Check sign-in cancellation and recovery. The managed preview origin is not automatically an authorized Google origin.

An example client ID or simulated provider response is not activation. Real website OAuth and a live website-originated Drive write remain blocked until the valid client ID and origin/API settings exist.

## Validation

`tools/check_careplan_google.js` covers the populated helper snapshot and multipart bytes, explicit authorization, native MIME/readback, denied/cancelled sign-in, stale edits and patient switching, duplicate clicks/identical-answer receipts, explicit copies, uncertain-write recovery, failed readback, wrong MIME and blocked storage. Original syllabus/workspace checks still cover form mapping and nursing wording. No clinical content was added.

Full-repository and browser results are recorded below after completion. Simulated Google responses can verify interface transitions but do not prove real OAuth, production account permission or live Drive writes.

### Completed checks — build 202611091543

- All **19** `tools/check_*.js` passed. The populated payload check includes a second saved patient and private rough drafts; neither enters the uploaded document. Empty forms cannot create an unwanted blank Google Doc.
- Actual browser tests checked the real unconfigured state: entered-answer preview works, creation is disabled with a truthful setup message, and no Google script is loaded. The review shows only entered answers; the document continues to include every blank form field/table.
- At 390/320 px iframe widths and desktop, document client/scroll widths matched (375/375, 305/305, 1085/1085). A renamed-tab overflow at 320 px was found and fixed. Review/back controls remain usable.
- A temporary, uncommitted simulated-provider page exercised declined access (0 writes), creation plus native metadata readback, same-answer receipt reuse, explicit second copy, and lost-response recovery. Recovery added a read and **no additional write**. No page-script errors were observed; extension metadata errors were excluded by source URL. The HTTP preview used an explicitly simulated fingerprint; Node checks used SHA-256. This is not real Google authorization or Drive-write evidence.
- The screenshot `audit/careplan-google-review.jpg` shows the real unconfigured flow with a clearly fictional entered answer. No mocked-success screenshot is used as proof of Google activation.
- Word generation and layout are unchanged by this integration. Google receives exactly the same document bytes; a new live website-originated conversion/layout inspection remains pending the real client ID.
- Shared BUILD, version and HTML nav cache stamps match. Exam 3 and Final mastery pages were regenerated. Unrelated HTML changes are cache stamps only.

## Primary references

- [Google token model](https://developers.google.com/identity/oauth2/web/guides/use-token-model)
- [OAuth JavaScript reference](https://developers.google.com/identity/oauth2/web/reference/js-reference)
- [Google client ID setup](https://developers.google.com/identity/oauth2/web/guides/get-google-api-clientid)
- [Drive upload and conversion](https://developers.google.com/workspace/drive/api/guides/manage-uploads)
- [Drive scopes](https://developers.google.com/workspace/drive/api/guides/api-specific-auth)
