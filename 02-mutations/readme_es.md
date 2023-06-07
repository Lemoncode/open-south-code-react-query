# 00 Render Prop

## Arranque

Tienes que tener primero el server levantado

```bash
cd 99-server
```

Sólo si no estaban instalados los paquetes:

```bash
npm install
```

```bash
npm start
```

Después el cliente (están en el raíz):

```bash
cd 01-mutations
```

Sólo si no estaban instalados los paquetes:

```bash
npm install
```

```bash
npm start
```

## 01-mutations

De cara a React Query

- En Query tenemos nuestro QueryClient.
- En App metemos el provider.

Aquí viene la parte interesante, dentro de _todo_, hemos divido

- api: donde tenemos las llamadas a la api (con fetch en este caso).
- todo-query: hemos encapsulado en hooks los useQuery y useMutation
- todo.page:
  - Hemos definido un hook para encapsular todas las consultas y mutaciones y definimos un handler para cuando una mutación se completa (ya veremos como se usa).

A destacar: en useQuery fijate que le pasamos una función, podemos ir a:

- todo-key-queries:
  - Aquí definimos un array de keys
  - De esta forma podemos invalidar tanto una consulta como un grupo de consultas.

Demos:

- Comentar

```ts
const handleSaveSuccess = () => {
  //    queryClient.invalidateQueries(todoKeys.todoList());
};
```

Jugar también con cambio de página y stale.

Ver mutaciones

```ts
export const useUpdateTodoItemMutation = (onSuccessFn: () => void) => {
  return useMutation(updateTodoItem, {
    onSuccess: () => onSuccessFn(),
  });
};
```
