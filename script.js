<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="icon" type="image/x-icon" href="favicons/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png">
    <link rel="manifest" href="manifest.json">
    <link href="style.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet">
    <title>ChatCalculator</title>
    <meta name="description" content="Experience the 4 basic operations calculator in a chat">

    <!-- Start SEO Tag -->
    <meta property="og:title" content="ChatCalculator">
    <meta property="og:locale" content="en_US">
    <meta name="description" content="Experience the 4 basic operations calculator in a chat">
    <meta property="og:description" content="Experience the 4 basic operations calculator in a chat">
    <link rel="canonical" href="https://thedoggybrad.github.io/chatcalculator/">
    <meta property="og:url" content="https://thedoggybrad.github.io/chatcalculator/">
    <meta property="og:site_name" content="ChatCalculator">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary">
    <meta property="twitter:title" content="ChatCalculator">
    <meta name="keywords" content="chatcalculator, chat, calculator">
    <meta name="author" content="TheDoggyBrad">
    <!-- End SEO tag -->
</head>

<body>
    <div id="container">
        <div class="header">
            <h1>ChatCalculator</h1>
            <p>Calculator in a Chat</p>
        </div>
        <div id="chatcontainer">
            <div id="chat">
                <div class="chat-bubble-container chat-gpt-bubble-container">
                    <div class="profile-picture">
                        <img src="images/avatar.png" height="30" alt="Profile Picture">
                    </div>
                    <div class="chat-bubble chat-gpt-bubble">
                        Greetings! This is a basic 4 mathematical operations calculator in a chat. The format for sending your equation is like "9 + 11". To ensure that your equations are well understood, only use the symbols "+", "-", "*", or "/". Avoid adding unnecessary characters to your equation like the equals sign, as the software may refuse to respond. Integers and decimals are supported.<br><br>
                        Brought to you by <a href="https://github.com/thedoggybrad">TheDoggyBrad</a> and provided under the <a href="https://github.com/thedoggybrad/chatcalculator/blob/main/license">Unlicense License</a>.
                    </div>
                </div>
            </div>
            <div id="input-area">
                <div id="input-container">
                    <form id="form" action="#">
                        <input type="text" placeholder="Type your equation here" id="user-input" autocomplete="off">
                        <button type="submit"><i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
                <p class="footer">Free and Open-Source Software. ChatCalculator may sometimes produce inaccurate and incorrect results. ChatCalculator June 19, 2023 Version</p>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
    <script src="service_worker_check.js"></script>
    <script src="service_worker_main.js"></script>
</body>
</html>
