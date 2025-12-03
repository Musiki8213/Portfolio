# How to Generate Project Preview Images

I've created an HTML file with mockups for all 4 projects. Here are 3 ways to create the images:

## Method 1: Screenshot the HTML File (Easiest)

1. Open `public/generate-project-images.html` in your browser
2. Open browser DevTools (F12)
3. Set viewport to 1920x1080:
   - Click device toolbar icon
   - Set custom size: 1920 x 1080
4. Take screenshots of each project section
5. Save them in `public` folder with these names:
   - `project-link-vault.jpg`
   - `project-safemzansi.jpg`
   - `project-weather-app.jpg`
   - `project-shopmate.jpg`

## Method 2: Use Online Mockup Generators

### Recommended Tools:
- **Figma** (Free): Create UI mockups and export as images
- **Canva** (Free): Use app mockup templates
- **Mockup World** (Free): Device mockups
- **Smartmockups** (Paid): Professional app screenshots

### Quick Canva Method:
1. Go to canva.com
2. Search "app mockup" or "portfolio project"
3. Choose 16:9 landscape template
4. Customize with your project details
5. Download as JPG (1920x1080)

## Method 3: Use AI Image Generators

### Prompt Examples:

**Link Vault:**
"Modern link management app interface, clean design, showing links in cards, search bar, blue and purple gradient background, professional UI mockup, 16:9"

**SafeMzansi:**
"Community safety mobile app interface, map view with location markers, safety alerts panel, modern design, red and pink gradient, professional UI, 16:9"

**Weather App:**
"Weather dashboard app interface, showing temperature, forecast cards, city name, blue sky gradient background, clean modern design, 16:9"

**ShopMate:**
"Shopping list app interface, items with checkboxes, clean white cards, organized list, yellow and pink gradient background, modern UI, 16:9"

### AI Tools:
- **Midjourney**: `/imagine [prompt] --ar 16:9`
- **DALL-E**: Use the prompts above
- **Stable Diffusion**: Generate with 16:9 aspect ratio

## Image Requirements Checklist

- ✅ 16:9 aspect ratio (1920x1080px recommended)
- ✅ JPG or PNG format
- ✅ Under 500KB file size (optimize if needed)
- ✅ High quality, portfolio-ready
- ✅ Saved in `public` folder with exact filenames

## Quick Test

After adding images, your portfolio will automatically display them. The component includes a gradient fallback if images are missing.

