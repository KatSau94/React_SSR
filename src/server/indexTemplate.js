export const indexTemplate = (content) => `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <div id="react_root">${content}</div>
    <script src="/static/client.js" type="application/javascript"></script>
</body>
</html>
`