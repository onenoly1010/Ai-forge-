# 🤖 Ai Forge - Ethical AI App Builder

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/onenoly1010/Ai-forge-/releases)
[![Pi Network](https://img.shields.io/badge/Pi%20Network-Integrated-purple.svg)](https://minepi.com/)

**Build, Audit & Deploy AI Applications on Pi Network**

Ai Forge is an ethical AI app builder designed for the Pi Network ecosystem. Create responsible AI applications with built-in compliance checking for transparency, fairness, privacy, and accountability.

🌐 **Live Demo**: [https://onenoly1010.github.io/Ai-forge-/](https://onenoly1010.github.io/Ai-forge-/)

## 🌟 Features

### 🔧 AI App Builder
Create custom AI applications with ethical guidelines built-in. Our template-based workflow makes it easy to develop responsible AI solutions.

### ✅ Ethical Audit System
Automated compliance checking ensures your applications meet strict ethical standards:
- **Transparency** - Clear documentation requirements
- **Fairness** - Bias detection and mitigation
- **Privacy** - Data protection and minimization
- **Accountability** - Clear ownership and responsibility

### 💰 Pi Network Integration
Seamless blockchain integration powered by Pi SDK v2.0:
- Wallet authentication and user identity
- Secure payment processing
- Production-ready for Pi Browser
- Real-time transaction feedback

### 🌐 Open Source & Community Driven
- MIT License for complete freedom
- Public repository for full transparency
- Community governance framework
- Welcoming contributions from developers

## ⚙️ Prerequisites

Before you begin, ensure you have:

- **Pi Browser** (for production use) - [Download here](https://minepi.com/pi-browser)
- **Modern web browser** (for development) - Chrome, Firefox, Safari, or Edge
- **Basic knowledge** of HTML, CSS, and JavaScript (for developers)
- **Pi Account** - [Sign up at Pi Network](https://minepi.com/)

## 🚀 Quick Start

### Try It Now
Visit our live demo: **[https://onenoly1010.github.io/Ai-forge-/](https://onenoly1010.github.io/Ai-forge-/)**

### Using in Pi Browser
1. Open the app in Pi Browser
2. Click "Connect Pi Wallet"
3. Approve authentication
4. Test deployment payment (0.01 Pi)
5. Start building ethical AI apps!

### For Developers

#### Local Setup

```bash
# Clone repository
git clone https://github.com/onenoly1010/Ai-forge-.git

# Navigate to directory
cd Ai-forge-

# Install dependencies (optional - for local server)
npm install

# Run local development server
npm start

# Or simply open index.html in your browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

#### Testing Locally
Since this is a static site, you can test it in two ways:

1. **Direct File Access**: Open `index.html` directly in your browser
2. **Local Server** (recommended): Run `npm start` to serve on `http://localhost:3000`

Note: Pi SDK features require the Pi Browser or sandbox mode for full functionality.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment options (GitHub Pages, Netlify, Vercel, etc.)

## 📋 What's Included

- ✅ Production-ready web application
- ✅ Pi Network SDK v2.0 integration
- ✅ Responsive UI for mobile and desktop
- ✅ Comprehensive ethical AI guidelines
- ✅ Complete documentation
- ✅ Deployment guides and checklists

## 📁 Project Structure

```
Ai-forge-/
├── index.html              # Main application page
├── app.js                  # Core application logic & Pi SDK integration
├── Style.css               # Styling and responsive design
├── package.json            # Project metadata and dependencies
├── README.md               # This file
├── LICENSE                 # MIT License
├── .gitignore              # Git ignore rules
├── railway.toml            # Railway deployment configuration
├── validation-key.txt      # Validation reference
├── DEPLOYMENT.md           # Deployment instructions
├── LAUNCH_MANIFEST.md      # Launch checklist and information
├── RELEASE_NOTES.md        # Version 1.0.0 release notes
├── RELEASE_GUIDE.md        # Guide for creating releases
├── PRODUCTION_VERIFICATION.md  # Production readiness checklist
├── RELEASE_PREPARATION_SUMMARY.md  # Release preparation details
├── ethical-ai-guidelines.md    # Ethical AI framework
└── wallet.*.svg            # Pi Network wallet icon
```

## 📸 Screenshots

### Main Interface
The app features a clean, modern interface with four key feature cards:
- 🔧 AI App Builder
- ✅ Ethical Audit  
- 💰 Pi Integration
- 🌐 Open Source

### Wallet Connection
Users can easily connect their Pi wallet with a single click, enabling secure authentication and payment processing.

### Payment Integration
Test the Pi Network payment flow with a demonstration 0.01 Pi transaction to see how blockchain payments work.

> 💡 **Tip**: Visit the [live demo](https://onenoly1010.github.io/Ai-forge-/) to see the app in action!

## 📚 Documentation

- **[LAUNCH_MANIFEST.md](LAUNCH_MANIFEST.md)** - Complete launch and operations guide
- **[RELEASE_NOTES.md](RELEASE_NOTES.md)** - v1.0.0 release details
- **[RELEASE_GUIDE.md](RELEASE_GUIDE.md)** - GitHub release creation guide
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment options and instructions
- **[PRODUCTION_VERIFICATION.md](PRODUCTION_VERIFICATION.md)** - Quality checklist
- **[ethical-ai-guidelines.md](ethical-ai-guidelines.md)** - Ethical AI framework

## 📖 Usage Guide

### Connecting Your Pi Wallet

1. **Launch the App**: Open Ai Forge in Pi Browser or visit the [live demo](https://onenoly1010.github.io/Ai-forge-/)
2. **Connect Wallet**: Click the "Connect Pi Wallet" button
3. **Authenticate**: Approve the authentication request in Pi Browser
4. **Success**: Once connected, you'll see your username and can access app features

### Testing Payment Integration

The app includes a test payment feature to demonstrate Pi Network integration:

1. **Ensure Wallet is Connected**: Complete the wallet connection first
2. **Click "Test Deployment Payment"**: This initiates a 0.01 Pi test transaction
3. **Approve Payment**: Confirm the payment in Pi Browser
4. **View Confirmation**: See the transaction confirmation message

### Building with Ai Forge

Ai Forge provides a foundation for building ethical AI applications. To create your own AI app:

1. **Fork/Clone**: Start with the Ai Forge codebase as a template
2. **Customize**: Modify `app.js` to add your AI functionality
3. **Apply Ethics**: Follow the guidelines in `ethical-ai-guidelines.md`
4. **Test**: Verify your app works and meets ethical standards
5. **Deploy**: Use the Pi Network integration for authentication and payments

## 🌐 Browser Compatibility

### Recommended Browsers

- **Pi Browser** (Required for production Pi Network features)
- **Chrome/Chromium** 90+ (Development & Testing)
- **Firefox** 88+ (Development & Testing)
- **Safari** 14+ (Development & Testing)
- **Edge** 90+ (Development & Testing)

### Mobile Support

- ✅ **Fully Responsive**: Optimized for mobile and tablet devices
- ✅ **Pi Browser Mobile**: Full functionality on mobile Pi Browser
- ✅ **Touch-Friendly**: All controls work with touch input

## 🧪 Testing

### Running Tests

This is a static web application without a traditional test suite. To verify functionality:

1. **Manual Testing**: Open the app and test each feature
2. **Pi SDK Integration**: Test wallet connection and payment in Pi Browser
3. **Responsive Design**: Check layout on different screen sizes
4. **Cross-Browser**: Verify in multiple browsers

### Test Checklist

- [ ] App loads without errors
- [ ] UI is responsive on mobile and desktop
- [ ] "Connect Pi Wallet" button functions
- [ ] Authentication flow works in Pi Browser
- [ ] Payment dialog appears and processes correctly
- [ ] Ethical AI guidelines are accessible
- [ ] All links and resources load properly

## 🎯 Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Integration**: Pi Network SDK v2.0
- **Hosting**: GitHub Pages with HTTPS
- **License**: MIT
- **Size**: < 100KB (lightweight and fast)

## ⚙️ Configuration

### Pi SDK Configuration

The Pi SDK is configured in `app.js` with the following settings:

```javascript
Pi.init({ 
    version: "2.0", 
    sandbox: false  // Set to true for testing without Pi Browser
});
```

### Environment Modes

- **Production Mode**: `sandbox: false` - Use in Pi Browser for real transactions
- **Sandbox Mode**: `sandbox: true` - Use for development and testing

### Customization

You can customize the app by editing:

- **index.html**: Modify page structure and content
- **Style.css**: Adjust colors, fonts, and layout
- **app.js**: Change functionality and Pi SDK integration
- **ethical-ai-guidelines.md**: Update your ethical AI standards

No build process required! Just edit and reload.

## 🔒 Security & Privacy

- ✅ HTTPS enforced for all connections
- ✅ No hardcoded credentials or API keys
- ✅ Secure payment processing via Pi SDK
- ✅ User data minimization
- ✅ Production-ready security practices

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Report Bugs**: Open an [issue](https://github.com/onenoly1010/Ai-forge-/issues) with detailed information
2. **Suggest Features**: Share your ideas in [discussions](https://github.com/onenoly1010/Ai-forge-/discussions)
3. **Submit Code**: Fork, code, test, and submit a pull request
4. **Improve Documentation**: Help make our docs clearer
5. **Spread the Word**: Share Ai Forge with other developers

Please read our [ethical-ai-guidelines.md](ethical-ai-guidelines.md) before contributing.

## 🔮 Roadmap

### v1.1.0 (3-6 months after v1.0.0)
- Enhanced AI templates
- More building tools
- Usage analytics (privacy-preserving)
- Tutorial videos

### v1.2.0 (6-9 months after v1.0.0)
- Developer API
- Advanced audit features
- Multi-language support
- Community showcase

### v2.0.0 (9-12 months after v1.0.0)
- AI app marketplace
- Mobile native app
- Advanced governance tools
- Enterprise features

## 📞 Support

Need help? We're here for you:

- **Issues**: [Report bugs and request features](https://github.com/onenoly1010/Ai-forge-/issues)
- **Discussions**: [Ask questions and share ideas](https://github.com/onenoly1010/Ai-forge-/discussions)
- **Documentation**: Read our comprehensive guides in the repository

## ❓ FAQ (Frequently Asked Questions)

### General Questions

**Q: What is Ai Forge?**  
A: Ai Forge is an ethical AI app builder specifically designed for the Pi Network ecosystem. It helps developers create, audit, and deploy AI applications that follow strict ethical guidelines.

**Q: Is Ai Forge free to use?**  
A: Yes! Ai Forge is open source under the MIT License and completely free to use, modify, and distribute.

**Q: Do I need a Pi Network account?**  
A: To use the full Pi Network integration features (wallet connection, payments), yes. However, you can explore the app and documentation without an account.

### Technical Questions

**Q: Can I use this outside of Pi Browser?**  
A: Yes, for development and testing. However, Pi Network features (wallet, payments) require Pi Browser or sandbox mode.

**Q: How do I deploy my own instance?**  
A: See our [DEPLOYMENT.md](DEPLOYMENT.md) guide. You can deploy to GitHub Pages, Netlify, Vercel, or any static hosting service.

**Q: What are the technical requirements?**  
A: Just a modern web browser! The app is built with standard HTML, CSS, and JavaScript. No build process or dependencies required for basic usage.

**Q: Is my data secure?**  
A: Yes! Ai Forge follows strict security practices:
- No data stored on servers
- HTTPS enforced
- No hardcoded credentials
- User data minimization
- Pi SDK handles all sensitive operations

### Development Questions

**Q: How can I contribute to Ai Forge?**  
A: We welcome contributions! See our [Contributing](#-contributing) section and [ethical-ai-guidelines.md](ethical-ai-guidelines.md).

**Q: Can I use this code in my own project?**  
A: Absolutely! It's MIT licensed. Feel free to fork, modify, and use it as you see fit.

**Q: Where can I find API documentation?**  
A: The main JavaScript functions are in `app.js`. Key functions include:
- `connectPiWallet()` - Authenticates user with Pi Network
- `testDeploymentPayment()` - Processes test payment transaction
- Additional documentation in code comments

## 🐛 Troubleshooting

### Common Issues

**Issue: "Pi SDK not found" error**  
**Solution**: Ensure you're running in Pi Browser or have included the Pi SDK script tag in your HTML.

**Issue: Wallet connection fails**  
**Solution**: 
- Verify you're using Pi Browser
- Check your internet connection
- Ensure your Pi account is active
- Try refreshing the page

**Issue: Payment doesn't process**  
**Solution**:
- Confirm wallet is connected first
- Check you have sufficient Pi balance
- Ensure you're not in an unsupported region
- Verify Pi Network is not undergoing maintenance

**Issue: App doesn't load or shows blank page**  
**Solution**:
- Check browser console for errors (F12)
- Ensure all files are present in the directory
- Try clearing browser cache
- Verify your browser is supported

**Issue: Responsive layout issues**  
**Solution**:
- Clear browser cache
- Check viewport meta tag is present
- Try a different browser
- Report the issue with your device/browser info

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Pi Network Team** - For the excellent SDK and ecosystem
- **Early Testers** - For valuable feedback and suggestions
- **Open Source Community** - For inspiration and best practices
- **Ethical AI Researchers** - For frameworks and guidelines

## 🎉 Latest Release

**v1.0.0** - Initial Public Release (December 2025)

See [RELEASE_NOTES.md](RELEASE_NOTES.md) for full release details.

---

**Built with ❤️ for the Pi Network community**

#AiForge #PiNetwork #EthicalAI #OpenSource #ResponsibleAI