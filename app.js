document.getElementById('test-transaction').addEventListener('click', async () => {
    if (!currentUser) {
        alert('Please connect your Pi wallet first.');
        return;
    }
    
    try {
        console.log("🔄 Creating payment with backend verification...");
        
        // Payment data WITH backend callback
        const paymentData = {
            amount: 1,
            memo: "Ai Forge Test Transaction",
            metadata: { 
                app: "Ai Forge",
                feature: "ethical_ai_builder",
                test: true
            },
            // Backend callback for payment verification
            callback: {
                url: "https://api.minepi.com/v2/payments", // Pi's endpoint
                type: "POST"
            }
        };
        
        const payment = await Pi.createPayment(paymentData);
        console.log('✅ Payment created successfully:', payment);
        alert('🎉 Test transaction initiated! Please approve in your Pi Wallet.');
        
        // This should complete your deployment checklist!
        
    } catch (error) {
        console.error('❌ Payment failed:', error);
        
        // If backend fails, provide clear next steps
        if (error.message.includes("callback") || error.message.includes("backend")) {
            alert('Backend configuration needed. We can set up a simple Netlify function to complete this.');
            console.log('Backend setup required for payment verification');
        } else {
            alert('Transaction failed: ' + error.message);
        }
    }
});
