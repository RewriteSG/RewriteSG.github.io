const body = document.body;
var content_grid_name = "";
switch(body.id)
{
    case "landing_page":
        content_grid_name = "whystayfit";
        break;
    case "subtopic_page":
        content_grid_name = "None";
        const params = new URLSearchParams(window.location.search);
        const topic = params.get("topic");
        let disableTopic = document.getElementById("weightlift_content_grid");
        disableTopic.classList.add("display_none");
        disableTopic = document.getElementById("calisthenics_content_grid");
        disableTopic.classList.add("display_none");
        disableTopic = document.getElementById("bulkcut_content_grid");
        disableTopic.classList.add("display_none");
        switch (topic) {
            case "weightlift":
                content_grid_name = "weightlift";
                break;
            case "calisthenics":
                content_grid_name = "calisthenics";
                break;
            case "bulkcut":
                content_grid_name = "bulkcut";
                break;
            default:
                break;
        }
        let topicBtn = document.getElementById("weightlift_btn");
        topicBtn.addEventListener("click",function()
        {
            
            Card_Reset();
            let TopicGrid = document.getElementById("weightlift_content_grid");
            if(TopicGrid.classList.contains("display_none"))
                TopicGrid.classList.remove("display_none");
            TopicGrid = document.getElementById("calisthenics_content_grid");
            if(!TopicGrid.classList.contains("display_none"))
                TopicGrid.classList.add("display_none");
            TopicGrid = document.getElementById("bulkcut_content_grid");
            if(!TopicGrid.classList.contains("display_none"))
                TopicGrid.classList.add("display_none");

            content_grid_name = "weightlift";
            card_selected = 1;
            SetContentGridElement();
            if(content_grid_element)
            {
                card_size = SetMaxCardsNumber();
                SetButtons();
                Card_ShowSelected(card_selected);
            }
            let topicBtns = document.querySelectorAll("#subtopic_selection button")
            topicBtns.forEach(btn => {
                if(btn.classList.contains("topic_selected_btn"))
                    btn.classList.remove("topic_selected_btn");
            });
            topicBtn = document.getElementById(content_grid_name+"_btn");
            if(topicBtn)
            {
                topicBtn.classList.add("topic_selected_btn");
            }

        });
        topicBtn = document.getElementById("calisthenics_btn");

        topicBtn.addEventListener("click",function()
        {
            
            Card_Reset();
            let TopicGrid = document.getElementById("weightlift_content_grid");
            if(!TopicGrid.classList.contains("display_none"))
                TopicGrid.classList.add("display_none");
            TopicGrid = document.getElementById("calisthenics_content_grid");
            if(TopicGrid.classList.contains("display_none"))
                TopicGrid.classList.remove("display_none");
            TopicGrid = document.getElementById("bulkcut_content_grid");
            if(!TopicGrid.classList.contains("display_none"))
                TopicGrid.classList.add("display_none");

            content_grid_name = "calisthenics";
            card_selected = 1;
            SetContentGridElement();
            if(content_grid_element)
            {
                card_size = SetMaxCardsNumber();
                SetButtons();
                Card_ShowSelected(card_selected);
            }
            let topicBtns = document.querySelectorAll("#subtopic_selection button")
            topicBtns.forEach(btn => {
                if(btn.classList.contains("topic_selected_btn"))
                    btn.classList.remove("topic_selected_btn");
            });
            topicBtn = document.getElementById(content_grid_name+"_btn");
            if(topicBtn )
            {
                topicBtn.classList.add("topic_selected_btn");
            }
            
        });
        
        topicBtn = document.getElementById("bulkcut_btn");
        topicBtn.addEventListener("click",function()
        {
            Card_Reset();
            let TopicGrid = document.getElementById("weightlift_content_grid");
            if(!TopicGrid.classList.contains("display_none"))
                TopicGrid.classList.add("display_none");
            TopicGrid = document.getElementById("calisthenics_content_grid");
            if(!TopicGrid.classList.contains("display_none"))
                TopicGrid.classList.add("display_none");
            TopicGrid = document.getElementById("bulkcut_content_grid");
            if(TopicGrid.classList.contains("display_none"))
                TopicGrid.classList.remove("display_none");

            content_grid_name = "bulkcut";
            card_selected = 1;
            SetContentGridElement();
            if(content_grid_element)
            {
                card_size = SetMaxCardsNumber();
                SetButtons();
                Card_ShowSelected(card_selected);
            }
            let topicBtns = document.querySelectorAll("#subtopic_selection button")
            topicBtns.forEach(btn => {
                if(btn.classList.contains("topic_selected_btn"))
                    btn.classList.remove("topic_selected_btn");
            });
            topicBtn = document.getElementById(content_grid_name+"_btn");
            if(topicBtn)
            {
                topicBtn.classList.add("topic_selected_btn");
            }
        });
        
        let topicBtns = document.querySelectorAll("#subtopic_selection button")
        topicBtns.forEach(btn => {
            if(btn.classList.contains("topic_selected_btn"))
                btn.classList.remove("topic_selected_btn");
        });
        topicBtn = document.getElementById(content_grid_name+"_btn");
        if(topicBtn)
        {
            topicBtn.classList.add("topic_selected_btn");
        }

        disableTopic = document.getElementById(content_grid_name+"_content_grid");
        if(disableTopic)
            disableTopic.classList.remove("display_none");

        break;
}

