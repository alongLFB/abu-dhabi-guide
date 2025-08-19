# Deployment Guide for Abu Dhabi Guide

This guide covers deploying the Abu Dhabi Guide application to Cloudflare's edge infrastructure.

## Prerequisites

1. **Cloudflare Account**: [Sign up](https://cloudflare.com) for a free account
2. **Domain**: Set up your domain with Cloudflare DNS
3. **Wrangler CLI**: Install the Cloudflare Workers CLI
   ```bash
   npm install -g wrangler
   ```
4. **Git Repository**: Code hosted on GitHub/GitLab

## Step 1: Project Setup

1. **Clone and Install**
   ```bash
   git clone https://github.com/your-username/abu-dhabi-guide.git
   cd abu-dhabi-guide
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your values:
   ```env
   NEXT_PUBLIC_SITE_URL=https://abudhabi.alonglfb.com
   WEATHER_API_KEY=your_openweather_api_key
   EXCHANGE_API_KEY=your_exchange_api_key
   CLOUDFLARE_ACCOUNT_ID=your_account_id
   CLOUDFLARE_API_TOKEN=your_api_token
   ```

## Step 2: Cloudflare Pages Setup

### Option A: Dashboard Deployment

1. **Connect Repository**
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project" → "Connect to Git"
   - Select your repository
   - Configure build settings:
     - Framework preset: `Next.js (Static HTML Export)`
     - Build command: `npm run build`
     - Build output directory: `out`

2. **Environment Variables**
   Add in Pages dashboard under Settings → Environment variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://abudhabi.alonglfb.com
   WEATHER_API_KEY=your_api_key
   EXCHANGE_API_KEY=your_api_key
   ```

### Option B: Wrangler CLI Deployment

1. **Authenticate**
   ```bash
   wrangler login
   ```

2. **Create Pages Project**
   ```bash
   wrangler pages project create abu-dhabi-guide
   ```

3. **Deploy**
   ```bash
   npm run build
   wrangler pages deploy out --project-name=abu-dhabi-guide
   ```

## Step 3: Cloudflare Workers API

1. **Deploy Worker**
   ```bash
   cd workers
   wrangler deploy
   ```

2. **Configure Routes**
   Update `wrangler.toml` with your domain:
   ```toml
   routes = [
     { pattern = "abudhabi.alonglfb.com/api/*", zone_name = "alonglfb.com" }
   ]
   ```

3. **Set Secrets**
   ```bash
   wrangler secret put WEATHER_API_KEY
   wrangler secret put EXCHANGE_API_KEY
   wrangler secret put EMAIL_API_KEY
   ```

## Step 4: Database Setup (Cloudflare D1)

1. **Create Database**
   ```bash
   wrangler d1 create abu-dhabi-guide
   ```

2. **Run Migrations**
   ```bash
   wrangler d1 execute abu-dhabi-guide --file=./migrations/001_initial_schema.sql
   ```

3. **Update wrangler.toml**
   ```toml
   [[d1_databases]]
   binding = "DB"
   database_name = "abu-dhabi-guide"
   database_id = "your-database-id"
   ```

## Step 5: KV Storage Setup

1. **Create KV Namespace**
   ```bash
   wrangler kv:namespace create "USER_DATA"
   wrangler kv:namespace create "USER_DATA" --preview
   ```

2. **Update wrangler.toml**
   ```toml
   [[kv_namespaces]]
   binding = "USER_DATA"
   id = "your-kv-namespace-id"
   preview_id = "your-preview-id"
   ```

## Step 6: Custom Domain Setup

1. **Add Custom Domain**
   - In Cloudflare Pages → Custom domains
   - Add: `abudhabi.alonglfb.com`
   - DNS will auto-configure if domain uses Cloudflare DNS

2. **SSL/TLS Configuration**
   - Go to SSL/TLS → Overview
   - Set encryption mode to "Full (strict)"
   - Enable "Always Use HTTPS"

## Step 7: Performance Optimization

1. **Enable Argo Smart Routing**
   ```bash
   # Via Cloudflare dashboard: Speed → Optimization → Argo
   ```

2. **Configure Caching Rules**
   ```bash
   # Rules → Page Rules
   # Pattern: abudhabi.alonglfb.com/*
   # Settings: Cache Level: Cache Everything, Browser TTL: 4 hours
   ```

3. **Enable Image Optimization**
   ```bash
   # Images → Image Resizing → Enable
   ```

## Step 8: Monitoring & Analytics

1. **Web Analytics**
   - Enable in Cloudflare Dashboard → Analytics → Web Analytics
   - Add tracking code to layout.tsx

2. **Performance Monitoring**
   - Set up alerts for 4xx/5xx errors
   - Monitor Core Web Vitals

## Step 9: CI/CD with GitHub Actions

1. **Set Repository Secrets**
   ```
   CLOUDFLARE_API_TOKEN
   CLOUDFLARE_ACCOUNT_ID
   CLOUDFLARE_ZONE_ID
   NEXT_PUBLIC_SITE_URL
   WEATHER_API_KEY
   EXCHANGE_API_KEY
   ```

2. **Workflow triggers automatic deployment on push to main**

## Step 10: Verification

1. **Test Deployment**
   ```bash
   # Check main site
   curl -I https://abudhabi.alonglfb.com
   
   # Check API endpoints
   curl https://abudhabi.alonglfb.com/api/weather
   curl https://abudhabi.alonglfb.com/api/currency?from=AED&to=USD&amount=100
   ```

2. **Performance Testing**
   - Run Lighthouse audit
   - Test mobile responsiveness
   - Verify PWA functionality

## Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Check build logs in Cloudflare Pages dashboard
   # Ensure all dependencies are in package.json
   # Verify environment variables are set
   ```

2. **API Errors**
   ```bash
   # Check Worker logs
   wrangler tail abu-dhabi-guide-api
   
   # Verify secrets are set
   wrangler secret list
   ```

3. **DNS Issues**
   ```bash
   # Verify DNS propagation
   dig abudhabi.alonglfb.com
   
   # Check Cloudflare DNS settings
   ```

### Performance Issues

1. **Slow Loading**
   - Enable Cloudflare caching
   - Optimize images
   - Check Core Web Vitals

2. **High TTFB**
   - Use Argo Smart Routing
   - Optimize Worker response times
   - Enable compression

## Maintenance

1. **Regular Updates**
   ```bash
   # Update dependencies monthly
   npm update
   
   # Deploy security patches immediately
   npm audit fix
   ```

2. **Monitoring**
   - Set up uptime monitoring
   - Monitor error rates
   - Track performance metrics

3. **Backups**
   - Regular D1 database backups
   - Export KV data periodically
   - Version control all configurations

## Cost Optimization

- **Free Tier Limits**:
  - Pages: 1 build per minute, 500 builds/month
  - Workers: 100,000 requests/day
  - KV: 1,000 writes, 100,000 reads/day
  - D1: 5M reads, 100K writes/day

- **Monitoring Usage**:
  ```bash
  # Check usage in dashboard
  # Set up billing alerts
  # Optimize for free tier limits
  ```

## Security Checklist

- [ ] HTTPS enabled and enforced
- [ ] API rate limiting configured
- [ ] Environment variables secured
- [ ] CORS headers properly configured
- [ ] Security headers enabled
- [ ] Regular dependency updates
- [ ] Access logs monitored

---

For detailed Cloudflare documentation, visit:
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Cloudflare D1](https://developers.cloudflare.com/d1/)
- [Cloudflare KV](https://developers.cloudflare.com/workers/runtime-apis/kv/)
