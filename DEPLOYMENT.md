# 🚀 Ai Forge - Deployment Guide

## Quick Deploy Options

### Option 1: GitHub Pages (Recommended)
1. Go to repository Settings → Pages
2. Select branch: `main` (or your preferred branch)
3. Select folder: `/ (root)`
4. Click Save
5. Your site will be live at: `https://onenoly1010.github.io/Ai-forge-/`

### Option 2: Netlify
1. Connect your GitHub repository to Netlify
2. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
3. Deploy site
4. Site will be live with automatic HTTPS

### Option 3: Vercel
1. Import GitHub repository in Vercel
2. Framework preset: Other
3. Root directory: `./`
4. Build settings: (leave default)
5. Deploy

### Option 4: Custom Hosting
Upload these files to your web server:
- `index.html`
- `app.js`
- `Style.css`
- `ethical-ai-guidelines.md`
- `wallet.e0905940f11c201d04e655a9a3d1d737.svg`
- `validation-key.txt`

**Important**: Ensure HTTPS is enabled for Pi SDK to work!

## Testing Your Deployment

### 1. Access in Pi Browser
- Open Pi Browser on your device
- Navigate to your deployed URL
- Click "Connect Pi Wallet"
- Verify authentication works

### 2. Test Payment Flow
- After connecting wallet
- Click "Test Deployment Payment"
- Approve the 0.01 Pi transaction
- Verify success message appears

### 3. Verify Resources
- Click "View Ethical AI Guidelines"
- Ensure document opens correctly

## Troubleshooting

### Pi SDK Not Loading
- **Cause**: HTTP instead of HTTPS
- **Solution**: Enable HTTPS on your hosting

### Wallet Connection Fails
- **Cause**: Not using Pi Browser
- **Solution**: Use official Pi Browser app

### Payment Errors
- **Cause**: Insufficient Pi balance or network issues
- **Solution**: Ensure wallet has funds and network connection

## Post-Deployment Checklist

- [ ] Site accessible via HTTPS
- [ ] Pi SDK loads without errors (check browser console)
- [ ] Wallet connection works in Pi Browser
- [ ] Payment flow completes successfully
- [ ] All resources (CSS, JS, guidelines) load properly
- [ ] Responsive design works on mobile
- [ ] No console errors or warnings

## Next Steps

1. **Monitor Analytics**: Track user connections and payments
2. **Gather Feedback**: Listen to community for improvements
3. **Iterate Features**: Add new AI building capabilities
4. **Maintain Guidelines**: Keep ethical standards updated
5. **Community Engagement**: Build transparent development roadmap

## Support

For issues or questions:
- Check browser console for error messages
- Verify you're using Pi Browser for testing
- Ensure HTTPS is enabled
- Review ethical AI guidelines for compliance

---

**Deployment Status**: Ready for Production ✅
**Last Updated**: December 3, 2025
