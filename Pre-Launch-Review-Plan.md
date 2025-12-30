# Pre-Launch Website Review Plan

## 1. Code Quality & TypeScript

### Type Safety
- [ ] Check all components for proper TypeScript types
- [ ] Verify no `any` types are used
- [ ] Check interface definitions for all props

### Code Standards
- [ ] Run ESLint and fix all warnings/errors
- [ ] Check for unused imports/variables
- [ ] Verify consistent code formatting
- [ ] Check for console.log statements (remove for production)
- [ ] Review error handling patterns

### Component Structure
- [ ] Verify all components are properly exported
- [ ] Check for prop drilling issues
- [ ] Review component reusability

## 2. UI/UX Review

### Visual Consistency
- [ ] Verify color palette consistency (black, gold, white) across all pages
- [ ] Check typography scale (Manrope font) is applied consistently
- [ ] Review spacing/padding consistency
- [ ] Check button styles are uniform
- [ ] Verify hover states work on all interactive elements

### Layout Issues
- [ ] Check for layout shifts (CLS)
- [ ] Verify all sections have proper spacing
- [ ] Check for overflow issues on mobile
- [ ] Review card/container alignment
- [ ] Verify footer layout on all pages

### Interactive Elements
- [ ] Test all buttons and links
- [ ] Verify hover effects work
- [ ] Check ContactModal open/close functionality (UI only - form implementation deferred)
- [ ] Test mobile menu functionality
- [ ] Verify testimonial carousel navigation

## 3. Mobile Responsiveness

### Breakpoint Testing
- [ ] Test at 320px (smallest mobile)
- [ ] Test at 375px (iPhone SE)
- [ ] Test at 768px (tablet)
- [ ] Test at 1024px (desktop)
- [ ] Test at 1920px (large desktop)

### Mobile-Specific Issues
- [ ] Verify navbar is usable on mobile
- [ ] Check ContactModal scrolling works correctly (UI only)
- [ ] Verify touch targets are adequate (min 44x44px)
- [ ] Check text is readable without zooming
- [ ] Test image loading on slow connections

### Components to Test
- [ ] Navbar mobile menu
- [ ] Hero section CTAs
- [ ] Service cards grid
- [ ] ContactModal (UI/UX only)
- [ ] Footer layout
- [ ] Blog post cards

## 4. Performance Optimization

### Image Optimization
- [ ] Check all images use Next.js Image component (or verify img tags are optimized)
- [ ] Verify image file sizes are reasonable
- [ ] Check for missing alt text on images
- [ ] Review image loading strategy (lazy loading)
- [ ] Check `/public/completedworks/` images are optimized

### Code Splitting
- [ ] Verify dynamic imports where appropriate
- [ ] Check bundle size
- [ ] Review Framer Motion usage (ensure tree-shaking)

### Loading Performance
- [ ] Check for blocking resources
- [ ] Verify font loading strategy
- [ ] Review CSS delivery
- [ ] Check for render-blocking scripts

## 5. Accessibility (a11y)

### Semantic HTML
- [ ] Verify proper heading hierarchy (h1 → h2 → h3)
- [ ] Check for proper landmark elements (nav, main, footer)
- [ ] Check for proper button vs link usage

### ARIA & Screen Readers
- [ ] Add aria-labels where needed
- [ ] Verify ContactModal has proper aria attributes (UI only)
- [ ] Check carousel has proper ARIA labels
- [ ] Check focus management in modal

### Keyboard Navigation
- [ ] Test tab order is logical
- [ ] Verify focus indicators are visible
- [ ] Check ContactModal can be closed with Escape key
- [ ] Test carousel navigation with keyboard
- [ ] Verify skip links if needed

### Color Contrast
- [ ] Check text contrast ratios (WCAG AA minimum)
- [ ] Verify gold text on white background
- [ ] Check white text on black background
- [ ] Test gray text contrast

## 6. SEO & Metadata

### Page Metadata
- [ ] Verify all pages have unique titles
- [ ] Check meta descriptions are present and unique
- [ ] Review Open Graph tags
- [ ] Check Twitter Card tags
- [ ] Verify canonical URLs

### Content SEO
- [ ] Check heading structure for SEO
- [ ] Verify alt text on all images
- [ ] Review internal linking structure
- [ ] Check for broken internal links
- [ ] Verify sitemap.xml (if exists)

### Files to Review
- [ ] `src/app/layout.tsx` - root metadata
- [ ] `src/app/page.tsx` - homepage metadata
- [ ] `src/app/services/page.tsx` - services metadata
- [ ] `src/app/about/page.tsx` - about metadata
- [ ] `src/app/contact/page.tsx` - contact metadata
- [ ] `src/app/blog/page.tsx` - blog metadata
- [ ] `src/app/blog/[id]/page.tsx` - dynamic blog metadata

## 7. Broken Links & Missing Pages

