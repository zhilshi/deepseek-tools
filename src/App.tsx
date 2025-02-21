import React from 'react';
import { Search, ExternalLink, Sparkles, Star, Users } from 'lucide-react';

interface Tool {
  name: string;
  url: string;
  category: string;
  stars: number;
  users: number;
  isFullR1: boolean;  // 是否支持满血R1
}

function App() {
  const tools: Tool[] = [
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

  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const categories = ["All", ...new Set(tools.map(tool => tool.category))];
  
  const filteredTools = tools
    .filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      // 首先按星级排序
      if (b.stars !== a.stars) {
        return b.stars - a.stars;
      }
      // 星级相同时按用户数排序
      return b.users - a.users;
    });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Sparkles className="text-blue-400" size={32} />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Deepseek工具站
            </h1>
          </div>
          <p className="mt-2 text-slate-400">
            发现和访问最好的 Deepseek AI 工具和服务
            <span className="ml-2 text-sm">
              (共 {tools.length} 个工具，其中 {tools.filter(t => t.isFullR1).length} 个支持满血R1)
            </span>
          </p>
          <p className="mt-2 text-sm text-slate-500">
            提供最全面的 Deepseek 模型应用导航，包括满血R1和V3版本。支持免费使用、直连访问，无需魔法。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8" role="main" aria-label="Deepseek工具列表">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="搜索工具..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400
                       backdrop-blur-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg 
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white
                     backdrop-blur-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-slate-800">{category}</option>
            ))}
          </select>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/50 backdrop-blur-lg border border-slate-700 p-6 rounded-lg
                       hover:bg-slate-700/50 transition-all duration-300 hover:scale-[1.02]
                       hover:border-blue-500/50"
            >
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      {tool.name}
                      {tool.isFullR1 ? (
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                          满血R1
                        </span>
                      ) : (
                        <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded">
                          蒸馏版
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">{tool.category}</p>
                  </div>
                  <ExternalLink className="text-slate-400 group-hover:text-blue-400 transition-colors" size={20} />
                </div>
                
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400" size={16} />
                    <span className="text-sm text-slate-300">{tool.stars.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="text-blue-400" size={16} />
                    <span className="text-sm text-slate-300">
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
      </main>

      {/* Footer with Links */}
      <footer className="bg-slate-800/50 backdrop-blur-lg border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-slate-400">© 2024 Deepseek工具站 - 您的AI工具导航</p>
          <div className="mt-4 text-center text-sm text-slate-500">
            <span className="mx-2">满血R1</span>
            <span className="mx-2">DeepseekV3</span>
            <span className="mx-2">免费AI工具</span>
            <span className="mx-2">直连访问</span>
            <span className="mx-2">中文AI模型</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;