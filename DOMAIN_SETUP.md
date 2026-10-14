# Connect dynamicair.com.np

Public website: https://dynamic-air-nepal.thakurrn132.chatgpt.site

The custom domain has been registered with this website, but it is **pending DNS validation**. No changes have been made in your domain registrar or DNS account.

Choose **one** hosting option.

## Option A: Point the domain to the published website

In the DNS provider that manages dynamicair.com.np, use these exact records:

| Type | Host / name | Value |
| --- | --- | --- |
| A | @ | 162.159.143.30 |
| A | @ | 172.66.3.26 |
| TXT | _openai-site-verification | openai-site-verification=PfYkDom_bYPUi6aysNgeJh4QBqjoZ5ASkRuG_wCaAdw |
| TXT | _cf-custom-hostname | 74784b32-c5ac-4fcc-a998-3df6096d2086 |

Use the host names above if your provider automatically appends dynamicair.com.np. If it requires full hostnames, use `_openai-site-verification.dynamicair.com.np` and `_cf-custom-hostname.dynamicair.com.np` for the TXT entries.

Update the domain's website A records to the targets above. Preserve unrelated records, including existing email MX and TXT records. Use your provider's default TTL. Domain and HTTPS activation follow successful DNS validation. Ask to recheck the domain connection after adding the records.

The provided connection is for `dynamicair.com.np`. A separate custom-domain connection would be needed for `www.dynamicair.com.np`.

## Option B: Use your existing cPanel hosting

If you prefer to host with your current provider, **do not apply Option A's A records**. Keep the domain pointed to your current hosting and upload the contents of `upload-ready/` to the document root for dynamicair.com.np. Back up an existing site first.

The upload folder contains a fully built static Next.js website. It requires no Node.js server, backend, database or login. `_next/` and `images/` must stay beside `index.html`. The included `.htaccess` is optional Apache configuration for the index, 404 page and basic response headers.

For source edits, use `frontend/`, run `npm ci` then `npm run build`, and upload the contents of the resulting `out/` folder.

## Configured business details

In `frontend/lib/site-content.ts`, verified contact details are configured:
- Phone: `9851123725` / `9715023725`
- WhatsApp: `9715023725` (+977 9715023725)
- Email: `sdynamicair@gmail.com`
- Brand: Dynamic Air Solutions Pvt. Ltd.
- Core Solutions: Climix Q Series Cross Flow Air Curtains, Smart HEPA Air Purifiers, Inverter Split ACs, VRF Systems (4 HP Mini to Commercial HVAC), Modular Cold Rooms
- Social Media: Facebook, Instagram, TikTok

Visitors can directly call, chat on WhatsApp, send emails, or compose and download quotation enquiries.
