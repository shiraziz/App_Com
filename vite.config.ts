import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement en fonction du mode (dev, prod, etc.)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    
    // Options d'optimisation des dépendances
    optimizeDeps: {
      exclude: ['lucide-react'], // Exclure lucide-react des dépendances optimisées
    },
    
    server: {
      open: true, // Ouvre automatiquement le navigateur
    },
    
    base: '/App-Com/', // Si votre projet est dans un sous-dossier App-Com, // Chemin de base pour les ressources

    define: {
      // Exemple d'utilisation d'une variable d'environnement
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },

    // Options de construction (ajoutez les options nécessaires ici)
    build: {
      // Par exemple, ajustez la taille des chunks si nécessaire
      chunkSizeWarningLimit: 600, // Avertir si la taille dépasse 600 kB
    },
  };
});