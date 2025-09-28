        // Animación de aparición al hacer scroll
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInOnScroll = function() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('visible');
                    }
                });
            };
            
            // Ejecutar al cargar la página
            fadeInOnScroll();
            
            // Ejecutar al hacer scroll
            window.addEventListener('scroll', fadeInOnScroll);
            
            // Manejo del formulario de contacto
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Aquí iría la lógica para enviar el formulario
                    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
                    contactForm.reset();
                });
            }
            
            // Efecto de navbar al hacer scroll
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 100) {
                    navbar.style.padding = '10px 0';
                    navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                } else {
                    navbar.style.padding = '15px 0';
                    navbar.style.boxShadow = 'none';
                }
            });
            
            // Animación de contadores
            const counters = document.querySelectorAll('.stats-number');
            const speed = 200;
            
            const animateCounters = () => {
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-count');
                        const count = +counter.innerText;
                        
                        const inc = target / speed;
                        
                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 1);
                        } else {
                            counter.innerText = target + '+';
                        }
                    };
                    
                    updateCount();
                });
            };
            
            // Activar contadores cuando son visibles
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        counterObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            counters.forEach(counter => {
                counterObserver.observe(counter);
            });
            
            // Crear partículas animadas
            function createParticles() {
                const particlesContainer = document.getElementById('particles-js');
                const particleCount = 30;
                
                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    
                    // Tamaño aleatorio
                    const size = Math.random() * 10 + 5;
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    
                    // Posición aleatoria
                    particle.style.left = `${Math.random() * 100}%`;
                    particle.style.top = `${Math.random() * 100}%`;
                    
                    // Opacidad aleatoria
                    particle.style.opacity = Math.random() * 0.5 + 0.1;
                    
                    // Duración de animación aleatoria
                    particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
                    particle.style.animationDelay = `${Math.random() * 5}s`;
                    
                    particlesContainer.appendChild(particle);
                }
            }
            
            createParticles();
            
            // Efecto de escritura en el título
            const heroTitle = document.querySelector('.hero-content h1');
            const originalText = heroTitle.textContent;
            heroTitle.textContent = '';
            
            let i = 0;
            function typeWriter() {
                if (i < originalText.length) {
                    heroTitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            }
            
            // Iniciar efecto de escritura cuando la sección hero es visible
            const heroObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        typeWriter();
                        heroObserver.unobserve(entry.target);
                    }
                });
            });
            
            heroObserver.observe(document.querySelector('.hero-section'));
        });
