// Ai Forge - Production-ready Pi Network Integration

// Global state
let currentUser = null;

// Environment-based logging
const DEBUG = false; // Set to true for development
function debugLog(...args) {
    if (DEBUG) console.log(...args);
}

// Initialize Pi SDK
if (typeof window.Pi !== 'undefined') {
    try {
        Pi.init({ 
            version: "2.0", 
            sandbox: false
        });
        debugLog("✅ Pi SDK initialized successfully");
    } catch (error) {
        console.error("❌ Failed to initialize Pi SDK:", error);
    }
} else {
    console.error("❌ Pi SDK not available. Please ensure you're running in Pi Browser or have included the Pi SDK script.");
}

// Helper function to create status message safely
function createStatusMessage(message, type, details) {
    const statusDiv = document.getElementById('status');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'status-message status-' + type;
    
    const messageText = document.createElement('div');
    messageText.textContent = message;
    messageDiv.appendChild(messageText);
    
    if (details) {
        const detailsText = document.createElement('strong');
        detailsText.textContent = details;
        messageDiv.appendChild(detailsText);
    }
    
    statusDiv.appendChild(messageDiv);
}

// Connect wallet functionality
function connectPiWallet() {
    debugLog("🔗 Connecting to Pi Wallet...");
    
    if (typeof window.Pi === 'undefined') {
        createStatusMessage('❌ Pi SDK not available. Please use Pi Browser.', 'error');
        return;
    }
    
    Pi.authenticate(['payments', 'username']).then(function(auth) {
        debugLog("✅ Wallet connected successfully:", auth);
        
        // Validate authentication response
        if (!auth || !auth.user) {
            throw new Error('Authentication failed: Unable to retrieve user information from Pi Network. Please try again or contact support if the issue persists.');
        }
        
        currentUser = auth.user;
        
        // Update UI
        document.getElementById('auth-section').classList.add('hidden');
        document.getElementById('app-section').classList.remove('hidden');
        
        // Show success message safely
        const statusDiv = document.getElementById('status');
        statusDiv.innerHTML = ''; // Clear previous messages
        createStatusMessage('✅ Wallet Connected!', 'success', 'User: ' + (auth.user.username || 'Anonymous'));
        
    }).catch(function(error) {
        console.error("❌ Wallet connection failed:", error);
        createStatusMessage('❌ Wallet connection failed: ' + (error.message || 'Unknown error'), 'error', 'Please make sure you\'re using the Pi Browser.');
    });
}

// Test payment functionality
function testDeploymentPayment() {
    // Validate user is connected
    if (!currentUser || !currentUser.username) {
        createStatusMessage('❌ Please connect your Pi wallet first.', 'error');
        return;
    }
    
    // Validate Pi SDK is available
    if (typeof window.Pi === 'undefined') {
        createStatusMessage('❌ Pi SDK not available.', 'error');
        return;
    }
    
    debugLog("💳 Initiating test payment...");
    
    // Payment configuration
    const PAYMENT_AMOUNT = 0.01;
    const PAYMENT_MEMO = "Ai Forge Deployment Verification";
    
    Pi.createPayment({
        amount: PAYMENT_AMOUNT,
        memo: PAYMENT_MEMO,
        metadata: { 
            app: "Ai Forge",
            feature: "ethical_ai_builder",
            test: true,
            deployment: "production_verification",
            timestamp: new Date().toISOString()
        }
    }, {
        onReadyForServerApproval: function(paymentId) {
            debugLog("✅ Payment ready for approval:", paymentId);
            createStatusMessage('⚡ Payment initiated!', 'warning', 'Payment ID: ' + paymentId + ' - Check your Pi Wallet to approve...');
        },
        onReadyForServerCompletion: function(paymentId, txid) {
            debugLog("🎉 Payment completed successfully!", paymentId, txid);
            createStatusMessage('✅ DEPLOYMENT COMPLETE!', 'success', 'Transaction ID: ' + txid + ' - Your app is now fully live and verified!');
        },
        onCancel: function(paymentId) {
            debugLog("❌ Payment cancelled by user:", paymentId);
            createStatusMessage('Payment cancelled. You can try again to complete the deployment verification.', 'warning');
        },
        onError: function(error) {
            console.error("❌ Payment error:", error);
            createStatusMessage('❌ Payment error: ' + (error.message || 'Unknown error'), 'error');
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    debugLog("📄 DOM loaded, setting up event listeners...");
    
    // Connect wallet button
    const connectBtn = document.getElementById('connect-wallet');
    if (connectBtn) {
        connectBtn.addEventListener('click', connectPiWallet);
        debugLog("✅ Connect wallet button ready");
    } else {
        console.error("❌ Connect wallet button not found");
    }
    
    // Test payment button
    const testPaymentBtn = document.getElementById('test-payment');
    if (testPaymentBtn) {
        testPaymentBtn.addEventListener('click', testDeploymentPayment);
        debugLog("✅ Test payment button ready");
    } else {
        console.error("❌ Test payment button not found");
    }
    
    debugLog("🎯 Ai Forge application ready!");
});
