// Typing animation for hero text
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    const texts = [
        'viral UGC scripts',
        'production-ready ads',
        'engaging content',
        'viral hooks'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next text
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    // Start typing animation after a short delay
    setTimeout(typeText, 1000);
}

// Modal functions
function openWaitlistModal() {
    document.getElementById('waitlistModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeWaitlistModal() {
    document.getElementById('waitlistModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openSampleModal() {
    document.getElementById('sampleModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSampleModal() {
    document.getElementById('sampleModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Form submission
function submitWaitlist(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Simulate form submission
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Joining...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.textContent = '✓ Joined!';
        submitBtn.style.background = '#27ca3f';
        
        // Show success message
        const successMsg = document.createElement('p');
        successMsg.textContent = 'Welcome to the waitlist! We\'ll notify you when Hooksmith is ready.';
        successMsg.style.color = '#27ca3f';
        successMsg.style.textAlign = 'center';
        successMsg.style.marginTop = '16px';
        successMsg.style.fontWeight = '600';
        
        event.target.appendChild(successMsg);
        
        // Close modal after 3 seconds
        setTimeout(() => {
            closeWaitlistModal();
            // Reset form
            event.target.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            successMsg.remove();
        }, 3000);
    }, 1500);
}

// Close modals when clicking outside
window.onclick = function(event) {
    const waitlistModal = document.getElementById('waitlistModal');
    const sampleModal = document.getElementById('sampleModal');
    
    if (event.target === waitlistModal) {
        closeWaitlistModal();
    }
    if (event.target === sampleModal) {
        closeSampleModal();
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.step, .diff-card, .stat-card, .testimonial');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add floating animation to hero visual
function initFloatingAnimation() {
    const scriptPreview = document.querySelector('.script-preview');
    if (scriptPreview) {
        let floatDirection = 1;
        setInterval(() => {
            const currentTransform = scriptPreview.style.transform || 'translateY(0px)';
            const currentY = parseFloat(currentTransform.match(/translateY\(([^)]+)\)/)?.[1] || 0);
            const newY = currentY + (floatDirection * 2);
            
            if (newY > 10) {
                floatDirection = -1;
            } else if (newY < -10) {
                floatDirection = 1;
            }
            
            scriptPreview.style.transform = `translateY(${newY}px)`;
        }, 100);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTypingAnimation();
    initScrollAnimations();
    initFloatingAnimation();
    
    // Add some interactive hover effects
    const cards = document.querySelectorAll('.step, .diff-card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click tracking for analytics (placeholder)
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('CTA clicked:', this.textContent);
            // Here you would typically send analytics data
        });
    });
});

// Add keyboard navigation for modals
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeWaitlistModal();
        closeSampleModal();
    }
});

// Add form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Enhanced form submission with validation
function submitWaitlist(event) {
    event.preventDefault();
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (!validateEmail(email)) {
        emailInput.style.borderColor = '#ff5f56';
        emailInput.placeholder = 'Please enter a valid email address';
        emailInput.value = '';
        return;
    }
    
    // Reset any previous error styling
    emailInput.style.borderColor = '#e2e8f0';
    emailInput.placeholder = 'Enter your email address';
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Joining...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.textContent = '✓ Joined!';
        submitBtn.style.background = '#27ca3f';
        
        // Show success message
        const successMsg = document.createElement('p');
        successMsg.textContent = 'Welcome to the waitlist! We\'ll notify you when Hooksmith is ready.';
        successMsg.style.color = '#27ca3f';
        successMsg.style.textAlign = 'center';
        successMsg.style.marginTop = '16px';
        successMsg.style.fontWeight = '600';
        
        event.target.appendChild(successMsg);
        
        // Close modal after 3 seconds
        setTimeout(() => {
            closeWaitlistModal();
            // Reset form
            event.target.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            successMsg.remove();
        }, 3000);
    }, 1500);
}
