// =========================
// Application Start
// =========================



document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        initializeStorage();


        initRouter();


        initTabs();


        initAccountButton();



        if(
            typeof NintendoAPI !== "undefined"
        ){

            NintendoAPI.initialize();

        }


    }
);


    }
);
