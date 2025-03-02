import React from 'react';
import { Search, ExternalLink, Sparkles, Star, Users, Globe } from 'lucide-react';
import { deepseekIntegrations } from '../deepseek_integrations';

interface Tool {
  name: string;
  url: string;
  category: string;
  stars: number;
  users: number;
  isFullR1: boolean;  // 是否支持满血R1
}

// 声明全局trackToolClick函数类型
declare global {
  interface Window {
    trackToolClick?: (toolName: string, toolCategory: string) => void;
  }
}

// 语言文本配置
interface LanguageTexts {
  header: {
    toolsCount: string;
    title: string;
    subtitle: string;
  };
  search: {
    placeholder: string;
  };
  intro: {
    text: string;
  };
  popularTools: {
    title: string;
  };
  categories: {
    notFound: string;
  };
  quickNav: {
    title: string;
    toolsCount: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    stats: string;
    tools: string;
    fullR1: string;
    categories: string;
  };
  footer: {
    copyright: string;
  };
  labels: {
    fullR1: string;
    distilled: string;
  };
}

const translations: Record<string, LanguageTexts> = {
  zh: {
    header: {
      toolsCount: "{count} 个 Deepseek 工具，其中 {fullR1Count} 个支持满血R1",
      title: "Deepseek AI 工具导航",
      subtitle: "最全面的 Deepseek 满血R1 和 V3 模型应用集合\n免费直连，无需魔法，中文AI大模型首选"
    },
    search: {
      placeholder: "搜索Deepseek AI工具、应用和服务..."
    },
    intro: {
      text: "欢迎使用<strong>Deepseek工具站</strong>，这里汇集了最全面的Deepseek AI应用和服务。无论您是寻找<strong>满血R1</strong>还是<strong>DeepseekV3</strong>模型，我们都提供了最佳选择。所有工具支持<strong>免费使用</strong>和<strong>直连访问</strong>，无需科学上网。从<strong>腾讯元宝</strong>到<strong>AskManyAI</strong>，从<strong>问小白</strong>到各种<strong>浏览器扩展</strong>和<strong>VS Code插件</strong>，这里应有尽有。"
    },
    popularTools: {
      title: "热门推荐工具"
    },
    categories: {
      notFound: "没有找到匹配的工具"
    },
    quickNav: {
      title: "热门Deepseek AI工具分类",
      toolsCount: "{count}个工具"
    },
    about: {
      title: "关于Deepseek工具站",
      description1: "Deepseek工具站是最全面的Deepseek AI模型应用导航平台，提供满血R1和V3版本的各类应用工具，支持免费使用、直连访问，无需魔法。我们精心收集和整理了各类Deepseek模型应用，包括科技巨头提供的服务、专业AI平台、云服务以及国际平台等多种类型。",
      description2: "无论您是AI爱好者、开发者还是普通用户，都能在这里找到适合自己的Deepseek工具。我们会持续更新收录最新的Deepseek应用，确保您能够第一时间体验到最新的AI技术进展。",
      stats: "已收录 {toolsCount} 个工具 · {fullR1Count} 个满血R1 · {categoriesCount} 个分类",
      tools: "个工具",
      fullR1: "个满血R1",
      categories: "个分类"
    },
    footer: {
      copyright: "© 2024 Deepseek工具站 - 您的AI工具导航 | 最全面的Deepseek模型应用集合"
    },
    labels: {
      fullR1: "满血R1",
      distilled: "蒸馏版"
    }
  },
  en: {
    header: {
      toolsCount: "{count} Deepseek tools, {fullR1Count} with full R1 support",
      title: "Deepseek AI Tools Navigator",
      subtitle: "The most comprehensive collection of Deepseek R1 and V3 model applications\nFree direct access, no VPN needed, Chinese AI model of choice"
    },
    search: {
      placeholder: "Search Deepseek AI tools, apps and services..."
    },
    intro: {
      text: "Welcome to the <strong>Deepseek Tools Hub</strong>, featuring the most comprehensive collection of Deepseek AI applications and services. Whether you're looking for <strong>full R1</strong> or <strong>DeepseekV3</strong> models, we offer the best options. All tools support <strong>free usage</strong> and <strong>direct access</strong> without VPN. From <strong>Tencent Yuanbao</strong> to <strong>AskManyAI</strong>, from <strong>Wenxiaobai</strong> to various <strong>browser extensions</strong> and <strong>VS Code plugins</strong>, we have it all."
    },
    popularTools: {
      title: "Popular Recommended Tools"
    },
    categories: {
      notFound: "No matching tools found"
    },
    quickNav: {
      title: "Popular Deepseek AI Tool Categories",
      toolsCount: "{count} tools"
    },
    about: {
      title: "About Deepseek Tools Hub",
      description1: "Deepseek Tools Hub is the most comprehensive Deepseek AI model application navigation platform, offering full R1 and V3 versions of various application tools, supporting free use and direct access without VPN. We carefully collect and organize various Deepseek model applications, including services provided by tech giants, professional AI platforms, cloud services, and international platforms.",
      description2: "Whether you're an AI enthusiast, developer, or regular user, you can find suitable Deepseek tools here. We continuously update and include the latest Deepseek applications to ensure you can experience the latest AI technology advancements firsthand.",
      stats: "Collected {toolsCount} tools · {fullR1Count} full R1 · {categoriesCount} categories",
      tools: "tools",
      fullR1: "full R1",
      categories: "categories"
    },
    footer: {
      copyright: "© 2024 Deepseek Tools Hub - Your AI Tool Navigator | The most comprehensive collection of Deepseek model applications"
    },
    labels: {
      fullR1: "Full R1",
      distilled: "Distilled"
    }
  }
};

