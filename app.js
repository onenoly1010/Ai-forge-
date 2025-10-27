// Pi SDK Integration
const Pi = window.Pi;

// Initialize Pi SDK
if (Pi) {
    Pi.init({ version: "2.0" });
}

let currentUser = null;

document.getElementById('login-btn').addEventListener('click', async () => {
    try {
        // Authenticate with Pi Network
        const scopes = ['username', 'payments'];
        currentUser = await Pi.authenticate(scopes, onIncompletePaymentFound);
        
        // Show app section
        document.getElementById('auth-section').classList.add('hidden');
        document.getElementById('app-section').classList.remove('hidden');
        
        console.log('User authenticated:', currentUser);
        
    } catch (error) {
        console.error('Authentication failed:', error);
        alert('Authentication failed. Please try again.');
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