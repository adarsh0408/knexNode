const express = require('express');
const knex = require('knex');
const app = express();
app.use(express.json());
const db = knex({
    client : 'mssql',
    connection: {
      database: 'employee',
      server: 'DESKTOP-NIVGVCQ',
      user: 'sa',
      password: 'Adarsh@123',
      port: 1433,
      connectionTimeout: 30000,
      options: {
        encrypt: true,
        trustServerCertificate: true // Add this line
      }
    }
  });

  app.get('/',async(req,res)=>{
   const result=await db.select('*')
  .from('employeeDetails');
  console.log(result);
  })


  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});