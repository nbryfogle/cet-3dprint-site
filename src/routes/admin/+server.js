import createAuth0Client from "@auth0/auth0-spa-js";
import { user, isAuthenticated, popupOpen } from "../../store";
import config from "./auth_config";
import fs from 'fs';

async function createClient() {
    let auth0Client = await createAuth0Client({
      domain: config.domain,
      client_id: config.clientId
    });
  
    return auth0Client;
  }
  
async function loginWithPopup(client, options) {
popupOpen.set(true);
try {
    await client.loginWithPopup(options);

    user.set(await client.getUser());
    isAuthenticated.set(true);
} catch (e) {
    // eslint-disable-next-line
    console.error(e);
} finally {
    popupOpen.set(false);
}
}

function logout(client) {
return client.logout();
}

const auth = {
createClient,
loginWithPopup,
logout
};

function getOrders() {
  // Get data from the orders.json file
  let orders = JSON.parse(fs.readFileSync('../../../orders.json', 'utf8'));

  return orders;

}

function getUnfulfilledOrders() {
  // Get data from the orders.json file
  let orders = getOrders();

  // Filter out the orders that have been fulfilled
  let unfulfilledOrders = orders.filter((order) => order.fulfilled === false);

  return unfulfilledOrders;

}

const orders = {
  getOrders,
  getUnfulfilledOrders
}

export default auth;

export { orders };