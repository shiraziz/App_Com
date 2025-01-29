import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclure lucide-react des dépendances optimisées
  },
  server: {
    open: true, // Ouvre automatiquement le navigateur
  },
 
  base: '/', // Ajoutez cette ligne

});