function App() {
  // 合并原有工具和deepseek集成工具
  const originalTools: Tool[] = [
    // 5星工具 (4-5分)
    { 
      name: "腾讯元宝", 
      url: "https://yuanbao.tencent.com/chat/naQivTmsDa/b187e502-abe5-11ef-ab6b-5e7663991462", 
      category: "科技巨头",
      stars: 5,
      users: 50000,
      isFullR1: true
    },
    { 
      name: "腾讯云-大模型知识引擎", 
      url: "https://lke.cloud.tencent.com/webim_exp/#/chat/wQrAwR", 
      category: "科技巨头", 
      stars: 5,
      users: 35000,
      isFullR1: true
    },
    { 
      name: "AskManyAI", 
      url: "https://askmanyai.cn/login", 
      category: "AI平台",
      stars: 5,
      users: 45000,
      isFullR1: true
    },
    { 
      name: "问小白", 
      url: "https://www.wenxiaobai.com/chat/DeepseekR1", 
      category: "AI平台", 
      stars: 5,
      users: 40000,
      isFullR1: true
    },

    // 4星工具
    { 
      name: "钉钉", 
      url: "https://www.dingtalk.com/", 
      category: "科技巨头", 
      stars: 4,
      users: 30000,
      isFullR1: true
    },
    { 
      name: "ima", 
      url: "https://ima.qq.com/", 
      category: "科技巨头", 
      stars: 4,
      users: 28000,
      isFullR1: true
    },
    { 
      name: "中国移动云盘", 
      url: "https://yun.139.com/w/#/index", 
      category: "云服务",
      stars: 4,
      users: 10000,
      isFullR1: true
    },

    // 其他工具
    { name: "百度智能云，千帆", url: "https://console.bce.baidu.com/qianfan/ais/console/onlineTest/LLM/DeepSeek-R1", category: "科技巨头", stars: 4, users: 10000, isFullR1: true },
    { name: "华为云", url: "https://console.huaweicloud.com/modelarts/", category: "科技巨头", stars: 4, users: 9000, isFullR1: true },
    { name: "商汤大装置", url: "https://console.sensecore.cn/aistudio/experience/conversation?model=DeepSeek-R1", category: "AI平台", stars: 3, users: 20000, isFullR1: true },
    { name: "deepinfra", url: "https://deepinfra.com/deepseek-ai/DeepSeek-R1", category: "AI平台", stars: 3, users: 15000, isFullR1: true },
    { name: "无问芯穹", url: "https://cloud.infini-ai.com/genstudio", category: "AI平台", stars: 4, users: 6000, isFullR1: true },
    { name: "天工AI", url: "https://www.tiangong.cn/", category: "AI平台", stars: 3, users: 2000, isFullR1: true },
    { name: "潞晨云", url: "https://cloud.luchentech.com/maas/modelMarket/9821543f-65d9-4557-bac9-d1208ddbfbf5?tab=playground", category: "云服务", stars: 3, users: 5000, isFullR1: true },
    { name: "天翼云", url: "https://huiju.ctyun.cn/modelSquare/?regionId=200000001852", category: "云服务", stars: 4, users: 8000, isFullR1: true },
    { name: "火山方舟", url: "https://www.volcengine.com/product/ark", category: "云服务", stars: 3, users: 4000, isFullR1: true },
    { name: "Hugging Face", url: "https://huggingface.co/deepseek-ai/DeepSeek-R1", category: "国际平台", stars: 4, users: 7000, isFullR1: true },
    { name: "Merlin", url: "https://www.getmerlin.in/zh-CN", category: "国际平台", stars: 4, users: 25000, isFullR1: true },
    { name: "Perplexity", url: "https://www.perplexity.ai/", category: "国际平台", stars: 4, users: 5000, isFullR1: true },
    { name: "POE", url: "https://poe.com", category: "国际平台", stars: 3, users: 3000, isFullR1: true },
    { name: "Cursor", url: "https://cursor.com", category: "国际平台", stars: 4, users: 4000, isFullR1: true },
    { name: "Cerebras", url: "https://cerebras.ai", category: "国际平台", stars: 3, users: 2000, isFullR1: false },  // 蒸馏版
    { name: "Groq", url: "https://groq.com/", category: "国际平台", stars: 4, users: 5000, isFullR1: false },  // 蒸馏版
    { name: "秘塔搜索", url: "https://metaso.cn", category: "其他服务", stars: 4, users: 8000, isFullR1: true },
    { name: "知乎直答", url: "https://zhida.zhihu.com/", category: "其他服务", stars: 3, users: 5000, isFullR1: true },
    { name: "硅基流动&华为云", url: "https://siliconflow.cn/zh-cn/", category: "其他服务", stars: 4, users: 9000, isFullR1: true },
    { name: "扣子", url: "https://www.coze.cn/home", category: "其他服务", stars: 3, users: 4000, isFullR1: true },
    { name: "Monica AI", url: "https://monica.im/home/chat/Monica/monica", category: "其他服务", stars: 4, users: 7000, isFullR1: true },
    { name: "Chatbox", url: "https://web.chatboxai.app/", category: "其他服务", stars: 3, users: 3000, isFullR1: true },
    { name: "国家超算互联网平台", url: "https://www.scnet.cn/ui/mall/", category: "其他服务", stars: 4, users: 10000, isFullR1: false }  // 蒸馏版
  ];

  // 合并工具列表
  const tools: Tool[] = [...originalTools, ...deepseekIntegrations];

  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  
  // 添加语言状态
  const [language, setLanguage] = React.useState<string>(() => {
    // 获取浏览器语言
    const browserLang = navigator.language.split('-')[0];
    // 检查是否支持该语言，如果不支持则默认使用中文
    return ['zh', 'en'].includes(browserLang) ? browserLang : 'zh';
  });
  
  // 获取当前语言的文本
  const t = translations[language];

  // 添加类别翻译映射
  const categoryTranslations: Record<string, string> = {
    "科技巨头": "Tech Giants",
    "AI平台": "AI Platforms",
    "云服务": "Cloud Services",
    "国际平台": "International Platforms",
    "其他服务": "Other Services",
    "应用程序": "Applications",
    "AI代理框架": "AI Agent Frameworks",
    "RAG框架": "RAG Frameworks",
    "浏览器扩展": "Browser Extensions",
    "VS Code扩展": "VS Code Extensions",
    "原生AI代码编辑器": "Native AI Code Editors",
    "其他工具": "Other Tools"
  };

  // 获取类别名称，根据当前语言返回对应的翻译
  const getCategoryName = (category: string) => {
    if (language === 'en' && categoryTranslations[category]) {
      return categoryTranslations[category];
    }
    return category;
  };

  // 获取工具名称，根据当前语言返回对应的翻译
  const getToolName = (name: string) => {
    // 这里可以添加工具名称的翻译，但由于大部分是专有名词，暂时保持原样
    // 只翻译几个明显的中文名称
    if (language === 'en') {
      const toolTranslations: Record<string, string> = {
        "腾讯元宝": "Tencent Yuanbao",
        "腾讯云-大模型知识引擎": "Tencent Cloud - LLM Knowledge Engine",
        "问小白": "Wenxiaobai",
        "钉钉": "DingTalk",
        "中国移动云盘": "China Mobile Cloud Drive",
        "百度智能云，千帆": "Baidu Intelligent Cloud, Qianfan",
        "华为云": "Huawei Cloud",
        "商汤大装置": "SenseTime Large Model",
        "无问芯穹": "Infini-AI",
        "天工AI": "Tiangong AI",
        "潞晨云": "Luchen Cloud",
        "天翼云": "Tianyi Cloud",
        "火山方舟": "Volcano Engine Ark",
        "秘塔搜索": "Metaso Search",
        "知乎直答": "Zhihu Direct Answer",
        "硅基流动&华为云": "Silicon Flow & Huawei Cloud",
        "扣子": "Coze",
        "国家超算互联网平台": "National Supercomputing Internet Platform",
        "划词翻译": "Selection Translator"
      };
      return toolTranslations[name] || name;
    }
    return name;
  };

  const categories = ["All", ...new Set(tools.map(tool => tool.category))].sort();
  
  // 按类别对工具进行分组
  const groupedTools = React.useMemo(() => {
    const filtered = tools.filter(tool => 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      (selectedCategory === "All" || tool.category === selectedCategory)
    );
    
    // 按类别分组
    const grouped = filtered.reduce((acc, tool) => {
      if (!acc[tool.category]) {
        acc[tool.category] = [];
      }
      acc[tool.category].push(tool);
      return acc;
    }, {} as Record<string, Tool[]>);
    
    // 对每个类别内的工具进行排序
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a, b) => {
      // 首先按星级排序
      if (b.stars !== a.stars) {
        return b.stars - a.stars;
      }
      // 星级相同时按用户数排序
      return b.users - a.users;
    });
    });
    
    return grouped;
  }, [tools, searchTerm, selectedCategory]);
  
  // 对类别进行排序
  const sortedCategories = React.useMemo(() => {
    return Object.keys(groupedTools).sort();
  }, [groupedTools]);

  // 处理工具点击事件
  const handleToolClick = (tool: Tool, event: React.MouseEvent<HTMLAnchorElement>) => {
    // 如果trackToolClick函数存在，则调用它记录点击事件
    if (window.trackToolClick) {
      window.trackToolClick(tool.name, tool.category);
    }
  };
  
  // 切换语言
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* 语言切换按钮 */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8">
            <button 
              onClick={toggleLanguage}
              className="flex items-center bg-slate-800 hover:bg-slate-700 text-white px-3 py-2 rounded-full transition-colors"
              aria-label={language === 'zh' ? "Switch to English" : "切换到中文"}
            >
              <Globe size={16} className="mr-2" />
              <span>{language === 'zh' ? 'English' : '中文'}</span>
            </button>
          </div>
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
              <span className="mr-2 w-2 h-2 bg-green-400 rounded-full inline-block"></span>
              {t.header.toolsCount.replace('{count}', tools.length.toString()).replace('{fullR1Count}', tools.filter(t => t.isFullR1).length.toString())}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-blue-200 mb-4">
              {t.header.title}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto whitespace-pre-line">
              {t.header.subtitle}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8" role="main" aria-label={t.header.title}>
        {/* 搜索和热门区域容器 */}
        <div className="bg-slate-900/30 rounded-2xl border border-slate-800 p-6 mb-12">
          {/* 搜索和筛选 */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full overflow-hidden pl-5 pr-2 py-3">
                  <Search className="text-slate-400 mr-3" size={20} />
                  <input
                    type="text"
                    placeholder={t.search.placeholder}
                    className="bg-transparent border-none outline-none flex-1 text-white placeholder-slate-400 text-base"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label={t.search.placeholder}
                  />
                </div>
              </div>
              
              <div className="relative w-full md:w-64">
                <select
                  className="appearance-none bg-slate-900 border border-slate-800 rounded-full px-6 py-3 text-white w-full
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  aria-label={language === 'zh' ? "选择工具类别" : "Select tool category"}
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-900">
                      {category === "All" ? (language === 'zh' ? "全部" : "All") : getCategoryName(category)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* SEO优化介绍段落 */}
          <div className="mb-8 border-b border-slate-800 pb-8">
            <p className="text-slate-400 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: t.intro.text.replace(/<strong>/g, '<strong class="text-blue-300">') }} />
          </div>

          {/* 热门工具区域 */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              {t.popularTools.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {tools.filter(t => t.stars >= 4).slice(0, 5).map((tool, index) => (
                <a 
                  key={`popular-${index}`}
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 bg-slate-800/50 hover:bg-slate-800 p-3 rounded-lg hover:text-blue-300 transition-colors flex items-center"
                  onClick={(e) => handleToolClick(tool, e)}
                >
                  <span className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center mr-3 text-xs text-slate-400 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                    {index + 1}
                  </span>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="font-medium truncate">{getToolName(tool.name)}</span>
                    <span className="text-xs text-slate-500">{getCategoryName(tool.category)}</span>
                  </div>
                  {tool.isFullR1 && (
                    <span className="ml-2 shrink-0 text-xs bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded-full">
                      {t.labels.fullR1}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 按类别分组展示工具 */}
        {sortedCategories.length > 0 ? (
          sortedCategories.map(category => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 pb-2 border-b border-slate-800" id={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                {getCategoryName(category)} <span className="text-sm font-normal text-slate-400">({groupedTools[category].length})</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedTools[category].map((tool, index) => (
                  <a
                    key={`${category}-${index}`}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleToolClick(tool, e)}
                    className="group bg-slate-900 border border-slate-800 p-6 rounded-xl
                             hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02]
                             hover:border-blue-500/30"
                    aria-label={`${language === 'zh' ? '访问' : 'Visit'} ${getToolName(tool.name)} - ${tool.isFullR1 ? t.labels.fullR1 : t.labels.distilled}`}
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors flex items-center gap-2">
                            {getToolName(tool.name)}
                            {tool.isFullR1 ? (
                              <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full">
                                {t.labels.fullR1}
                              </span>
                            ) : (
                              <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full">
                                {t.labels.distilled}
                              </span>
                            )}
                          </h3>
                        </div>
                        <ExternalLink className="text-slate-500 group-hover:text-blue-400 transition-colors" size={18} />
                      </div>
                      
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                          <Star className="text-yellow-400" size={16} />
                          <span className="text-sm text-slate-400">{tool.stars.toFixed(1)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="text-blue-400" size={16} />
                          <span className="text-sm text-slate-400">
                            {tool.users >= 1000 
                              ? `${(tool.users / 1000).toFixed(1)}k` 
                              : tool.users}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">{t.categories.notFound}</p>
          </div>
        )}
      </main>

      {/* 类别快速导航 */}
      <section className="bg-slate-900/50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">{t.quickNav.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sortedCategories.map(category => (
              <a 
                key={`nav-${category}`} 
                href={`#category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg text-center transition-colors"
              >
                <span className="text-white font-medium">{getCategoryName(category)}</span>
                <span className="block text-sm text-slate-400 mt-1">
                  ({t.quickNav.toolsCount.replace('{count}', groupedTools[category].length.toString())})
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Links */}
      <footer className="bg-black border-t border-slate-800 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* 关于Deepseek工具站 - 移到底部 */}
            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 md:col-span-3">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </span>
                {t.about.title}
              </h3>
              <div className="md:flex md:gap-8">
                <div className="md:flex-1">
                  <p className="text-slate-400 leading-relaxed">
                    {t.about.description1}
                  </p>
                </div>
                <div className="md:flex-1 mt-4 md:mt-0">
                  <p className="text-slate-400 leading-relaxed">
                    {t.about.description2}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800">
                <p className="text-slate-500 text-sm" dangerouslySetInnerHTML={{ 
                  __html: t.about.stats
                    .replace('{toolsCount}', `<span class="text-blue-400 font-medium">${tools.length}</span>`)
                    .replace('{fullR1Count}', `<span class="text-blue-400 font-medium">${tools.filter(t => t.isFullR1).length}</span>`)
                    .replace('{categoriesCount}', `<span class="text-blue-400 font-medium">${categories.length - 1}</span>`)
                }} />
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 mb-4 md:mb-0">{t.footer.copyright}</p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;