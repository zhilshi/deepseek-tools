importimport {{{{ defineConfigdefineConfig }}}} from from from from 'vite''vite''vite''vite';
importimport react react react from from from '@vitejs/plugin-react''@vitejs/plugin-react''@vitejs/plugin-react''@vitejs/plugin-react';
importimport {{{{ resolveresolve }}}} from from from from 'path''path''path''path';

// https://vitejs.dev/config/// https://vitejs.dev/config/
exportexport defaultdefault defaultdefault defaultdefault defineConfigdefineConfig(((({{{{
  pluginsplugins: [[[[reactreact(((())))]]]],
  optimizeDepsoptimizeDeps: {{{{
    excludeexclude: [[[['lucide-react''lucide-react''lucide-react''lucide-react']]]],
  }}}},
  buildbuild: {{{{
    rollupOptions: : {
      input: : {
        main: : resolveresolve((((__dirname__dirname, , 'index.html''index.html''index.html''index.html'),,
      },,
    },,
  },,
  resolve: : {
    alias: : {
      '@': : resolveresolve(((__dirname__dirname, , 'srcsrc'),,')),,
    },,
  },,
});;
