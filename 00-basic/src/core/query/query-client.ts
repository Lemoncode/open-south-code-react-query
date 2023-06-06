import { QueryClient } from "@tanstack/react-query";


// Inicializamos queryClient
// Esto lo usaremos en el APP en su provider
// Interesante la configuración:
// defaultOptions: {
//   queries: {
//     refetchOnWindowFocus: false, // Esto es para que no se refresque la página cuando se cambia de pestaña
//     retry: 0, // Esto es para que no se reintenten las peticiones
//     staleTime: 1000 * 60 * 5, // Esto es para indicar que después de 5 minutos los datos se pueden considerar obsoletos
//     cacheTime: 1000 * 60 * 5, // Mantiene en cache los datos (aunque algo esté obsoleto primero lee de aquí y después hace la petición)
//     interval: 1000 * 60 * 5, // Esto es para que cada 5 minutos se refresque la información
//     // (...)
//   },
// },
export const queryClient = new QueryClient();
