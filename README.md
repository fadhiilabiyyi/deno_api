# DENO_API

I'm trying to make a rest API service using javascript and my friend recommended me to use [deno](https://deno.land/), so here's a simple project I'm exemplifying.

## Installation

1. First, you need to clone this project.

```bash
https://github.com/fadhiilabiyyi/deno_api.git
```

2. Next, install deno on your machine.
Using PowerShell (Windows) : 
```powershell
irm https://deno.land/install.ps1 | iex
```

If you use another OS, follow this [link](https://deno.land/manual@v1.29.4/getting_started/installation).

3. Create new database on postgree and create this table
```sql
CREATE TABLE IF NOT EXISTS beers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    brand VARCHAR(50) NOT NULL,
    is_premium BOOLEAN,
    registration_date TIMESTAMP
)
```

4. Adjust the connection settings according to your Postgres configurations (db/database.js)
```javascript
// db/databases.js
async connect() {
    this.client = new Client({
      user: "postgres",
      database: "deno_api",
      hostname: "127.0.0.1",
      password: "root",
      port: 5432,
    });

    await this.client.connect();
  }
```

5. After you done with connection setting, run the server
```bash
deno run --allow-net --allow-env index.js
```

## Contact Me
How to reach me
- Instagram : [@fadhiilabiyyi](https://instagram.com/fadhiilabiyyi)
- Twitter : [@fadhiilabiyyi](https://twitter.com/fadhiilabiyyi)