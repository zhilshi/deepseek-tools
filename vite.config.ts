importimport importimport { defineConfig }}}} from from from from 'vite';
importimport react react react from from from '@vitejs/plugin-react''@vitejs/plugin-react''@vitejs/plugin-react''@vitejs/plugin-react';
importimport path path path from from from 'path''path''path''path';

exportexport defaultdefault defaultdefault defaultdefault defineConfigdefineConfig(((({{{{
  pluginsplugins: [[[[reactreact(((())))]]]],
  optimizeDepsoptimizeDeps: {{{{
    excludeexclude: [[[['lucide-react''lucide-react''lucide-react']]],
  }}},
  buildbuild: {{{
    outDiroutDir: 'dist''dist''dist',
    rollupOptionsrollupOptions: {{{
      inputinput: {{{
        mainmain: pathpath.resolveresolve(((__dirname__dirname, 'index.html''index.html''index.html'))),
      }}},
    }}},
  }}},
  resolveresolve: {{{
    aliasalias: {{{
      '@''@''@': pathpath.resolveresolve(((__dirname__dirname, './src''./src''./src'))),
    }}},
  }}},
}}})));
