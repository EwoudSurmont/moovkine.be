# SEO Improvements Completed

This document summarizes the SEO improvements made to moovkine.be and provides recommendations for further optimization.

## ✅ Completed Improvements

### 1. Sitemap Integration
- **Installed**: `@astrojs/sitemap` package
- **Configured**: Added to `astro.config.mjs`
- **Result**: Sitemap will be automatically generated at `/sitemap-index.xml` on build

### 2. robots.txt
- **Created**: `/public/robots.txt`
- **Content**: Allows all search engines to crawl the site
- **Sitemap Reference**: Points to sitemap-index.xml

### 3. Enhanced Meta Tags
- **Updated**: `src/layouts/Layout.astro` with comprehensive meta tags
- **Added**:
  - Complete Open Graph tags (og:site_name, og:image:width, og:image:height)
  - Complete Twitter Card tags (twitter:title, twitter:description, twitter:image)
  - Keywords meta tag support
  - Robots meta tag support (noindex, nofollow)

### 4. SEO Utility System
- **Created**: `src/types/seo.ts` - TypeScript interfaces for SEO props
- **Created**: `src/utils/seo.ts` - Centralized SEO configuration and helper functions
- **Benefits**:
  - Easy to update site-wide SEO settings
  - Type-safe SEO props
  - Consistent metadata across all pages

### 5. LocalBusiness Structured Data
- **Created**: `src/components/LocalBusinessSchema.astro`
- **Includes**:
  - Organization information
  - Address and contact details
  - Geo coordinates
  - Opening hours
  - Service catalog
- **Added to**: Layout.astro (included on all pages)
- **Benefits**: Better local search visibility, Google Maps integration

### 6. Page-Specific SEO Metadata
Updated all pages with unique, optimized metadata:

#### Home Page (`/`)
- **Title**: "MOOV Kinesitherapie | Home"
- **Description**: Focus on multidisciplinary practice
- **Keywords**: kinesitherapie Kortemark, manuele therapie, sportrevalidatie, etc.

#### Team Page (`/team/`)
- **Title**: "MOOV Kinesitherapie | Team"
- **Description**: Team member names and specializations
- **Keywords**: Team member names, kinesitherapeut Kortemark

#### Specialisaties Page (`/specialisaties/`)
- **Title**: "MOOV Kinesitherapie | Specialisaties"
- **Description**: Overview of specialized treatments
- **Keywords**: manuele therapie, dry needling, myofasciale therapie, etc.

#### Praktische Info Page (`/praktische-info/`)
- **Title**: "MOOV Kinesitherapie | Praktische Info"
- **Description**: Practical information about appointments, pricing, parking
- **Keywords**: afspraak kinesitherapie, tarieven, gedeconventioneerd

---

## 📋 TODO: Manual Tasks Required

### 1. Create Open Graph Image (CRITICAL)
**Current Status**: The OG image path is set to `/og-image.jpg` but this file doesn't exist.

