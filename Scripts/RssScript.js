        // Use a CORS proxy if the target RSS server blocks direct client-side requests
        const RSS_URL = 'https://steamcommunity.com/games/SteamWorkshop/rss';

        async function loadRSS() {
            const container = document.getElementById('Content');

            try {
                // 1. Fetch the raw XML string from the RSS feed URL
                const response = await fetch(RSS_URL);
                if (!response.ok) throw new Error('Network response was not ok');
                const xmlText = await response.text();

                // 2. Parse the XML string into a usable DOM object
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, "text/xml");

                // 3. Extract all <item> tags from the parsed XML
                const items = xmlDoc.querySelectorAll("item"); 
                let htmlOutput = "";

                // 4. Loop through the items and build the HTML payload
                items.forEach(el => {
                    const title = el.querySelector("title")?.textContent || "No Title";
                    const link = el.querySelector("link")?.textContent || "#";
                    const pubDate = el.querySelector("pubDate")?.textContent || "";
                    const description = el.querySelector("description")?.textContent || "";

                    htmlOutput += `
                        <div class="feed-item">
                            <h3><a href="${link}" target="_blank" rel="noopener">${title}</a></h3>
                            ${pubDate ? `<div class="feed-date">${new Date(pubDate).toLocaleDateString()}</div>` : ''}
                            <p>${description}</p>
                        </div>
                    `;
                });

                // 5. Inject the generated template into the DOM container
                container.innerHTML = htmlOutput || "<p>No entries found.</p>";

            } catch (error) {
                console.error('Error fetching or parsing the RSS feed:', error);
                container.innerHTML = `<p style="color: red;">Failed to load feed: ${error.message}</p>`;
            }
        }

        // Initialize the function once the DOM contents are ready
        document.addEventListener("DOMContentLoaded", loadRSS);