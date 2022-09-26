<script>
    import { AppBar, Button, Icon, MaterialApp } from 'svelte-materialify';
    import { goto } from '$app/navigation';
    import { mdiHome, mdiNewspaper, mdiCart, mdiBrightness6 } from '@mdi/js'

    let theme = "dark";
</script>

<MaterialApp theme={theme}>
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
        <Button on:click={() => {if (theme === 'light') { theme = 'dark' } else {theme='light'}}} class="mr-3"> 
            <Icon path={mdiBrightness6} />
        </Button>
        <!-- <Button class="mr-3" on:click={() => goto("/news")}>
            <Icon path={mdiNewspaper} />
        </Button> -->
</AppBar>
<slot></slot>
</MaterialApp>