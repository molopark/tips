const sql = require('mssql');

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

async function connectAndQuery() {
 try {
 // 데이터베이스 연결
 await sql.connect(config);

 // 쿼리 실행
 const result = await sql.query`select * from GSMPMS.dbo.TB_USER_INFO WHERE USER_ID = 'ant70m'`;

 console.log(result.recordset); // 결과 출력
 } catch (err) {
 console.error('오류 발생:', err);
 } finally {
 // 연결 종료
 await sql.close();
 }
}

connectAndQuery();