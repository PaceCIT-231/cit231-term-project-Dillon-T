function toggleDarkMode() {
            const body = document.body;
            const isDarkMode = body.classList.contains('dark-mode');

            if (isDarkMode) {
                // Switch to light mode
                body.classList.remove('dark-mode');
                document.querySelector("body").style.background= (body).background
                document.querySelector("body").style.color= "#333"
                
            } else {
                // Switch to dark mode
                body.classList.add('dark-mode');
                document.querySelector("body").style.color = "white";
                document.querySelector("body").style.background = "black";
            }
        }

        
