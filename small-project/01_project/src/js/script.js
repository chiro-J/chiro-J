
let isTestMode = false;
let testHour = 0;

function updateTheme() {
    const now = new Date();
    const hour = isTestMode ? testHour : now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    
    // 시간 표시 업데이트
    const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
    document.getElementById('timeDisplay').textContent = timeString;
    
    const body = document.body;
    const periodDisplay = document.getElementById('periodDisplay');
    
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    
    // 모든 클래스 제거
    body.classList.remove('dawn', 'morning', 'day', 'evening', 'night', 'midnight');
    
    let theme, period, desc;
    
    if (hour >= 5 && hour < 7) {
        theme = 'dawn';
        period = '새벽';
        
    } else if (hour >= 7 && hour < 11) {
        theme = 'morning';
        period = '아침';
        
    } else if (hour >= 11 && hour < 17) {
        theme = 'day';
        period = '낮';
        
    } else if (hour >= 17 && hour < 20) {
        theme = 'evening';
        period = '저녁';
        
    } else if (hour >= 20 || hour < 0) {
        theme = 'night';
        period = '밤';
        
    } else {
        theme = 'midnight';
        period = '심야';
        
    }
    
    body.classList.add(theme);
    periodDisplay.textContent = `${period} ${isTestMode ? '(테스트 모드)' : ''}`;
    description.textContent = desc;
    
    // 태양과 달의 위치 조정
    updateCelestialBodies(hour);
    
    // 별 표시 조정
    updateStars(hour);
}

function updateCelestialBodies(hour) {
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    
    if (hour >= 6 && hour < 18) {
        // 낮 시간 - 태양 표시
        sun.style.display = 'block';
        moon.style.display = 'none';
        
        // 태양의 위치 (아크 형태로 이동)
        const sunProgress = (hour - 6) / 12; // 0 ~ 1
        const sunAngle = sunProgress * Math.PI; // 0 ~ π
        const sunX = 50 + Math.cos(sunAngle) * 30; // 20% ~ 80%
        const sunY = 20 + Math.sin(sunAngle) * 20; // 20% ~ 40%
        
        sun.style.left = `${sunX}%`;
        sun.style.top = `${sunY}%`;
    } else {
        // 밤 시간 - 달 표시
        sun.style.display = 'none';
        moon.style.display = 'block';
        
        // 달의 위치
        const moonHour = hour < 6 ? hour + 24 : hour;
        const moonProgress = (moonHour - 18) / 12; // 0 ~ 1
        const moonAngle = moonProgress * Math.PI; // 0 ~ π
        const moonX = 50 + Math.cos(moonAngle) * 30;
        const moonY = 30 + Math.sin(moonAngle) * 20;
        
        moon.style.left = `${moonX}%`;
        moon.style.top = `${moonY}%`;
    }
}

function updateStars(hour) {
    const starsContainer = document.getElementById('stars');
    
    if (hour >= 19 || hour < 6) {
        // 밤 시간 - 별 표시
        if (starsContainer.children.length === 0) {
            createStars();
        }
        starsContainer.style.opacity = '1';
    } else {
        // 낮 시간 - 별 숨기기
        starsContainer.style.opacity = '0';
    }
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    starsContainer.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

function setTestTime(hour) {
    isTestMode = true;
    testHour = hour;
    updateTheme();
}

function resetToRealTime() {
    isTestMode = false;
    updateTheme();
}

// 초기 실행
updateTheme();

// 매초마다 업데이트
setInterval(updateTheme, 1000);