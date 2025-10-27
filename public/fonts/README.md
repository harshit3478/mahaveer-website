# Satoshi Font Setup

## Download Satoshi Font Files

Since Satoshi is a commercial font, you need to download the font files and place them in this directory.

### Steps:

1. **Download Satoshi** from: https://www.fontshare.com/fonts/satoshi
   - Or search for "Satoshi font download"

2. **Extract the font files** and copy these specific files to this folder:
   - `Satoshi-Regular.woff2`
   - `Satoshi-Medium.woff2`
   - `Satoshi-Bold.woff2`
   - `Satoshi-Black.woff2`

3. **File structure should be:**
   ```
   public/fonts/
   ├── Satoshi-Regular.woff2
   ├── Satoshi-Medium.woff2
   ├── Satoshi-Bold.woff2
   └── Satoshi-Black.woff2
   ```

## Usage in Components

Once the fonts are added, you can use them like this:

### Default (Satoshi as main font)
```tsx
<div className="font-sans">
  This uses Satoshi
</div>
```

### Bricolage Grotesque (for headings)
```tsx
<h1 className="font-bricolage">
  Beautiful Heading
</h1>
```

### Explicit Satoshi
```tsx
<p className="font-satoshi">
  Explicit Satoshi text
</p>
```

## Font Weights Available

- **400** - Regular
- **500** - Medium
- **700** - Bold
- **900** - Black

## Note

If you don't have access to Satoshi fonts yet, the site will fall back to Inter font which is already configured.

Bricolage Grotesque is already working as it's loaded from Google Fonts.
