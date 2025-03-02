import React from 'react';
import { Search, ExternalLink, Sparkles, Star, Users } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm mb-8">
              <span className="mr-2 w-2 h-2 bg-green-400 rounded-full inline-block"></span>
              {tools.length} 个 Deepseek 工具，其中 {tools.filter(t => t.isFullR1).length} 个支持满血R1
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-blue-200 mb-6">
              探索顶级 AI 工具
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
              精心策划的领先 AI 驱动工具集合。
              <br />由人类精选。
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8" role="main" aria-label="Deepseek工具列表">
        {/* Search and Filter */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="搜索工具..."
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-full
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="absolute right-3 px-4 py-1.5 bg-slate-800 border border-slate-600 rounded-full
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800">{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 按类别分组展示工具 */}
        {sortedCategories.length > 0 ? (
          sortedCategories.map(category => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 pb-2 border-b border-slate-800">
                {category} <span className="text-sm font-normal text-slate-400">({groupedTools[category].length})</span>
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
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors flex items-center gap-2">
                            {tool.name}
                            {tool.isFullR1 ? (
                              <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full">
                                满血R1
                              </span>
                            ) : (
                              <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full">
                                蒸馏版
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
            <p className="text-slate-400 text-lg">没有找到匹配的工具</p>
          </div>
        )}
      </main>

      {/* Footer with Links */}
      <footer className="bg-black border-t border-slate-800 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-slate-400 mb-6">© 2024 Deepseek工具站 - 您的AI工具导航</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">满血R1</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">DeepseekV3</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">免费AI工具</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">直连访问</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">中文AI模型</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">腾讯元宝</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">AskManyAI</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">问小白</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;