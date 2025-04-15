const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 8001;

// 오류가 발생하는 URL 패턴을 처리하기 위한 미들웨어
app.use(function(req, res, next) {
  if (req.url.includes('%PUBLIC_URL%')) {
    // %PUBLIC_URL% 환경변수가 포함된 요청을 정상적인 경로로 리다이렉트
    const newUrl = req.url.replace(/%PUBLIC_URL%/g, '');
    console.log('Redirecting from', req.url, 'to', newUrl);
    return res.redirect(newUrl);
  }
  next();
});

// 기본 favicon.ico 처리
app.get('/favicon.ico', function(req, res) {
  res.status(204).end(); // No Content 응답
});

// 빌드 폴더 경로 확인 
const buildDir = path.join(__dirname, 'build');
const publicDir = path.join(__dirname, 'public');
let staticDir = fs.existsSync(buildDir) ? buildDir : publicDir;

// 디버깅을 위한 로그
console.log('Current directory:', __dirname);
console.log('Static directory path:', staticDir);
console.log('Static directory exists:', fs.existsSync(staticDir));

// 정적 파일 제공
app.use(express.static(staticDir));

// 모든 요청을 React 앱으로 라우팅
app.get('*', function(req, res) {
  const indexPath = path.join(staticDir, 'index.html');
  console.log('Trying to serve:', indexPath);
  console.log('File exists:', fs.existsSync(indexPath));
  
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    // 간단한 임시 HTML 페이지 제공
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SK E&C</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: sans-serif; text-align: center; padding: 40px; }
            h1 { color: #0066cc; }
          </style>
        </head>
        <body>
          <h1>SK E&C</h1>
          <p>사이트 준비 중입니다.</p>
          <p>빌드 파일이 확인되지 않습니다. 올바른 빌드 파일을 업로드해주세요.</p>
        </body>
      </html>
    `);
  }
});

app.listen(port, function() {
  console.log('Server is running on port ' + port);
});