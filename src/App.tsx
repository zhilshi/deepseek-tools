import React from 'react';
import { Search, ExternalLink, Sparkles } from 'lucide-react';

interface Tool {
  name: string;
  url: string;
  category: string;
}

function App() {
  const tools: Tool[] = [
    // Tech Giants
    { name: "腾讯元宝", url: "https://yuanbao.tencent.com/chat/naQivTmsDa/b187e502-abe5-11ef-ab6b-5e7663991462", category: "Tech Giants" },
    { name: "腾讯云-大模型知识引擎", url: "https://lke.cloud.tencent.com/webim_exp/#/chat/wQrAwR", category: "Tech Giants" },
    { name: "支付宝百宝箱", url: "https://tbox.alipay.com/community", category: "Tech Giants" },
    { name: "钉钉", url: "https://www.dingtalk.com/", category: "Tech Giants" },
    { name: "ima", url: "https://ima.qq.com/", category: "Tech Giants" },
    { name: "百度智能云，千帆", url: "https://console.bce.baidu.com/qianfan/ais/console/onlineTest/LLM/DeepSeek-R1", category: "Tech Giants" },
    { name: "华为云", url: "https://console.huaweicloud.com/modelarts/", category: "Tech Giants" },
    
    // AI Platforms
    { name: "AskManyAI", url: "https://askmanyai.cn/login", category: "AI Platforms" },
    { name: "问小白", url: "https://www.wenxiaobai.com/chat/DeepseekR1", category: "AI Platforms" },
    { name: "商汤大装置", url: "https://console.sensecore.cn/aistudio/experience/conversation?model=DeepSeek-R1", category: "AI Platforms" },
    { name: "deepinfra", url: "https://deepinfra.com/deepseek-ai/DeepSeek-R1", category: "AI Platforms" },
    { name: "无问芯穹", url: "https://cloud.infini-ai.com/genstudio", category: "AI Platforms" },
    { name: "天工AI", url: "https://www.tiangong.cn/", category: "AI Platforms" },
    
    // Cloud Services
    { name: "中国移动云盘", url: "https://yun.139.com/w/#/index", category: "Cloud Services" },
    { name: "潞晨云", url: "https://cloud.luchentech.com/maas/modelMarket/9821543f-65d9-4557-bac9-d1208ddbfbf5?tab=playground", category: "Cloud Services" },
    { name: "天翼云", url: "https://huiju.ctyun.cn/modelSquare/?regionId=200000001852", category: "Cloud Services" },
    { name: "火山方舟", url: "https://www.volcengine.com/product/ark", category: "Cloud Services" },
    
    // International Platforms
    { name: "Hugging Face", url: "https://huggingface.co/deepseek-ai/DeepSeek-R1", category: "International Platforms" },
    { name: "Flowith", url: "https://flowith.io", category: "International Platforms" },
    { name: "Merlin", url: "https://www.getmerlin.in/zh-CN", category: "International Platforms" },
    { name: "Openrouter", url: "https://openrouter.ai/deepseek/deepseek-r1:free", category: "International Platforms" },
    { name: "Perplexity", url: "https://www.perplexity.ai/", category: "International Platforms" },
    { name: "POE", url: "https://poe.com", category: "International Platforms" },
    { name: "Cursor", url: "https://cursor.com", category: "International Platforms" },
    { name: "Cerebras", url: "https://cerebras.ai", category: "International Platforms" },
    { name: "Groq", url: "https://groq.com/", category: "International Platforms" },
    
    // Other Services
    { name: "秘塔搜索", url: "https://metaso.cn", category: "Other Services" },
    { name: "知乎直答", url: "https://zhida.zhihu.com/", category: "Other Services" },
    { name: "硅基流动&华为云", url: "https://siliconflow.cn/zh-cn/", category: "Other Services" },
    { name: "扣子", url: "https://www.coze.cn/home", category: "Other Services" },
    { name: "Monica AI", url: "https://monica.im/home/chat/Monica/monica", category: "Other Services" },
    { name: "Chatbox", url: "https://web.chatboxai.app/", category: "Other Services" },
    { name: "国家超算互联网平台", url: "https://www.scnet.cn/ui/mall/", category: "Other Services" },
  ];

  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const categories = ["All", ...new Set(tools.map(tool => tool.category))];
  
  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Sparkles className="text-blue-400" size={32} />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Deepseek工具站
            </h1>
          </div>
          <p className="mt-2 text-slate-400">发现和访问最好的AI工具和服务</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
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
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{tool.category}</p>
                </div>
                <ExternalLink className="text-slate-400 group-hover:text-blue-400 transition-colors" size={20} />
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800/50 backdrop-blur-lg border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-slate-400">© 2024 Deepseek工具站 - 您的AI工具导航</p>
        </div>
      </footer>
    </div>
  );
}

export default App;