<script>
    import { AppBar, Button, Icon, MaterialApp } from 'svelte-materialify';
    import { goto } from '$app/navigation';
    import { mdiHome, mdiNewspaper, mdiCart } from '@mdi/js'
</script>

<MaterialApp theme="dark">
<AppBar class="pa-1">
    <div slot="icon">
        <Button on:click={() => goto("/")}>
            <Icon path={mdiHome} />
        </Button>
    </div>
    <span slot="title">CCTI 3D Printing</span>
    <div style="flex-grow:1" />
    <Button class="mr-3" on:click={() => goto("/order")}>
        <Icon path={mdiCart} />
    </Button>
    <!-- <Button class="mr-3" on:click={() => goto("/news")}>
        <Icon path={mdiNewspaper} />
    </Button> -->
</AppBar>
<slot></slot>
</MaterialApp>