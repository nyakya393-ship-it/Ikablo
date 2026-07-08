// =========================
// UI Controller
// =========================



// アクティブタブ変更

function setActiveTab(pageName){


    const tabs =
        document.querySelectorAll(
            "[data-page]"
        );



    tabs.forEach(tab=>{


        tab.classList.remove(
            "active"
        );



        if(
            tab.dataset.page === pageName
        ){

            tab.classList.add(
                "active"
            );

        }


    });


}



// タブ初期化

function initTabs(){


    const tabs =
        document.querySelectorAll(
            "[data-page]"
        );



    tabs.forEach(tab=>{


        tab.addEventListener(
            "click",
            ()=>{


                const page =
                    tab.dataset.page;



                loadPage(
                    page
                );



                setActiveTab(
                    page
                );


            }
        );


    });


}
