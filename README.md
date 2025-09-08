System Design Document
Project: URL Shortener (Frontend)
Author: Kritika Trivedi
Date: 08-09-2025
1. Introduction
This React-based application shortens URLs, manages expiry, and shows usage
statistics. Data is handled fully on the client side.
2. Architecture & Tech Choices
• Framework: React.js (Vite setup)
• Styling: Material UI (for responsive UI)
• Routing: React Router DOM (for navigation + redirection)
• Storage: LocalStorage (to persist URLs and logs)
• Logging: Custom middleware (no console.log)
3. Data Model
URLs:
• originalUrl
• shortCode
• createdAt
• expiresAt
• clicks: [{ timestamp, source, location }]
Logs:
• event
• payload
• timestamp
4. Pages
1. 2. 3. Shortener Page → Create up to 5 short URLs, show results.
Statistics Page → Show all URLs + expiry + clicks data.
Redirect Page → Redirect shortCode → original URL, record click.
5. Assumptions
• App runs only at localhost:3000.
• No authentication.
• Validity defaults to 30 min if not given.
6. File Structure
Src/
components/ (UrlForm, UrlList, StatsTable, ErrorAlert)
pages/ (ShortenerPage, StatsPage, RedirectPage)
middleware/ (loggerMiddleware.js)
App.jsx, index.jsx
