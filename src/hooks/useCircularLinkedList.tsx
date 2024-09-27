import { useState } from 'react';

// Definir la estructura del nodo con tipos
interface Node<T> {
  value: T;
  next: Node<T> | null;
}

// Hook para manejar una lista enlazada circular
const useCircularLinkedList = <T,>() => {
  const [list, setList] = useState<Node<T> | null>(null);

  // Añadir un nodo a la lista enlazada circular
  const append = (value: T): void => {
    const newNode: Node<T> = { value, next: null };

    if (list === null) {
      // La lista está vacía, por lo que el nuevo nodo se enlaza consigo mismo
      newNode.next = newNode;
      setList(newNode);
      return;
    }

    let current = list;
    // Recorrer hasta encontrar el último nodo
    while (current.next !== list) {
      current = current.next as Node<T>; // Casting porque sabemos que no es null
    }

    current.next = newNode;
    newNode.next = list; // El nuevo nodo apunta al primer nodo
    setList(list); // Actualizar la lista
  };

  // Eliminar un nodo de la lista enlazada circular
  const remove = (value: T): void => {
    if (list === null) return;

    if (list.value === value && list.next === list) {
      setList(null); // Si solo hay un nodo y es el que queremos eliminar
      return;
    }

    let current = list;

    // Si el valor a eliminar está en el primer nodo
    if (list.value === value) {
      // Encontrar el último nodo
      while (current.next !== list) {
        current = current.next as Node<T>;
      }
      // Actualizar el enlace del último nodo
      current.next = list.next;
      setList(list.next);
      return;
    }

    // Recorrer hasta encontrar el nodo a eliminar
    while (current.next !== list && current.next?.value !== value) {
      current = current.next as Node<T>;
    }

    if (current.next && current.next.value === value) {
      current.next = current.next.next;
      setList(list); // Actualizamos la lista para reflejar el cambio
    }
  };

  // Convertir la lista a un array para visualizarla
  const toArray = (): T[] => {
    if (list === null) return [];

    const result: T[] = [];
    let current = list;

    do {
      result.push(current.value);
      current = current.next as Node<T>;
    } while (current !== list);

    return result;
  };

  return {
    append,
    remove,
    toArray,
  };
};

export default useCircularLinkedList;
