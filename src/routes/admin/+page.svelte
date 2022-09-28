<script>
    import { onMount } from "svelte";
    import { Button } from "svelte-materialify";
    import { auth, orders } from "./+server";
    import { isAuthenticated, user } from "../../store";
  
    let auth0Client;
    
    let isAuthenticatedValue;
    isAuthenticated.subscribe((value) => (isAuthenticatedValue = value));
  
    onMount(async () => {
      auth0Client = await auth.createClient();
  
      isAuthenticated.set(await auth0Client.isAuthenticated());
      user.set(await auth0Client.getUser());
    });
  
    function login() {
      auth.loginWithPopup(auth0Client);
    }
  
    function logout() {
      auth.logout(auth0Client);
    }
  
    function genRandom(length = 7) {
      var chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var result = "";
      for (var i = length; i > 0; --i)
        result += chars[Math.round(Math.random() * (chars.length - 1))];
      return result;
    }
    console.log(isAuthenticatedValue);
  </script>

<div style="width:100vw;height:100vh;">
{#if isAuthenticatedValue}
  <p>Authenticated</p>
  {#each orders as order}
      <div>
        {order.id}
      </div>
        <h3>Product Info: </h3>
        <ul>
          <li>{order.whatsPrinted}</li>
          <li>{order.filament}</li>
        </ul>
        <h3>Customer Info: </h3>
        <ul>
          <li>{orders.fName + " " + orders.lName}</li>
          <li>{orders.email}</li>
          <li>{orders.schedule}</li>
          <li>{orders.techArea}</li>
        </ul>

  {/each}
{:else} 
<div class="text-center">
  <Button on:click={login} class="text-center ma-10">Login</Button>
</div>
{/if}
</div>


