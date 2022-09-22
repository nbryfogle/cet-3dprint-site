<script>
    import { Button, MaterialApp, Card, CardText } from 'svelte-materialify';
    import {
      DataTable,
      DataTableHead,
      DataTableRow,
      DataTableCell,
      DataTableBody
    } from 'svelte-materialify';
  
    let prices = {
  
    }
  </script>
  
  <MaterialApp theme="dark">
    <br />
    <h1 class="d-flex justify-center ma-15">CCTI 3D Printing</h1>
    <br />
    <div class="d-flex justify-center ma-15">
      <a href="/order" style="text-decoration:none;"><Button href="/order">Order a Print!</Button></a>
    </div>
    <br />
    <br />
    <div class="d-flex justify-center mb-10">
      <DataTable>
        <DataTableHead>
          <DataTableRow>
            <DataTableCell>Material</DataTableCell>
            <DataTableCell>Description</DataTableCell>
            <DataTableCell>Price</DataTableCell>
          </DataTableRow>
        </DataTableHead>
        <DataTableBody>
          <DataTableRow>
            <DataTableCell>PLA</DataTableCell>
            <DataTableCell>PLA is a biodegradable plastic that is commonly used in 3D printing. It is a great material for beginners and is very easy to print with.</DataTableCell>
            <DataTableCell>$0.10 per gram</DataTableCell>
          </DataTableRow>
          <DataTableRow>
            <DataTableCell>PLA+</DataTableCell>
            <DataTableCell>PLA+ is stronger and more heat resistant than standard PLA.</DataTableCell>
            <DataTableCell>$0.69 per gram</DataTableCell>
          </DataTableRow>
          <DataTableRow>
            <DataTableCell>Wood PLA</DataTableCell>
            <DataTableCell>Wood PLA is PLA, but it's made from 60% wood and only 40% plastic.</DataTableCell>
            <DataTableCell>$4.20 per gram</DataTableCell>
          </DataTableRow>
          <DataTableRow>
            <DataTableCell>PETG</DataTableCell>
            <DataTableCell>PETG is a strong filament that is non-toxic and food-safe, meaning you can make cups and dining utencils with it.</DataTableCell>
            <DataTableCell>$20.00 per gram</DataTableCell>
          </DataTableRow>
        </DataTableBody>
      </DataTable>
    </div>
    <div class="d-flex justify-center">
      <Card style="max-width:30em;" class="ma-10 pa-5" hover>
        <div>
          <span class="text-h5 mb-2">Printer</span>
          <br />
        </div>
        <CardText>
          The 3D printer we use is the Creality Ender 3 PRO. We have heavily upgraded the printer, so your custom prints should be reliable, on-time, and of high quality.
        </CardText>
      </Card>
      <Card style="max-width: 30em;" class="ma-10 pa-5" hover>
        <div>
          <span class="text-h5 mb-2">Filament</span>
        </div>
        <br />
        <CardText>
          We have many filament types. From PLA to PETG. Pla is the standard filament that we use almost every day. 
          We also have PLA+, the stronger and more heat resistant filament. Then, we have PETG, a decently strong filament that is food safe. 
          (can be used for glasses and silverware.) Finally, we have wood pla. It is 60% wood and 40% plastic, but it is the harderst to print with. 
          Otherwise a successful print looks very, very classy. 
        </CardText>
  
      </Card>
    </div>
  </MaterialApp>
  