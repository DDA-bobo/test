// API handling functions
class ZhipuAPI {
    constructor(config) {
        this.apiKey = config.API_KEY;
        this.apiUrl = config.API_URL;
        this.model = config.MODEL;
        this.parameters = config.PARAMETERS;
    }

    // 生成系统提示词
    getSystemPrompt() {
        return `你是一位精通中国传统文化的起名专家。请根据提供的英文名，生成3个富有文化内涵的中文名字建议。
每个名字都应该：
1. 音韵和谐，尽可能与英文名发音相近
2. 符合中国传统起名规范
3. 寓意优美，字义精妙
4. 避免文化禁忌，确保恰当性

请以JSON格式返回结果：
{
  "suggestions": [
    {
      "chinese": "中文名",
      "pinyin": "带声调拼音",
      "characters": {
        "字": "解释"
      },
      "meaning": "整体含义",
      "cultural": "文化内涵",
      "personality": "性格特质"
    }
  ]
}`;
    }

    // 生成请求头
    generateHeaders() {
        return {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    }

    // 调用API生成名字
    async generateNames(englishName) {
        try {
            console.log('开始为名字生成建议:', englishName);
            
            // 构建请求体
            const requestBody = {
                model: this.model,
                messages: [
                    { role: "system", content: this.getSystemPrompt() },
                    { role: "user", content: `请为英文名"${englishName}"生成中文名建议。要求名字富有诗意，符合中国传统文化特色。` }
                ],
                ...this.parameters
            };

            console.log('发送请求:', {
                url: this.apiUrl,
                headers: this.generateHeaders(),
                body: requestBody
            });

            // 发送请求
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: this.generateHeaders(),
                body: JSON.stringify(requestBody)
            });

            console.log('收到响应状态:', response.status);
            
            // 处理错误响应
            if (!response.ok) {
                const errorText = await response.text();
                console.error('API错误响应:', errorText);
                throw new Error(`API请求失败: ${response.status} ${response.statusText}\n${errorText}`);
            }

            // 解析响应
            const data = await response.json();
            console.log('API响应数据:', data);
            
            return this.parseResponse(data);
        } catch (error) {
            console.error('名字生成过程中出错:', error);
            throw new Error(`生成名字失败: ${error.message}`);
        }
    }

    // 解析API响应
    parseResponse(data) {
        try {
            // 验证响应数据结构
            if (!data || !data.choices || !data.choices[0] || !data.choices[0].message || !data.choices[0].message.content) {
                console.error('无效的API响应结构:', data);
                throw new Error('API返回了无效的响应格式');
            }

            // 获取生成的内容
            const content = data.choices[0].message.content;
            console.log('解析响应内容:', content);

            // 解析JSON内容
            const parsed = JSON.parse(content);
            if (!parsed.suggestions || !Array.isArray(parsed.suggestions)) {
                throw new Error('响应格式不符合预期');
            }

            // 验证每个建议的格式
            parsed.suggestions.forEach((suggestion, index) => {
                if (!suggestion.chinese || !suggestion.pinyin || !suggestion.meaning) {
                    throw new Error(`第${index + 1}个名字建议格式不完整`);
                }
            });

            return parsed;
        } catch (error) {
            console.error('解析API响应时出错:', error);
            throw new Error(`解析名字建议失败: ${error.message}`);
        }
    }
}

// 导出API类
window.ZhipuAPI = ZhipuAPI;