### Internal Links
- [ ] Test all navigation links
- [ ] Check footer links (especially `/careers`, `/privacy`, `/faq`)
- [ ] Verify service card links
- [ ] Check blog post links
- [ ] Test CTA button links

### External Links
- [ ] Verify Google Reviews link works
- [ ] Check social media links (if they point to real accounts)
- [ ] Test email/phone links (`tel:`, `mailto:`)

### Missing Pages
- [ ] Check if `/careers` page exists (linked in footer)
- [ ] Check if `/privacy` page exists (linked in footer)
- [ ] Check if `/faq` page exists (linked in footer)
- [ ] Decide: create pages or remove links

## 8. Content Accuracy

### Text Content
- [ ] Verify company name "Elevate Assured" is consistent
- [ ] Check email: `will@elevateassured.co.uk`
- [ ] Verify phone: `07918 291605`
- [ ] Check location: "Dorset and Hampshire"
- [ ] Review pricing: "£99 assessment" is consistent
- [ ] Check for typos/grammar errors

### Images
- [ ] Verify all images load correctly
- [ ] Check image alt text is descriptive
- [ ] Verify completed work images are appropriate
- [ ] Check logo files exist and render correctly

## 9. Security

### Input Validation
- [ ] Review any existing input sanitization
- [ ] Check for XSS vulnerabilities
- [ ] Verify no sensitive data in client-side code

### Dependencies
- [ ] Run `npm audit` to check for vulnerabilities
- [ ] Review package.json for outdated packages
- [ ] Check for known security issues in dependencies

## 10. Browser Compatibility

### Testing
- [ ] Test in Chrome (latest)
- [ ] Test in Firefox (latest)
- [ ] Test in Safari (latest)
- [ ] Test in Edge (latest)
- [ ] Check mobile Safari (iOS)
- [ ] Check mobile Chrome (Android)

### CSS Compatibility
- [ ] Verify Tailwind CSS v4 works in all browsers
- [ ] Check for CSS Grid/Flexbox issues
- [ ] Verify custom properties (CSS variables) work
- [ ] Test `clamp()` function support

## 11. Production Build

### Build Process
- [ ] Run `npm run build` successfully
- [ ] Check for build warnings
- [ ] Verify no TypeScript errors
- [ ] Check bundle size is reasonable
- [ ] Review build output

### Environment
- [ ] Check `.env` files are not committed
- [ ] Verify production environment variables
- [ ] Review Next.js config for production

### Deployment Readiness
- [ ] Verify Vercel deployment config (if applicable)
- [ ] Check for deployment-specific issues
- [ ] Review error pages (404, 500)
- [ ] Verify analytics/tracking (if applicable)

## 12. Error Handling

### Error Boundaries
- [ ] Check for React error boundaries
- [ ] Verify error pages exist
- [ ] Test error scenarios (network failures, etc.)

### User Feedback
- [ ] Verify error messages are user-friendly
- [ ] Check loading states
- [ ] Review empty states
- [ ] Test edge cases (empty blog, no services, etc.)

## 13. Animation & Interactions

### Framer Motion
- [ ] Verify animations don't cause performance issues
- [ ] Check for animation on reduced motion preference
- [ ] Test animation timing
- [ ] Verify no layout shifts from animations

### User Experience
- [ ] Check modal animations are smooth
- [ ] Verify carousel transitions work
- [ ] Test hover effects don't cause jank
- [ ] Review scroll animations

## 14. Final Checklist

### Pre-Launch
- [ ] All tests pass
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Build succeeds
- [ ] All links work
- [ ] Mobile experience is polished
- [ ] Content is accurate
- [ ] No placeholder text remains

### Documentation
- [ ] README is up to date (if needed)
- [ ] Code comments where necessary
- [ ] Environment setup documented

## Files to Review

### Pages
- `src/app/page.tsx` - Homepage
- `src/app/services/page.tsx` - Services page
- `src/app/about/page.tsx` - About page
- `src/app/contact/page.tsx` - Contact page
- `src/app/blog/page.tsx` - Blog index
- `src/app/blog/[id]/page.tsx` - Blog post page
- `src/app/layout.tsx` - Root layout

### Components
- `src/components/Navbar.tsx` - Navigation
- `src/components/Hero.tsx` - Hero section
- `src/components/ServiceCard.tsx` - Service cards
- `src/components/ContactModal.tsx` - Contact modal (UI/UX only)
- `src/components/TestimonialCarousel.tsx` - Testimonials
- `src/components/Footer.tsx` - Footer
- `src/components/Logo.tsx` - Logo component

### Config
- `src/app/globals.css` - Global styles
- `next.config.ts` - Next.js config
- `package.json` - Dependencies

## Notes

- **Contact Form**: Form submission, validation, and API route testing have been deferred. Only UI/UX aspects of the ContactModal should be reviewed.
- **API Routes**: `src/app/api/contact/route.ts` is not included in this review as form implementation is deferred.

