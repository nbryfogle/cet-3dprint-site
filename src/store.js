import { writable, derived } from "svelte/store";

export const isAuthenticated = writable(false);
export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();

// export const user_tasks = derived([orders, user], ([$orders, $user]) => {
//   let logged_in_user_tasks = [];

//   if ($user && $user.email) {
//     logged_in_user_tasks = $orders.filter((order) => order.user === $user.email);
//   }

//   return logged_in_user_tasks;
// });