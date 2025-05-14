export interface BoxProps {
  title: string;
  content: string;
}

export interface BoxEmits {
  (e: 'clearInputs'): void;
  (e: 'setInputs', payload: BoxEmitsSetInputsPayload): void;
}

export interface BoxEmitsSetInputsPayload {
  value1: string;
  value2: string;
}

export interface PersonForm {
  name: string;
  age: number;
}

export interface TodoItem {
  id: number;
  title: string;
  content: string;
  completed: boolean;
}

export interface TodoFormEmits {
  (e: 'reset'): void;
  (e: 'addTodo'): void;
}

export interface TodoItemEmits {
  (e: 'completeTodo', payload: TodoItem): void;
  (e: 'removeTodo'): void;
}

export interface Room {
  '@id': string | null;
  id: number | null;
  name: string;
  capacity: number;
  price: number;
}

export interface Reservation {
  id: number | null;
  room: number | string | null;
  guestName: string;
  guests: number | null;
  totalPrice: number;
  startDate: Date | null;
  endDate: Date | null;
  nights: number;
  isPaid: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
}