**Action Required**:
1. Create an OG image with these specifications:
   - **Dimensions**: 1200 x 630 pixels
   - **Format**: JPG or PNG
   - **File Size**: Under 100KB (optimize for fast loading)
   - **Content Suggestions**:
     - MOOV logo
     - Practice name: "MOOV Kinesitherapie"
     - Location: "Kortemark"
     - Optional: Key services icons or images
   - **Background**: Use brand color (#005D5F) or complementary colors

2. Save the file as `/public/og-image.jpg`

**Tools to Create OG Images**:
- Canva (https://www.canva.com) - Free templates
- Figma (https://www.figma.com) - Design tool
- Adobe Express (https://www.adobe.com/express) - Quick graphics

---

### 2. Image Optimization (HIGH PRIORITY)

**Current Issues**:
The following images are too large and need optimization:

| Image | Current Size | Recommended Size | Action |
|-------|--------------|------------------|---------|
| `/public/img/home.jpg` | 6.1 MB | < 300 KB | Compress & convert to WebP |
| `/public/img/home_intro.jpg` | 687 KB | < 200 KB | Compress & convert to WebP |
| `/public/img/overmij.jpg` | 595 KB | < 200 KB | Compress & convert to WebP |
| Other images | Various | < 200 KB each | Review and optimize |

**Optimization Steps**:

1. **Use Image Compression Tools**:
   - TinyPNG (https://tinypng.com) - Free, excellent compression
   - Squoosh (https://squoosh.app) - Google's web-based tool
   - ImageOptim (Mac) - Desktop app for batch compression

2. **Convert to Modern Formats**:
   - Convert JPG → WebP (better compression, browser support is excellent)
   - Keep original JPG as fallback for older browsers

3. **Implement Lazy Loading**:
   Add `loading="lazy"` attribute to images that are below the fold:
   ```astro
   <Image
     src="/img/example.jpg"
     alt="Description"
     width={640}
     height={480}
     loading="lazy"
   />
   ```

4. **Use Responsive Images**:
   Astro's Image component already handles this, but ensure you're using it everywhere instead of plain `<img>` tags.

**Target Metrics**:
- All images < 200 KB
- Total page size < 1 MB
- Largest Contentful Paint (LCP) < 2.5 seconds

---

### 3. Update LocalBusiness Schema (Optional)

**Current**: The schema in `LocalBusinessSchema.astro` uses placeholder data.

**Review and Update**:
1. **Geo Coordinates**: Verify latitude/longitude are correct
   - Current: 51.0286, 3.0362
   - Verify at: https://www.latlong.net/

2. **Opening Hours**: Update if they differ from Mon-Fri 8:00-20:00

3. **Social Media**: Add social media profiles to `sameAs` array if available:
   ```javascript
   sameAs: [
     "https://www.facebook.com/moovkine",
     "https://www.instagram.com/moovkine",
   ]
   ```

4. **Price Range**: Currently set to "€€", update if needed

---

## 🎯 SEO Performance Testing

After deploying these changes, test your site with:

1. **Google Search Console**
   - Submit sitemap: https://search.google.com/search-console
   - Monitor indexing status
   - Check for crawl errors

2. **Google PageSpeed Insights**
   - Test: https://pagespeed.web.dev/
   - Target scores: 90+ for Performance, Accessibility, Best Practices, SEO

3. **Rich Results Test**
   - Validate structured data: https://search.google.com/test/rich-results
   - Should show LocalBusiness markup

4. **Mobile-Friendly Test**
   - Verify: https://search.google.com/test/mobile-friendly

5. **Schema Validator**
   - Validate JSON-LD: https://validator.schema.org/

---

## 📊 Expected SEO Improvements

After implementing these changes, you should see:

1. **Better Search Rankings**:
   - Improved local search visibility (Google Maps, local pack)
   - Better keyword targeting with unique page descriptions
   - Enhanced click-through rates with rich snippets

2. **Faster Indexing**:
   - Sitemap helps search engines discover all pages
   - robots.txt provides clear crawl instructions

3. **Enhanced Search Appearance**:
   - Rich snippets with LocalBusiness data
   - Better social media sharing with OG images
   - Professional preview cards on Facebook/Twitter

4. **Performance Gains** (after image optimization):
   - Faster page loads
   - Better Core Web Vitals scores
   - Improved mobile experience

---

## 🔄 Ongoing SEO Maintenance

**Monthly Tasks**:
- Review Google Search Console for crawl errors
- Monitor keyword rankings
- Update content to keep it fresh
- Add new pages to improve site depth

**Quarterly Tasks**:
- Review and update meta descriptions
- Check for broken links
- Update structured data if services change
- Analyze competitor SEO strategies

---

## 📞 Support

If you need help with any of these tasks, feel free to reach out or consult:
- Google Search Central: https://developers.google.com/search
- Astro SEO Guide: https://docs.astro.build/en/guides/integrations-guide/sitemap/
