// Ai Forge - Production-ready Pi Network Integration
// Debug logging
console.log("🚀 Ai Forge application initializing...");

// Global state
let currentUser = null;

// Initialize Pi SDK
try {
    Pi.init({ 
        version: "2.0", 
        sandbox: false
    });
    console.log("✅ Pi SDK initialized successfully");
} catch (error) {
    console.error("❌ Failed to initialize Pi SDK:", error);
}

// Connect wallet functionality
function connectPiWallet() {
    console.log("🔗 Connecting to Pi Wallet...");
    
    Pi.authenticate(['payments', 'username']).then(function(auth) {
        console.log("✅ Wallet connected successfully:", auth);
        currentUser = auth.user;
        
        // Update UI
        document.getElementById('auth-section').classList.add('hidden');
        document.getElementById('app-section').classList.remove('hidden');
        
        // Show success message
        const statusDiv = document.getElementById('status');
        statusDiv.innerHTML = `
            <div style="color: green; margin: 20px; padding: 15px; background: #e8f5e9; border-radius: 10px;">
                ✅ Wallet Connected!<br>
                <strong>User:</strong> ${auth.user.username || 'Anonymous'}
            </div>
        `;
        
    }).catch(function(error) {
        console.error("❌ Wallet connection failed:", error);
        alert("Wallet connection failed: " + error.message + "\n\nPlease make sure you're using the Pi Browser.");
    });
}

// Test payment functionality
function testDeploymentPayment() {
    if (!currentUser) {
        alert('Please connect your Pi wallet first.');
        return;
    }
    
    console.log("💳 Initiating test payment...");
    
    Pi.createPayment({
        amount: 0.01,
        memo: "Ai Forge Deployment Verification",
        metadata: { 
            app: "Ai Forge",
            feature: "ethical_ai_builder",
            test: true,
            deployment: "production_verification",
            timestamp: new Date().toISOString()
        }
    }, {
        onReadyForServerApproval: function(paymentId) {
            console.log("✅ Payment ready for approval:", paymentId);
            const statusDiv = document.getElementById('status');
            statusDiv.innerHTML += `
                <div style="color: orange; margin: 10px; padding: 15px; background: #fff3e0; border-radius: 10px;">
                    ⚡ Payment initiated!<br>
                    <strong>Payment ID:</strong> ${paymentId}<br>
                    Check your Pi Wallet to approve...
                </div>
            `;
        },
        onReadyForServerCompletion: function(paymentId, txid) {
            console.log("🎉 Payment completed successfully!", paymentId, txid);
            const statusDiv = document.getElementById('status');
            statusDiv.innerHTML += `
                <div style="color: green; margin: 10px; padding: 15px; background: #e8f5e9; border-radius: 10px; font-weight: bold;">
                    ✅ DEPLOYMENT COMPLETE!<br>
                    <strong>Transaction ID:</strong> ${txid}<br>
                    Your app is now fully live and verified!
                </div>
            `;
        },
        onCancel: function(paymentId) {
            console.log("❌ Payment cancelled by user:", paymentId);
            alert("Payment cancelled. You can try again to complete the deployment verification.");
        },
        onError: function(error) {
            console.error("❌ Payment error:", error);
            alert("Payment error: " + error.message);
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log("📄 DOM loaded, setting up event listeners...");
    
    // Connect wallet button
    const connectBtn = document.getElementById('connect-wallet');
    if (connectBtn) {
        connectBtn.addEventListener('click', connectPiWallet);
        console.log("✅ Connect wallet button ready");
    }
    
    // Test payment button
    const testPaymentBtn = document.getElementById('test-payment');
    if (testPaymentBtn) {
        testPaymentBtn.addEventListener('click', testDeploymentPayment);
        console.log("✅ Test payment button ready");
    }
    
    console.log("🎯 Ai Forge application ready!");
});
