// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the API client
    const api = new ZhipuAPI(window.apiConfig);

    // 处理名字生成
    async function handleGenerate() {
        const englishName = document.getElementById('englishName').value.trim();
        const loadingSection = document.getElementById('loadingSection');
        const resultSection = document.getElementById('resultSection');
        const generateBtn = document.getElementById('generateBtn');

        // 输入验证
        if (!englishName) {
            showError('请输入英文名');
            return;
        }

        // 显示加载状态
        generateBtn.disabled = true;
        loadingSection.style.display = 'block';
        resultSection.innerHTML = '';

        try {
            // 调用API生成名字
            const result = await api.generateNames(englishName);
            
            // 显示结果
            displayResults(result);
        } catch (error) {
            showError(error.message);
        } finally {
            // 恢复界面状态
            generateBtn.disabled = false;
            loadingSection.style.display = 'none';
        }
    }

    // 显示生成结果
    function displayResults(result) {
        const resultSection = document.getElementById('resultSection');
        
        // 生成HTML
        let html = '<h2>为您生成的中文名建议</h2>';
        
        result.suggestions.forEach((suggestion, index) => {
            html += `
                <div class="name-card">
                    <h3>建议 ${index + 1}</h3>
                    <div class="name-details">
                        <div class="detail-item">
                            <strong>中文名：</strong>
                            <span class="chinese-name">${suggestion.chinese}</span>
                        </div>
                        <div class="detail-item">
                            <strong>拼音：</strong>
                            <span class="pinyin">${suggestion.pinyin}</span>
                        </div>
                        <div class="detail-item">
                            <strong>字义：</strong>
                            <ul class="character-meanings">
                                ${Object.entries(suggestion.characters)
                                    .map(([char, meaning]) => `
                                        <li><strong>${char}</strong>: ${meaning}</li>
                                    `).join('')}
                            </ul>
                        </div>
                        <div class="detail-item">
                            <strong>含义：</strong>
                            <p>${suggestion.meaning}</p>
                        </div>
                        <div class="detail-item">
                            <strong>文化内涵：</strong>
                            <p>${suggestion.cultural}</p>
                        </div>
                        <div class="detail-item">
                            <strong>性格特质：</strong>
                            <p>${suggestion.personality}</p>
                        </div>
                    </div>
                </div>
            `;
        });

        // 显示结果
        resultSection.innerHTML = html;
        
        // 平滑滚动到结果区域
        resultSection.scrollIntoView({ behavior: 'smooth' });
    }

    // 显示错误信息
    function showError(message) {
        const resultSection = document.getElementById('resultSection');
        resultSection.innerHTML = `
            <div class="error-message">
                <p>抱歉，出现了一些问题：${message}</p>
                <p>请稍后重试，或联系支持团队获取帮助。</p>
            </div>
        `;
    }

    // 添加输入框回车键处理
    document.getElementById('englishName').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleGenerate();
        }
    });

    // 添加生成按钮点击事件
    document.getElementById('generateBtn').addEventListener('click', handleGenerate);
});
