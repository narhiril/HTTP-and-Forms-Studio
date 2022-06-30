window.addEventListener('load', function(){

    function setSearchHandler(){
        //console.log('Search handler set');
        const selected = document.querySelector("input[name=engine]:checked");
        return selected.value;
    }

    const form = document.getElementById("searchForm");

    form.addEventListener('submit', function(event){
        const choice = setSearchHandler();
        let actionURL;
        const actions = {
            google: "https://www.google.com/search",
            duckduckgo: "https:/www.duckduckgo.com/",
            bing: "https://www.bing.com/search",
            ask: "https://www.ask.com/web"
        }

        for(const site in actions){
            if (site === choice){
                actionURL = actions[site];
                break;
            }
        }
        
        form.action = actionURL;

    });






});