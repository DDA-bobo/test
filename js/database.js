// Chinese character database with meanings and pronunciations
const characterDatabase = {
    // Common surnames
    surnames: {
        'M': ['马', '米', '麦', '明'],
        'L': ['李', '刘', '林', '梁'],
        'W': ['王', '吴', '魏', '温'],
        // Add more mappings as needed
    },

    // Common given name characters with positive meanings
    givenNames: {
        // Characters representing brightness and intelligence
        bright: ['明', '晖', '辉', '智', '慧', '哲'],
        
        // Characters representing strength and capability
        strong: ['强', '伟', '健', '力', '勇', '武'],
        
        // Characters representing virtue and morality
        virtue: ['德', '仁', '义', '礼', '信', '善'],
        
        // Characters representing nature and beauty
        nature: ['华', '英', '芳', '雅', '翠', '青'],
        
        // Characters representing success and achievement
        success: ['成', '志', '凯', '胜', '达', '安']
    },

    // Mapping of common English sounds to Chinese characters
    phoneticMapping: {
        'mai': ['麦', '迈', '脉'],
        'ke': ['克', '科', '可'],
        'mi': ['米', '密', '蜜'],
        'ka': ['卡', '凯', '开'],
        'lu': ['路', '鲁', '陆'],
        'le': ['乐', '勒', '雷']
        // Add more mappings as needed
    },

    // Cultural meanings and interpretations
    meanings: {
        '明': {
            meaning: 'bright, brilliant, clear',
            cultural: 'Associated with intelligence and clarity of mind',
            personality: 'Intelligent and insightful person'
        },
        '凯': {
            meaning: 'triumph, victory',
            cultural: 'Represents success and achievement',
            personality: 'Victorious and accomplished individual'
        },
        '乐': {
            meaning: 'joy, happiness, music',
            cultural: 'Symbolizes happiness and artistic talent',
            personality: 'Cheerful and artistic person'
        }
        // Add more character meanings as needed
    }
};

// Naming rules and constraints
const namingRules = {
    // Maximum characters in a given name (excluding surname)
    maxNameLength: 2,
    
    // Characters that shouldn't be used together
    conflictingChars: [
        ['明', '亮'], // Too similar in meaning
        ['安', '静'], // Too peaceful together
        // Add more conflicts
    ],
    
    // Character combinations that work well together
    goodCombinations: [
        ['凯', '旋'], // Victory and return
        ['志', '强'], // Ambition and strength
        // Add more good combinations
    ]
};

// Export the database and rules
window.nameDatabase = {
    characters: characterDatabase,
    rules: namingRules
};
