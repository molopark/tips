const sql = require('mssql')

const config = {
    user:'pms_user',
    password:'$%678RTyui',
    server:'gsmbiz.iptime.org',
    port:1444,
    database:'master',
    options:{
        encrypt:false,
        trustServerCertificate:true
    }
}
const poolPromise = new sql.ConnectionPool(config)
.connect()
.then(pool => {console.log(
    'Connect to MSSQL');
     return pool;
})
.catch(err => console.log('Connect Fail', err))

const http = require('http')
const server = http.createServer( async (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain;charset=utf-8')
    const pool = await poolPromise
    const result = await pool.query`select * from GSMPMS.dbo.TB_USER_INFO WHERE USER_ID = 'ant70m'`
    console.log(result.recordset[0])
    res.end('Hello world\n' + result.recordset[0].USER_NM)
});


const hostname = '127.0.0.1'
const port = 3000

server.listen(port, hostname, ()=> {
    console.log('Server running')
});
