import { useQuery, useMutation } from "@tanstack/react-query";
import { getTodoList, updateTodoItem, appendTodoItem } from "./todo.api";
import { todoKeys } from "./todo-key-queries";

export const useTodoListQuery = () => {
  /*
  // Tercer parámetro de useQuery: opciones
  {
    refetchOnWindowFocus: false, // [Def true] Si queremos que se recargue la query al hacer focus en la ventana
    refetchOnMount: true, // [Def true] Si queremos que se recargue la query al montar el componente
    staleTime: 15000, // [Def 0] Tiempo en milisegundos que queremos que la query se considere "stale" (obsoleta) y se recargue
    cacheTime: 1000 * 60 * 5, // [Def 5 mins] Mantiene en cache los datos (aunque algo esté obsoleto primero lee de aquí y después hace la petición)
    refetchInterval: 5000, // Esto es para que cada 5 segundos se refresque la información
    refetchIntervalInBackground: true, // Si queremos que se refresque en segundo plano
  }
*/
  return useQuery(todoKeys.todoList(), () => getTodoList());
};

export const useUpdateTodoItemMutation = (onSuccessFn: () => void) => {
  return useMutation(updateTodoItem, {
    onSuccess: () => onSuccessFn(),
  });
};

export const useAppendTodoItemMutation = (onSuccessFn: () => void) =>
  useMutation(appendTodoItem, { onSuccess: () => onSuccessFn() });