var content_grid_element;
var card_selected = 1;
var card_size = 0;
function SetContentGridElement()
{
    content_grid_element = document.getElementById(content_grid_name+"_content_grid");
}
function SetMaxCardsNumber()
{
    return content_grid_element.querySelectorAll(".content_card").length;
}
function Card_Reset()
{
    let cards = content_grid_element.querySelectorAll(".content_card")
    cards.forEach(card => 
    {
        card.classList.remove("content_preview_left", "content_preview_right", "content_card_preview_none");
    });
}
function Card_ShowSelected(index)
{
    let selected_content_card = document.getElementById(content_grid_name+"_content_card_" + index);
    if(selected_content_card)
    {
        selected_content_card.classList.remove("content_preview_left", "content_preview_right", "content_card_preview_none");
    }
    let left_content_card;
    let right_content_card;
    console.log("Left" + (index-1));
    console.log("right" + (index+1));
    console.log("size" + (card_size))
    if(index > 1)
    {
        left_content_card = document.getElementById(content_grid_name + "_content_card_"+(index-1));
        left_content_card.classList.remove("content_preview_left", "content_preview_right", "content_card_preview_none");
        left_content_card.classList.add("content_preview_left");
    }
    if(index < card_size)
    {
        right_content_card = document.getElementById(content_grid_name + "_content_card_"+(index+1));
        right_content_card.classList.remove("content_preview_left", "content_preview_right", "content_card_preview_none");
        right_content_card.classList.add("content_preview_right");    
    }
    let cards = content_grid_element.querySelectorAll(".content_card")
    cards.forEach(card => 
    {
            if(card != selected_content_card && card != left_content_card && card != right_content_card)
            {
                card.classList.add("content_card_preview_none");
            }
    });
}

var content_grid_left_btn;
var content_grid_right_btn;

function SetButtons()
{
    content_grid_left_btn = content_grid_element.querySelector(".card_left_btn");
    content_grid_right_btn = content_grid_element.querySelector(".card_right_btn");
    if(!content_grid_left_btn.classList.contains("card_button_eventadded"))
        content_grid_left_btn.addEventListener("click", function()
    {
        card_selected = Math.max((card_selected-1), 1);
        Card_ShowSelected(card_selected);
    });
    
    if(!content_grid_right_btn.classList.contains("card_button_eventadded"))
        content_grid_right_btn.addEventListener("click", function()
    {
        card_selected = Math.min((card_selected+1),( card_size));
        Card_ShowSelected(card_selected);
    });
    content_grid_left_btn.classList.add("card_button_eventadded");
    content_grid_right_btn.classList.add("card_button_eventadded");
}
SetContentGridElement();
if(content_grid_element)
{
    card_size = SetMaxCardsNumber();
    SetButtons();
    Card_ShowSelected(card_selected);
}

