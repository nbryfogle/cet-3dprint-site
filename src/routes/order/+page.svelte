<script>
    import { MaterialApp, TextField, Select, Radio, Card, Button, Snackbar } from 'svelte-materialify';
    

    const areas = [
        "ACR",
        "AST",
        "Carpentry",
        "CEET",
        "Cosmetology",
        "Culinary Arts",
        "Drafting",
        "Electrical",
        "Graphic Design",
        "Health/Medical",
        "HVAC",
        "Marketing",
        "Precision Machine",
        "Welding"
    ];

    const materials = [
        "PLA - White",
        "PLA - Blue",
        "PLA - Shiny White",
        "PLA - Shiny Blue",
        "PLA - Shiny Black",
        "PLA - Shiny Red",
        "PLA+ - Orange",
        "PLA+ - Grey",
        "Wood PLA",
        "PETG - Clear"
    ]
    
    const stdRules = [
        (v) => !!v || 'Required'
    ]

    const emailRules = [
        (v) => !!v || 'Required',
        (v) => v.length <= 25 || 'Max 25 characters',
        (v) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(v) || 'Invalid e-mail.';
        },
    ];

    let info = {
        fname: null,
        lname: null,
        email: null,
        day: "A",
        area: null,
        material: null,
        what: null,
    };


    async function submit() {
        let message = {
            subject: 'New Order',
            text: info,
        };

        for (let item in info) {
            console.log(item);
            if (!info[item]) {
                errorbar = true;
                return;
            }
        }

        const resp = await fetch('/api/order', {
            method: 'POST',
            body: JSON.stringify(message),
            headers: {
                'content-type': 'application/json'
            }
        });

        if (resp.ok){
            submitbar = true;
        } else {
            errorbar = true;
        }

        console.log(resp.ok);

    }

    let submitbar = false;
    let errorbar = false;

</script>

<div style="width:100vw;height:100vh;">
<h1 class="d-flex justify-center pa-15">Order a 3D Print!</h1>
<div class="d-flex justify-center">
<Card style="max-width:200em;">
    <div class="d-flex justify-center ma-15">
        <TextField class="mr-5" bind:value={info.fname} required rules={stdRules}>
            First Name
        </TextField>
        <TextField class="ml-5 mr-5" bind:value={info.lname} required rules={stdRules}>
            Last Name
        </TextField>
        <TextField class="ml-5" bind:value={info.email} required rules={emailRules}>
            Email
        </TextField>
    </div>
    <div class="d-flex justify-space-around">
        
        <Select items={areas} bind:value={info.area}>
            Select a Tech Area
        </Select>

        <div class="d-flex flex-row" id="day">
            <Radio bind:group={info.day} value={"A"}>A Day</Radio>
            <Radio bind:group={info.day} value={"B"} class="ml-7">B Day</Radio>
        </div>
    </div>
    <br />
    <div class="d-flex justify-center">
        <Select items={materials} bind:value={info.material}>
            Choose a Material
        </Select>
    </div>
    <br />
    <div class="d-flex justify-center">
        <TextField class="d-flex justify-center ma-5" bind:value={info.what} rules={stdRules}>
            What would you like printed?
        </TextField>
    </div>
    <div class="d-flex justify-center mb-5">
        <Button on:click={submit}>
            Submit
        </Button>
    </div>
    </Card>
    <br />
</div>
</div>
    <!-- <input type="file" accept="image/png"/>     -->

<Snackbar class="justify-space-between green" bind:active={submitbar} right top timeout={3000}>
        Submitted successfully!
</Snackbar>

<Snackbar class="justify-space-between red" bind:active={errorbar} right top timeout={3000}>
    Make sure all fields are filled out!
</Snackbar>

