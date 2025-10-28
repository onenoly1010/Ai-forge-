// Pi SDK Integration
const Pi = window.Pi;

// Initialize Pi SDK with proper error handling
if (Pi) {
    Pi.init({ version: "2.0" })
        .then(() => {
            console.log("✅ Pi SDK initialized successfully!");
            // Visual feedback - change button to green when ready
            const loginBtn = document.getElementById('login-btn');
            if (loginBtn) {
                loginBtn.style.backgroundColor = '#4CAF50';
                loginBtn.textContent = 'Connect Pi Wallet (Ready)';
            }
        })
        .catch(error => {
            console.error("❌ Pi SDK initialization failed:", error);
            const loginBtn = document.getElementById('login-btn');
            if (loginBtn) {
                loginBtn.style.backgroundColor = '#ff4444';
                loginBtn.textContent = 'SDK Error - Refresh Page';
            }
        });
} else {
    console.error("❌ Pi SDK not found - check script loading");
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.style.backgroundColor = '#ff9800';
        loginBtn.textContent = 'SDK Missing - Use Pi Browser';
    }
}

let currentUser = null;

document.getElementById('login-btn').addEventListener('click', async () => {
    try {
        // Double-check Pi SDK availability
        if (!window.Pi) {
            alert("❌ Pi SDK not loaded. Please use Pi Browser and refresh the page.");
            return;
        }
        
        console.log("🔄 Starting authentication...");
        
        // Authenticate with Pi Network
        const scopes = ['username', 'payments'];
        currentUser = await Pi.authenticate(scopes, onIncompletePaymentFound);
        
        // Show app section
        document.getElementById('auth-section').classList.add('hidden');
        document.getElementById('app-section').classList.remove('hidden');
        
        console.log('✅ User authenticated:', currentUser);
        alert('✅ Successfully connected to Pi Wallet!');
        
    } catch (error) {
        console.error('❌ Authentication failed:', error);
        alert('❌ Authentication failed: ' + (error.message || 'Unknown error - try refreshing'));
    }
});

document.getElementById('test-transaction').addEventListener('click', async () => {
    if (!currentUser) {
        alert('Please connect your Pi wallet first.');
        return;
    }
    
    try {
        // Create a test payment
        const paymentData = {
            amount: 1, // 1 π for testing
            memo: "Test transaction for Ai Forge",
            metadata: { 
                feature: "ai_app_builder",
                type: "test"
            }
        };
        
        const payment = await Pi.createPayment(paymentData);
        console.log('Payment created:', payment);
        alert('Test transaction initiated! Check your Pi wallet.');
        
    } catch (error) {
        console.error('Payment failed:', error);
        alert('Transaction failed. Please try again.');
    }
});

function onIncompletePaymentFound(payment) {
    console.log('Incomplete payment found:', payment);
    // Handle incomplete payment if needed
}

// Ethical AI Guidelines
const ethicalGuidelines = {
    transparency: "All AI models must disclose training data sources",
    fairness: "Algorithms must be tested for bias regularly",
    privacy: "User data must be encrypted and anonymized",
    accountability: "Clear ownership and responsibility structures"
};

console.log('Ai Forge - Ethical AI App Builder Loaded');
