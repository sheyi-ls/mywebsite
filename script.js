// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动导航
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // CTA 按钮点击事件
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // 滚动到关于我们部分
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    });

    // 页面加载动画
    const animateElements = document.querySelectorAll('.hero-content h2, .hero-content p, .cta-button');
    
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // 简单的页面访问统计（仅作演示）
    console.log('页面加载时间:', new Date().toLocaleString());
    console.log('欢迎访问我的网站！');
}); 