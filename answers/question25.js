// Write a script to change the background color of a webpage when a button is clicked.


<body>
    <button id="colorButton">Change Background Color</button>

    <script>
        const button = document.getElementById("colorButton");
        button.addEventListener("click", function() {
            document.body.style.backgroundColor = "lightblue";
        });
    </script>
</body>
