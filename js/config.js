// API configuration
const config = {
    // API密钥
    API_KEY: 'd014614670254576a1bb469f3924f2db.BxVhT99E6Cc6gNYP',
    // API接口地址
    API_URL: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
    // 使用的模型名称
    MODEL: 'glm-4',
    // 模型参数设置
    PARAMETERS: {
        temperature: 0.7,    // 控制输出的随机性
        top_p: 0.9,         // 控制输出的多样性
        max_tokens: 2000,   // 最大输出长度
        stream: false       // 是否使用流式输出
    }
};

// 导出配置
window.apiConfig = config;
