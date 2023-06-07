import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import classes from "./todo.page.css";
import axios from "axios";

export const TodoPage: React.FC = () => {
  /*
    Fijate que no metemos esta llamada en un _useEffect_

    En _useQuery_ usaremos tres parámetros:
      - Un array para identificar la query, en este caso ["todolist"], pero por ejemplo si cargaranos un TODO con ID 3 podrías ser ["todo", 3]
      más adelante veremos con más detalle.
      - Una función que devuelva una promesa con los datos que queremos cargar
      - Un objeto de configuración, ejemplos de configuración:
      {
        refetchOnWindowFocus: false, // [Def true] Si queremos que se recargue la query al hacer focus en la ventana
        refetchOnMount: true, // [Def true] Si queremos que se recargue la query al montar el componente
        staleTime: 15000, // [Def 0] Tiempo en milisegundos que queremos que la query se considere "stale" (obsoleta) y se recargue
        cacheTime: 1000 * 60 * 5, // [Def 5 mins] Mantiene en cache los datos (aunque algo esté obsoleto primero lee de aquí y después hace la petición)
        refetchInterval: 5000, // Esto es para que cada 5 segundos se refresque la información
        refetchIntervalInBackground: true, // Si queremos que se refresque en segundo plano
      }

      --> Probamos refetchOnWindowFocus: false / true
      --> Probamos refetchOnMount: false / true navegación página
      --> Hablamos sobre cacheTime vs StateTime (despues ventanas veremos e invalidar)
      --> interval
  */
  const { data } = useQuery(
    ["todolist"],
    () => {
      return axios.get("http://localhost:3000/todos").then((res) => {
        return res.data;
      });
    },
    {}
  );

  return (
    <>
      <h1>Todo Page</h1>
      <div className={classes.todoList}>
        {/* Comprobamos si _data_ no es null */}
        {data?.map((todo) => (
          <React.Fragment key={todo.id}>
            <div>{todo.isDone ? "✅" : "⭕️"}</div>
            <div>{todo.description}</div>
          </React.Fragment>
        ))}
      </div>
      <Link to="/list">To List</Link>
    </>
  );
};
